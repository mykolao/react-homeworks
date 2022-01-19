interface Body {
  success: boolean;
}

interface MyResponse {
  errorText: string;
  info: string;
  yourBody: Body;
  yourQuery: {};
}

interface PostResult {
  status: "success" | "error";
  message: string;
}

const API = {
  post: async (value: boolean): Promise<PostResult> => {
    const url = `https://neko-cafe-back.herokuapp.com/auth/test/`;
    const body = { success: value };

    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = (await res.json()) as MyResponse;
    console.log(data);

    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        resolve({
          status: "success",
          message: data.errorText,
        });
      } else if (res.status === 500) {
        resolve({
          status: "error",
          message: data.errorText,
        });
      }
    });

    // return res.json();
  },
};
export default API;
