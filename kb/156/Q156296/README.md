---
layout: page
title: "Q156296: PRB: CLongBinary Edits Fail with SQL Server Snapshot"
permalink: kb/156/Q156296/
---

## Q156296: PRB: CLongBinary Edits Fail with SQL Server Snapshot

	Article: Q156296
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling CRecordset::Edit() followed by CRecordset::Update() to update an
	image field in a snapshot recordset, you may receive the following errors:
	
	  Incorrect syntax near the keyword 'UPDATE'.
	  State:37000,Native:156,Origin:[Microsoft][ODBC SQL Server Driver] [SQL
	  Server]
	
	  Line 1: Incorrect syntax near '='.
	  State:37000,Native:170,Origin:[Microsoft][ODBC SQL Server Driver] [SQL Server]
	
	CAUSE
	=====
	
	There is a bug in the Microsoft SQL Server ODBC driver version 2.65.0201, which
	ships with Visual C++ version 4.2.
	
	RESOLUTION
	==========
	
	Upgrade your SQL Server ODBC driver to version 2.65.0213, which comes with
	Microsoft Visual C++, Enterprise Edition, version 4.2 or with the Service Pack 1
	for Microsoft SQL Server version 6.5.
	
	MORE INFORMATION
	================
	
	This problem occurs only when the cursor library is loaded and the recordset is
	opened as a snapshot. Dynasets without the cursor library do not display this
	problem.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152709 FIX: Update of BLOB Data w/SQL Server 2.65.0201 Driver Stops
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
