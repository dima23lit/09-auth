'use client';

import { CircleLoader } from "react-spinners";
import css from "./loading.module.css";

export default function Loader() {
  return <div className={css.backdrop}>{<CircleLoader color="blue" />}</div>;
}