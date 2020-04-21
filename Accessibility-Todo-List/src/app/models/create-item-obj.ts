export class CreateItemObj {

    title: String;
    due: number;
    note: String;
    // url to external image
    file: String;

    constructor(title: String, due: number, note: String, file: String) {
        this.title = title;
        this.due = due;
        this.note = note;
        this.file = file;
    }

}
