---
layout: page
title: "Q192518: PRB: SQL OLE DB Provider Fails When Selected in OLE DB Wizard"
permalink: /kb/192/Q192518/
---

## Q192518: PRB: SQL OLE DB Provider Fails When Selected in OLE DB Wizard

	Article: Q192518
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbOLEDB kbVC600 kbMDACNoSweep
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dialog box with the message "Could not find any table or procedure
	information" appears when the SQL OLE DB Provider is used in the OLE DB Consumer
	Wizard.
	
	CAUSE
	=====
	
	As mentioned in the Visual C++ readme file, the SQL OLE DB Provider requires
	that the new Instcat.sql file be executed in ISQL/W. This SQL script updates
	catalog-stored procedures on the SQL Server. This is a problem only on SQL
	Server 6.5 and earlier versions.
	
	RESOLUTION
	==========
	
	Start SQL Server's ISQL/W program and open the Instcat.sql file. The file is
	located in the Windows system directory (for example, :\winnt\system32). Execute
	the file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual C++ environment, create a new MFC Dialog application.
	
	2. On the Insert menu, click New ATL Object.
	
	3. Select Data Access.
	
	4. Select Consumer, and click Next.
	
	5. Click Select DataSource.
	
	6. Select "Microsoft OLE DB Provider for SQL Server."
	
	7. Type in the server name, user ID, Password, and database.
	
	8. Click OK.
	
	RESULTS: You will see the dialog box with the error message.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kberrmsg kbOLEDB kbVC600 kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
