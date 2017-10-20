---
layout: page
title: "Q107172: Determining the Stack Size of an Application"
permalink: /kb/107/Q107172/
---

## Q107172: Determining the Stack Size of an Application

{% raw %}

	Article: Q107172
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
	
	The tool helper library (TOOLHELP.DLL) contains application programming
	interface (API) functions that provide information about the task header of a
	Windows-based application's default data segment (DGROUP). A Windows- based
	application can use this information to determine the maximum stack size, the
	optimum stack size for the application, and whether the stack is going to
	overflow.
	
	Because the tool helper library is redistributable, this information applies to
	Windows 3.0 also.
	
	MORE INFORMATION
	================
	
	A Windows-based application's DGROUP consists of several parts: the task header,
	initialized and uninitialized static data area, stack, local heap, and an atom
	table. The following picture extracted from Chapter 18 of the "Windows 3.1 Power
	Programming Techniques" by Peter Norton and Paul Yao, shows the organization of
	the DGROUP:
	
	                 ---------------
	                 |               |
	                 |               |
	                 |  Local Heap   |
	                 |               |
	                  --------------- <-
	                 |               |  |
	                 |               |  |
	                 |    Stack      |<-|-
	                 |               |  | |
	                  --------------- <-|-|-
	                 |               |  | | |
	                 |               |  | | |
	                 |  Static Data  |  | | |
	                 |               |  | | |
	              --> ---------------   | | |
	             |   | pStackBottom  |--  | |
	             |    ---------------     | |
	             |   | pStackMin     |----  |
	             |    ---------------       |
	  Task   ----|   | pStackTop     |------
	  Header     |    ---------------
	             |   |     .         |
	             |   |     .         |
	             |   |     .         |
	              --> ---------------
	
	The task header is a data structure stored in the first 16 bytes of the DGROUP
	and contains information about the stack, the local heap, and the atom table.
	Windows stores three variables (pStackTop, pStackBottom, and pStackMin) that
	point to various places in the stack as shown in the picture above. pStackTop
	and pStackBottom point to the top and bottom of the stack, and these two values
	stay constant once initialized. pStackMin changes during run time to indicate
	how much of the stack is actually used. Given this information, the following
	can be determined:
	
	  Maximum Stack size = pStackBottom - pStackTop
	  Dynamic Stack Size = pStackBottom - pStackMin
	
	The maximum stack size is either the size specified in the DEF file with the
	STACKSIZE statement or 5K (Windows provides a minimum of 5K stack). Because
	Windows updates the pStackMin at run time, monitoring the dynamic size gives an
	indication as to how much stack space an application really needs. This value
	may also be used to check for stack overflows during run time, although using
	stack probes is definitely a better method for checking stack overflows. Some
	advanced debuggers such as WDEB386 (included in the Microsoft Windows SDK) and
	SoftIce/W (from NuMega Technologies, Inc.) allow breakpoints to be set on
	particular memory locations; for example, if a breakpoint is set at the bottom
	of the stack, the debugger will break just before a stack overflow.
	
	Windows-based applications can obtain the values of pStackTop, pStackBottom, and
	pStackMin by calling the tool help library API functions, which return a
	TASKENTRY structure. An application should call GetCurrentTask() to get its task
	handle and then call TaskFindHandle(), TaskFirst() or TaskNext() with the task
	handle as a parameter. The TASKENTRY structure contains three members wStackTop,
	wStackBottom, and wStackMinimum, which correspond to the three pointers
	pStackTop, pStackBottom, and pStackMin, respectively.
	
	CodeView for Windows (CVW) debugger can also be used to look at the task header
	of an application's DGROUP. For example, using CVW one can periodically check
	the first 16 bytes in the DGROUP using the command:
	
	  D DS:0
	
	CVW will then display the following information:
	
	  DS:0006 PLOCALHEAP
	  DS:0008 pAtomTable
	  DS:000A pStackTop
	  DS:000C pStackMin
	  DS:000E pStackBot
	
	The three values pStackTop, pStackMin, and pStackBot at locations DS:000A,
	DS:000C, and DS:000E, respectively, can be used to determine information about
	the application's stack as illustrated above.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
