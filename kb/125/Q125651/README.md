---
layout: page
title: "Q125651: PRB: Update or Delete Record Gives Error: Query is too complex"
permalink: kb/125/Q125651/
---

## Q125651: PRB: Update or Delete Record Gives Error: Query is too complex

	Article: Q125651
	Product(s): Microsoft C Compiler
	Version(s): 1.50 1.51 1.52 | 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kb
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to update or delete a record of a CRecordset object, the following
	message occurs:
	
	- With 16-bit MFC database classes and 16-bit ODBC desktop drivers:
	
	  
	
	  DBMS: ACCESS, Version: 2.0
	  Query is too complex.
	  State:S1000[Microsoft][ODBC Microsoft Access 2.0 Driver]
	
	- With 32-bit MFC database classes and 32-bit ODBC desktop drivers:
	
	  
	
	  DBMS: ACCESS
	  , Version: 2.0
	  Query is too complex.
	  State:S1000,Native:-3071,Origin:[Microsoft]
	     [ODBC Microsoft Access 2.0 Driver]
	
	The examples above show "Microsoft Access 2.0" but could be any of the Microsoft
	desktop drivers.
	
	CAUSE
	=====
	
	The error occurs when the cursor library is loaded and the recordset retrieved
	by the CRecordset is opened as a snapshot object that contains more than 40
	bound columns.
	
	By default, the cursor library is loaded when a CRecordset is opened. MFC
	snapshots perform positioned updates and deletes by using the ODBC SQL WHERE
	CURRENT OF syntax. The cursor library changes the WHERE CURRENT OF clause to a
	full WHERE clause using all the columns in the recordset.
	
	For example, the MFC Database classes might create the following SQL statement
	when updating a record:
	
	     Update table1
	     SET column1=?
	     WHERE CURRENT OF XXXXX
	
	The cursor library knows which record the application is currently positioned at
	and converts the WHERE CURRENT OF clause into a WHERE clause that will update
	the current record only. For example, assume the recordset has three columns.
	The cursor library changes the SQL statement to:
	
	     Update table1
	     SET column1=?
	     WHERE column1=<current value> AND column2=<current value> AND
	       column3 =<current value>
	
	Here <current value> represents the value of that column before the update
	is performed.
	
	You can see that more than 40 columns in a CRecordset will cause more than 40 AND
	predicates in the WHERE clause. The helpfile for the ODBC desktop drivers
	(ODBCJET.HLP) states in the SQL limitations section that no more than 40 AND
	predicates are supported. Thus, the SQL statement is too complex.
	
	NOTE: Long binary columns (those using RFX_LongBinary) are not bound and do not
	count against the 40-column limit. However, an MFC ODBC application that
	references the RFX_LongBinary function may encounter this error when the
	recordset is opened. This is because the cursor library precedes calls to
	SQLGetData with the execution of a SELECT statement with a WHERE clause as
	described above.
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	- Reduce the number of columns in your recordset. If you are using the
	  CRecordset object that AppWizard/ClassWizard created for you, you can reduce
	  the number of columns returned in the recordset by removing record field
	  exchange(RFX) functions from the CRecordset's DoFieldExchange() function.
	
	- Use dynasets. See the online books for more information about the differences
	  between snapshots and dynasets. Special code must be acquired to use dynasets
	  with the 16-bit MFC Database classes. CRecordsets which use a dynaset use the
	  SQLSetPos() ODBC 2.0 functionality to perform positioned updates and deletes.
	  This means the MFC database classes do not need to construct an SQL statement
	  to send to the ODBC driver. A call to the SQLSetPos() function of the driver
	  is all that is necessary to perform the update or delete.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Appendix G of the ODBC 2.0 Programmer's Reference contains information about the
	cursor library. The ODBC Programmer's Reference is available in the onine books
	for Visual C++ version 2.0 or greater.
	
	MFC TechNote #45 contains additional information about MFC support for long
	binary data and the use of RFX_LongBinary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.50 1.51 1.52 | 2.00 2.10 4.00
	Issue type        : kbprb
	
	=============================================================================
	
