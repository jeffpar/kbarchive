---
layout: page
title: "Q155604: INF: Unable to Load ODBCCP32.DLL in Custom ODBC Setup Programs"
permalink: kb/155/Q155604/
---

## Q155604: INF: Unable to Load ODBCCP32.DLL in Custom ODBC Setup Programs

	Article: Q155604
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	2.50
	WINDOWS
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Driver Setup Kit sample program from ODBC SDK 2.1 with
	ODBCCP32.DLL version 2.5, the following error message appears:
	
	  Initialization of the dynamic link library ODBCCP32.DLL failed
	
	CAUSE
	=====
	
	ODBCCP32.DLL version 2.5 requires ODBCINT.DLL to load. ODBCINT.DLL is a new
	language resource library introduced by ODBC SDK 2.5. All code that needs to be
	localized for all ODBC core components have been centralized into this library.
	This file includes all error strings and all dialog boxes.
	
	The Driver Setup Kit sample program from ODBC SDK 2.1 is based on the old version
	installer DLL, which does not use ODBCINT.DLL. When you install the Drivers from
	Desktop Driver Pack 3.0 (which uses the ODBC 2.5 core components), modify the
	SETUP.LST file as described below.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Include ODBCINT.DL_ or ODBCINT.DLL in your installation disks.
	
	2. Add the following in the [Files] section of SETUP.LST:
	
	  ODBCINT.DL_  =  ODBCINT.DLL
	
	  -or-
	
	  ODBCINT.DLL  = ODBCINT.DLL
	
	  NOTE: If the file is in compressed format, add the first entry in the [Files]
	  section of SETUP.LST. Otherwise, add the second entry.
	
	This enables the Setup program to load ODBCINT.DLL, which is required for the
	initialization of ODBCCP32.DLL.
	
	Additional query words: ODBC SDK 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC250
	Version           : WINDOWS:2.5
	
	=============================================================================
	
