---
layout: page
title: "Q118330: INF: Driver Manager and Cursor Library Compatibility"
permalink: kb/118/Q118330/
---

## Q118330: INF: Driver Manager and Cursor Library Compatibility

	Article: Q118330
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.05,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 1.05, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VersionInfo resource for the Driver Manager and Cursor Library contains,
	among other properties, a property called CursorLevel. This article explains the
	purpose of CursorLevel.
	
	MORE INFORMATION
	================
	
	The VersionInfo resource for ODBC.DLL (ODBC Driver Manager) and ODBCCURS.DLL
	(ODBC Cursor Library) can be viewed using File Manager by selecting the File
	Menu and choosing Properties.
	
	The property called CursorLevel is a mechanism to guarantee that the right
	versions of the Driver Manager and Cursor Library are used together. The
	CursorLevel is not related to any of the ODBC API Levels.
	
	If the CursorLevel of the ODBC Driver Manager is "d" and a Cursor Library with a
	CursorLevel of "g" is used, the ODBC Driver Manager will not load the Cursor
	Library. The message from the cursor library is:
	
	  SQLState 01000: Cursor library not used. Version mismatch with Driver Manager
	
	The following are the CurorLevels for different versions of the ODBC Driver
	Manager and Cursor Library that have been shipped:
	
	  CursorLevel          DLLs shipping with Product
	  -----------          --------------------------
	       D               Microsoft Visual C++ 1.5
	       E               ODBC SDK 2.0 Beta
	       G               ODBC 1.05 Release
	       G               ODBC SDK 2.0 Release
	
	Additional query words: compatibility
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:1.05,2.0
	
	=============================================================================
	
