<template>
  <div>
    <div v-if="cart.length">
      <Table :headings="headings">
        <template v-slot:table-body>
          <tbody v-for="(item, index) in cart" :key="index">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              <img :src="item.image" alt="product image" />
              {{
                item.title.length > 18
                  ? item.title.substring(0, 18) + "..."
                  : item.title
              }}
            </td>
            <td>{{ item.price }}</td>
            <td>{{ item.totalPrice.toFixed(2) }}</td>
            <td class="w-25">
              <Quantity :count="item.quantity" :item="item"></Quantity>
            </td>
            <td class="text-center">
              <Button
                :action="() => removeItem(item)"
                content="X"
                class="remove-btn"
              />
            </td>
          </tbody>
        </template>
        <template v-slot:table-footer v-if="total">
          <tr>
            <td colspan="5"><b>Total :</b></td>
            <td>{{ total.toFixed(2) }}</td>
          </tr>
        </template>
      </Table>
      <div class="text-center m-3">
        <Button
          class="add-to-cart-btn col-lg-2 col-md-6"
          :action="() => (openOrderNowForm = true)"
          content="Order Now"
        />
      </div>
    </div>
    <div v-else class="text-center empty-cart">
      <p class="text-center font-weight-bold">Your cart is empty :( !</p>
      <b-icon
        icon="arrow-down"
        animation="cylon-vertical"
        font-scale="4"
      ></b-icon>
      <p class="text-center font-weight-bold my-2">
        You can go to <b-link href="/">products</b-link> , enjoy shopping ^_^
      </p>
    </div>
    <div v-if="openOrderNowForm" class="form-popup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-sm-10 form-container">
            <div class="row my-3">
              <p class="col-10 mb-0">Order Now</p>
              <div class="col-2 text-right">
                <Button
                  :action="() => (openOrderNowForm = false)"
                  content="X"
                class="remove-btn"
              />
              </div>
            </div>
            <div>
              <div class="text-center" v-if="orderNow">
                Your order is submitted ! :) , it will reach you : <i>((address: {{ formData.address }}))</i> within 2 days
                <p>Thank you :)</p>
              </div>
              <form v-else class="login-form" @submit.prevent="submitData">
                <div class="form-group row mb-2">
                  <label class="form-label col-md-4" for="address"
                    >Address</label
                  >
                  <div class="col-lg-8">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      v-model="formData.address"
                      class="form-input w-100"
                      :class="{ 'border border-danger': formErrors.address }"
                      @blur="validate('address')"
                    />
                    <small class="text-danger">
                      {{ formErrors.address }}
                    </small>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label class="form-label col-md-4" for="phoneNumber"
                    >Phone Number</label
                  >
                  <div class="col-lg-8">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      v-model="formData.phoneNumber"
                      class="form-input w-100"
                      :class="{
                        'border border-danger': formErrors.phoneNumber,
                      }"
                      @blur="validate('phoneNumber')"
                    />
                    <small class="text-danger">
                      {{ formErrors.phoneNumber }}
                    </small>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label class="form-label col-md-4" for="email">Email</label>
                  <div class="col-lg-8">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      v-model="formData.email"
                      @blur="validate('email')"
                      class="form-input w-100"
                      :class="{ 'border border-danger': formErrors.email }"
                    />
                    <small class="text-danger">
                      {{ formErrors.email }}
                    </small>
                  </div>
                </div>
                <div class="text-center m-3">
                  <Button content="Order Now" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as Yup from "yup";
import Table from "../components/Table.vue";
import Quantity from "../components/Quantity.vue";
import Button from "../components/Button.vue";
const formSchema = Yup.object().shape({
  address: Yup.string().required(),
  phoneNumber: Yup.number()
    .typeError("you must specify a number")
    .required(),
  email: Yup.string()
    .required()
    .email(),
});
export default {
  name: "ReviewOrder",
  data() {
    return {
      headings: ["No", "Product", "Unit Price", "Total Price", "Qty", "Remove"],
      openOrderNowForm: false,
      orderNow: false,
      formData: {
        address: "",
        phoneNumber: "",
        email: "",
      },
      formErrors: {
        address: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  components: {
    Table,
    Quantity,
    Button,
  },
  computed: {
    ...mapState("cart", ["cart", "total"]),
  },
  created() {
    this.$store.commit("cart/CALCULATE_TOTAL");
  },
  methods: {
    removeItem(item) {
      this.$store.dispatch("cart/REMOVE_FROM_CART", item);
    },
    validate(field) {
      formSchema
        .validateAt(field, this.formData)
        .then(() => {
          this.formErrors[field] = "";
        })
        .catch((err) => {
          this.formErrors[err.path] = err.message;
        });
    },
    submitData() {
      formSchema
        .validate(this.formData, { abortEarly: false })
        .then(() => {
          this.orderNow = true;
          this.$store.commit("cart/RESET_CART");
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.formErrors = {
              ...this.formErrors,
              [error.path]: error.message,
            };
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #000000ad;
  right: 0;
  .form-container {
    background: #fff;
    position: absolute;
    top: 15%;
    border: 5px solid yellow;
    outline: 6px solid #eaeaea;
    border-radius: 10px;
    padding: 2rem 3rem;
  }
}
img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.remove-btn {
  border: 3px solid red;
  border-radius: 50%;
  background: #ff1800;
  color: #fff;
  box-shadow: 0px 2px 9px 0px #aaa8a8;
}
.empty-cart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: bold;
  font-size: 20px;
}
input{
  border-radius:5px;
}
</style>
