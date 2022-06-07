import React from "react";
import { useForm } from "react-hook-form";
import { userdata } from "../../utils";
import { useCart } from "react-use-cart";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const onSubmit = async (data) => {
    const orderdata = {
      user_id: userdata.user_id,
      fullname: data.name,
      phone: data.phone,
      address: data.address,
      item: items,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            placeholder=""
            noValidate
            readOnly
            defaultValue={userdata ? userdata.data.name : null}
            className="form-input form-control border-dark"
          />
        </div>
        {/* -------------------- */}
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            placeholder=""
            noValidate
            readOnly
            defaultValue={userdata ? userdata.data.email : null}
            className="form-input form-control border-dark"
          />
        </div>
        {/* -------------------- */}
      </form>
    </div>
  );
};

export default Checkout;
