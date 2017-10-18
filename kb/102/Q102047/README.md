---
layout: page
title: "Q102047: PRB: Two Error Messages When Closing Query with No Fields"
permalink: kb/102/Q102047/
---

## Q102047: PRB: Two Error Messages When Closing Query with No Fields

	Article: Q102047
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing a Visual FoxPro Query Designer or a FoxPro 2.x RQBE query with no fields
	selected for output will generate a two-part error:
	
	1. A window will open showing the SELECT statement with an "SQL Invalid SELECT"
	  message.
	
	2. A dialog box will warn you about not being able to reopen the query and then
	  asks if you want to continue.
	
	CAUSE
	=====
	
	A SELECT statement with no fields selected cannot be closed because it is not a
	valid SQL statement--FoxPro checks to see if it is a valid SQL statement before
	bringing up the Save dialog box. The Query Designer and RQBE depend on being
	able to compile the SQL statement when they open a .QPR file. Therefore, FoxPro
	will not save an invalid, uncompilable statement by bringing up the Save dialog
	box when the close box is used.
	
	RESOLUTION
	==========
	
	To save an SQL statement that has no selected fields, choose Save or Save As
	from the File menu. This method works because FoxPro does not check the SQL
	statement to make sure it is valid first. However, when you attempt to open the
	*.QPR file, the following error message appears:
	
	  Unrecognized command verb.- CANCEL, SUSPEND, IGNORE.
	
	If you attempt to run the invalid *.QPR file by choosing Query from the Run menu,
	the following error messages appear:
	
	  Could not execute query.
	  Unrecognized command verb.
	
	Additional query words: FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
