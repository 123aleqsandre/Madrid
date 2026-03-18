import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

const schema = z.object({
  firstName: z.string().min(1, "შეიყვანე სახელი"),
  lastName: z.string().min(1, "შეიყვანე გვარი"),
  email: z.string().min(1, "შეიყვანე მეილი").email("მეილში უნდა იყოს @"),
  password: z
    .string()
    .min(8, "პაროლი მინიმუმ 8 სიმბოლო")
    .regex(/[A-Z]/, "უნდა ჰქონდეს დიდი ასო"),
  age: z.string().min(1, "შეიყვანე ასაკი"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("რეგისტრაცია წარმატებით შესრულდა:", data);
    reset();
  };

  return (
    <div className="page">
      <div className="container">
        <h1>მოგესალმებით JobPortal-ში</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {[
            { label: 'სახელი', name: 'firstName', type: 'text' },
            { label: 'გვარი', name: 'lastName', type: 'text' },
            { label: 'მეილი', name: 'email', type: 'text' },
            { label: 'პაროლი', name: 'password', type: 'password' },
            { label: 'ასაკი', name: 'age', type: 'text' },
          ].map((field) => (
            <div className={`field ${errors[field.name] ? 'field-error' : ''}`} key={field.name}>
              <label>{field.label}</label>
              <input type={field.type} {...register(field.name)} />
              <p className="error">{errors[field.name]?.message}</p>
            </div>
          ))}

          <button type="submit">რეგისტრაცია</button>
        </form>
      </div>
    </div>
  );
}
