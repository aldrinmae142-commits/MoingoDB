# Client-Server Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                         │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                 FRONTEND (React)                    │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  User Interface (UI Components)                 │ │    │
│  │  │  • Buttons, Forms, Navigation                   │ │    │
│  │  │  • State Management                             │ │    │
│  │  │  • Event Handlers                               │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  API Communication                              │ │    │
│  │  │  • HTTP Requests (fetch/axios)                  │ │    │
│  │  │  • JSON Data Handling                           │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ HTTP Request
                                │ (GET, POST, PUT, DELETE)
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVER (Node.js + Express)               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                 BACKEND (Express.js)                │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  Route Handlers                                │ │    │
│  │  │  • /api/users, /api/products                    │ │    │
│  │  │  • Request Processing                           │ │    │
│  │  │  • Response Formatting                          │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  Business Logic                                │ │    │
│  │  │  • Data Validation                              │ │    │
│  │  │  • Authentication                               │ │    │
│  │  │  • Error Handling                               │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  Middleware                                     │ │    │
│  │  │  • CORS, Logging, Authentication                │ │    │
│  │  │  • Request Parsing                              │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ Database Query
                                │ (MongoDB Drivers)
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATABASE (MongoDB)                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Collections (Tables)                               │    │
│  │  • users, products, orders                          │    │
│  │  ┌─────────────────────────────────────────────────┐ │    │
│  │  │  Documents (Records)                            │ │    │
│  │  │  • JSON-like data storage                       │ │    │
│  │  │  • Flexible schemas                             │ │    │
│  │  └─────────────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Request Flow Example

1. **User Action**: User clicks "Login" button in React component
2. **Frontend**: Form validation, collect username/password
3. **HTTP Request**: `POST /api/auth/login` with JSON payload
4. **Backend Route**: Express route handler receives request
5. **Validation**: Check credentials against business rules
6. **Database Query**: `db.users.findOne({username: "john"})`
7. **Response**: Generate JWT token, return user data
8. **HTTP Response**: Send JSON response back to client
9. **Frontend Update**: Store token, redirect to dashboard
10. **UI Render**: Display user-specific content

## MERN Stack Integration

- **MongoDB**: Stores user sessions, profiles, application data
- **Express.js**: Handles API routes, middleware, authentication
- **React**: Provides interactive UI, manages component state
- **Node.js**: Runs the server, executes JavaScript on both ends

## Key Communication Points

- **Frontend ↔ Backend**: HTTP/HTTPS protocols, RESTful APIs
- **Backend ↔ Database**: MongoDB drivers, query languages
- **Client ↔ Server**: TCP/IP network communication
- **Data Format**: JSON for API communication