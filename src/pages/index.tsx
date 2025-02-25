import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-pri-mold">
      <Header />
      <main className="flex gap-4 flex-col items-center justify-between pt-4 max-w-[1000px] mx-auto bg-[#ff000066]">
        <h1 className="font-bold text-3xl">Instituto Jovem no Trabalho</h1>
        <p className="text-lg text-center px-10">
          Apresentação
        </p>
        <div className="flex flex-wrap w-[300px]">
        <p className="text-lg px-10 text-left w-full">*Avaliação curricular</p>
        <p className="text-lg px-10 text-left w-full">*Orientação profissional</p>
        <p className="text-lg px-10 text-left w-full">*Encamiamento</p>
        <p className="text-lg px-10 text-left w-full">*Treinamentos gratuitos</p>
        </div>
        <h2 className="text-lg text-center px-9">
          Preencha nosso formulário
        </h2>
        <div className="border-2 w-full flex flex-wrap h-[1000px]">
        <h2 className="w-full text-center text-2xl my-6 font-bold">Formulário</h2>
        <Image
          src="https://i.imgur.com/8Gfpz6a.png"
          alt="Bookshelf from CleanPNG"
          width={350}
          height={400}
          className="bg-dar-green/0 border-0 rounded-lg hover:border-dar-green hover:border-8 hover:border-white/0 mx-auto max-h-[400px]"
        />
        </div>
        <h2 className="text-2xl py-4">Provas sociais:</h2>
        <div className="text-center flex gap-2" id="Projetos">
          
          <div className="w-full">
            <div className="h-[360px] w-[320px] border-2 rounded-md">
              <div className="h-[180px] w-[180px] mx-auto mt-2 border-2 rounded-full"></div>
              <p className="text-lg mt-2"> Texto para o depoimento </p>
            </div>
          </div>
          <div className="w-full">
            <div className="h-[360px] w-[320px] border-2 rounded-md">
              <div className="h-[180px] w-[180px] mx-auto mt-2 border-2 rounded-full"></div>
              <p className="text-lg mt-2"> Texto para o depoimento </p>
            </div>
          </div>
          <div className="w-full">
            <div className="h-[360px] w-[320px] border-2 rounded-md">
              <div className="h-[180px] w-[180px] mx-auto mt-2 border-2 rounded-full"></div>
              <p className="text-lg mt-2"> Texto para o depoimento </p>
            </div>
          </div>
          
        </div>
        <Footer />
      </main>
    </div>
  );
}
