import { makeAutoObservable } from 'mobx';
export interface IConsultantStore {
  prompts: { id: string; text: string }[] | null;
  activePromptId: string | null;
  currentPrompt: { id: string; text: string } | undefined;
  setPrompts: (prompts: { id: string; text: string }[]) => void;
  setActivePromptId: (id: string) => void;
}

export class ConsultantStore implements IConsultantStore {
  prompts: IConsultantStore['prompts'] = null;
  activePromptId: IConsultantStore['activePromptId'] = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPrompts: IConsultantStore['setPrompts'] = (prompts) => {
    this.prompts = prompts;
  };
  setActivePromptId: IConsultantStore['setActivePromptId'] = (id) => {
    this.activePromptId = id;
  };

  get currentPrompt() {
    return this.prompts?.find(({ id }) => id === this.activePromptId);
  }
}
