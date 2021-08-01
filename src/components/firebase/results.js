import axios from "axios";
export default axios.create(
    {
        baseURL: "https://react-contact-form-a9adc-default-rtdb.europe-west1.firebasedatabase.app/"
    }
)