import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

const schema = z.object({
  firstName: z.string().min(1, "შეიყვანე სახელი"),
  lastName: z.string().min(1, "შეიყვანე გვარი"),
  email: z
    .string()
    .min(1, "შეიყვანე ელ.ფოსტა")
    .email("ელ.ფოსტა უნდა იყოს სწორი"),
  phone: z.string().regex("მიუთითე საქართველოს მობილურის ნომერი +995XXXXXXXXX"),
  classNumber: z
    .number({ invalid_type_error: "შეიყვანე კლასი" })
    .min(1, "კლასი უნდა იყოს მინიმუმ 1"),
  region: z.string().min(1, "აირჩიე რეგიონი"),
  password: z
    .string()
    .min(8, "პაროლი მინიმუმ 8 სიმბოლო")
    .regex(/[A-Z]/, "უნდა შეიცავდეს დიდ ასოს")
    .regex(/[a-z]/, "უნდა შეიცავდეს პატარა ასოს")
    .regex(/[0-9]/, "უნდა შეიცავდეს ციფრებს")
    .regex(/[^A-Za-z0-9]/, "უნდა შეიცავდეს სპეციალურ სიმბოლოს"),
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

  const regions = ["თბილისი", "კახეთი", "იმერეთი", "სამეგრელო", "შიდა ქართლი"];

  return (
    <div className="page">
      <div className="container">
        <h1>მოგესალმებით</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {[
            { label: "სახელი", name: "firstName", type: "text" },
            { label: "გვარი", name: "lastName", type: "text" },
            { label: "ელ.ფოსტა", name: "email", type: "text" },
            { label: "ტელეფონი", name: "phone", type: "text" },
            { label: "კლასი", name: "classNumber", type: "number" },
            { label: "პაროლი", name: "password", type: "password" },
          ].map((field) => (
            <div
              className={`field ${errors[field.name] ? "field-error" : ""}`}
              key={field.name}
            >
              <label>{field.label}</label>
              <input type={field.type} {...register(field.name)} />
              <p className="error">{errors[field.name]?.message}</p>
            </div>
          ))}
          <div className={`field ${errors.region ? "field-error" : ""}`}>
            <label>რეგიონი</label>
            <select {...register("region")}>
              <option value="">აირჩიე რეგიონი</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <p className="error">{errors.region?.message}</p>
          </div>

          <button type="submit">რეგისტრაცია</button>
        </form>
      </div>
    </div>
  );
}
