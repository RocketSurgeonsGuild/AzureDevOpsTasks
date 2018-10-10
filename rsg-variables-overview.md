# Rocket Surgeons Guild - Variable Tools

This add three new tasks to use with Azure DevOps.

## Deserialize Variables
Allows you to deserialize variables from an artifact json file.
* Inputs
  * `jsonfiles` - Glob of files to deserialize (defaults to `**\\meta.json`)

## Serialize Variables
Allows you to serialize variables to an artifact json file.
* Inputs
  * `prefixes` - The prefixes to collect values (defaults to `GITVERSION,BUILD`)
  * `artifactName` - Allow a custom artifact name (defaults to `variables-{prefixes}`)
  * `filename` - The artifact filename (defaults to `meta.json`)

## Show Variables
Lists all the variables present at the current state of your pipeline.

## Export Service Connection
Exports the given service connection as

## Unique String
Resolves a unique string similar to how Azure ARM templates do, however it is not identical.  Outputs a hash with a size of 7 characters.
* Inputs
  * `name` - The variable name to set
  * `value` - The value to assign to the variable name


