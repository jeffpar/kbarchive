---
layout: page
title: "Q76940: PRB: Value of hPrevInstance Incorrect"
permalink: /kb/076/Q76940/
---

## Q76940: PRB: Value of hPrevInstance Incorrect

	Article: Q76940
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	NOTE: The information below does not apply to Visual C++.
	
	SYMPTOMS
	========
	
	The value of hPrevInstance is not equal to NULL, even though there are no other
	instances of the program running.
	
	CAUSE
	=====
	
	The C Run-time library used by the linker does not match the memory model
	specified in the C compiler.
	
	RESOLUTION
	==========
	
	Change the run-time library used by the linker to reflect the appropriate memory
	model used in the C compiler.
	
	MORE INFORMATION
	================
	
	The following table associates the memory model with the C Run-time library
	names:
	
	  Memory Model  Compiler Switch  Run-Time Library
	  ------------  ---------------  ----------------
	
	  Small              -AS         SLIBCEW.LIB
	  Medium             -AM         MLIBCEW.LIB
	  Large              -AL         LLIBCEW.LIB
	  Compact            -AC         CLIBCEW.LIB
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
