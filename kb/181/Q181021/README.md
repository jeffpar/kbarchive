---
layout: page
title: "Q181021: RRAS ErrMsg: Setup Failed to Copy Oemnsvra.inf to Your..."
permalink: /kb/181/Q181021/
---

## Q181021: RRAS ErrMsg: Setup Failed to Copy Oemnsvra.inf to Your...

	Article: Q181021
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to reinstall Routing and Remote Access Service (RRAS) to
	upgrade or repair your existing installation, you may receive the following
	error message:
	
	  Routing and Remote Access Service
	  Setup failed to copy OEMNSVRA.INF to your system32 directory. Make sure
	  this file is present in the directory you copied Routing and Remote
	  Access Service files to and the version of OEMNSVRA.INF in your system32
	  directory is not a read only file.
	
	CAUSE
	=====
	
	The source file location that you specified contains a trailing backslash (\).
	For example:
	
	  "C:\Program Files\Routing\Mprsetup.exe" "C:\Program Files\Routing\"
	
	NOTE: The last backslash (\) may cause the error.
	
	
	
	RESOLUTION
	==========
	
	To resolve this issue, when you are prompted for the source location of the RRAS
	files, do not specify a trailing backslash as follows:
	
	  "C:\Program Files\Routing\Mprsetup.exe" "C:\Program Files\Routing"
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
