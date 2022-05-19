<template>
  <b-app>
    <div class="navigation-bar">
      <b-navbar
        type="dark"
        variant="dark"
        style="padding-left: 20px"
        fixed="top"
      >
        <b-navbar-brand>KiBeauty</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav style="padding-left: 30px">
          <b-navbar-nav>
            <b-nav-item
              ><router-link class="nav-link p-0 text-white" to="/"
                >Beranda</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="nav-link p-0 text-white" to="/tentang"
                >Tentang Kami</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="nav-link p-0 text-white" to="/perawatan"
                >Perawatan</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="nav-link p-0 text-white" to="/produk"
                >Produk</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </b-app>
</template>

<script>
export default {
  name: "NavbarPage",
};
</script>
