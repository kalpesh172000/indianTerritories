# 🇮🇳 Indian Territories API

A public REST API that provides data on Indian States, Districts, and Towns. Built with Node.js, Express, MongoDB, and deployed on Vercel.

📍 **Live URL**: [https://indian-territories.vercel.app](https://indian-territories.vercel.app)

---

## 📘 API Documentation

You can access the full interactive documentation at:

👉 [https://indian-territories.vercel.app](https://indian-territories.vercel.app)

### ✅ Available Endpoints

| Method | Endpoint                       | Description                         |
| ------ | ------------------------------ | ----------------------------------- |
| GET    | `/api/alive`                   | Check if API is alive               |
| GET    | `/api/states`                  | Get all states                      |
| GET    | `/api/districts?state_code=27` | Get districts by state_code         |
| POST   | `/api/districts`               | Get districts by state_code in body |
| GET    | `/api/towns?district_code=516` | Get towns by district_code          |
| POST   | `/api/towns`                   | Get towns by district_code in body  |

---

## 📌 Usage Examples

### Check API status

```
GET /api/alive
```

### Get all states

```
GET /api/states
```

### Get districts for a state (state_code = 27)

```
GET /api/districts?state_code=27
```

### or with json body
```
GET /api/districts wit json body
```
```json
POST /api/districts
Content-Type: application/json

{
  "state_code": 27
}
```

###Get towns for a district (district_code = 516)
```
GET /api/towns?district_code=516
```
### or with json body

```
POST /api/towns
Content-Type: application/json

{
  "district_code": 516
}
```
##Tech Stack
-Node.js
-Express.js
-MongoDB (Mongoose)
-Vercel (Deployment)


##Getting Started Locally
```bash

git clone https://github.com/kalpesh172000/indianTerritories.git 
cd indianTerritories
npm install
```

##Create a .env file:
```env
MONGO_URL=your_mongodb_atlas_connection_string_for_production
LOCAL_MONGO=your_local_mongodb_connection_string_for_development

```

##Start the server:
###for developement 
```
npm run dev
```
###for production 
```
npm run start
```
## Author

- Github - [@kalpesh172000]

