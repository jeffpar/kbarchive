---
layout: page
title: "Q157628: PRB:Double Quotes in Remote View Filter Expression Cause Error"
permalink: kb/157/Q157628/
---

## Q157628: PRB:Double Quotes in Remote View Filter Expression Cause Error

	Article: Q157628
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Filter expression of a remote view uses double quotes, then running or
	modifying the view causes the following error message:
	
	  Connectivity Error........invalid column name....
	
	CAUSE
	=====
	
	Microsoft SQL Server version 6.0 and up uses single quotes (') for string
	constants and double quotes (") for identifiers with spaces like "my table," "my
	column," and so forth. You must convert double quotes to single quotes in the
	View Designer, before the example constant is included in the SQL string.
	
	RESOLUTION
	==========
	
	Use Single Quotes (' ') instead of Double Quotes (" ").
	
	To make the example under "Steps To Reproduce Behavior" section work, change the
	Example Expression in the Filter tab to use Single Quotes ('B') instead of
	Double Quotes ("B"). If you are creating the Remote View programmatically then
	change the WHERE clause to use single quotes as follows:
	
	     CREATE SQL VIEW test;
	       REMOTE CONNECTION "myConn";
	       AS SELECT Authors.au_id, Authors.au_lname, Authors.au_fname;
	         FROM dbo.authors Authors;
	         WHERE Authors.au_lname = 'B'
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the 32-Bit ODBC Manager to create a DataSource to the PUBS database on a
	  Microsoft SQL Server.
	
	2. Open a Database or create a new one.
	
	3. Create a Remote View based on the DataSource created in step 1.
	
	4. Add the Authors Table to the View
	
	5. Select three to four fields from the table
	
	6. Click the Filter tab, create and select a character type field such as
	  "Authors.au_lname," and select any criteria, for example, "=".
	
	7. Add "A" (without the quotation marks) with the double quotes (" ") as the
	  expression.
	
	8. Right-click the Query Designer and click Run Query from the shortcut menu.
	
	The following error appears:
	
	  Connectivity Error [Microsoft][ODBC SQL SERVER DRIVER]
	  [SQL SERVER]invalid column name 'B'
	
	The same behavior occurs if you create a remote view programmatically. So,
	instead of the above steps, you can issue the following commands to reproduce
	this behavior:
	
	     CREATE SQL VIEW test;
	       REMOTE CONNECTION "myConn";
	       AS SELECT Authors.au_id, Authors.au_lname, Authors.au_fname;
	         FROM dbo.authors Authors;
	         WHERE Authors.au_lname = "B"
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
