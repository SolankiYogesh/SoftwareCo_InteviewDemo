/* eslint-disable no-console */

import type {AxiosRequestConfig, AxiosRequestHeaders} from "axios"
import axios from "axios"

import Config from "@/Config/Config"
import {Constant, StorageMMKV} from "@/Helpers"

type Methodtype = "post" | "get" | "put" | "delete"

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL
})

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    // Return a Promise rejection if the status code is not 401
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.request.use(
  (config) => {
    const token = StorageMMKV.getString(Constant.StorageKeys.token)
    if (token) {
      config.headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`
      } as unknown as AxiosRequestHeaders
    }

    return config
  },
  async (error) => Promise.reject(error)
)

const getFormData = (object: Record<string, unknown>): FormData => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, String(object[key])))
  return formData
}

const APICall = async <T>(
  method: Methodtype,
  body: any,
  url: string | null = null,
  headers: any = {},
  formData = false
) => {
  const config: AxiosRequestConfig = {
    method
  }
  if (url) {
    config.url = url
  }
  if (body && method === "get") {
    config.params = body
  } else if (body && (method === "post" || method === "put") && formData) {
    config.data = getFormData(body)
    config.headers = {"Content-Type": "multipart/form-data"}
  } else {
    config.data = body
  }

  if (headers) {
    config.headers = headers
  }

  return new Promise<ResponseTypeAXIOS<T>>((resolve) => {
    axiosInstance(config)
      .then((res) => {
        console.log("success", "<=======API Response======>", {
          status: res.status,
          data: res.data
        })
        return resolve({status: res.status, data: res.data})
      })
      .catch((error) => {
        return resolve(error?.response)
      })
  })
}

export default APICall
