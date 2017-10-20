---
layout: page
title: "Q103418: No Diamond Drivers in Windows NT Setup"
permalink: /kb/103/Q103418/
---

## Q103418: No Diamond Drivers in Windows NT Setup

{% raw %}

	Article: Q103418
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	If you have a Diamond video card, you may notice that there are no
	Diamond video drivers listed in Windows NT Setup even though several
	Diamond adapters are listed on the hardware compatibility list. This
	is because the video drivers are based on the chip set, not the
	particular adapter. This is also true for other video adapters. The
	following is a table of Diamond adapters and their drivers by chip
	set:
	
	  Diamond Name             Driver Name
	  -------------------------------------
	  Speedstar                Tseng ET4000
	  Speedstar 24X            WD/Paradise
	  Speedstar Pro VLB        Cirrus
	  Stealth                  S3
	  Stealth Pro              S3
	  Viper                    (not supported) by
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
