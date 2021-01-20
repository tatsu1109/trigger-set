import React from 'react';
import CategoryList from './CategoryList';
// import PropTypes from 'prop-types';
import { makeStyles, FormGroup } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    area: {
        "position": "relative",
        "border": "solid 1px #f00",
        "border-radius": "5px",
        "background-color": "white"
    },
    area__label: {
        "position": "absolute",
        "top": 0,
        "left": "20px",
        "font-weight": 600,
        "padding": "0 10px", // paddingを左右にいれて消す線の長さを延ばす
        "transform": "translateY(-50%)",
        "&::before":{
            "position": "absolute",
            "z-index": -1,  // 何もしないと線が上に来ていたので-1して後ろに回り込ませる
            "left": 0,
            "bottom": "50%",  // top: 50%だと1pxずれていたのでbottomから計算する
            "width": "100%",  // 親要素の幅を参照するため必ず文字分は消せる
            "height": "1px",
            "background-color": "white",
            "content": '""'
        }
    },
}));

export default function FormGroupWithLabel({ label, data, listCount, noneData, handleChange}) {
    const classes = useStyles();
    
    return (
        <FormGroup className={classes.area}>
            <div className={classes.area__label}>{label}</div>
            {
                [...Array(listCount)].map((_, index) =>
                    <CategoryList
                        handleChange={value => handleChange(value, index)}
                        key={index}
                        data={data}
                        noneData={noneData}
                    />)}
        </FormGroup>
  );
}
