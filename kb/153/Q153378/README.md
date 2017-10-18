---
layout: page
title: "Q153378: FIX: Syntax Error in MFC ODBC Recordset with SQL Server 6.5"
permalink: kb/153/Q153378/
---

## Q153378: FIX: Syntax Error in MFC ODBC Recordset with SQL Server 6.5

	Article: Q153378
	Product(s): Microsoft C Compiler
	Version(s): 1.51,1.52,1.52b,1.52c,2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC400bug kbVC420fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport k
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.51, 1.52, 1.52b, 1.52c, 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a dynaset or dynamic recordset that contains an image field and
	that connects to a SQL Server datasource by way of the 2.65.0201 driver that
	ships with SQL Server 6.5, you may observe an exception thrown indicating:
	
	  
	
	  Line 1: Incorrect syntax near 'OF'.
	  State:37000,Native:170,Origin:[Microsoft][ODBC SQL Server Driver]
	  [SQL Server]
	
	CAUSE
	=====
	
	The MFC database classes are designed to adhere to the ODBC specification. The
	grammar for the specification contains a error that indicates that all compliant
	drivers must support the appearance of 'FOR UPDATE OF' in SELECT statements. In
	reality, the specification grammar (available in the ODBC Programmer's Reference
	in Visual C++ Books Online) should make support of the 'OF' keyword optional:
	
	     select-for-update-statement ::=
	          SELECT [ALL | DISTINCT] select-list
	          FROM table-reference-list
	          [WHERE search-condition]
	          FOR UPDATE [OF column-name [, column-name]...]
	
	The MFC database classes, per the error in the specification, use the 'FOR UPDATE
	OF' syntax. Generally, this does not cause a problem for the following reasons:
	
	- If you are using snapshots, the cursor library will intercept the SELECT
	  statement and remove the 'FOR UPDATE OF' before forwarding the SQL statement
	  on to the driver.
	
	- If you are using dynasets, the MFC database classes will usually use
	  SQLSetPos instead of SQL UPDATE statements in which case the 'FOR UPDATE OF'
	  is not appended to the initial SELECT statement.
	
	- If you are using dynasets that contain long binary fields and the driver that
	  is in use does not support calling SQLGetData for bound columns, SQL UPDATE
	  statements are used instead of SQLSetPos. However, a special function that
	  checks if the driver is the SQL Server driver and if the version is 2.50 or
	  earlier prevents the use of the 'FOR UPDATE OF' syntax. This check is
	  performed to avoid a bug in earlier versions of the driver. It is implemented
	  in the function:
	
	        inCRecordset::ValidateSelectForUpdateSupport().
	
	The 2.65.0210 driver does not contain the bug in the earlier drivers that
	CRecordset::ValidateSelectForUpdateSupport() checks for, so 'FOR UPDATE OF' is
	used for dynaset and dynamic recordsets that contain long binary fields and the
	exception is thrown because the 'OF' is not supported grammar.
	
	RESOLUTION
	==========
	
	32 bit
	------
	
	While it might seem logical to simply override the function
	CRecordset::ValidateSelectForUpdateSupport() so that it informs MFC that the
	2.65.0210 driver does not support FOR UPDATE OF, this is not easily done because
	that function is not virtual.
	
	Instead, you can override CRecordset::OnSetOptions() and, following the call to
	the base class, reset the value of m_dwDriverPositionedStatements to clear the
	bit that corresponds to SQL_PS_SELECT_FOR_UPDATE:
	
	     void CDerivedSet::OnSetOptions(HSTMT hstmt)
	     {
	         CRecordset::OnSetOptions(hstmt);
	         m_dwDriverPositionedStatements &= ~SQL_PS_SELECT_FOR_UPDATE;
	     }
	
	This causes MFC to not append the FOR UPDATE OF, which avoids the syntax error
	without reducing the functionality of the recordset.
	
	16 bit
	------
	
	If you are using dynasets by way of the DYNSET sample code in 16-bit Visual C,
	your application actually contains the code that appends the FOR UPDATE OF, so
	you can simply modify the Dynacore.cpp file to remove the OF from the
	szForUpdateOf string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.2.
	
	REFERENCES
	==========
	
	ODBC Programmer's Reference, Appendix C: SQL Grammar
	
	Additional query words: BLOB CLongBinary
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC400bug kbVC420fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC151 kbVC200 kbVC210 kbVC152 kbVC152a
	Version           : :1.51,1.52,1.52b,1.52c,2.0,2.1,2.2,4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
