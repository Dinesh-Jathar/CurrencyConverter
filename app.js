//country code and currency code
let countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  let url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  let button=document.getElementById("btn")
  let dropdowns=document.querySelectorAll(".dropdown select");
  let from_value=document.querySelector(".from select");
  let to_value=document.querySelector(".to select");
  let message=document.querySelector(".message");
//   console.log(message);
for(let select of dropdowns){
    for( currency_code in countryList){
        let new_option=document.createElement("option");
        new_option.innerText=currency_code;
        select.append(new_option);
        if(select.name==="from" && currency_code==="USD"){
            new_option.selected="selected"
        }else if(select.name==="to" && currency_code==="INR"){
            new_option.selected="selected"
        }
    }
    select.addEventListener("change",(e)=>{
      update_flag(e.target)
     })
}

function update_flag(element){
  let currency_code=element.value;
//   console.log(currency_code);
  let country_code=countryList[currency_code];
//   console.log(country_code);
  let img=element.parentElement.querySelector("img");
//   console.log(img);
  img.src=`https://flagsapi.com/${country_code}/flat/64.png`;
}

let Currency_converter= async ()=>{
    let input=document.querySelector("input");
    let value=input.value;
    if(value<=0 || value==''){
        value=1;
        amtmessage[0].style.display="block";
    }
    // console.log(value);
    let api_url=`${url}/${from_value.value.toLowerCase()}/${to_value.value.toLowerCase()}.json`;
    let response= await fetch(api_url,);
    let data= await response.json();
    let rate=data[to_value.value.toLowerCase()]
    let final_amt=rate*value;
    message.innerHTML=`${value} ${from_value.value}=${final_amt} ${to_value.value}`
}
let amtmessage=document.getElementsByClassName("amt_msg");
button.addEventListener("click", async(event)=>{
    event.preventDefault();
    Currency_converter();
})

window.addEventListener("load",()=>{
    Currency_converter();
})