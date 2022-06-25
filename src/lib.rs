use display_info::DisplayInfo;
use deno_bindgen::deno_bindgen;

#[deno_bindgen]
pub struct InfoDisplay {
	id: String,
	x: i32,
	y: i32,
	width: u32,
	height: u32,
	scale: f32,
	rotation: f32,
}

#[deno_bindgen]
pub struct Displays {
	list: Vec<InfoDisplay>,
}

#[deno_bindgen]
pub fn displays() -> Displays {
	let display_infos = DisplayInfo::all();
	let mut vec = Vec::new();
	for display_info in display_infos {
		vec.push(InfoDisplay {
			id: display_info.id.to_string(),
			x: display_info.x,
			y: display_info.y,
			width: display_info.width,
			height: display_info.height,
			scale: display_info.scale,
			rotation: display_info.rotation,
		});
	}
	Displays { list: vec }
}