---
layout: page
title: "Q120219: Gateway2000 w/ Mitsumi CD-ROM Hangs on Re-Boot During Install"
permalink: /kb/120/Q120219/
---

## Q120219: Gateway2000 w/ Mitsumi CD-ROM Hangs on Re-Boot During Install

	Article: Q120219
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbsetup kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Gateway2000 computer with a Mitsumi CD-ROM drive hangs on the first re-
	boot during a Windows NT 3.5 install or upgrade.
	
	CAUSE
	=====
	
	Windows NT automatic hardware detection fails during the first re-boot of
	installation with the Mitsumi drive. On subsequent re-boots, NT does not repeat
	the hardware detection because it has already recorded information about the
	machine in the registry.
	
	WORKAROUND
	==========
	
	Remove the CD-ROM interface card (a very small card with a cable leading to the
	CD-ROM). Re-boot and complete the installation. Once you have NT installed to
	the point where you can log on, turn off your computer and reinsert the card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
