---
layout: page
title: "Q76247: HOWTO: Use TOOLHELP to Determine Free System Resources"
permalink: /kb/076/Q76247/
---

## Q76247: HOWTO: Use TOOLHELP to Determine Free System Resources

	Article: Q76247
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows version 3.1, a Windows-based application can obtain the amount of
	free system resources in two ways:
	
	1. By calling the GetFreeSystemResources() function, which is exported by
	  USER.EXE
	
	2. By calling the SystemHeapInfo() function, which is exported by the
	  TOOLHELP.DLL dynamic-link library
	
	Under Windows 3.0, the GetFreeSystemResources() function is not available. If
	TOOLHELP.DLL is present, a Windows 3.0 application can use SystemHeapInfo(). If
	TOOLHELP.DLL is not present, there is no supported method for a Windows 3.0
	application to obtain the amount of free system resources.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
