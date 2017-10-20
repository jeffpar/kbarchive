---
layout: page
title: "Q149558: HOWTO: Create an .MDB File for Microsoft Access Databases"
permalink: /kb/149/Q149558/
---

## Q149558: HOWTO: Create an .MDB File for Microsoft Access Databases

{% raw %}

	Article: Q149558
	Product(s): Microsoft C Compiler
	Version(s): 3.0,3.5,3.51,3.6
	Operating System(s): 
	Keyword(s): kbprogramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, versions 3.0, 3.5, 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to the release of the Microsoft ODBC Desktop Driver Pack version 2.0,
	there was no way to programmatically create a Microsoft Access database (an .mdb
	file). For more details about this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q118609 HOWTO: Create an .MDB File for Microsoft Access Databases
	
	With the release of the version 2.0 driver pack and higher, MFC ODBC applications
	can now create .mdb files. Additionally, with the incorporation of DAO into
	Visual C++ 4.x or higher, you have another way to create Microsoft Access
	databases programmatically.
	
	MORE INFORMATION
	================
	
	Using the Microsoft Access ODBC Driver to Create .MDB Files
	-----------------------------------------------------------
	
	Kyle Geiger's book "Inside ODBC" provides a sample program, ODBCACC, that nicely
	demonstrates how to use the ODBC installer DLL API function SQLConfigDataSource
	to create an .mdb file. The syntax of the function call is:
	
	     BOOL SQLConfigDataSource(hwndParent, fRequest, lpszDriver,
	                              lpszAttributes)
	
	Where:
	
	  hwndParent is either NULL if no dialogs are to be displayed or a valid hwnd
	  to act as parent to any driver generated dialogs.
	
	  fRequest is ODBC_ADD_DSN to specify creation of the .mdb file.
	
	  lpszDriver is Microsoft Access Driver (*.mdb).
	
	  lpszAttributes is "CREATE_DB=<path><filename>.mdb <sort
	  order>\0" where the <path><filename> combination identifies
	  where the file should be created and <sort order> is language sorting
	  order (for example, General). <path> must be specified even if the .mdb
	  is to be created in the current working directory. Use standard relative path
	  syntax.
	
	NOTE: Unlike most other ODBC API functions, SQLConfigDataSource returns a boolean
	value. This return value is TRUE if the .mdb was created, FALSE if creation
	failed.
	
	To use the installer DLL functions, you must:
	
	- Use #include <ODBCINST.H>.
	
	- Link with Odbcinst.lib for 16-bit applications.
	
	- Link with Odbccp32.lib for 32-bit applications.
	
	NOTE: The functionality of SQLConfigDataSource is available through the ODBC
	Administrator. If you choose to add a new Microsoft Access datasource, the
	driver dialog includes a Create button that you can use to create an .mdb file
	interactively.
	
	Using DAO to Create .MDB Files
	------------------------------
	
	DAO allows applications developed with Visual C++ 4.x to interface with the
	Microsoft Jet database engine directly. This allows more efficient manipulation
	of Microsoft Access objects than can be achieved through ODBC, including the
	creation of .mdb files. For a sample program that demonstrates how to create
	databases and other objects, search the Microsoft Knowledge Base for the
	DAOTABLE sample.
	
	Sample Code
	-----------
	
	Use of SQLConfigDataSource ODBC installer DLL API function:
	
	  BOOL fCreated;
	  fCreated = SQLConfigDataSource(NULL,
	                          ODBC_ADD_DSN,
	                         "Microsoft Access Driver (*.mdb)",
	                         "CREATE_DB=.\\ATest.mdb General\0" );
	
	This will create ATest.mdb in the application's working directory using general
	sorting.
	
	REFERENCES
	==========
	
	"Inside ODBC" by Kyle Geiger, Microsoft Press ISBN 1-55615-815-7.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base in the ODBC collection:
	
	  Q126606 INFO: Accessing CREATE_DB, REPAIR_DB, and COMPACT_DB
	
	Additional query words: data base creation creating kbvc151 kbvc152 kbvc200 kbvc210 kbvc220 kbvc400 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbprogramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch kbSDKDAO300 kbSDKDAO350 kbSDKDAO360 kbSDKDAO351
	Version           : :3.0,3.5,3.51,3.6
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
