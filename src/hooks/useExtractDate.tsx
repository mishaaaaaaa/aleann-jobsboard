import { useCallback } from "react";

export default function useExtractDate(creationDate: any) {
  const dateExtarct = useCallback((date: string) => {
    let res = [];
    let splited = date?.split("");
    for (let i = 0; i < 4; i++) {
      res.push(splited[i]);
    }

    return parseInt(res.join(""));
  }, []);

  const creationYear = dateExtarct(creationDate);
  const currentYear = new Date().getFullYear();
  const postDate = currentYear - creationYear;
  return postDate;
}
