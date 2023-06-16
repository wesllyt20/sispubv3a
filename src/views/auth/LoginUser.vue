<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
      <!--begin::Form-->
      <Form
        class="form w-100"
        id="kt_login_signin_form"
        @submit="onSubmitLogin"
        :validation-schema="login"
      >
      <div class="mb-10 bg-light-info p-8 rounded">
          <div class="text-info">
            Use account <strong>admin@demo.com</strong> and password
            <strong>demo</strong> to continue.
          </div>
        </div>
  
        
  
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bolder text-dark">Correo</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="email"
            autocomplete="off"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>
        <!--end::Input group-->
  
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Wrapper-->
          <div class="d-flex flex-stack mb-2">
            <!--begin::Label-->
            <label class="form-label fw-bolder text-dark fs-6 mb-0"
              >Contraseña </label
            >
            <!--end::Label-->
  
            <!--begin::Link-->
            <router-link to="/password-reset" class="link-primary fs-6 fw-bolder">
              ¿Olvidó contraseña?
            </router-link>
            <!--end::Link-->
          </div>
          <!--end::Wrapper-->
  
          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            type="password"
            name="password"
            autocomplete="off"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!--end::Input group-->
  
        <!--begin::Actions-->
        <div class="text-center">
          <!--begin::Submit button-->
          <button
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-primary w-100 mb-5"
          >
            <span class="indicator-label"> Ingresar </span>
  
            <span class="indicator-progress">
              Por favor espere...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          <!--end::Submit button-->
        </div>
        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
    <!--end::Wrapper-->
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  
  </style>