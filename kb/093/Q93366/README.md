---
layout: page
title: "Q93366: EMM386.EXE: ALTBOOT Parameter"
permalink: /kb/093/Q93366/
---

## Q93366: EMM386.EXE: ALTBOOT Parameter

{% raw %}

	Article: Q93366
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	A new parameter was added to EMM386.EXE to eliminate problems encountered when
	you try to reboot a computer with the key combination CTRL+ALT+DEL. If your
	machine stops responding (hangs) when you press CTRL+ALT+DEL, try adding the
	ALTBOOT parameter as in the following example:
	
	  device=c:\dos\emm386.exe altboot x=c000-c7ff noems
	
	MORE INFORMATION
	================
	
	The CTRL+ALT+DEL handling routine changed when EMM386.EXE was upgraded in
	Microsoft Windows operating system version 3.1. The ALTBOOT parameter tells
	EMM386.EXE to handle CTRL+ALT+DEL the same way it does in Microsoft MS-DOS
	version 5.0.
	
	EMM386.EXE monitors the system for reboots, and takes the processor out of
	virtual-8086 mode before control is passed to the boot strapping code.
	EMM386.EXE watches for the CTRL+ALT+DEL key combination by hooking interrupt 15h
	function 4Fh.
	
	EMM386.EXE does the following when it detects that CTRL+ALT+DEL has been
	pressed:
	
	1. Sends the interrupt 15h call up the interrupt chain to the original INT 15h
	  handler.
	
	2. Traps the interrupt return (IRET) from the INT 15h handler.
	
	3. Takes the system out of virtual mode, if appropriate.
	
	By default, EMM386.EXE does not take the processor out of virtual mode until the
	INT 15h chain has been processed because an interrupt handler farther up the
	chain may alter the keyboard status flags or scan code so that the reboot does
	not occur.
	
	Some systems have a ROM BIOS that initiates the reboot from within the interrupt
	15h function 4Fh handler, rather than from the interrupt 09h keyboard handler.
	With this type of BIOS, the reboot code is executed in virtual mode. As a
	result, the system stops responding (hangs) during warm boots.
	
	NOTE: This problem is further complicated by the fact that this type of BIOS has
	an INT 15h 4Fh handler that jumps to the reboot code at a non-standard memory
	location.
	
	The ALTBOOT parameter tells EMM386.EXE to take the processor out of virtual mode
	BEFORE passing the CTRL+ALT+DEL key code up the INT 15h chain. Thus, when the
	BIOS jumps to the reboot code from its INT 15h 4Fh handler, the system reboots
	properly.
	
	If EMM386.EXE detects that the program that called its INT 15h function 4Fh
	handler resides in an upper memory block, it does not take the processor out of
	virtual mode from within its INT 15h handler. (Instead, it relies on a different
	trap it has at memory location F000:FFF0.) In this situation, the ALTBOOT
	parameter does not correct the warm boot problem with the BIOS (noted above).
	
	To work around this problem, use ALTBOOT and load any terminate-
	and-stay-resident (TSR) programs or drivers that call into INT 15h function 4Fh
	low. A common example of such a program is the MS-DOS KEYB command.
	
	The ALTBOOT parameter may be needed on the following computers:
	
	- UNISYS PW^2 3256 computers with Phoenix A386 BIOS copyrighted 1985,1991
	
	- DELL NX20 portable
	
	
	Additional query words: 6.22 6.00 6.20 UNISYS Dell Phoenix NX-20 NX 20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
