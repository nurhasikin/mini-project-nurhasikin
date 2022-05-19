<template>
  <v-app>
    <section class="p-6" style="margin-top: 10px">
      <div class="carousel-inner" role="listbox">
        <div class="view">
          <img
            class="d-block w-100 h-2"
            src="     https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5000&h=2200&q=60"
          />

          <div class="carousel-caption" style="margin-top: -1000px">
            <h1 style="color: #f38ba0">
              <strong>Ki KiBeauty</strong>
            </h1>
            <p style="color: white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint
              numquam consequatur quia temporibus recusandae dicta sed
              consectetur voluptatem blanditiis, porro possimus reprehenderit
              perferendis quaerat laborum rem explicabo cumque ut.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="project" class="project-area pt-125 pb-130">
      <b-container>
        <h1 class="text-center">Produk</h1>

        <b-container fluid class="p-6">
          <ApolloQuery :query="require('../graph/Product.gql')">
            <template v-slot="{ result: { data } }">
              <div class="row" id="cards_landscape_wrap-2">
                <div
                  class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                  v-for="product in data.product.slice(0, 3)"
                  :key="product.id"
                  cols="3"
                  style="padding: -50px"
                >
                  <b-card>
                    <b-img
                      :src="product.image_path"
                      style="width: 200px; height: 200px"
                    />
                    <b-card-text>
                      {{ product.brand }}
                    </b-card-text>
                    <b-card-text>
                      {{ product.name }}
                    </b-card-text>
                    <template #footer>
                      <small class="text-muted">Rp.{{ product.price }}</small>
                    </template>
                  </b-card>
                  <br />
                </div>
              </div>
            </template>
          </ApolloQuery>
        </b-container>
      </b-container>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>
