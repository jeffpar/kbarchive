---
layout: page
title: "Q65676: Windows Err Msg: Cannot Disable A20"
permalink: /kb/065/Q65676/
---

## Q65676: Windows Err Msg: Cannot Disable A20

	Article: Q65676
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may get the message
	
	  Cannot disable A20
	
	when the HIMEM.SYS file is loaded.
	
	The A20 line is the key to the first 64K of memory above the first megabyte of
	memory in the computer (also known as the High Memory Area or HMA). It is
	necessary that HIMEM.SYS enable this line; however, it is not necessary that
	HIMEM.SYS disable it. If the line cannot be disabled, there is a risk that other
	applications will use this line, possibly resulting in damage to HIMEM.SYS code
	and a loss of functionality.
	
	MORE INFORMATION
	================
	
	There are two possible causes for this message:
	
	- Another application is already using the A20 line when HIMEM.SYS tries to
	  disable it. Check the CONFIG.SYS file for applications that are using the
	  high-memory area (for example, VDISK, old versions of QEMM, or 386 to the
	  Max). Either REMark these applications out or ensure HIMEM.SYS is loaded
	  first in the CONFIG.SYS. Reboot the machine to check if this solves the
	  problem.
	
	- The hardware in the computer does not support disabling the A20 line.
	  Although the problem can be in the design of the motherboard, usually the
	  BIOS is responsible. An upgrade of the system BIOS may solve the problem.
	  However, if the problem lies in the design of the motherboard, there is no
	  workaround for this.
	
	Additional query words: 3.00 3.0 3.0a 3.00a winmem can't 386MAX
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
