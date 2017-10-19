---
layout: page
title: "Q107978: EMM Exception Error #6 Exiting Windows for Workgroups 3.11"
permalink: /kb/107/Q107978/
---

## Q107978: EMM Exception Error #6 Exiting Windows for Workgroups 3.11

	Article: Q107978
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit Windows for Workgroups version 3.11, your system may stop
	responding (hang). If EMM386.EXE is loaded, you may receive the following error
	message:
	
	  EMM Exception Error #6
	
	CAUSE
	=====
	
	This problem occurs because:
	
	- The processor is trying to decode a bit pattern that does not correspond to
	  any legal machine instruction.
	
	  -or-
	
	- The processor is trying to execute an instruction that contains invalid
	  operands.
	
	Both of these causes mean that the processor (CPU) is trying to execute code from
	an incorrect area in memory. Either an application is passing an invalid jump
	instruction (causing a jump to an incorrect memory location) or the jump
	instruction is correct but the memory that the instruction accesses is
	corrupted.
	
	NOTE: Although you receive an EMM exception error, EMM386.EXE is not causing the
	problem. When the processor encounters a problem executing an instruction, it
	looks for an error handler. When you exit Windows for Workgroups it uses the
	default error handler. If EMM386.EXE is installed, you receive the EMM Exception
	Error. If EMM386.EXE is not installed, the machine may stop responding (hang).
	
	WORKAROUND
	==========
	
	To troubleshoot this problem, follow the steps in this procedure. After each
	step, you should reboot your computer, run Windows for Workgroups, and then
	attempt to successfully exit Windows for Workgroups. When Windows for Workgroups
	exits successfully, you have isolated the problem.
	
	1. If you ran MS-DOS 6 or 6.2 MemMaker before installing Windows for Workgroups,
	  run MemMaker again.
	
	2. Eliminate potential software conflicts as follows:
	
	  a. Remove any third-party device drivers and terminate-and-stay-resident
	     (TSR) programs that are not required to access your hard drive from your
	     CONFIG.SYS and AUTOEXEC.BAT files.
	
	     For information on device drivers that should not be remarked out, query on
	     the following words in the Microsoft Knowledge Base:
	
	  wfw clean boot
	
	  b. Ensure that the Windows for Workgroups StartUp group is empty.
	
	  c. Ensure that no screen savers, including built-in Windows screen savers,
	     are running. In the Control Panel, choose the Desktop icon and verify that
	     the Screen Saver Name list box is empty.
	
	  d. Ensure that Windows is not being run from a menu program, such as MS-DOS
	     Shell.
	
	  e. Edit the WIN.INI file and comment out the LOAD= and RUN= lines (unless
	     they are already blank). To comment out these lines, place a semicolon (;)
	     in front of the line. For example:
	
	  ;load=<filename1> <filename2>
	
	  f. Edit the SYSTEM.INI file and comment out any third-party virtual device
	     drivers (VxDs).
	
	  g. If possible, disable NDIS2 protocols like TCP or DLC.
	
	3. Eliminate potential hardware conflicts:
	
	  a. Turn off hardware caching.
	
	  b. Turn off shadow ram and video memory.
	
	4. Edit the CONFIG.SYS file and exclude A000-F7FF to eliminate potential upper
	  memory area (UMA) conflicts. To do this, add "X=A000-F7FF" to the DEVICE
	  command for EMM386.EXE in the CONFIG.SYS file.
	
	5. Remark out the device command for EMM386.EXE in the CONFIG.SYS file and then
	  run Windows for Workgroups with the "/D:X" parameter. For example, type "win
	  /d:x" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	6. Start Windows for Workgroups with the WIN /N command. This loads Windows for
	  Workgroups without loading any network support. If the problem does not occur
	  without network software loaded, a hardware device may be conflicting with
	  your network card.
	
	If Windows for Workgroups still hangs when you exit, you still have a memory
	conflict; however, it is not in the upper memory area (UMA).
	
	Additional query words: 3.11 err msg errors
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
