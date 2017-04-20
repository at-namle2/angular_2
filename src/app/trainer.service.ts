export class TrainerService {
  trainer: any[];
    constructor() {
      this.trainer = [
        { name: "Le", fullname: "Le Hoai Nam", team: "PHP" },
        { name: "Nam", fullname: "Le Hoai Nam hoai", team: "FE" }
      ];
    }
    getAllTrainers() {
      return this.trainer;
    }
}
