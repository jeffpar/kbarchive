---
layout: page
title: "Q81348: CMOS Setup Information for the CompuAdd 386"
permalink: /kb/081/Q81348/
---

## Q81348: CMOS Setup Information for the CompuAdd 386

	Article: Q81348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the CMOS system Setup program on a CompuAdd 386 to set options
	useful in troubleshooting possible problems when running Microsoft Windows.
	
	Functions that can be changed include the setting for shadow RAM and the
	protected mode operation of the 80386 microprocessor.
	
	To activate the CMOS Setup program, press CTRL+ALT+ESC after the machine boots.
	
	MORE INFORMATION
	================
	
	The CompuAdd 386 can shadow the system BIOS and video BIOS in fast 32-bit RAM.
	You may want to temporarily disable this feature to test with Windows or to
	regain a small amount of memory for programs.
	
	For example, if the system needs expanded memory for applications, but it cannot
	set the page frame in the upper memory area, then a good approach is to disable
	the system and video BIOS settings individually to troubleshoot this kind of
	problem.
	
	CompuAdd 386 Models 316S or 320S
	--------------------------------
	
	If you have a CompuAdd 386 model 316S, you may receive the following error
	message:
	
	  Cannot run Windows in <x> mode with currently installed protect mode
	  software
	
	where <x> is standard or enhanced. This message may appear even though
	nothing is being loaded in the CONFIG.SYS or AUTOEXEC.BAT file.
	
	The CMOS Setup program for the CompuAdd 386 model 316S shifts the processor into
	protected mode if the "XFEATS" (Extra Features) option is enabled. This feature
	needs to be disabled to run Windows in standard or enhanced mode.
	
	Please contact the manufacturer for an explanation of the Extra Features (XFEATS)
	option and for further assistance in using the CMOS system Setup program.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.00 3.00a 3.0a 3rdparty compu protected compuad compu-add shadowram shadow ROM shadow-ram KBHW 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
