import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";

const Register = (props) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(false);

    const ProductPage = () => {
      setLoading(true);
      navigate("/product");
    };
    setTimeout(() => ProductPage(), 10000);
  };

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center">
        <div className="mt-4"></div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h1 className="fw-bold fs-4 card-title mb-4 f-color-custom">
                Register
              </h1>
              {loading ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="mb-1 text-muted">Username</label>
                    <input
                      {...register("username", { required: true })}
                      className="form-control"
                      type="text"
                      id="username"
                      name="username"
                      placeholder=""
                      noValidate=""
                    />
                    {errors.username && (
                      <span className="text-danger">Please type username</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 text-muted">Password</label>
                    <input
                      {...register("password", { required: true })}
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder=""
                      noValidate=""
                    />
                    {errors.password && (
                      <span className="text-danger">Please type password</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 text-muted">Confirm Password</label>
                    <input
                      {...register("confirm_password", { required: true })}
                      className="form-control"
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder=""
                      noValidate=""
                    />
                    {errors.confirm_password && (
                      <span className="text-danger">Please type password</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary ms-auto d-block bg-color-custom"
                  >
                    Register
                  </button>
                </form>
              ) : (
                <div className="d-flex justify-content-center">
                  <ReactLoading
                    type="spin"
                    color="blue"
                    height={"20%"}
                    width={"20%"}
                  />
                </div>
              )}
            </div>
            <div className="card-footer border-0">
              <div className="text-center">
                Already have an account?{" "}
                <Link className="text-dark pb-2" to="/">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
