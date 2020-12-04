# CRUD Thunk App

    > create-react-app thunk_app --template typescript

Material-UI

1. yarn add @material-ui/core —save

index.html

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

2. yarn add @material-ui/icons —save

How to apply CSS ? Using makeStyles

How to add more than 1 component?
wrap more than 1 component <React.Fragment />

# AppBar helps to create the Navigation Bar.

# AppBar children is Toolbar

# CssBaseline space divided equally.

# <InputBase /> used to create searchbar.

# state mangement with redux

Component ===> Action <===> Server <====> Database

Action ==> Reducer ==> Component

Actions ==> thunk

### All Employees

### Add Employee

### Update Employee

### Delete Employee

    - Connect to Server using "axios"

    - "getEmployee" function

    - Action should connect to reducer with help of Dispatch

# Actions

- "axios" library is used to connect to server

> yarn add axios @types/axios --save

# How to build the redux application?

> yarn add redux @types/redux --save

# how to download thunk?

> yarn add redux-thunk @types/redux-thunk --save

# axios @types/axios Asynchronous calls

# redux-thunk @types/redux-thunk

# redux @types/redux

# react-redux @types/react-redux

Run the Single line command

> yarn add axios @types/axios redux-thunk @types/redux-thunk redux @types/redux react-redux @types/react-redux --save

Build the Action and Reducer Component.

# Thunk Application project flow

## Component

## Action - Customer Requirement is called Action.

What is role of Action ? Action will connect to Server

Why Server? Server will connect to Database.

Action is giving response back to reducer.

Reducer will give the information Component.

# How to connect to reducer? dispatch
