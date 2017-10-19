---
layout: page
title: "Q112386: BUG: GetTimerResolution Not in LibW.lib"
permalink: /kb/112/Q112386/
---

## Q112386: BUG: GetTimerResolution Not in LibW.lib

	Article: Q112386
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Windows Application Programming Interface (API)
	GetTimerResolution() function, you may get unresolved externals from the linker.
	
	CAUSE
	=====
	
	The function is in User.exe but is not referenced in the import library
	LIBW.LIB.
	
	RESOLUTION
	==========
	
	To work around the problem, import the function using the IMPORTS section of the
	DEF file as shown below:
	
	IMPORTS
	  GetTimerResolution=USER.GetTimerResolution
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Windows SDK version 3.1.
	
	Additional query words: SetTimer WM_TIMER
	
	======================================================================
	Keywords          : kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
