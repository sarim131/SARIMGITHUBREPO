import CategoryItem from "../components/CategoryItem";

const categories = [
	{ href: "/BasketBall", name: "BasketBall", imageUrl: "/BasketballShoes.png" },
	{ href: "/Jordans", name: "Jordans", imageUrl: "/Jordans.jpg" },
	{ href: "/LifeStyle", name: "LifeStyle", imageUrl: "/LifeStyle.png" },
	{ href: "/Retro-Running", name: "Retro-Running", imageUrl: "/RetroRunning.png" },
	{ href: "/Dunks", name: "Dunks", imageUrl: "/Dunk.png" },
	{ href: "/Gym Shoes", name: "Gym Shoes", imageUrl: "/TrainingGymShoes.png" },
	{ href: "/Running Shoes", name: "Running Shoes", imageUrl: "/RunningShoes.png" },
];

const HomePage = () => {
	return (
		<div className='relative min-h-screen text-black bg-emerald overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Shoes
				</h1>
				<p className='text-center text-xl text-emerald-400 mb-12'>
					Discover the latest Collections
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) =>(
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
