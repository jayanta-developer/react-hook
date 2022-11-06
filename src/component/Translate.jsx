import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "./Dropdown";

const translateValue = [
  { value: "hi", label: "Hindi" },
  { label: "Afrikaans", value: "af" },
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
  { value: "az", label: "Azerbaijani" },
  { value: "zh", label: "Chinese" },
  { value: "cs", label: "Czech" },
  { value: "da", label: "Danish" },
  { value: "nl", label: "Dutch" },
  { value: "eo", label: "Esperanto" },
  { value: "fi", label: "Finnish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "el", label: "Greek" },
  { value: "he", label: "Hebrew" },
  { value: "hu", label: "Hungarian" },
  { value: "id", label: "Indonesian" },
  { value: "ga", label: "Irish" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "fa", label: "Persian" },
  { value: "pl", label: "Polish" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
  { value: "sk", label: "Slovak" },
  { value: "es", label: "Spanish" },
  { value: "sv", label: "Swedish" },
  { value: "tr", label: "Turkish" },
  { value: "uk", label: "Ukranian" },
];

export default function Translate() {
  const [translate, setTranslate] = useState(translateValue[0]);
  const [detectTranslateKey, setDetectTranslateKey] = useState('');
  const [inputText, setInputText] = useState("");
  const [translatedValue, setTranslatedValue] = useState('');



  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await Axios.post(`https://libretranslate.de/detect`, {
        q: inputText,
      });
      setDetectTranslateKey(data[0].language);
    };
    doTranslate();
    // console.log(translate)


  }, [inputText, translate]);


  useEffect(() => {
    const data = {
      q: inputText,
      source: detectTranslateKey,
      target: translate.value
    }
    Axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => setTranslatedValue(response.data.translatedText))



  }, [translate])

  return (
    <div>
      <label htmlFor="translate">Translator</label>
      <div className="text_input">
        <input
          id="translate"
          placeholder="Enter your text"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div />

      <Dropdown
        label="Select a langues"
        options={translateValue}
        selectedValue={translate}
        onSetSelectedValue={setTranslate}
      />
      <div style={{ paddingTop: "300px" }} className="submit_btn">
        <h3>{translatedValue}</h3>
      </div>
    </div>
  );
}
