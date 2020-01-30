# Documents

A library of open-source templates for everyday legal documents.

## Structure of this repository

This repository is organized by legal domain. Within each legal domain you'll find a folder per jurisdiction. Templates that apply to multiple jurisdiction are included in the `eu` or `world` folders.

In the jurisdiction folder, there is one folder per document type. The document folder then contains two types of files:

- A `schema.json` file which describes the expected input to be fed to the template, as well as document metadata (name, tags, version)
- A `sample-input.json` file which provides input corresponding to the schema, typically for testing purposes
- One or several `*.html` files (one per available language). These files are the actual templates, to be filled-in with data described in the `sample-input.json` file

## Inputs data model

Each input value is described in the `schema.json`. The accepted primitive types for input values are:

- `string` (i.e., a word)
- `integer` (i.e., a round number)
- `float` (i.e., a number with decimals)
- `boolean` (i.e., `true` or `false`, to be used for conditional flags)
- `date` (in a commonly parseable format, for example `DD/MM/YYYY`)

Besides these values, 3 object values are also authorized for input types:

- `address`
- `company`
- `person`

The accepted properties of these objects are defined in the `schemas` folder. Having these values eases the process of filling in input data when working with a template filler form. For example, if the templating engine is linked to a database of companies, it suffices to ask for the company to be selected in the form in order to retrieve all its properties directly from the database and fill them in the template. This works as long as the field names in the database match the field names from the schema.

## Template semantics

We use the [Mustache templating language](https://github.com/janl/mustache.js/), chosen for its simplicity and popularity. Check out its manual to learn about rendering templates, incl. possibilites of conditional rendering.

## How to contribute
