import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { NumberInput } from "./ui/number-input";
import { Switch } from "./ui/switch";
import { ArrowRight02Icon, ReplayIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";

export default function NumbersSort() {
  const [quantityOfNumbers, setQuantityOfNumbers] = useState<string>("");
  const [startNumber, setStartNumber] = useState<string>("");
  const [endNumber, setEndNumber] = useState<string>("");
  const [isEnabled, setIsEnabled] = useState<any>(false);
  const [numbersResult, setNumbersResult] = useState<Number[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      generateRandomNumbers(
        Number(quantityOfNumbers),
        Number(startNumber),
        Number(endNumber),
        isEnabled,
      );
      setQuantityOfNumbers("");
      setStartNumber("");
      setEndNumber("");
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Returns random numbers in a range.
   * @param min
   * @param max
   * @returns
   */
  const getRandomNumberInRange = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const results = Math.floor(Math.random() * (max - min + 1)) + min;

    return results;
  };

  /**
   * Generate random numbers, if the unique Numbers is true does not repeat the numbers.
   * @param quantityOfNumbers
   * @param startNumber
   * @param endNumber
   * @param uniqueNumbers
   * @returns
   */
  const generateRandomNumbers = (
    quantityOfNumbers: number,
    startNumber: number,
    endNumber: number,
    uniqueNumbers: boolean,
  ) => {
    const possibleTotals = endNumber - startNumber + 1;

    if (quantityOfNumbers > possibleTotals) {
      throw new Error("Quantidade maior que o intervalo disponível.");
    }

    if (uniqueNumbers) {
      const uniqueRandomNumbers: Set<number> = new Set([]);
      while (uniqueRandomNumbers.size < quantityOfNumbers) {
        uniqueRandomNumbers.add(getRandomNumberInRange(startNumber, endNumber));
      }

      const numbersArray = [...uniqueRandomNumbers];

      return setNumbersResult(numbersArray);
    } else {
      const randomNumbers: Array<Number> = [];
      for (let i = 0; i < quantityOfNumbers; i++) {
        randomNumbers.push(getRandomNumberInRange(startNumber, endNumber));
      }

      return setNumbersResult(randomNumbers);
    }
  };

  return (
    <>
      {numbersResult.length > 0 ? (
        <section className="flex-1 flex flex-col justify-center items-center mt-24">
          <div className="flex flex-col gap-1 mb-17">
            <p className="label-md text-content-primary">
              RESULTADO DO SORTEIO
            </p>
            <span className="over text-content-secondary">RESULTADO</span>
          </div>

          <div className="flex items-center gap-6">
            {numbersResult.map((item, index) => (
              <p key={index} className="resultText text-content-brand ">
                {item.toFixed()}
              </p>
            ))}
          </div>

          <Button
            className="mt-10 w-120.5"
            icon={
              <HugeiconsIcon
                icon={ReplayIcon}
                className="text-content-primary"
              />
            }
            onClick={() => setNumbersResult([])}
          >
            SORTEAR NOVAMENTE
          </Button>
        </section>
      ) : (
        <section className="flex-1 flex flex-col justify-center mt-32 ml-75">
          <article className="mb-10">
            <h3 className="label-md text-content-primary">Quero sortear:</h3>
            <p className="paragraph-lg text-content-secondary max-w-120.5">
              defina o intervalo e a quantidade de números, clique em "Sortear"
              e veja os resultados na tela. É rápido e fácil!
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
              <Switch
                value={isEnabled}
                onCheckedChange={(e) => setIsEnabled(e)}
              />
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
      )}
    </>
  );
}
