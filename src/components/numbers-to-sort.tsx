import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { NumberInput } from "./ui/number-input";
import { Switch } from "./ui/switch";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { useState, type ChangeEvent } from "react";

export default function NumbersSort() {
  const [quantityOfNumbers, setQuantityOfNumbers] = useState<string>();
  const [startNumber, setStartNumber] = useState<string>();
  const [endNumber, setEndNumber] = useState<string>();
  const [isEnabled, setIsEnabled] = useState<any>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(quantityOfNumbers, startNumber, endNumber, isEnabled);

    console.log(
      generateRandomNumbers(
        Number(quantityOfNumbers),
        Number(startNumber),
        Number(endNumber),
        isEnabled,
      ),
    );
  };

  const getRandomNumberInRange = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomNumbers = (
    quantityOfNumbers: number,
    startNumber: number,
    endNumber: number,
    uniqueNumbers: boolean,
  ) => {
    if (uniqueNumbers) {
      const uniqueRandomNumbers = new Set();
      while (uniqueRandomNumbers.size < quantityOfNumbers) {
        uniqueRandomNumbers.add(getRandomNumberInRange(startNumber, endNumber));
      }

      const numbersArray = [...uniqueRandomNumbers];

      return numbersArray;
    } else {
      const randomNumbers: Array<Number> = [];
      for (let i = 0; i < quantityOfNumbers; i++) {
        randomNumbers.push(getRandomNumberInRange(startNumber, endNumber));
      }

      return randomNumbers;
    }
  };

  return (
    <section className="flex-1 flex flex-col justify-center mt-32">
      <article className="mb-10">
        <h3 className="label-md text-content-primary">Quero sortear:</h3>
        <p className="paragraph-lg text-content-secondary max-w-120.5">
          defina o intervalo e a quantidade de números, clique em "Sortear" e
          veja os resultados na tela. É rápido e fácil!
        </p>
      </article>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <NumberInput
            label="NÚMEROS"
            value={quantityOfNumbers}
            onChange={(e) => setQuantityOfNumbers(e.target.value)}
          />
          <NumberInput
            label="DE"
            value={startNumber}
            onChange={(e) => setStartNumber(e.target.value)}
          />
          <NumberInput
            label="ATÉ"
            value={endNumber}
            onChange={(e) => setEndNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mt-5.25">
          <Switch value={isEnabled} onCheckedChange={(e) => setIsEnabled(e)} />
          <label className="paragraph-sm text-content-primary">
            Não repetir número
          </label>
        </div>
        <Button
          className="mt-10 w-120.5"
          type="submit"
          icon={
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="text-content-primary"
            />
          }
        >
          SORTEAR
        </Button>
      </form>
    </section>
  );
}
