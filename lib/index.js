const params = {
	one: "one",
	two: "two",
	three: "three",
	four: "four",
};
export default function lib() {
	return { ...params };
}
