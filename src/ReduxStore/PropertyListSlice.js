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
                rent: 4000,
                rentType: 'month',
                favourite: false,
                image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg'
            },
            {
                id: "2",
                address: "Select City Walk, Saket",
                location: "New Delhi",
                bedroom: 2,
                bathroom: 1,
                rent: 2000,
                rentType: 'month',
                favourite: false,
                image: 'https://cdn.homedit.com/wp-content/uploads/2012/10/Stunning-cubic-house.jpg'
            },
            {
                id: "3",
                address: "Cannaught Place, Delhi NCR",
                location: "New Delhi",
                bedroom: 4,
                bathroom: 3,
                rent: 9000,
                rentType: 'month',
                favourite: false,
                image: 'https://amazingarchitecture.com/storage/711/Deep-Villa-Atrey-and-Associates-New-Delhi-ndia-Amazing-Architecture-House.jpg'
            },
            {
                id: "4",
                address: "Delhi NCR",
                location: "New Delhi",
                bedroom: 3,
                bathroom: 3,
                rent: 7000,
                rentType: 'month',
                favourite: false,
                image: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1430826114/Domestic%20Hotels/Hotels_New%20Delhi/On%20the%20House/Overview.jpg'
            },
            {
                id: "5",
                address: "Delhi NCR",
                location: "New Delhi",
                bedroom: 4,
                bathroom: 3,
                rent: 6500,
                rentType: 'month',
                favourite: false,
                image: 'http://images.jdmagicbox.com/comp/delhi/t8/011pxx11.xx11.000639625191.y3t8/catalogue/new-delhi-house-connaught-place-delhi-b88kkf806a.jpg'
            },
            {
                id: "6",
                address: "Indira Nagar",
                location: "Bengaluru",
                bedroom: 2,
                bathroom: 2,
                rent: 4000,
                rentType: 'month',
                favourite: false,
                image: 'https://homeworlddesign.com/wp-content/uploads/2018/03/Bangalore-House-1.jpg'
            },
            {
                id: "7",
                address: "Jayanagar",
                location: "Bengaluru",
                bedroom: 2,
                bathroom: 1,
                rent: 2000,
                rentType: 'month',
                favourite: false,
                image: 'https://mediacdn.99acres.com/media1/19483/17/389677998M-1667367100174.jpg'
            },
            {
                id: "8",
                address: "Frazer Town",
                location: "Bengaluru",
                bedroom: 4,
                bathroom: 3,
                rent: 9000,
                rentType: 'month',
                favourite: false,
                image: 'https://is1-3.housingcdn.com/01c16c28/3429c4bd168e28600b49eec83a75d0df/v0/fs/5_bhk_independent_house-for-sale-kalena_agrahara-Bangalore-others.jpg'
            },
            {
                id: "9",
                address: "Basavanagudi",
                location: "Bengaluru",
                bedroom: 3,
                bathroom: 3,
                rent: 7000,
                rentType: 'month',
                favourite: false,
                image: 'https://5.imimg.com/data5/WD/YF/MY-67333968/house-painters-in-bangalore-500x500.jpg'
            },
            {
                id: "10",
                address: "Koramangala",
                location: "Bengaluru",
                bedroom: 4,
                bathroom: 3,
                rent: 6500,
                rentType: 'month',
                favourite: false,
                image: 'https://is1-3.housingcdn.com/01c16c28/67a0e42a89aaf930f38fb40918aaaf11/v0/fs/4_bhk_independent_house-for-sale-sanjaynagar-Bangalore-outside_view.jpg'
            }
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