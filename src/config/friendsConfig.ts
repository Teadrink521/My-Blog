import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Sky Blog",
		imgurl: "https://avatars.githubusercontent.com/u/165529493",
		desc: "华风夏韵 洛水天依！",
		siteurl: "https://blog.sky1314.dpdns.org/",
		tags: ["Blog"],
		weight: 10,
		enabled: false, 
	},
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "AcoFork Blog",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://2x.nz",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{title: "kiyukie'Blog",
		imgurl: "https://cdn.nodeimage.com/i/Q6NDWWd1h3I18zBNTwxFJABm5iKuGkuW.webp",
		desc: "剑气纵横三万里，一剑光寒十九洲。",
		siteurl: "https://blog.030666.xyz",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
		{title: "Tianyi Demo",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2351494834&s=640",
		desc: "Tianyi主题模板预览",
		siteurl: "https://show.sky1314.dpdns.org",
		tags: ["Theme"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 8,
		enabled: false, 
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};
