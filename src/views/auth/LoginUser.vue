<template>
  <div id="totalcontainer" class="bg-gray-400 h-screen flex items-center">
    <div
      class="w-[610px] bg-white m-auto px-[3.5rem] py-[2rem] rounded-[20px] grid gap-[2.2rem] text-center text-dark-blue-500"
    >
      <div class="flex mx-auto gap-x-8 mt-4">
        <img
          class="h-[44px]"
          src="/public/img/logo_minam.png"
          alt="Logo MINAM"
        />
        <img
          class="h-[44px]"
          src="/public/img/logo_igp.png"
          alt="Logo Instituto Geofísico del Perú"
        />
      </div>
      <h1 class="text-[2rem]">Inicio de sesión</h1>
      <p class="text-left font-light pb-5">
        Bienvenido al
        <b class="font-medium">Sistema de Convocatorias</b>
        del IGP, ingrese sus credenciales para acceder a la plataforma.
      </p>
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          v-model="email"
          type="email"
          placeholder="micorreo@igp.gob.pe"
          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <small id="emailHelp" class="form-text text-muted">{{
          emailError
        }}</small>
        <label
          class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:font-bold peer-focus:leading-tight peer-focus:text-dark-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          Usuario
        </label>
      </div>
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          type="password"
          v-model="password"
          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-dark-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <small id="passHelp" class="form-text text-muted">{{
          passwordError
        }}</small>
        <label
          class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:font-bold peer-focus:leading-tight peer-focus:text-dark-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          Contraseña
        </label>
      </div>

      <div class="flex flex-col gap-y-2">
        <button
          class="bg-dark-blue-500 text-white rounded-[15px] h-[54px] w-[385px] hover:bg-dark-blue-400 text-[18px] mx-auto"
          @click="acceso"
        >
          Continuar
        </button>
        <small id="authHelp" class="form-text text-muted">{{
          authError
        }}</small>
        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-b border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm text-gray-500">o también</span>
          </div>
        </div>

        <button
          class="text-dark-blue-500 border-[1px] border-dark-blue-500 rounded-[15px] h-[54px] w-[385px] text-[18px] hover:bg-dark-blue-500 hover:text-white mx-auto"
        >
          <b class="pr-[1.2rem]">G</b>
          Continuar con Google
        </button>
      </div>

      <p>
        ¿Deseas solo ver el estado de tu trámite?
        <a href="#" class="underline decoration-1 hover:text-dark-blue-300"
          >Consulta aqui</a
        >
      </p>
      <p class="text-gray-400 text-[.8rem] mt-[1.5rem]">
        Calle Badajoz N° 169 Urb. Mayorazgo IV Etapa - Ate, Lima - Perú <br />
        Central Telefónica: 317-2300 | Escríbenos a:
        <a
          class="underline decoration-1 hover:text-dark-blue-300"
          href="mailto:soporteti@igp.gob.pe"
          >soporteti@igp.gob.pe</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/userAuth";
import { useRouter } from "vue-router";
import * as Yup from "yup";

const userStore = useUserStore();
const router = useRouter();
const email = ref("kiley-12@hotmail.com");
const password = ref("12345678");
const emailError = ref("");
const passwordError = ref("");
const authError = ref("");
const colorAccess = ref("");

const acceso = async () => {
  try {
    emailError.value = "";
    passwordError.value = "";
    authError.value = "";
    colorAccess.value = "";

    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido.")
        .required("Es necesario llenar esta casilla.")
        .label("Email")
        .test("email", "Ingrese un correo electrónico válido.", (value) => {
          if (value) {
            return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
              value
            );
          }
          return false;
        }),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 12 caracteres.")
        .required("Es necesario llenar esta casilla.")
        .label("Password"),
    });

    await schema.validate(
      {
        email: email.value,
        password: password.value,
      },
      { abortEarly: false }
    );

    await userStore.access(email.value, password.value);
    authError.value = "Acceso concedido.";
    colorAccess.value = "#048a11";
    router.push("/login");
  } catch (error) {
    const impErr = error.error;
    colorAccess.value = "#f7382d";

    if (impErr === "Usuario o contraseña incorrecta.") {
      authError.value = impErr;
    } else {
      error.inner.forEach((err) => {
        if (err.path === "email") {
          emailError.value = err.message;
        } else if (err.path === "password") {
          passwordError.value = err.message;
        }
      });
    }
  }
};
</script>

<style></style>
