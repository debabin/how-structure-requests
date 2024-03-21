type KyRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('ky').Options }
  : { params: Params; config?: import('ky').Options };
