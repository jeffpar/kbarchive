---
layout: page
title: "Q71147: PRB: SDK Sample Programs Define Delete Accelerator Incorrectly"
permalink: /kb/071/Q71147/
---

## Q71147: PRB: SDK Sample Programs Define Delete Accelerator Incorrectly

	Article: Q71147
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Software Development Kit (SDK) sample applications that define
	keyboard accelerators for the Edit menu define the Edit/Clear accelerator
	incorrectly.
	
	RESOLUTION
	==========
	
	To correct this problem, modify the RC file for each sample application to
	remove VK_SHIFT from the Edit/Clear accelerator.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
