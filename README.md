## Setup

```
git clone https://github.com/lbogdan/worskshop-vue.git

cd workshop-vue

yarn

git checkout step0

yarn serve
```

## Repo tags

* step0 - project setup
* step1 - added Bootstrap
* step2 - added Transaction component
* step3 - added TransactionHeader component
* step4 - moved data to parent
* step5 - transaction list
* step6 - added mock API and loading indicator
* step7 - replaced mock API with real API
* step8 - added category filter
* step9 - added total
* step10 - added deleting
* step11 - added creating
* step12 - added editing
* step14 - added date picker

## Configuring Visual Studio Code

Create the following files in the project folder:

* .vscode/settings.js

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "vetur.validation.script": false,
  "vetur.validation.template": false,
  "editor.formatOnSave": true,
  "files.eol": "\n",
  "editor.tabSize": 2
}
```

* .eslintrc

```json
{
  "root": true,
  "extends": ["plugin:vue/essential", "@vue/airbnb"],
  "rules": {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "arrow-parens": ["error", "always"],
    "function-paren-newline": "off"
  }
}
```

* .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

## HTML Markup

* transaction

```html
<div class="row py-2">
  <div class="col-2">
    2 Apr
  </div>
  <div class="col-4">
    Asociatia Clujsters
  </div>
  <div class="col-3">
    Education
  </div>
  <div class="col-2">
    € 99.99
  </div>
</div>
```

* transaction header

```html
<div class="row font-weight-bold border-bottom pb-1">
  <div class="col-2">
    Date
  </div>
  <div class="col-4">
    Merchant
  </div>
  <div class="col-3">
    Category
  </div>
  <div class="col-2">
    Amount
  </div>
</div>
```

* transaction filter

```html
<div class="row mb-4">
  <div class="col-3 offset-6">
    <select v-model="filterCategory" class="form-control">
      <option value="">All Categories</option>
      <option value="Category 1">Category 1</option>
      <option value="Category 2">Category 2</option>
    </select>
  </div>
</div>
```

* transaction total amount

```html
<div class="row py-2 font-weight-bold" key="">
    <div class="col-2 offset-7">
      Total:
    </div>
    <div class="col-2">
      € -465.00
    </div>
</div>
```

* transaction form

```html
<div class="mt-4">
  <div class="row">
    <div class="col-2">
      <input
        type="text"
        class="form-control"
        placeholder="Date"
      />
    </div>
    <div class="col-4">
      <input
        type="text"
        class="form-control"
        placeholder="Merchant"
      />
    </div>
    <div class="col-3">
      <select class="form-control">
        <option value="">Select Category</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>
    </div>
    <div class="col-2">
      <input
        type="text"
        class="form-control"
        placeholder="Amount"
      />
    </div>
    <div class="col-1">
      <button type="submit" class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
```
