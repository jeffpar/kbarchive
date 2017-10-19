---
layout: page
title: "Q71312: PRB: Resource Compiler Error RW1022 Caused by Temporary File"
permalink: /kb/071/Q71312/
---

## Q71312: PRB: Resource Compiler Error RW1022 Caused by Temporary File

	Article: Q71312
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the resource compiler processes a resource script, the following message is
	displayed:
	
	  RW1022: I/O error writing file.
	
	CAUSE
	=====
	
	The resource compiler creates a temporary file in the directory specified by the
	TMP MS-DOS environment variable. There may not be enough room in the temporary
	directory to extend this file.
	
	NOTE: This is just one possible cause for the error message; there are others.
	The Build Tools help file that comes with Visual C++ discusses some of them.
	
	RESOLUTION
	==========
	
	Make room on the device that holds the temporary files.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
