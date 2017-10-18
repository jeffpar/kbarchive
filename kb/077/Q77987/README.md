---
layout: page
title: "Q77987: Debugging GP Faults with WDEB386"
permalink: kb/077/Q77987/
---

## Q77987: Debugging GP Faults with WDEB386

	Article: Q77987
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, trying to trap GP (general protection) faults with
	WDEB386 may produce unexpected results.
	
	In general, if the processor generates a GP fault while a Windows-based
	application is running, the GP-fault handler will automatically provide the
	mechanism to stop at the offending instruction in WDEB386. However, unexpected
	results (breaking at unusual locations, infinite loops, debugger crashes) may
	occur under WDEB386 if one of the following conditions is true:
	
	- The GP fault occurs somewhere other than in a Windows-based application or
	  dynamic-link library (DLL).
	
	- The WIN.INI file [kernel] section switch DisableGPTrapping is set to 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
