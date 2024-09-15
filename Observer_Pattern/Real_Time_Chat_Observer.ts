import { Observer, Subject } from "./Stock_Change_Obsorver";

class GroupChat implements Subject {
  private observers: Observer[] = []
  private message: string = ''

  notifyObservers(): void {
    for (const observer of this.observers) {
      console.log(observer.update())
    }
  }

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  removeObserver(o: Observer): void {
    this.observers.filter((observer) => observer !== o)
  }

  setGroupMessage(message: string) {
    this.message = message
    this.notifyObservers()
  }

  public getMessage(): string {
    return this.message
  }
}

class User implements Observer {
  private message: string = ''
  constructor(private subject: GroupChat, public name: string) {
    subject.registerObserver(this)
  }

  display(): string {
    return `${this.name} got the message: ${this.message}`
  }

  update(): string {
    this.message = this.subject.getMessage()
    return this.display()
  }
}

const groupChat = new GroupChat()

const Joao = new User(groupChat, 'Joao')
const Leticia = new User(groupChat, 'Leticia')

groupChat.setGroupMessage('Welcome to the group chat.')

groupChat.removeObserver(Joao)

groupChat.setGroupMessage('Only get the message who subscribes to it.')

