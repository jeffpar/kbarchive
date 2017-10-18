---
layout: page
title: "Q106129: Err Msg Running MemMaker: EMM386 DMA Buffer Is Too Small..."
permalink: kb/106/Q106129/
---

## Q106129: Err Msg Running MemMaker: EMM386 DMA Buffer Is Too Small...

	Article: Q106129
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you run MemMaker:
	
	  EMM386 DMA Buffer is too small. Add D=48 parameter and reboot.
	
	CAUSE
	=====
	
	This problem occurs when you are running:
	
	- Qemm instead of EMM386.EXE version 4.48 (which is included with MS-DOS 6.2).
	
	- EMM386.EXE version 4.44 (which is included with Windows 3.1).
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Change the EMM386.EXE command in your CONFIG.SYS file to correctly reference
	  the version supplied with MS-DOS 6.2, and then run MemMaker. For an example
	  of this command, see step 2 in the procedure below.
	
	-or-
	
	- Replace the Qemm commands with the correct MS-DOS commands for HIMEM.SYS and
	  EMM386.EXE and then run MemMaker. To do so:
	
	  1. Edit the CONFIG.SYS file and remove the Qemm statements to disable Qemm.
	
	  2. Add DEVICE commands for HIMEM.SYS and EMM386.EXE (including the D=48
	     parameter). For example:
	
	  device=c:\dos\himem.sys
	  device=c:\dos\emm386.exe d=48
	
	  3. Reboot your computer and run MemMaker.
	
	Additional query words: 6.22 6.20 "qemm version 6.02"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
