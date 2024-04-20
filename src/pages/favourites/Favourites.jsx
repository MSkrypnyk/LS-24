import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Favourites = () => {
	const listItems = films.map((film) => <Film key={film.id} film={film} />);

	return (
		<>
			<Header />
			<div className="favourites">
				<div className="title">Favourites</div>
				<div className="favourites-list">
					{listItems}
				</div>
			</div>
		</>
	);
};
