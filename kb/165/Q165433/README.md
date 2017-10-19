---
layout: page
title: "Q165433: FIX: Query Designer Not Inserting Record if Field Name Has Dash"
permalink: /kb/165/Q165433/
---

## Q165433: FIX: Query Designer Not Inserting Record if Field Name Has Dash

	Article: Q165433
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add a row to an SQL Server table using Query Designer you
	receive the following error if one of the table's field names contains a "-":
	
	  ODBC error: 37000 [Microsoft][SQL Server Driver]Line2: Incorrect syntax near
	  '-'
	
	CAUSE
	=====
	
	The data tool creates an SQL INSERT statement that doesn't put quotes around
	field names. The generated INSERT statement would look like:
	
	     INSERT INTO "x" (id, e-mail)
	     VALUES (1, 'name')
	
	If data tools generated an INSERT statement that used double quotes around the
	field name, then the INSERT would work. The following syntax would work:
	
	     INSERT INTO "x" (id, "e-mail")
	     VALUES (1, 'name')
	
	You can verify this by using the SQL Trace utility that ships with SQL Server
	6.5. You can use MS Query to test both INSERT statements.
	
	RESOLUTION
	==========
	
	You can work around this problem in the following ways:
	
	- Rename the field so that it doesn't contain a hyphen.
	
	  -or-
	
	- Create the SQL INSERT statement manually. Click the SQL button on the Query
	  toolbar after you open the table. Type and execute the correct INSERT
	  statement. You need to retype the original SELECT query to see the updated
	  contents of the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database project that has an SQL Server data source.
	
	2. Create a table with a field that has a dash in it. For example, use the
	  following script:
	
	     create table employee
	     ( id              integer,
	       "e-mail"   varchar(10) )
	
	        // Note the double quotes to avoid the error with the dash.
	
	3. In the data view of the project, open the table.
	
	4. Try to insert a record, that is (1, name), and the error message appears.
	
	Additional query words: kbVC500bug kbVC600fix
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
