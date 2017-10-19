---
layout: page
title: "Q86409: BUG: LIBENTRY.ASM Missing Include File Error"
permalink: /kb/086/Q86409/
---

## Q86409: BUG: LIBENTRY.ASM Missing Include File Error

	Article: Q86409
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to assemble the LIBENTRY.ASM file distributed with version 3.1 of the
	Microsoft Windows SDK fails with the following message:
	
	  Include file not found: CONVDLL.INC.
	
	CAUSE
	=====
	
	CONVDLL.INC is an assembly-language include file required to support the
	Microsoft Windows Libraries for OS/2 (WLO). Because CONVDLL.INC is not required
	to create Windows dynamic-link libraries (DLLs), it is not included in the
	Windows SDK.
	
	RESOLUTION
	==========
	
	Modify the LIBENTRY.ASM file to remove or comment out the following line from
	the file:
	
	  INCLUDE CONVDLL.INC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the LIBENTRY.ASM file included
	in version 3.1 of the Microsoft Windows SDK. We will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
