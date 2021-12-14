import api from "../../services/api";
import Jwt from "jsonwebtoken";


const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    userId: "",
  },
  loginStatus:""
});
   
const getters = {
  getLoginStatus(state){
    return state.loginStatus;
  },
  getAuthData(state){
    return state.authData;
  }
};
   
const mutations = {
    saveTokenData(state, data) {
  
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
  
      const jwtDecodedValue = Jwt.verify(data.access,process.env.VUE_APP_JWTSECRET);
      const newTokenData = {
        token: data.access,
        refreshToken: data.refresh,
        userId: jwtDecodedValue.user_id,
      };
      state.authData = newTokenData; 
      localStorage.setItem("userId", newTokenData.userId);
    },
    setLoginStatu(state, value){
      state.loginStatus = value;
    }
};
   
const actions = {
    login({ commit }, payload) {
          return api
          .post("/simpapi/obtain", payload)
          .then((response)=>{
            console.log(response.data)
            if(response.data) {
              commit("saveTokenData", response.data);
              commit("setLoginStatu", "success");
            }else {
              commit("setLoginStatu", "failed");
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
};

export default{
      namespaced:true,
      state,
      getters,
      actions,
      mutations
  }