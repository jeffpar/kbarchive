---
layout: page
title: "Q101553: BUG: Bad Result If Multiple Aggregate Functions in SQL Stmt"
permalink: kb/101/Q101553/
---

## Q101553: BUG: Bad Result If Multiple Aggregate Functions in SQL Stmt

	Article: Q101553
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SQL query statement contains multiple aggregate functions, the result
	set incorrectly contains the same value for all the functions. The result of the
	first aggregate function is duplicated in the result column of all of the other
	functions.
	
	CAUSE
	=====
	
	Aggregate functions typically do not contain explicit column names for
	expressions in the SQL query. In SQL queries containing multiple aggregate
	function calls, the Access database layer does not uniquely identify the return
	columns for any functions past the first. Therefore, it duplicates the result
	column of the first function in the result columns of the succeeding functions
	
	This problem did not occur in Visual Basic version 2.0. In Visual Basic version
	3.0, the Microsoft Access engine was integrated into the data access
	functionality. The Microsoft Access engine tracks the column by name, whereas
	Visual Basic version 2.0 tracks the column by the column offset.
	
	WORKAROUND
	==========
	
	Use aliases for the aggregate functions to solve the problem. Replace the SQL
	statement shown below in the "Steps to Reproduce Problem" section with the
	following SQL statement, which contains the aliases One and Two for the column
	names for the separate SUM expressions:
	
	     Select SUM(PubID) as One, SUM(Au_ID) as Two From Titles
	
	The Alias names can be anything other than the column name and must be unique
	within the statement.
	
	After inserting the aliases, run the SQL statement again and notice that the two
	fields now correctly show the different results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic.
	
	2. From the File menu, choose Open Project (ALT, F, O). Open VISDATA.MAK from
	  the VB\SAMPLES\VISDATA directory.
	
	3. From the Run menu, choose start (ALT, R, S) or press F5 to run the program.
	
	4. From the Visual Data File menu, choose OpenDatabase. From the sub menu choose
	  MS Access.
	
	5. From the Open MS Access Database dialog box, select the BIBLIO.MDB file.
	
	6. For the RecordSet Form Type, select Grid.
	
	7. Enter the following SQL statement in the SQL Statement window:
	
	     Select SUM(PubID), SUM(Au_ID) From Titles
	
	8. Click the Execute SQL command Button.
	
	9. The result shows in a grid window. The two fields have the same value. They
	  should be different.
	
	Additional query words: buglist3.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	
