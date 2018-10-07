gci .\tasks -Directory | foreach { Copy-Item -Recurse .\util\ ($_.FullName + "\util") }
