import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Calender.module.css";

export default function Calender() {
  const schema = yup.object().shape({
    name: yup.string().min(5).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>React Hook Form Validation With YUP</legend>
        <div>
          <input type="text" placeholder="name" {...register("name")} />
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="e
        
        mail"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>
        <div className={styles.button}>
          <button>submit</button>
        </div>
      </fieldset>
    </form>
  );
}
