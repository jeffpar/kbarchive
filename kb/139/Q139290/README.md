---
layout: page
title: "Q139290: PRB: 32-Bit Cursor Library Creates Temp Files in Current Dir"
permalink: kb/139/Q139290/
---

## Q139290: PRB: 32-Bit Cursor Library Creates Temp Files in Current Dir

	Article: Q139290
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 32-bit ODBC Cursor library (ODBCCR32.DLL) creates temporary files in the
	current directory from which the application is launched. The 32-bit cursor
	library creates temporary files of the form CTTXXX.TMP in the current directory
	of the application. As a result, applications using the cursor library may
	encounter errors when they switch the current directory in their application
	while cursors are still active.
	
	For example, while closing the application you might see the error message:
	
	  [Microsoft ][ODBC Cursor library] Unable to close file buffer.
	
	32-bit Microsoft Foundation Class (MFC) applications that use snapshots fall into
	the above class of applications.
	
	WORKAROUND
	==========
	
	1. If feasible, close all open cursors and switch the current directory.
	
	2. If you are using File Dialogs, monitor the current directory using the Win32
	  API call GetCurrentDirectory() and reset the path using
	  SetCurrentDirectory().
	
	  For example:
	
	     main()
	     {
	      ..
	     GetCurrentDirectory(...);
	     ...
	       /* open cursors  */ 
	     ...
	       /* open file dialog */ 
	     SetCurrentDirectory(..);
	       /* close the cursors */ 
	     ..
	     }
	
	Additional query words: 2.50.3006 odbc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
