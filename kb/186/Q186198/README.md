---
layout: page
title: "Q186198: PRB: ClassWizard Binds Fields in Incorrect Order Causing Errors"
permalink: kb/186/Q186198/
---

## Q186198: PRB: ClassWizard Binds Fields in Incorrect Order Causing Errors

	Article: Q186198
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0, 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbDatabase kbMFC kbODBC kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AppWizard to create a database application that uses the
	CRecordset class, fields are listed in the DoFieldExchange function in table
	order. However, if you use the ClassWizard to bind columns to variables, the
	fields are listed in alphabetical order. The order in which the fields are
	listed presents no problem as long as the default SQL statement provided by the
	wizard is used.
	
	The default SQL statement is the table name in square brackets and is located
	inside the GetDefaultSQL function. Using a statement such as "Select * From
	Tablename" can result in errors when the fields are out of order. The errors can
	be different, depending on the data types represented by the fields and the
	variables they are bound to.
	
	Some possible error messages you might receive because the fields in
	DoFieldExchange are out of order are:
	
	- Invalid Character Value for Cast Specification
	
	- Restricted Datatype Attribute Violation
	
	- Error in Assignment on Column Number [x]
	
	- Error Retrieving Record
	
	There may also be other errors depending on the data types involved.
	
	RESOLUTION
	==========
	
	If you need to supply a SQL Select statement make sure the items in the
	DoFieldExchange function are in the same order as the fields in the select
	statement or in table order.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a single document, MFC AppWizard (exe) project. In Step 2 of the
	  wizard, choose Database either with or without file support and click
	  DataSource.
	
	2. In the Database Options dialog box, choose a convenient ODBC Datasource.
	
	3. When the AppWizard is finished, look at the DoFieldExchange function in the
	  class derived from CRecordset. Notice that the order of the fields is the
	  same as the table order.
	
	4. Choose ClassWizard from the View menu to create a new Class derived from
	  CRecordset.
	
	5. In the Database Options dialog box, clear Bind all columns. Use the same ODBC
	  Datasource as you did in step 2.
	
	6. In the Member Variables tab of ClassWizard, click Bind all.
	
	7. Look at the DoFieldExchange function for the newly created class. Notice that
	  the fields are in alphabetical order.
	
	Depending on the field types in the table and the SQL Statement used, this may
	cause errors as listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbDatabase kbMFC kbODBC kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : WINNT:5.0, 6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
