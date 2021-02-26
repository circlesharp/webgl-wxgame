import gameView from './view';
import gameModel from './model';

class GameController {
  constructor() {
    this.gameView = gameView;
    this.gameModel = gameModel;
    this.gameModel.stageChange.attach((sender, args) => {
      const stageName = args.stage;
      switch (stageName) {
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

    const gameOverPageCallbacks = () => {
      this.gameModel.setStage('game');
    };

    this.gameView.initGamePage(gamePageCallbacks);
    this.gameView.initGameOverPage(gameOverPageCallbacks);
  }
}

export default new GameController();
