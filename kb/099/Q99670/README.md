---
layout: page
title: "Q99670: BUG: RC /fe Switch Does Not Work"
permalink: /kb/099/Q99670/
---

## Q99670: BUG: RC /fe Switch Does Not Work

	Article: Q99670
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying the /fe filename does not create a new executable file with the
	specified filename. The Resource Compiler (RC) doesn't return an error message
	indicating there is a problem. For example, when you specify GENERIC.EXE to be
	renamed to BLAND.EXE with the following command line
	
	     RC /fe BLAND.EXE GENERIC.RC GENERIC.EXE
	
	BLAND.EXE is not created. Furthermore, the Resource Compiler doesn't tell you
	that it encountered any problems.
	
	CAUSE
	=====
	
	This is a bug in the resource compiler. The Resource Compiler code overwrites
	the new filename with the filename given as the last parameter.
	
	RESOLUTION
	==========
	
	To rename the executable to a filename different from the resource filename, use
	the RENAME command from the MS-DOS command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Resource Compiler in the
	Microsoft Windows Software Development Kit (SDK) for Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.10 buglist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
