---
layout: page
title: "Q38029: Windows and Early Intel 80386 CPU 32-Bit Operations"
permalink: kb/038/Q38029/
---

## Q38029: Windows and Early Intel 80386 CPU 32-Bit Operations

	Article: Q38029
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive either of the following error messages when you start Microsoft
	Windows in 386 enhanced mode:
	
	  WARNING: The Intel 80386 CPU in this computer does not reliably execute
	  32-bit operations. Windows will usually work correctly on computers with this
	  problem, but may occasionally fail.
	
	  WARNING: the Intel 80386 processor in the computer does not reliably execute
	  32-bit multiply operations, Windows usually works correctly on computers with
	  this problem but may occasionally fail, you may want to replace your 80386
	  processor. Press any key to continue.
	
	CAUSE
	=====
	
	When Intel introduced the 80386 CPU, it released some chips that had not been
	fully tested using 32-bit operations. Windows checks for this to warn you that
	you may want to replace the CPU with one of the newer, more reliable 80386
	chips.
	
	This is normally not a problem, as most programs do not use the true 32- bit
	capabilities of the 80386 CPU. However, since Windows does use 32-bit
	operations, you may experience problems.
	
	WORKAROUND
	==========
	
	Windows 2.x
	-----------
	
	Two important files come with enhanced-mode Windows, WIN386.EXE and WIN86.COM.
	WIN386.EXE provides memory management and support for standard applications;
	WIN86.COM is essentially the same as Windows/286 without support for standard
	applications. After WIN386.EXE is loaded, it creates a virtual machine, loads
	WIN86.COM, and executes it.
	
	If the problem seems to be resolved by running WIN86.COM instead of WIN386.EXE,
	you may need to replace the CPU in your computer. If Windows acts the same with
	either WIN386.EXE or WIN86.COM, the problem is probably not related to the CPU.
	
	Windows 3.0, 3.1, and 3.11 and Windows for Workgroups 3.1 and 3.11
	------------------------------------------------------------------
	
	You must upgrade the 80386 CPU in your computer to work around this problem.
	
	MORE INFORMATION
	================
	
	The Intel products discussed here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 2.x 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
