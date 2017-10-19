---
layout: page
title: "Q156903: Boot Loader Screen Keeps Repeating During Setup"
permalink: /kb/156/Q156903/
---

## Q156903: Boot Loader Screen Keeps Repeating During Setup

	Article: Q156903
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows NT 4.0, during the GUI-mode portion of
	Windows NT Setup, the boot loader screen counts down from the default 5 seconds
	to 0, the screen goes black, and then the boot loader screen reappears and
	cycles through this process indefinitely.
	
	CAUSE
	=====
	
	The boot drive may be infected with a boot-sector virus.
	
	RESOLUTION
	==========
	
	Use a reputable third-party virus scanning product to detect and clean the boot
	sector of the system drive. Do not use FDISK /MBR as some boot sector viruses
	may permanently damage the boot sector when removed in this manner.
	
	
	Additional query words: 4.00 loop load
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
