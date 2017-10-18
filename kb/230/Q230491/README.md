---
layout: page
title: "Q230491: PRB: CDBVariant Contains Wrong BOOL Value with GetFieldValue"
permalink: kb/230/Q230491/
---

## Q230491: PRB: CDBVariant Contains Wrong BOOL Value with GetFieldValue

	Article: Q230491
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC600 kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the CRecordset::GetFieldValue() method that accepts a CDBVariant
	object as a parameter and the target field in the database is a bit field, the
	BOOL value (m_boolVal) is incorrect.
	
	RESOLUTION
	==========
	
	Use an explicit type other then SQL_C_BIT, such as SQL_C_UTINYINT or
	SQL_C_SLONG, as the type of variable to bind to.
	
	Please see the More Information for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following steps use the SQL Server Pubs database as an example:
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MFC Single Document Interface project with database header file
	  support.
	
	2. Create a menu item or button event handler.
	
	3. Type the following code in the handler and change the connect string to
	  reflect your SQL Server database:
	
	  	CDatabase db;
	  	db.OpenEx(_T("Driver=SQL Server;Server=(local);Database=Pubs;UID=sa;PWD=;"));
	
	  	CRecordset rs;
	  	rs.m_pDatabase = &db;
	  	rs.Open(CRecordset::forwardOnly, _T("SELECT * FROM authors"));
	
	  	CDBVariant varField;
	  	rs.GetFieldValue(_T("contract"),varField);
	  	BOOL boolValue = varField.m_boolVal;
	
	4. Observe the value of boolValue. It will be incorrect.
	
	Workaround
	----------
	
	Use SQL_C_UTINYINT or SQL_C_SLONG explicitly in the CRecordset::GetFieldValue()
	method. Replace the last two lines of the previous code block with one of the
	following:
	
	  	rs.GetFieldValue(_T("contract"),varField,SQL_C_UTINYINT);
	  	BYTE byteValue = varField.m_chVal;
	
	-or-
	
	  	rs.GetFieldValue(_T("contract"),varField,SQL_C_SLONG);
	  	BOOL boolValue = varField.m_boolVal;
	
	Additional query words: boolean odbc
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC600 kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
