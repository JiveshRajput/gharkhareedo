import { createSlice } from '@reduxjs/toolkit'

const PropertyListSlice = createSlice({
    name: "PropertyList",
    initialState: {
        propertyList: [
            {
                id: "1",
                address: "Pushp Vihar, New Delhi",
                location: "New Delhi",
                bedroom: 2,
                bathroom: 2,
                rent: 4300,
                rentType: 'month',
                favourite: false,
                image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "2",
                address: "Select City Walk, Saket",
                location: "New Delhi",
                bedroom: 2,
                bathroom: 1,
                rent: 2200,
                rentType: 'month',
                favourite: false,
                image: 'https://cdn.homedit.com/wp-content/uploads/2012/10/Stunning-cubic-house.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "3",
                address: "Cannaught Place, Delhi NCR",
                location: "New Delhi",
                bedroom: 4,
                bathroom: 3,
                rent: 5900,
                rentType: 'month',
                favourite: false,
                image: 'https://amazingarchitecture.com/storage/711/Deep-Villa-Atrey-and-Associates-New-Delhi-ndia-Amazing-Architecture-House.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "4",
                address: "Delhi NCR",
                location: "New Delhi",
                bedroom: 3,
                bathroom: 3,
                rent: 3500,
                rentType: 'month',
                favourite: false,
                image: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1430826114/Domestic%20Hotels/Hotels_New%20Delhi/On%20the%20House/Overview.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "5",
                address: "Delhi NCR",
                location: "New Delhi",
                bedroom: 1,
                bathroom: 1,
                rent: 1600,
                rentType: 'month',
                favourite: false,
                image: 'http://images.jdmagicbox.com/comp/delhi/t8/011pxx11.xx11.000639625191.y3t8/catalogue/new-delhi-house-connaught-place-delhi-b88kkf806a.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "6",
                address: "Greater Kailash-II",
                location: "New Delhi",
                bedroom: 3,
                bathroom: 2,
                rent: 5500,
                rentType: 'month',
                favourite: false,
                image: 'https://api.oliveservicedapartments.com/property_assets/property_images/24/1650547346-Photo%2018-04-22,%202%2021%2010%20PM%20(1).jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "7",
                address: "Indira Nagar",
                location: "Bengaluru",
                bedroom: 2,
                bathroom: 2,
                rent: 4000,
                rentType: 'month',
                favourite: false,
                image: 'https://homeworlddesign.com/wp-content/uploads/2018/03/Bangalore-House-1.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "8",
                address: "Jayanagar",
                location: "Bengaluru",
                bedroom: 2,
                bathroom: 1,
                rent: 1900,
                rentType: 'month',
                favourite: false,
                image: 'https://mediacdn.99acres.com/media1/19483/17/389677998M-1667367100174.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "9",
                address: "Main Bazar",
                location: "Bengaluru",
                bedroom: 3,
                bathroom: 2,
                rent: 5200,
                rentType: 'month',
                favourite: false,
                image: 'https://assets.architecturaldigest.in/photos/600845b8274aca243711c7c7/master/w_1600%2Cc_limit/Bangalore-rustic-home-interiors-architecture.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "10",
                address: "Frazer Town",
                location: "Bengaluru",
                bedroom: 3,
                bathroom: 1,
                rent: 3300,
                rentType: 'month',
                favourite: false,
                image: 'https://oneavighnapark.com/images/views.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "11",
                address: "Basavanagudi",
                location: "Bengaluru",
                bedroom: 1,
                bathroom: 1,
                rent: 2050,
                rentType: 'month',
                favourite: false,
                image: 'https://5.imimg.com/data5/WD/YF/MY-67333968/house-painters-in-bangalore-500x500.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "12",
                address: "Koramangala",
                location: "Bengaluru",
                bedroom: 4,
                bathroom: 2,
                rent: 5450,
                rentType: 'month',
                favourite: false,
                image: 'https://www.parekhconsultants.in/wp-content/uploads/2021/06/PHOTO-2021-07-21-17-05-09.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "13",
                address: "Navi Mumbai",
                location: "Mumbai",
                bedroom: 1,
                bathroom: 1,
                rent: 1650,
                rentType: 'month',
                favourite: false,
                image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/09/775792-building-10.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "14",
                address: "Nashik",
                location: "Mumbai",
                bedroom: 2,
                bathroom: 1,
                rent: 3950,
                rentType: 'month',
                favourite: false,
                image: 'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1442402047/p/photo/image/912334/DSC_6022.jpg',
                propertyType: 'house',
                available: true
            },
            {
                id: "15",
                address: "Borivali",
                location: "Mumbai",
                bedroom: 3,
                bathroom: 2,
                rent: 5950,
                rentType: 'month',
                favourite: false,
                image: 'https://images.adsttc.com/media/images/50f6/a7b7/b3fc/4b26/2a00/02ed/large_jpg/EXT_1_(4).jpg?1413939030',
                propertyType: 'house',
                available: true
            },
            {
                id: "16",
                address: "Juhu",
                location: "Mumbai",
                bedroom: 1,
                bathroom: 1,
                rent: 2500,
                rentType: 'month',
                favourite: false,
                image: 'https://5.imimg.com/data5/WE/KP/MY-14518941/5-bhk-flat-for-sale-in-rustomjee-elements-upper-juhu-andheri-west-500x500.jpeg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "17",
                address: "Dahisar",
                location: "Mumbai",
                bedroom: 2,
                bathroom: 1,
                rent: 5000,
                rentType: 'month',
                favourite: false,
                image: 'https://mldllifespacebucket01.s3.amazonaws.com/2019/10/vicino-overview.jpg',
                propertyType: 'flat',
                available: true
            },
            {
                id: "18",
                address: "Dahisar",
                location: "Mumbai",
                bedroom: 1,
                bathroom: 1,
                rent: 3650,
                rentType: 'month',
                favourite: false,
                image: 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1237i215%2Fw4ehcb8fz0sjmk269vt39bwbd7i215&option=N&h=472&permitphotoenlargement=false',
                propertyType: 'flat',
                available: true
            },
        ]        
    },
    reducers: {
        changeFavValue(state, actions){
            state.propertyList.filter((item)=> item.id === actions.payload.id)[0].favourite = actions.payload.favourite;
        }
    }
});

export const { changeFavValue } = PropertyListSlice.actions;
export default PropertyListSlice.reducer;