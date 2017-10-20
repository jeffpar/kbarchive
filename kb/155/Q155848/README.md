---
layout: page
title: "Q155848: PRB: ODBC Error When Using CRecordset Without Deriving From It"
permalink: /kb/155/Q155848/
---

## Q155848: PRB: ODBC Error When Using CRecordset Without Deriving From It

{% raw %}

	Article: Q155848
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbusage kbdocfix kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbD
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Visual C++ 4.2 and later, you can use the CRecordset class without deriving
	from it, allowing you to open a read-only recordset on any data source. This may
	be helpful if you are using CRecordset::GetFieldValue(), for example. However,
	when calling Open() for the CRecordset object, you may see a message box with
	the following message in it:
	
	  No columns were bound prior to calling SQLExtendedFetch
	
	CAUSE
	=====
	
	The CDatabase object used by the CRecordset object loaded the ODBC cursor
	library. The cursor library requires that there be at least one bound column for
	a recordset. The Visual C++ documentation doesn't make this requirement clear.
	
	RESOLUTION
	==========
	
	Do not load the cursor library by specifying FALSE for the last argument of
	CDatabase::Open(). For example:
	
	      CDatabase db;
	      db.Open("MyDataSource", FALSE, FALSE, "ODBC;", FALSE);
	      CRecordset rs( &db );
	      rs.Open(...);
	      ...
	
	If your driver does not support dynasets, then the cursor library is required and
	you will not be able to use the CRecordset class without deriving from it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Visual C++ 4.2
	documentation. The Visual C++ 5.0 documentation has been changed to reflect this
	information and states:
	
	  Note if you declare a recordset object without deriving from CRecordset, do
	  not have the ODBC Cursor Library loaded. The cursor library requires that the
	  recordset have at least one bound column; however, when you use CRecordset
	  directly, none of the columns are bound. The member functions
	  CDatabase::OpenEx and CDatabase::Open control whether the cursor library will
	  be loaded."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbusage kbdocfix kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
