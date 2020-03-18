interface Body<TVariables> {
  query: string;
  variable?: TVariables;
}

export const server = {
  fetch: async <TData = any, TVariables = any>(body: Body<TVariables>) => {
    const res = await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return res.json() as Promise<{ data: TData }>;
  }
};
