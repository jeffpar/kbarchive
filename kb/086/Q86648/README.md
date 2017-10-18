---
layout: page
title: "Q86648: No MS-DOS Extended Error Info for Windows File Functions"
permalink: kb/086/Q86648/
---

## Q86648: No MS-DOS Extended Error Info for Windows File Functions

	Article: Q86648
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
	
	When an application uses one of the Microsoft Windows file functions (_lclose,
	_lcreat, _llseek, _lopen, _lread, or _lwrite) and an error occurs, the function
	returns the HFILE_ERROR error code. No additional information is available
	concerning the cause of the error. Specifically, no MS-DOS error return value is
	available for these functions.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
