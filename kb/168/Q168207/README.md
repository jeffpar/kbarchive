---
layout: page
title: "Q168207: PRB: Cannot Find NULL Records with Parameterized Query"
permalink: kb/168/Q168207/
---

## Q168207: PRB: Cannot Find NULL Records with Parameterized Query

	Article: Q168207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a parameterized query against a Jet database where the parameter
	variable is equal to NULL will not return any records. Running a query without
	the parameter variable that specifically searches for NULL will succeed as
	expected.
	
	CAUSE
	=====
	
	A variable with a NULL value sent in as the parameter is not equal to what the
	JET engine recognizes as NULL. The values of the NULLs do not match.
	
	RESOLUTION
	==========
	
	Before calling the code that executes the query, use an IF statement that checks
	the value of the parameter. If the value is NULL, run a different query that
	specifically looks for a NULL value, otherwise run the original, parameterized
	query.
	
	Example:
	
	     Dim p1 as long
	     dim r1 as recordset
	     dim SQLstring as string
	     dim p1 as long
	
	     if p1 = NULL then
	         SQLstring = "SELECT Table1.Field1 FROM Table1  _
	         WHERE (((Table1.Field1) Is Null));"
	         'Looking specifically for a Null
	     else
	         SQLstring = "SELECT Table1.Field1 FROM Table1 _
	         WHERE (((Table1.Field1)=[" & p1 & "]));"
	         'Parameterized query
	     end if
	
	     set r1 = MyDatabase.openrecordset(SQLstring, dbOpenDynaset)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database with one table. Create one field in that table. Put a NULL
	  (empty string) in the first record of the table.
	
	2. Create two querydefs:
	
	  a. Query1 will search specifically for records that equal NULL.
	
	  b. Query2 will be the same as Query1 except that the search criteria is
	     parameterized.
	
	3. Run Query1.
	
	4. Run Query2, setting the parameter variable as NULL.
	
	Results:
	
	Query1 will have one record while Query2 will have no records.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
