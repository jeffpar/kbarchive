---
layout: page
title: "Q111605: BUG: LoadResource() GP Faults When Passed an Invalid HRSRC"
permalink: kb/111/Q111605/
---

## Q111605: BUG: LoadResource() GP Faults When Passed an Invalid HRSRC

	Article: Q111605
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbResource kbGrpDSUser kbOSWin310bug
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing an invalid handle as the HRSRC parameter for LoadResource() may result
	in a general protection (GP) fault.
	
	RESOLUTION
	==========
	
	Pass only valid handles to the LoadResource() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbResource kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
