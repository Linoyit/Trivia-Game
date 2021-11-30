import { useAppSelector } from "../store/hooks";

export const useTriviaCollection = () => {
    const list = useAppSelector((state) => state.trivia.items);
    const userSelections = useAppSelector((state) => state.trivia.userSelections);
    return { list, userSelections };
}
