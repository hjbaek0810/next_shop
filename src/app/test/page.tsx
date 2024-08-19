'use server';

import { getPosts } from '@actions/postActions';

const Test = async () => {
  const { data, errMsg } = await getPosts();

  if (errMsg) return <h1>{errMsg}</h1>;

  console.log(data);

  return <h1>TEST</h1>;
};

export default Test;
