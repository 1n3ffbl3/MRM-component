# Minimalistic React Multiviews component

## Description

The goal of this project was to build a reusable React component following the best practices and idioms.

### Index

* [How to run](#how-to-run)
* [Implementation details](#implementation-details)
* [Libraries](#libraries)


---

## How to run

1. First of all, you have to enter the directory with project. After that you have to install dependencies:

    - npm install

2. After successful installation run:

    - npm start

3. The page is available on :

    - http://localhost:3000/#

[TOP](#index)

___

## Implementation details

There are two important components that were added to the base template of the create-react-app structure.

First component is DefaultView. It is rendered directly in the App.js component. It contains one SubView directly in the code.
Additionally as you can see, there is a second SubView created in a variable and passed in nestedView property of the first one.

I have created this mechanism to allow a SubView render another SubView. It is created this way, as we cannot immediately "nest"
a SubView in its own code. Therefore we are passing it though props and rendering only if it is present.

Second component is SubView. It can take up to 3 properties. Those are:

* name (name to be displayed)

* content  (content to be displayed)

* nestedView (optional nested view (or any other HTML / text) that will be rendered if present)

If the SubView has SubView, then the link to trigger the nested component is rendered.

I have added additionally a borderBox class to the elements, to visualise the borders of components.

To reduce number of repeated code lines (method toggleShowSubView) I have created a BaseView, which DefaultView and SubView extends.
Therefore code is only in one place.

[TOP](#index)

___

## Libraries

* react
* react-dom
* react-scripts

[TOP](#index)

___