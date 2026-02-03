import bcrypt from 'bcryptjs';

const saltRounds = 10;


const BackendDatabaseUsers = [ {email:"test@t.t" , password: await bcrypt.hash("test", saltRounds) } ]



async function login(plainEmail: string, plainPassword: string) {
    const user = BackendDatabaseUsers.find(u => u.email === plainEmail);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!user) {
        return { success: false, message: "User not found" };
    }

    try{

        const isMatch = await bcrypt.compare(plainPassword, user.password);
        
        if (!isMatch) {
            return { success: false, message: "Incorrect password or email" };
        }

        return { success: true, message: "Login successful" };

    }catch{

        return { success: false, message: "Authentication error" };

    }
}

function createToken(email: string): string {
    const payload = {
        email,
        iat: Date.now(),
        exp: Date.now() + 60 * 60 * 1000
    };
    return btoa(JSON.stringify(payload));
}


function checkToken(token: string): { valid: boolean; email?: string } {
    try {
        const payload = JSON.parse(atob(token));
        
        if (Date.now() > payload.exp) {
            return { valid: false };
        }
        
        return { valid: true, email: payload.email };
    } catch {
        return { valid: false };
    }
}

export { login, createToken, checkToken };