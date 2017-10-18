---
layout: page
title: "Q121407: List of Printers Supported by PRINTER.SYS"
permalink: kb/121/Q121407/
---

## Q121407: List of Printers Supported by PRINTER.SYS

	Article: Q121407
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following list of printers support the code-page switching provided in
	PRINTER.SYS:
	
	Type          Printer
	-----------------------------------------------------
	
	4201          IBM Proprinter II and III Model 4201
	             IBM Proprinter II and III XL Model 4202
	4208          IBM Proprinter X24E Model 4207
	             IBM Proprinter XL24E Model 4208
	5202          IBM Quietwriter III Model 5202
	
	Although other printers can emulate the ones listed above, code-page support is
	usually not available for such printers.
	
	
	MORE INFORMATION
	================
	
	The following examples represent typical usage of PRINTER.SYS:
	
	CONFIG.SYS
	----------
	
	device=c:\dos\ansi.sys
	device=c:\dos\display.sys con = (ega, 437, 2)
	device=c:\dos\printer.sys lpt1 = (type, 437, 2)     NOTE: Type will vary
	                                                   depending on the
	                                                   attached printer.
	country = 048,,c:\dos\country.sys
	
	AUTOEXEC.BAT
	------------
	
	nlsfunc
	mode con cp prep = ((850, 852) c:\dos\ega.cpi)
	mode con cp select = 852
	mode lpt1 cp prep = ((850, 852) c:\dos\type.cpi)    NOTE: The particular
	                                                   *.CPI file will change
	                                                   depending on mode lpt1
	                                                   select = 852 the
	                                                   attached printer]
	
	chcp 852
	keyb pl,,c:\dos\keyboard.sys
	
	Without the functionality provided in PRINTER.SYS, many of the language- specific
	characters used in non-English languages are not available. The characters may
	show up on the screen, but they may not print correctly.
	
	Additional query words: 3.30 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS330
	Version           : MS-DOS:3.3,4.x,5.0
	
	=============================================================================
	
