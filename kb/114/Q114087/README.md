---
layout: page
title: "Q114087: Installing NT on a Ultrastor 22CA ESDI Controller"
permalink: kb/114/Q114087/
---

## Q114087: Installing NT on a Ultrastor 22CA ESDI Controller

	Article: Q114087
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on some machines with an UltraStor 22CA ESDI caching
	controller, the emergency repair disk is not created and you receive the error
	"Unable to provide floppy support." If you continue, you may or not be able to
	get the system to boot. Booting from the 5.25" disk and then using the 3.5"
	disks to install fails with the same message. Disabling disk caching and
	1024-cylinder truncation does not help. This problem was reported with the ALR
	486/33. The UltraStor 22CA ESDI caching controller installed and worked
	correctly on a Compaq, however.
	
	CAUSE
	=====
	
	Only ESDI cards that are Western Digital 1003 compatible are supported. Since
	each vendor implements caching differently, there is no way to write a generic
	hardware abstraction layer to handle ESDI controllers from all vendors.
	
	RESOLUTION
	==========
	
	Install an ESDI card that is compatible with the Western Digital 1003.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
