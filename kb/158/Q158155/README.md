---
layout: page
title: "Q158155: SAS Window: Winlogon.exe Error"
permalink: /kb/158/Q158155/
---

## Q158155: SAS Window: Winlogon.exe Error

{% raw %}

	Article: Q158155
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT and you log on, the following error message may
	appear:
	
	  Error: SAS Window: Winlogon.exe
	  There is no disk in the drive. Please insert a disk into drive A:
	
	CAUSE
	=====
	
	Systems that have bootable CD-ROMs and Award BIOS with a date code prior to
	September 25, 1996 may experience this problem. The Award BIOSes with release
	dates prior to September 25, 1996 enable bootable CD-ROM support by using floppy
	and hard disk emulation. Windows NT 4.0 does not support emulation mode CD-ROM
	booting.
	
	RESOLUTION
	==========
	
	Disable the bootable CD-ROM functionality of the system BIOS or of the SCSI
	controller BIOS.
	
	To disable the bootable CD-ROM support of the Award BIOS:
	
	1. Restart the system.
	
	2. Press the DEL key to enter the BIOS Setup menu.
	
	3. Move the cursor to BIOS Feature Setup and press the Enter key.
	
	4. Click BOOT Sequence.
	
	5. Change the boot sequence so that the CD-ROM appears after the hard disk
	  drive.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt award cd-rom apaptec sas
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
