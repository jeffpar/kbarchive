---
layout: page
title: "Q156530: Setup Stops When Inspecting Computer Hardware Configuration"
permalink: /kb/156/Q156530/
---

## Q156530: Setup Stops When Inspecting Computer Hardware Configuration

	Article: Q156530
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetupkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows NT 4.0 Setup from the three Setup floppy disks, or when you
	run Setup using the WINNT /B command, your computer may stop responding while
	the following message is displayed:
	
	  Setup is inspecting your computer's hardware configuration.
	
	
	CAUSE
	=====
	
	The Windows NT 4.0 installation compact disc meets the El Torito specification
	using Non-Emulation mode regarding bootable CD-ROM media. Some newer computers
	support the El Torito specification but adhere to Emulation-mode
	specifications.
	
	
	Some system BIOSes that support the El Torito specification in Emulation mode
	interfere with Windows NT Setup and cause the computer to hang during the
	hardware detection process. It seems that the BIOS grabs the CD-ROM device
	during the Power On System Test (POST) and causes Windows NT hardware detection
	to hang. This can also happen if you leave CD-ROM drive in the boot sequence
	(drive C, CD-ROM drive, drive A).
	
	RESOLUTION
	==========
	
	The system BIOS may display that it recognizes a bootable CD-ROM during POST.
	There are usually CMOS options that allow you to select which boot devices to
	try and in what order. We recommend disabling the option to boot from the CD-ROM
	drive in the CMOS settings.
	
	We also recommend that you not leave the Windows NT CD-ROM in the CD-ROM drive
	until after the computer configuration detection is finished. Or, contact the
	manufacturer of your computer or system BIOS for an updated BIOS to correct the
	problem.
	
	Note that this is only one cause of the problem. Other causes include IRQ
	conflicts, an incorrect HAL, external caching, and shadowing options in the CMOS
	settings.
	
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q103659
	  TITLE : Setup Hangs While Inspecting Hardware; How to Use Ntdetect.com
	
	Additional query words: 4.00 hang hangs lock up DEC
	======================================================================
	Keywords          : kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
