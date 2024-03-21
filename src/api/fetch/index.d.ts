type SearchParams = { [key: string]: string | string[] | undefined };
interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
  params?: SearchParams;
}

type FetchRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };
