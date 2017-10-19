---
layout: page
title: "Q156437: Cyrix 5x86 or 6x86 CPU Reported as 486"
permalink: /kb/156/Q156437/
---

## Q156437: Cyrix 5x86 or 6x86 CPU Reported as 486

	Article: Q156437
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are viewing the General tab in System properties, a Cyrix 5x86 or 6x86
	CPU is reported as a 486 CPU. In Windows 95 OEM Service Release 2 (OSR2), the
	processor is reported as "CyrixInstead."
	
	MORE INFORMATION
	================
	
	The Cyrix CPUs were developed and released after the algorithm used by Windows
	95 to detect CPUs was finished. Windows 95 does not have the information
	necessary to recognize the chip. NexGen and other non-Intel chips may be
	reported in a similar manner. OSR2 recognizes most non-Intel CPUs. This does not
	affect the processing power of the CPU while running Windows 95.
	
	Some programs (mostly games) look for a Pentium CPU and may report that you must
	have a Pentium-class CPU in order to run the program. Many of these programs
	will operate normally despite this error message. Contact the program's
	manufacturer for a possible resolution if you encounter problems trying to run
	any program that requires a Pentium processor.
	
	This behavior also occurs in the Registration Wizard.
	
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	Hardware          : x86
	
	=============================================================================
	
