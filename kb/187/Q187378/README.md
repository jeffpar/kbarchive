---
layout: page
title: "Q187378: BUG: DoBulkFieldExchange Not Called for MFC Recordset Class"
permalink: kb/187/Q187378/
---

## Q187378: BUG: DoBulkFieldExchange Not Called for MFC Recordset Class

	Article: Q187378
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An invalid number of parameters or an assertion can occur when you attempt to
	open a CRecordset derived class.
	
	CAUSE
	=====
	
	The MFC Recordset class binds parameters to member variables by calling the
	DoFieldExchange() member function. When you use bulk row fetching, the binding
	is done by calling the DoBulkFieldExchange() member function. However when you
	bind parameters, MFC calls a common function, BindParams, to perform the binding
	in either case. There is currently a bug with BindParams in that it does not
	check to see if bulk row fetching is being used and does not implement
	DoBulkFieldExchange() for binding parameters.
	
	RESOLUTION
	==========
	
	The best workaround for this problem is to have DoFieldExchange() call
	DoBulkFieldExchange() explicitly, as in the following example:
	
	     void CBulkRecordSetSample::DoFieldExchange(CFieldExchange* pFX)
	     {
	       DoBulkFieldExchange(pFX);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	Visual C++ Programmer's Guide: Adding Program Functionality; Details; Database
	Topics (ODBC); Recordset (ODBC); Recordset: Fetching Records in Bulk (ODBC)
	
	Additional query words: kbMFC kbDatabase kbODBC kbVC500bug kbDSupport kbdse
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
