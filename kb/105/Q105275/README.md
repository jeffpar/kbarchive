---
layout: page
title: "Q105275: Using the &quot;BR&quot; Command in WDEB386.EXE"
permalink: kb/105/Q105275/
---

## Q105275: Using the &quot;BR&quot; Command in WDEB386.EXE

	Article: Q105275
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "BR" command in WDEB386.EXE uses the debug registers of the Intel 386 and
	above processors to break into the debugger on memory accesses. These accesses
	can be in byte, word, or dword sizes involving a read, write, or execute
	instruction. Because the BR command is very specific as to the type of memory
	access it will trap, care must be taken to choose the correct combination of BR
	settings in order to obtain all possible cases:
	
	  E == execute access
	  W == write access
	  R == read access
	
	  1 == byte sized access
	  2 == word sized access
	  4 == dword sized access
	
	When a break into the debugger is required when a memory location is modified,
	set a few BR breakpoints on a Write operation giving the three different operand
	sizes:
	
	  BR W1 seg:off
	  BR W2 seg:off
	  BR W4 seg:off
	
	This should cover all possible cases of the memory being touched.
	
	Additional query words: 3.10 no32bit 3.00 breakpoint br
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
