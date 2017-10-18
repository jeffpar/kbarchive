---
layout: page
title: "Q133470: PRB: Cannot Modify Table Structure After Using SQL SELECT"
permalink: kb/133/Q133470/
---

## Q133470: PRB: Cannot Modify Table Structure After Using SQL SELECT

	Article: Q133470
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
	
	After performing an SQL SELECT statement on a table, the table structure becomes
	read-only, so you can't modify it.
	
	CAUSE
	=====
	
	Initially the SELECT statement is processed to see if the result set can be
	obtained from the original table with the application of a filter. If it can, a
	temporary cursor is not created on disk; instead, a filtered view of the
	original table is created. You will see a cursor object in the View window with
	the name QUERY, this is an alias of the source table.
	
	Because you are looking at a filtered view of the original table, the MODIFY
	STRUCTURE command won't work; the underlying table structure of the result set
	has been temporarily frozen.
	
	RESOLUTION
	==========
	
	To execute an immediate MODIFY STRUCTURE command on the source table, you must
	first close the QUERY cursor. Alternatively, you could avoid this by editing the
	query to involve complexities that would force a temporary, physically distinct
	cursor to be created.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Behavior
	--------------------------
	
	The following test code demonstrates this principle with a very simple
	single-table query:
	
	       CREATE TABLE TEST (Name C(20))         && Create temporary table
	     CLOSE ALL                              && Close all tables
	     USE TEST EXCLUSIVE                     && Re-use the table
	     INSERT INTO TEST VALUES ("Bob")        && Populate with some data
	     SELECT * FROM TEST INTO CURSOR QUERY   && Execute query
	     SELECT TEST                            && Re-select the table
	     MODIFY STRUCTURE                       && Command fails.
	
	The following example shows a more complex query. Consequently, Visual FoxPro
	creates a cursor object named QUERY on the hard disk instead of creating a
	filtered alias.
	
	     USE SYS(2004)+"\SAMPLES\DATA\CUSTOMER" IN 0
	     SELECT * FROM CUSTOMER WHERE REGION="OR" INTO CURSOR QUERY
	     SELECT CUSTOMER
	     MODIFY STRUCTURE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
