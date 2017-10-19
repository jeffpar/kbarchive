---
layout: page
title: "Q139158: How to Add Fields to a Table in Visual FoxPro Programmatically"
permalink: /kb/139/Q139158/
---

## Q139158: How to Add Fields to a Table in Visual FoxPro Programmatically

	Article: Q139158
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of FoxPro, the only way to alter the structure of a table
	programmatically was to create a new table that contained the new structure and
	then append the data from the old table.
	
	Visual FoxPro now includes the ALTER TABLE command, which allows you to alter the
	structure of an existing table programmatically. This article shows by example
	how to add a field to an existing table.
	
	MORE INFORMATION
	================
	
	This example uses the Customer.dbf table that is part of the Testdata.dbc
	database. These files are located in the \Vfp\Samples\Data directory. The
	following code adds a new field named Newfield to the Customer.dbf table. The
	new field is a character field with a width of 20.
	
	     OPEN DATA testdata
	     USE customer
	     ALTER TABLE customer ADD COLUMN Newfield C(20)
	
	After running this code, use the MODIFY STRUCTURE or BROWSE command to see the
	changes to the table structure.
	
	For more information on the ALTER TABLE command, please see the ALTER TABLE
	command topic in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
