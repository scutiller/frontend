import { useState } from "react";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>{user ? `Bienvenido, ${user.email}` : "Iniciar Sesión / Registrarse"}</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!user && (
                <>
                    <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleRegister}>Registrarse</button>
                    <button onClick={handleLogin}>Iniciar Sesión</button>
                </>
            )}
        </div>
    );
}

export default AuthForm;
