import Event from '../utils/event';


class GameModal {
  constructor() {
    this.stage = '';
    this.stageChange = new Event(this); // this 是 sender
  }

  getStage() {
    return this.stage;
  }

  setStage(stage) {
    this.stage = stage;
    this.stageChange.notify({ stage });
  }
}

export default new GameModal();
