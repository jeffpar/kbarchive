---
layout: page
title: "Q236828: PRB: IE_UNEXPECTED Returned from IRowsetChange::DeleteRows"
permalink: /kb/236/Q236828/
---

## Q236828: PRB: IE_UNEXPECTED Returned from IRowsetChange::DeleteRows

	Article: Q236828
	Product(s): Microsoft C Compiler
	Version(s): 6.0,7.0,7.01
	Operating System(s): 
	Keyword(s): kbATL kbDatabase kbDTL kbOLEDB kbProvider kbVC600 kbATL300 kbSQLServ700 kbGrpDSVCDB kbG
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for SQL Server, versions 7.0, 7.01 
	- Microsoft OLE DB, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft SQL Server OLE DB provider (SQLOLEDB), the following
	error is returned from IRowsetChange::DeleteRows():
	
	  HRESULT = E_UNEXPECTED Description = "Catastrophic error"
	
	CAUSE
	=====
	
	A pointer to an ISequentialStream interface has been retrieved on the row and
	has not been released.
	
	RESOLUTION
	==========
	
	Release all ISequentialStream pointers on the row before deleting the row with
	IRowsetChange::DeleteRows.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce this Behavior
	--------------------------------
	
	1. Create a table in SQL Server with an image field.
	
	2. Use the Active Template Library (ATL) OLE DB Consumer Wizard to create a
	  CCommand class that will be used to open up a rowset on the table. The wizard
	  will generate code similar to the following in the accessor class:
	
	  	BLOB_ENTRY(2, IID_ISequentialStream, STGM_READ, m_field2)
	
	3. Using the new CCommand derived class, add the following:
	
	     HRESULT hr;
	     CMyCommand rs;
	     rs.Open();
	     rs.MoveNext();<BR/>
	  // rs.m_field2->Release(); //un-comment this line to fix the error 
	     hr = rs.Delete();
	
	  You will notice that E_UNEXPECTED is returned from the Delete() call.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbDatabase kbDTL kbOLEDB kbProvider kbVC600 kbATL300 kbSQLServ700 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbSQLServSearch kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : :6.0,7.0,7.01
	Issue type        : kbprb
	
	=============================================================================
	
