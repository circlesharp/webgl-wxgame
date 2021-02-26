import Event from '../utils/event';


class GameModal {
  constructor() {
    this.stage = '';
    this.stageChange = new Event(this);
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
