import { Request } from '../uril/request'
//封装axios
export const guess = data => Request.getData({
	url:`/url/?type=guess`,
	method:"get",
	data
})
export const hot = data => Request.getData({
	url:`/url/?type=hot`,
	method:"get",
	data
})
export const group = data => Request.getData({
	url:`/url/?type=group`,
	method:"get",
	data
})
export const detill = (data,id) => Request.getData({
	url:`/url/`+id,
	method:"get",
	data
})
export const listid = (data,id) => Request.getData({
	url:`/list/shopping/restaurant/${id}`,
	method:"get",
	data
})
export const listcent = data => Request.getData({
	url:`/list/shopping/v2/menu`,
	method:"get",
	data
})