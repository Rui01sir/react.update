//api url 獨立成設定檔
export const HOST = 'http://localhost:3001'

// GET:黑膠商品
export const VR_DATA = `${HOST}/db-vr-album/api`

// GET:全部黑膠商品
export const ALL_VR_DATA = `${HOST}/db-all-vr-album/api`

// GET:黑膠商品
export const PRODUCT_DATA = `${HOST}/product`

// GET:唱片機
export const REC_DATA = `${HOST}/db-record-player/api`

// GET:周邊商品
export const MERCH_DATA = `${HOST}/db-merchandise/api`

// GET:募資商品
export const CUS_CROW_DATA = `${HOST}/db-crowdfunding/api`

// GET:客製化商品
export const CUS_ITEM_DATA = `${HOST}/db-customization-item/api`

// GET:客製化材質
export const CUS_MATER_DATA = `${HOST}/db-customization-material/api`

// 上傳, POST
export const CUS_UPLOAD = `${HOST}/try-upload`

//會員呈現表單
export const MEMBER_LIST = `${HOST}/membership/api`

//會員編輯

export const MEMBER_EDIT = `${HOST}/membership/edit`

//優惠眷
export const MEMBER_COUPON = `${HOST}/coupon/api`

//我的收藏3個 RE ME VR個 RE ME VR
export const MEMBER_WISHLISTRE = `${HOST}/wishlistRE/api`
export const MEMBER_WISHLISTVR = `${HOST}/wishlistVR/api`
export const MEMBER_WISHLISTME = `${HOST}/wishlistME/api`

//我的收藏:刪除ID
export const DELETE_WISHLIST = `${HOST}/wishlist/`

//評論
export const MEMBER_COMMENT = `${HOST}/comment/api`

//歷史訂單
export const ORDER_LIST = `${HOST}/orderlist/api`

// 登入
export const MEMLOGIN = `${HOST}/member/memlogin`
