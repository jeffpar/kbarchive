---
layout: page
title: "Q90292: Causes of Help Compiler Error 5059"
permalink: kb/090/Q90292/
---

## Q90292: Causes of Help Compiler Error 5059

	Article: Q90292
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Help compiler generates the following error:
	
	  Error 5059: Not enough memory to build help file.
	
	CAUSE
	=====
	
	Cause 1
	-------
	
	There is a graphic larger than 64K pasted directly into the RTF source files.
	This violates the 64K paragraph size limit.
	
	Cause 2
	-------
	
	The Help compiler is truly out of memory.
	
	Cause 3
	-------
	
	There is a corrupted graphic in the project.
	
	
	RESOLUTION
	==========
	
	Resolution 1
	------------
	
	The graphic must be placed into the RTF source file "by reference." For more
	information on graphics in Windows Help, please see the following article(s) in
	the Microsoft Knowledge Base:
	
	  Q90291 Using Graphics Within a Help File
	
	Resolution 2
	------------
	
	All unneeded applications, device drivers, and memory-resident programs should be
	unloaded before attempting to compile. If the HC31 compiler is being used, an
	upgrade to the "protected mode" version of the Help compiler is available so
	that larger files may be compiled. For additional information on this compiler,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q84931 Use Extended Memory to Build Larger Windows Help Files
	
	If any other causes of this error message are found, the information will be
	posted here.
	
	Resolution 3
	------------
	
	Replace the corrupted graphic with one that is not corrupted.
	
	Additional query words: 3.10 HC.EXE HC31.EXE HC31
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
