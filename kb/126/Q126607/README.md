---
layout: page
title: "Q126607: PRB: Cannot Load MFCCLSWZ.DLL with ODBC SDK Version 2.1"
permalink: kb/126/Q126607/
---

## Q126607: PRB: Cannot Load MFCCLSWZ.DLL with ODBC SDK Version 2.1

	Article: Q126607
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Open Database Connectivity (ODBC) version 2.1 Software Development Kit
	(SDK) from the January Microsoft Developer's Network (MSDN) Level 2 CD is
	installed on a system that already has Microsoft Visual C++ version 2.1
	installed and you attempt to run Visual C++ components, it fails with the
	following message:
	
	  MFCCLSWZ.DLL This required file cannot be loaded. Please reinstall the
	  Microsoft Visual C++ development environment.
	
	CAUSE
	=====
	
	The ODBC 2.1 SDK Setup from the January MSDN Level 2 CD replaces the Visual C++
	version of the files MSVCRT20.DLL and CTL3D32.DLL with older versions. The
	problem does not occur with any other versions of the ODBC 2.1 SDK.
	
	RESOLUTION
	==========
	
	Either reinstall Visual C++ 2.1, or copy the files MSVCRT20.DLL and CTL3D32.DLLl
	from the Visual C++ CD to the ODBCSDK\REDIST32 and WINNT\SYSTEM32 directories.
	
	Additional query words: Windows NT setup install
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC210
	Version           : WINDOWS:2.1
	Issue type        : kbprb
	
	=============================================================================
	
