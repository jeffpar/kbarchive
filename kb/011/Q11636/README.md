---
layout: page
title: "Q11636: INFO: Windows Resource Numbering Starts at 1"
permalink: /kb/011/Q11636/
---

## Q11636: INFO: Windows Resource Numbering Starts at 1

	Article: Q11636
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbResource kbSDKPlatform
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Numbered resources in Windows must start at one, not zero. Beginning with the
	MS-DOS version 4.0 executable format, executable segments are numbered from one,
	and resources are implemented as independent segments. Therefore, resources are
	numbered from one.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbResource kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
