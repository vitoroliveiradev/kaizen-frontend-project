import { QualitiesCard } from "../../components/QualitiesCard/QualitiesCard";
import { Title } from "../../components/Title/Title";
import styles from "./Qualities.module.css";

import { v4 } from "uuid";

import { motion } from "framer-motion";

type ListProps = {
  id: string;
  title: string;
  content: string;
};

export const Qualities = () => {
  const listProps: ListProps[] = [
    {
      id: v4(),
      title: "SAFETY",
      content:
        "Unidade de Negócio e-Kaizen especializada nas ferramentas e consultoria em Gestão da Segurança.",
    },
    {
      id: v4(),
      title: "E-Inspeção",
      content:
        "Ferramenta atua no controle da qualidade do processo produtivo em tempo real, monitorando itens não conforme de refugos e retrabalhos e os custos da não qualidade, com alertas e integrado com o módulo de análise de causa raiz.",
    },
    {
      id: v4(),
      title: "Digital Twin",
      content:
        "Ferramenta Digital para criação dos modelos de auditorias, inspeções e ckecklists, os usuários conseguem dimensionar e criar os modelos com exatidão para realizar o processo totalmente digital.",
    },
    {
      id: v4(),
      title: "E-Alerta",
      content:
        "Ferramenta de apoio aos operadores para registro de ocorrências de falhas com workflow digital, para registro e tomada de decisão conforme modelagem da área de falha.",
    },
    {
      id: v4(),
      title: "E-Checklist",
      content:
        "Ferramenta para realizar execução de checklists de vários segmentos, com a comodidade e a praticidade de um Smartphone ou Tablet em modo Off-line, com todas as informações no sistema em tempo real após sincronismo com a rede.",
    },
    {
      id: v4(),
      title: "E-Connect",
      content:
        "Ferramenta desenvolvida para administração das solicitações de tarefas online, possibilitando a abertura de tarefas pontuais ou pré-programadas.",
    },
    {
      id: v4(),
      title: "E-GHC",
      content:
        "Ferramenta desenvolvida para gerenciar as Competências exigidas com diferentes níveis. Treinamentos obrigatórios e desejáveis.",
    },
    {
      id: v4(),
      title: "E-Doctec",
      content:
        "Ferramenta criada para o gerenciamento da documentação técnica da companhia (Engenharia, SGQ, Processos), de forma organizada e eletrônica.",
    },
    {
      id: v4(),
      title: "E-PCP",
      content:
        "Ferramenta (Planejamento e Controle de Produção) é um módulo para ajudar no gerenciamento da produção gerando ordens de produção, gestão de sequênciamento, tempo previsto e carga máquina.",
    },
    {
      id: v4(),
      title: "E-Auditorias",
      content:
        "Ferramenta utilizada para otimizar a execução e gerenciamento de auditorias (Segurança, Qualidade, Saúde, VDA entre outras). ",
    },
    {
      id: v4(),
      title: "E-APQP",
      content:
        "Ferramenta para o desenvolvimento do processo e produto permite o compartilhamento das informações totalmente digital pelo time envolvido, fornecedores e clientes, oferecendo gestão completa das fases e ferramentas digitais necessárias para o desenvolvimento.",
    },
    {
      id: v4(),
      title: "E-BSC",
      content:
        "Ferramenta permite que a organização possa modelar uma estratégia de gestão, totalmente integrada com os indicadores chaves de processos.",
    },
    {
      id: v4(),
      title: "E-RNC",
      content:
        "Ferramenta de gerenciamento das não conformidades, com relatórios eletrônicos de ocorrências de falhas. Permitindo incluir área geradora, reclamação de clientes e outras fontes.",
    },
    {
      id: v4(),
      title: "E-TPM",
      content:
        "Ferramenta focada na manutenção autônoma de forma totalmente digital para dar ao operador autonomia ao inspecionar, identificar e solucionar falhas e anomalias em seu equipamento durante o processo de produção.",
    },
    {
      id: v4(),
      title: "Academia E-Kaizen",
      content:
        "Módulo de Treinamentos que permite criar e gerenciar o ambiente de ensino virtual, com modelos de avaliações personalizados, certificados, conteúdos, sala de aula entre outros recursos, integrado com o Módulo de gestão de pessoas e-Kaizen e outros módulos da plataforma.",
    },
    {
      id: v4(),
      title: "E-Tagout",
      content:
        "Ferramenta para o gerenciamento do programa Lockout Tagout e suporte para equipe de Técnicos em campo.",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, x: -30 }}
      >
        <Title title="Ferramentas da Empresa" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.7 }}
        exit={{ opacity: 0 }}
        className={styles.content}
      >
        {listProps.map((item) => (
          <QualitiesCard title={item.title} content={item.content} />
        ))}
      </motion.div>
    </div>
  );
};
