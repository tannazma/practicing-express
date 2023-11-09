interface Animal {
  id: number;
  name: string;
  kind: string;
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}

const getAnimals = async () => {
  const response = await fetch(
    "https://reader.mindmingle.nl/api/exercises/react/animals"
  );
  const data: Animal[] = await response.json();
  data.filter((anim) => console.log(anim.hasBeenFed));
};

getAnimals();
