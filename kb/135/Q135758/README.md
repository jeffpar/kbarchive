---
layout: page
title: "Q135758: PRB: Long Field Names Interfere with the Append Command"
permalink: /kb/135/Q135758/
---

## Q135758: PRB: Long Field Names Interfere with the Append Command

{% raw %}

	Article: Q135758
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you append records from a version 2.x table onto the end of a version 3.0
	table and the version 3.0 table has long field names and is part of a database,
	Visual FoxPro says the records were added, but they weren't.
	
	CAUSE
	=====
	
	The version 3.0 table has long field names. These interfere with the Append
	operation.
	
	WORKAROUND
	==========
	
	The easiest workaround is to rename the long fields to match the field names
	contained in the version 2.x table; then redo the APPEND FROM operation. When it
	finishes, rename the fields in the version 3.0 table back to their original
	names. If you have indexes on your version 3.0 table, Visual FoxPro will object
	to the name change, so you must also temporarily modify your indexes so that the
	field names in the indexes match the field names in the table, or delete the
	indexes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Code to Demonstrate Behavior
	----------------------------
	
	The following code demonstrates this behavior. To resolve this and allow the
	APPEND FROM command to work, the fields in the Testtab table should be shortened
	to match the field names in the Testtab2 free table.
	
	  *--------------------------------------------------------------------*
	  * Program: APNDTEST.PRG                                              *
	  * Purpose: Demonstrates what happens when adding data from a free    *
	  *          table to a table that has long field names and that is    *
	  *          part of a database.                                       *
	  *--------------------------------------------------------------------*
	  CLEAR
	  CLOSE ALL
	  CLEAR ALL
	  CREATE DATABASE testdbc
	  CREATE TABLE testtab (Cust_First_Name C(15), Cust_Last_Name C(25))
	  CLOSE DATABASE
	  CREATE TABLE testtab2 (Cust_First C(15), Cust_Last C(25))
	  INSERT INTO testtab2 VALUES ("John", "Henry")
	  INSERT INTO testtab2 VALUES ("Ralph", "Willingham")
	  INSERT INTO testtab2 VALUES ("George", "Weatherford")
	  OPEN DATABASE testdbc
	  USE testtab in 0
	  APPEND FROM testtab2
	  BROWSE TITLE "Looking at table TESTTAB - Press ESC to continue!"
	  WAIT WINDOW "Cleaning up test files."
	  CLOSE ALL
	  ERASE testdbc.dbc
	  ERASE testdbc.dbt
	  ERASE testtab.dbf
	  ERASE testtab2.dbf
	
	Additional query words: 3.00 VFoxWin fail
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
