<template>
  <div class="q-pa-md">
    <SectionTitle title="My Resume" />
    <div class="row">
      <div class="col-md-6 col-12">
        <!--EDUCATION -->
        <q-timeline>
          <q-timeline-entry heading> Education </q-timeline-entry>
          <q-timeline-entry title="Information Technology" subtitle="2016-2019">
            <p>University of Information Technology - VNUHCM</p>
            <p class="text-grey-9">Degree: Very Good</p>
          </q-timeline-entry>
          <q-timeline-entry
            title="Public Economics and Adminstrations"
            subtitle="2006-2010"
          >
            <p>University of Economics and Laws - VNUHCM</p>
            <p class="text-grey-9">Degree: Good</p>
          </q-timeline-entry>
      
        </q-timeline>
      </div>
      <div class="col-md-6 col-12">
        <!--WORKING EXPERIENCE-->
        <q-timeline>
          <q-timeline-entry heading>Working Experience</q-timeline-entry>
          <q-timeline-entry title="Teacher" subtitle="2019-2021">
            Teaching at Sao Viet Gia Lai school. Subject: Informatics.
          </q-timeline-entry>
          <q-timeline-entry
            title="Wordpress Developer Freelancer"
            subtitle="2016-2018"
          >
            Design and build wordpress websites for clients. Fix wordpress
            problems (plugins and themes).
          </q-timeline-entry>
          <q-timeline-entry title="Wordpress Developer" subtitle="2015-2016">
            Build and manage wordpress websites (business and e-commerce) for a
            small trading company in HCM city.
          </q-timeline-entry>
          <q-timeline-entry title="Content Writer" subtitle="2011-2012">
            Work at IME Vietnam. My role is content writer for website
            marketingchienluoc.com
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from "quasar";
import SectionTitle from "src/components/SectionTitle.vue";

useMeta(() => {
      return {
        title: "Resume Page",
      };
    });
</script>
<style lang="scss" scoped></style>
