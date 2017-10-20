---
layout: page
title: "Q141153: PRB: Memory Not Freed to OS When Debugging on Windows NT 3.51"
permalink: /kb/141/Q141153/
---

## Q141153: PRB: Memory Not Freed to OS When Debugging on Windows NT 3.51

{% raw %}

	Article: Q141153
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtshoot kbDebug kbide
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application using a debugger under Windows NT 3.51, some
	heap-checking flags used by the operating system are changed. One of them
	prevents the heap from coalescing free blocks. This results in your application
	committing more memory than it is actually using, which causes a low memory
	condition to occur.
	
	RESOLUTION
	==========
	
	These flags only exist in Windows NT 3.51; this is not an issue in earlier
	versions of Windows NT or in Windows 95. It also is not an issue if you have
	Service Pack 2 or Service Pack 3 installed for Windows NT 3.51.
	
	To avoid the heap behavior, change the heap flags for your application. To do
	this open the registry editor (Regedt32.exe) and create the following key:
	
	HKEY_LOCAL_MACHINE
	   Software
	       Microsoft
	           Windows NT
	               Current Version
	                   Image File Execution Options
	                       myapp.exe
	
	Where 'myapp.exe' is the name of your application's .exe file.
	
	For a retail system, create the value: "
	
	     GlobalFlag = REG_SZ 0x70
	
	" (without the quotation marks) For a checked system, create the value: "
	
	      GlobalFlag = REG_SZ 0x4f4470
	
	" (without the quotation marks) GlobalFlag is a bitmask; here are the
	heap-related bits:
	
	  FLG_HEAP_ENABLE_TAIL_CHECK      0x00000010
	  FLG_HEAP_ENABLE_FREE_CHECK      0x00000020
	  FLG_HEAP_VALIDATE_PARAMETERS    0x00000040
	  FLG_HEAP_VALIDATE_ALL           0x00000080
	
	VALIDATE_ALL is the flag that disables coalescing blocks.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	If you build and run the following sample code, you can reproduce the behavior by
	following these steps:
	
	1. Build the console application listed below with debugging information (/Zi
	  compiler option).
	
	2. Run the Windows NT Performance Monitor (in the Administrative Tools group).
	  Press CTRL+I, and change the Object to Memory and the Counter to "Committed
	  Bytes."
	
	3. Return to Visual C++ and press F5 or otherwise start a debugging session. You
	  will see the committed bytes displayed in Performance Monitor begin to
	  steadily increase and not decrease at any point.
	
	Because the application is iteratively allocating and then freeing the same
	memory blocks, you would expect the committed bytes to go up and down the same
	amount. But because of the heap flags and running the application in a debugger,
	the behavior is not what you would expect.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Zi
	     */ 
	
	     #include <windows.h>
	
	     void main()
	     {
	       int count;
	       char *achar[10];
	
	       while (TRUE)
	       {
	        for (count = 0; count <; 10; count++)
	         achar[count] = (char*)HeapAlloc(GetProcessHeap(),
	                 HEAP_ZERO_MEMORY,10000);
	
	        for (count = 0; count < 10; count++)
	         HeapFree(GetProcessHeap(),0,achar[count]);
	       }
	     }
	
	Additional query words: leak leaks GlobalAlloc malloc free new
	
	======================================================================
	Keywords          : kbenv kbtshoot kbDebug kbide 
	Technology        : kbVCsearch kbVC400 kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.0 2.1 2.2 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
