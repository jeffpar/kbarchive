---
layout: page
title: "Q125635: BUG: Win 3.1 Kernel Debugger 3.10.46 Locks Up on Pentium Sys"
permalink: kb/125/Q125635/
---

## Q125635: BUG: Win 3.1 Kernel Debugger 3.10.46 Locks Up on Pentium Sys

	Article: Q125635
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Microsoft Windows version 3.1 Kernel Debugger version 3.10.46
	on a Pentium-based computer, a sign-on banner message will display, and the
	computer will subsequently lock up.
	
	CAUSE
	=====
	
	The Microsoft Windows 3.1 Kernel Debugger version 3.10.46 (WDEB386.EXE, 103,078
	bytes) contains two machine-language instructions that are not supported by the
	Intel Pentium (P5) processor. These illegal instructions reference test
	registers, specifically the TR6 and TR7 test registers.
	
	RESOLUTION
	==========
	
	
	The following patch procedure modifies the Windows 3.1 version of the WDEB386.EXE
	executable file. By changing the illegal instructions into NOP instructions, the
	debugger will function on the Pentium processor.
	
	1. Rename WDEB386.EXE to WDEB386.X86 to save an original copy of the Windows
	  80386 Debugger.
	
	2. COPY WDEB386.X86 to WDEB386.P5. The MS-DOS debugger cannot edit files with
	  .EXE extensions.
	
	3. Debug WDEB386.P5. This patch procedure uses the MS-DOS debugger because of
	  its universal availability.
	
	4. Enter the following commands at DEBUG's '=' prompt:
	
	  a. D64D8 - The first three bytes listed in this dump listing should read: 0F
	     24 F0.
	
	  b. D64DF - The first three bytes listed in this dump listing should read: 0F
	     24 F8.
	
	     NOTE: If either dump does not read EXACTLY as expected, this patch
	     procedure will not fix this particular version of the Microsoft 80386
	     Debugger. DO NOT continue this procedure! Quit the debugger and restore
	     the original Windows 80386 Debugger file.
	
	  c. E64D8 90 90 90 - changes the illegal instruction to NOPs.
	
	  d. E64DF 90 90 90 - changes the illegal instruction to NOPs/
	
	  e. W - Save the updated Windows 80386 Debugger. Responds with "Writing 192A6
	     bytes."
	
	  f. Q - Quit DEBUG.
	
	5. Rename WDEB386.P5 to WDEB386.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are currently researching this problem and
	will post new information in the Knowledge Base at it becomes available.
	
	
	Additional query words: 3.10 buglist3.10 hang crash freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	
