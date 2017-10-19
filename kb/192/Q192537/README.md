---
layout: page
title: "Q192537: PRB: Threads Consume Virtual Memory Quicker on Windows CE 2.1"
permalink: /kb/192/Q192537/
---

## Q192537: PRB: Threads Consume Virtual Memory Quicker on Windows CE 2.1

	Article: Q192537
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOAK kbVC500 kbOSWinCE210
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Toolkit for Visual C++ 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications or libraries that create multiple threads and worked under Windows
	CE 2.0 may encounter out-of-memory conditions when run under Windows CE version
	2.1.
	
	CAUSE
	=====
	
	Windows CE 2.1 now uses the stack reserve field in the program executable
	header. The Visual C++ linker default reserve is 1 MB.
	
	RESOLUTION
	==========
	
	Use the /STACK switch in the linker settings, or the module definition file
	STACKSIZE directive, to specify a lower default stack reserve.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Previous versions of Windows CE did not use the stack reserve field in the
	program executable header. Even though the linker default reserve was 1 MB, the
	operating system ignored this field, and used a predefined lower value. In
	Windows CE 2.1, this field is now used and may result in virtual memory being
	consumed quicker than anticipated. To circumvent this behavior, just add the
	/STACK switch to the linker settings with a more reasonable reserve value, such
	as
	
	     /STACK:65536
	
	or use the STACKSIZE directive in a module definition file:
	
	     STACKSIZE 65536
	
	The stack commit parameter for these switches is not currently used by the
	Windows CE operating system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOAK kbVC500 kbOSWinCE210 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbWinCEEnh210ETKVC500 kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
