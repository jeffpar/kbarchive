---
layout: page
title: "Q103156: Install Hangs on Gateway 2000 486/66V and IDE Disks"
permalink: /kb/103/Q103156/
---

## Q103156: Install Hangs on Gateway 2000 486/66V and IDE Disks

	Article: Q103156
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Setup on a Gateway 2000 486/66V with IDE drives, certain
	circumstances may cause your computer to hang.
	
	Under Windows NT 3.1, the computer hangs when Setup reaches the Examining Disk
	Configuration step. The Examining Disk Configuration step occurs immediately
	before the Setup program displays disk information that allows you to select
	where you want to install Windows NT.
	
	Under Windows NT 3.5, the computer hangs when Setup reboots the system and
	attempts to run in graphics mode.
	
	WORKAROUND
	==========
	
	To work around this problem under Windows NT 3.1, change the IDE SPEED from Fast
	to Normal. Changing this setting to Normal should allow you to continue the
	Windows NT Setup without error.
	
	To work around this problem under Windows NT 3.5, change the HARD DRIVE SPEED
	from Fast to Standard PIO.
	
	MORE INFORMATION
	================
	
	The Gateway 2000 486/66V has a CMOS setting under the Standard System Settings
	Options called IDE SPEED. The default for this setting is Fast. After Windows NT
	is installed, you can change the speed back to fast.
	
	Additional query words: prodnt hangs locks up freeze crash gui
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
