export default class Loader {
  static loader: AppLoaderRefType

  static setLoader(loader: AppLoaderRefType | null) {
    if (loader) {
      this.loader = loader
    }
  }

  static isLoading(check: boolean) {
    try {
      this.loader?.showLoader(check)
    } catch (_) {
      //
    }
  }
}
