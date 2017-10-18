---
layout: page
title: "Q136798: Versions of CTL3D32 Included with Visual C++ Version 2.x"
permalink: kb/136/Q136798/
---

## Q136798: Versions of CTL3D32 Included with Visual C++ Version 2.x

	Article: Q136798
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The distribution CD-ROM disc for Microsoft Visual C++ version 2.x includes
	several versions of the 32-bit Control 3-D DLL. You can find a general
	description of all re-distributable files in Redistrb.wri in the Redist
	directory on the CD-ROM disc:
	
	  \Msvc20\Redist or \Win32s\Redist
	
	This article includes some additional details on the various versions of the
	32-bit Control 3-D DLL.
	
	MORE INFORMATION
	================
	
	Following is a description of each of the 32-bit Control 3-D DLLs that can be
	found on the CD-ROM disc for Visual C++ versions 2.0, 2.1, and 2.2. Note that
	some of these DLLs are not found on all versions of Visual C++, but all of the
	following descriptions are correct:
	
	- \Msvc20\Redist\Ctl3d32.dll is the UNICODE version of Ctl3d32.dll to be
	  installed in Windows NT for your application. In Visual C++ versions 2.0 and
	  2.1, this DLL is also needed by ODBC.
	
	- \Msvc20\Redist\Ctl3d95.dll is the ANSI version of Ctl3d32.dll. This DLL is
	  needed by the ODBC installer DLL. When the ODBC installer installs ODBC under
	  Windows 95, it will rename this DLL to Ctl3d32.dll.
	
	- \Msvc20\Redist\Ctl3dnt.dll is the UNICODE version of Ctl3d32.dll. This DLL is
	  needed by the ODBC installer DLL. When the ODBC installer installs ODBC under
	  Windows NT, it will rename this DLL to Ctl3d32.dll.
	
	- \Msvc20\Redist\Ansi\Ctl3d32.dll is the ANSI version of Ctl3d32.dll to be
	  installed under Windows 95 for your application.
	
	- \WIN32S\REDIST\Ctl3d32.dll is the ANSI version of Ctl3d32.dll installed with
	  Win32s installations.
	
	REFERENCES
	==========
	
	The following files on the CD-ROM disc contain a description of the
	re-distributable DLLs:
	
	  \Msvc20\Redist\Redistrb.wri
	
	  \Win32s\Redist\Redistrb.wri
	
	Additional query words: kbinf 2.00 2.10 2.20 3.00 3.10 3.20 mfc odbcinst 3D CTL3D
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.00 2.10 2.20
	
	=============================================================================
	
