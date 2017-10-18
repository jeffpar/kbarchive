---
layout: page
title: "Q148894: How to Enforce Uniqueness in Visual FoxPro Memo Fields"
permalink: kb/148/Q148894/
---

## Q148894: How to Enforce Uniqueness in Visual FoxPro Memo Fields

	Article: Q148894
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to enforce uniqueness in memo fields.
	
	MORE INFORMATION
	================
	
	Example Scenario
	----------------
	
	When you have a long character field that happens to be rarely filled, it might
	be better to store the data in a memo field instead of a character field. The
	memo field takes up only four bytes in the table, and the large character field
	can now be removed from the structure.
	
	You can use the following step-by-step procedure to create a unique index tag on
	just a portion of the data in the memo field. The benefits of this process are:
	
	- Guaranteed uniqueness in large data sets.
	
	- The tag size remains the same as it was.
	
	- The size of the .dbf file shrinks dramatically.
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new database (.dbc file):
	  a. On the File menu, click New.
	
	  b. Select Database, and then click the New File button.
	
	  c. Place the new database (.dbc file) in the directory of your choice.
	
	2. Add a table to the database:
	  a. Right-click the Database Designer, and select New Table.
	
	  b. Click the New Table button.
	
	  c. Create the table in the directory of your choice.
	
	  d. In the Table Designer, add a memo field.
	
	3. Add a Unique Index Tag to the Table:
	  a. Click the Index tab.
	
	  b. Under Name, type the name of your memo field.
	
	  c. Under Type, select Primary or Candidate (Unique won't work).
	
	  d. For the expression, enter the following where MaxLen is any value up to
	     the maximum of 240:
	
	        PADR(MemoField, MaxLen)
	
	4. Add several records to the table with exactly the same content in the memo
	  field to verify a proper setup.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
