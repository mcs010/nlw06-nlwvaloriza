import { Request, Response} from 'express';
import { ListUserSentComplimentsService } from '../services/ListUserSentComplimentsService';


class ListUserSendComplimentsController {

    async handle(request: Request, response: Response){
        const { user_id } = request

        const listUserSendComplimentsService = new ListUserSentComplimentsService()
        
        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export { ListUserSendComplimentsController }