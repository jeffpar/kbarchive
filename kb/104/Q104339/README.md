---
layout: page
title: "Q104339: PRB: TableDefs Not Updated When SQL Statement Creates Table"
permalink: kb/104/Q104339/
---

## Q104339: PRB: TableDefs Not Updated When SQL Statement Creates Table

	Article: Q104339
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a table with an SQL action statement such as SELECT INTO, the new
	table is not immediately reflected in the TableDefs collection of the database
	object or property. This may result in the error "Name not found in this
	collection" (error 3265).
	
	WORKAROUND
	==========
	
	Perform TableDefs.Refresh immediately after creating the new table. The Refresh
	method should be but is not documented for the TableDefs collection in the
	Visual Basic manuals or Help menu.
	
	- Create the table using database.Tabldefs.Append instead of using an SQL
	  statement.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A table created with an SQL statement is correctly reflected in the Tabledefs
	collection after the database is closed then reopened.
	
	Steps to Reproduce Problem
	--------------------------
	
	The following program demonstrates this problem. It results in the error "Name
	not found in this collection" on the Tabledefs.Delete statement.
	
	     Dim db As Database
	     Set db = OpenDatabase("BIBLIO.MDB")
	     Print "TableDefs.Count before:"; db.TableDefs.Count
	     ' Create new table using SQL action statement:
	     db.Execute "select distinctrow * into NewTable from Authors"
	     ' Remove apostrophe from the following statement to work around problem:
	     ' db.TableDefs.Refresh
	     Print "TableDefs.Count after: "; db.TableDefs.Count
	     ' Now attempt to delete the new table just created:
	     db.TableDefs.Delete "NewTable"
	     db.Close
	
	Additional query words: 3.00 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
