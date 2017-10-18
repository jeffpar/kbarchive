---
layout: page
title: "Q181434: PRB: SQL_DRIVER_NOPROMPT Error in IIS 4.0 ISAPI Application"
permalink: kb/181/Q181434/
---

## Q181434: PRB: SQL_DRIVER_NOPROMPT Error in IIS 4.0 ISAPI Application

	Article: Q181434
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ISAPI extension running under IIS 4.0 gives the following error when
	CDatabase::Open is called to open a database connection in an ODBC data source:
	
	  Only SQL_DRIVER_NOPROMPT is allowed when connection pooling is enabled
	
	
	RESOLUTION
	==========
	
	Use the CDatabase::OpenEx function and specify the noOdbcDialog option to open
	your database connections.
	
	     CDatabase db;
	     db.OpenEx(_T("DSN=myDS;UID=myID;PWD=myPWD;"), CDatabase::noOdbcDialog);
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The SQL_DRIVER_NOPROMPT flag instructs ODBC to connect with the information
	passed in the connect string and to avoid displaying a login dialog box at run
	time.
	
	CDatabase::OpenEx() with the noOdbcDialog option calls SQLDriverConnect with the
	SQL_DRIVER_NOPROMPT flag. Using the CDatabase::Open function causes MFC to use
	SQL_DRIVER_COMPLETE instead of SQL_DRIVER_NOPROMPT.
	
	NOTE: Make sure you are using a "System DSN" and not a "User DSN" with an ISAPI
	application. The process for creating a System DSN is identical to that for
	creating a regular data source. Open the 32-bit ODBC Administrator (in the
	Control Panel) and click the System DSN tab, then click Add to create a System
	DataSources.
	
	REFERENCES
	==========
	
	Refer to the Visual C++ online help for a complete description of the OpenEx
	function.
	
	For additional information and tips on using ISAPI and MFC ODBC, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q160906 HOWTO: Use MFC 4.2 ODBC Classes in an ISAPI DLL
	
	Additional query words: kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
