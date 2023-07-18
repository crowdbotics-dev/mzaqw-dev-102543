import axios from "axios"
const mzaqwdevAPI = axios.create({
  baseURL: "https://mzaqw-dev-102543.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return mzaqwdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return mzaqwdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_nbddh_list(payload) {
  return mzaqwdevAPI.get(`/api/v1/nbddh/`)
}
function api_v1_nbddh_create(payload) {
  return mzaqwdevAPI.post(`/api/v1/nbddh/`, payload)
}
function api_v1_nbddh_retrieve(payload) {
  return mzaqwdevAPI.get(`/api/v1/nbddh/${payload.id}/`)
}
function api_v1_nbddh_update(payload) {
  return mzaqwdevAPI.put(`/api/v1/nbddh/${payload.id}/`, payload)
}
function api_v1_nbddh_partial_update(payload) {
  return mzaqwdevAPI.patch(`/api/v1/nbddh/${payload.id}/`, payload)
}
function api_v1_nbddh_destroy(payload) {
  return mzaqwdevAPI.delete(`/api/v1/nbddh/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return mzaqwdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return mzaqwdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return mzaqwdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return mzaqwdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return mzaqwdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return mzaqwdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_nbddh_list,
  api_v1_nbddh_create,
  api_v1_nbddh_retrieve,
  api_v1_nbddh_update,
  api_v1_nbddh_partial_update,
  api_v1_nbddh_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
