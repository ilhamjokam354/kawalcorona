<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Ilham Imam Khoiri</h3>
                  <h6>Web Developer Enthusiast</h6>
                  <md-button
                    href="https://www.instagram.com/ilham_maungbandung"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-instagram"></i
                  ></md-button>
                  <md-button
                    href="https://www.facebook.com/paijho.paijho.98229"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-facebook"></i
                  ></md-button>
                  <md-button
                    href="https://github.com/ilhamjokam354"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-github"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Jokam - Persib - Lacasa De Papel - Shitpost - Awokawoakwokawok - Bisa Lo Tambahin Sendiri.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  bodyClass: "profile-page",
  data() {
    return {
      
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile2.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/persib.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
