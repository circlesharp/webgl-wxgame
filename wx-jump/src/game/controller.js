import gameView from './view';
import gameModel from './model';

class GameController {
  constructor() {
    this.gameView = gameView;
    this.gameModel = gameModel;

    /* 这段代码体现了 controller 调度了 modal & view */
    /* 当 modal 的 stage 有变，执行 attach 的函数，这个函数能改变 view */
    this.gameModel.stageChange.attach((sender, { stage }) => {
      switch (stage) {
        case 'game-over':
          this.gameView.showGameOverPage();
          break;
        case 'game':
          this.gameView.showGamePage();
          break;
        default:
          break;
      }
    });
  }

  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        this.gameModel.setStage('game-over');
      },
    };

    // const gameOverPageCallbacks = () => {
    //   this.gameModel.setStage('game');
    // };

    this.gameView.initGamePage(gamePageCallbacks);
    // this.gameView.initGameOverPage(gameOverPageCallbacks);
  }
}

export default new GameController();
