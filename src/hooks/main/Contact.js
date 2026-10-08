import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useContactHook() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Formulario enviado:", form);

        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload()
    };
    return {
        router,
        form,
        setForm,
        showModal,
        setShowModal,
        handleChange,
        handleSubmit,
        handleCloseModal,

    }
}