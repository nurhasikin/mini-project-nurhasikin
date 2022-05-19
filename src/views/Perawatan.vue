<template>
  <b-container>
    <b-card-title style="margin-top: 65px"
      ><strong>Perawatan</strong></b-card-title
    >

    <b-container fluid class="p-4" style="margin-top: 10px">
      <ApolloQuery :query="require('../graph/Perawatan.gql')">
        <template v-slot="{ result: { data } }">
          <div class="row" id="cards_landscape_wrap-2">
            <div
              class="col-xs-12 col-sm-6 col-md-3 col-lg-3"
              v-for="perawatan in data.perawatan"
              :key="perawatan.id"
              cols="3"
              style="padding: -50px"
            >
              <b-card>
                <b-img
                  :src="perawatan.image_path"
                  style="width: 200px; height: 200px"
                />
                <b-card-text>
                  {{ perawatan.name }}
                </b-card-text>
                <template #footer>
                  <small class="text-muted">Rp.{{ perawatan.price }}</small>
                </template>
              </b-card>
              <br />
            </div>
          </div>
        </template>
      </ApolloQuery>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "PerawatanPage",
};
</script>
