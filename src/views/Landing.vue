<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Live Count Data CoronaVirus.</h1>
            <h4>
              Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan pada sistem pernapasan, pneumonia akut, sampai kematian.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/user/sehatnegeriku"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Live Data</h2>
              <h5 class="description">
                Data Ini Menggunakan Api Pihak Ketiga Yaitu kawalcorona.com & Data Akan Di Refresh Setiap Terjadi Kasus Baru.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <h2 class="title text-center"><country-flag country='id' size='big'/></h2>
            <div class="md-layout">

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>&#128567;</md-icon>
                  </div>
                  <h4 class="info-title">Positif</h4>
                  <h3><b>{{indonesia.positif_id}} Orang</b></h3>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>&#128557;</md-icon>
                  </div>
                  <h4 class="info-title">Meninggal</h4>
                  <h3><b>{{indonesia.meninggal_id}} Orang</b></h3>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>&#128522;</md-icon>
                  </div>
                  <h4 class="info-title">Sembuh</h4>
                  <h3><b>{{indonesia.sembuh_id}} Orang</b></h3>
                </div>
              </div>
            </div>
          </div>

          <div class="features text-center ">
            <span style="font-size:50px;">&#127759;</span>
            <div class="md-layout">

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>&#128567;</md-icon>
                  </div>
                  <h4 class="info-title">{{global.name_positif}}</h4>
                  <h3><b>{{global.positif}} Orang</b></h3>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>&#128557;</md-icon>
                  </div>
                  <h4 class="info-title">{{global.name_meninggal}}</h4>
                  <h3><b>{{global.meninggal}} Orang</b></h3>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>&#128522;</md-icon>
                  </div>
                  <h4 class="info-title">{{global.name_sembuh}}</h4>
                  <h3><b>{{global.sembuh}} Orang</b></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <h3 class="title">Kasus Per Provinsi</h3>
        <div class="container">
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.attributes.Provinsi }}</td>
                    <td>{{ item.attributes.Kasus_Posi }}</td>
                    <td>{{ item.attributes.Kasus_Semb }}</td>
                    <td>{{ item.attributes.Kasus_Meni }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </div>
      </div>
      <div class="section text-center">
        <h3 class="title">Kasus CoronaVirus Global</h3>
        <div class="container">
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Negara</th>
                    <th>Positif</th>
                    <th>Active</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                    <th>Update Terakhir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in itemsGlobal" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.attributes.Country_Region }}</td>
                    <td>{{ Intl.NumberFormat().format(item.attributes.Confirmed) }} Orang</td>
                    <td>{{ Intl.NumberFormat().format(item.attributes.Active) }} Orang</td>
                    <td>{{ Intl.NumberFormat().format(item.attributes.Recovered) }} Orang</td>
                    <td>{{ Intl.NumberFormat().format(item.attributes.Deaths) }} Orang</td>
                    <td>{{ new Date(item.attributes.Last_Update).toString() }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import CountryFlag from 'vue-country-flag'
export default {
  bodyClass: "landing-page",
  components : {
   
  },
  props: {
    
    header: {
      type: String,
      default: require("@/assets/img/bg9.jpg")
    }
    
  },
  data() {
    return {
      itemsGlobal : '',
      items : '',
      indonesia : {
        positif_id  : '',
        meninggal_id : '',
        sembuh_id : ''
      },
      global : {
        name_positif : '',
        positif : '',
        name_meninggal : '',
        meninggal : '',
        name_sembuh : '',
        sembuh : ''
      }
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted (){
    this.dataId(),
    this.globalPositif(),
    this.globalMeninggal(),
    this.globalSembuh(),
    this.dataPerProvinsi(),
    this.dataGlobal()
  },
  methods : {
    async dataId(){
      await axios.get('https://api.kawalcorona.com/indonesia/')
      .then(response => {
        this.indonesia.positif_id = response.data[0].positif
        this.indonesia.meninggal_id = response.data[0].meninggal
        this.indonesia.sembuh_id = response.data[0].sembuh
      })
      
    },
    async globalPositif(){
      await axios.get('https://api.kawalcorona.com/positif/')
      .then(response => {
        this.global.name_positif = response.data.name
        this.global.positif = response.data.value
      })
    },
    async globalMeninggal(){
      await axios.get('https://api.kawalcorona.com/meninggal/')
      .then(response => {
        this.global.name_meninggal = response.data.name
        this.global.meninggal = response.data.value
      })
    },
    async globalSembuh(){
      await axios.get('https://api.kawalcorona.com/sembuh/')
      .then(response => {
        
        this.global.name_sembuh = response.data.name
        this.global.sembuh = response.data.value
      })
    },
    async dataPerProvinsi(){
      await axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
      .then(response => {
        this.items = response.data
        
      })
    },
    async dataGlobal(){
      await axios.get('https://api.kawalcorona.com/')
      .then(response => {
        this.itemsGlobal = response.data
        
      })
    }
  }

};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
