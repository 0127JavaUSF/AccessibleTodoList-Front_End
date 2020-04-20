export class TodoListItem {

    id: number;
    title: String;
    due: number;
    note: String;
    // url to external image
    file: String;

    constructor(id: number, title: String, due: number, note: String, file: String) {
        this.id = id;
        this.title = title;
        this.due = due;
        this.note = note;
        this.file = file;
    }

}
