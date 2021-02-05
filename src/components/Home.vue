<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="comtent">
          <v-row height="500px;" class="d-flex justify-center align-center">
            <v-col>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card>
                  <h3 class="text-center pa-5 text-body-2 font-weight-bold">Login to connect with US Alumni of Laos</h3>
                  <v-col>
                    <v-text-field
                      label="Alumni ID or Email Address "
                      required
                      outlined
                      v-model="Email"
                      :rules="emailRules"
                      class="rounded-lg"
                    >
                    </v-text-field>
                    <v-text-field
                      v-model="password"
                      :value="myPass"
                      label="Enter password"
                      :append-icon="value ? 'mdi-eye' :'mdi-eye-off'"
                      @click:append="() => (value = !value)"
                      :type="value ? 'password' : 'text'"
                      outlined
                      :rules="nameRules"
                      required
                      class="rounded-lg"
                    ></v-text-field>
                    <div class="d-flex justify-center ma-0">
                      <v-btn
                        small
                        elevation="4"
                        color="primary"
                        width="200px"
                        height="50"
                        :disabled="!valid"
                        class="rounded-lg"
                        >Log in</v-btn
                      >
                    </div>
                    <p class="text-body-2">Forgot Password?</p>
                    <p class="text-body-2">
                      Are you an alumnus ,  email us <b>info@usalumni.la </b> to get
                      access
                    </p>
                  </v-col>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    Email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must have @",
    ],
    Password: "",
    nameRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Your password must be more than 8'
    ],
    value: String,
  }),
};
</script>

<style scoped>
.comtent {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: auto;
}
</style>