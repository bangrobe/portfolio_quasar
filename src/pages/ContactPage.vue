<template>
  <div class="q-pa-md">
    <SectionTitle title="Contact Me" />
    <div class="row q-col-gutter-lg">
      <p>
        Surely you can contact me anytime with my very detail info below. If you
        think it's not enough. Just send me a email for via contact form.
      </p>
      <div class="col-12 col-md-5">
        <!--Contact Info-->
        <q-card>
          <q-card-section>
            <h3 class="text-h5 text-weight-bold q-mt-lg">
              Nguyễn Viết Sơn Bằng
            </h3>
            <p>
              Email:
              <a href="mailto:bangnguyen1488@gmail.com"
                >bangnguyen1488@gmail.com</a
              >
            </p>

            <p>Call me: +84 0974 334 911</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-7">
        <!--Contact Form -->
        <q-card>
          <q-card-section>
            <form @submit.prevent="onSubmit">
              <div class="row q-col-gutter-md">
                <div class="col-md-6 col-12">
                  <q-input
                    outlined
                    v-model="name"
                    label="Your name"
                    no-error-icon
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />
                </div>
                <div class="col-md-6 col-12">
                  <q-input
                    outlined
                    v-model="email"
                    label="Your email"
                    no-error-icon
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />
                </div>
              </div>

              <q-input
                outlined
                v-model="phone"
                label="Your phone"
                class="q-mb-md"
              />
              <q-input
                outlined
                v-model="subject"
                label="Your subject"
                class="q-mb-md"
              />
              <q-input
                outlined
                v-model="content"
                type="textarea"
                class="q-mb-md"
              />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMeta } from "quasar";
import SectionTitle from "src/components/SectionTitle.vue";
const name = ref("");
const email = ref("");
const phone = ref("");
const subject = ref("");
const content = ref(null);
//Check script already installized
// let smtpScriptIsReady = false;
// const smtpScript = document.createElement("script");
// smtpScript.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
// document.head.appendChild(smtpScript);

const onSubmit = (e) => {
  e.preventDefault();
  Email.send({
    SecureToken : "1e04a170-e178-409d-bff0-df986b3bdaa9",
    To : 'bangrobe5@gmail.com',
    From : "bangnguyen1488@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
};
useMeta(() => {
  return {
    title: "Contact Page",
    script: {
      myScript: {
        src: "https://smtpjs.com/v3/smtp.js",
        defer: true,
      },
    },
  };
});
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>
