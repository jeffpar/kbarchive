---
layout: page
title: "Q146582: Clients Reboot During Setup Verification"
permalink: kb/146/Q146582/
---

## Q146582: Clients Reboot During Setup Verification

	Article: Q146582
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or upgrade client computers for Systems Management Server and
	the Setup verification reaches 20 to 22 percent, the client computer reboots.
	
	CAUSE
	=====
	
	This problem occurs when you use CLI_DOS.EXE, CLI_OS2.EXE or CLI_NT.EXE and the
	BIOS shadowing (or CMOS equivalent) is enabled on the computer.
	
	
	RESOLUTION
	==========
	
	To work around this problem, disable the main BIOS shadowing, system shadowing
	or main-board shadowing on your computer. The type of shadowing used on your
	computer depends on the BIOS manufacturer and version. For more information on
	the BIOS type, contact your hardware manufacturer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
