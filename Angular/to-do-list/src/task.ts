export interface ITask {
    id: number;
    text: string;
    isDone: boolean;
    isImportant: boolean;
    deadline: Date;
    //isDeadlineExpired(): boolean;
}