---
layout: page
title: "Q173540: ATI Mach32 Video Card Needs New Driver After Upgrade"
permalink: /kb/173/Q173540/
---

## Q173540: ATI Mach32 Video Card Needs New Driver After Upgrade

	Article: Q173540
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a system from Windows NT 3.51 to Windows NT 4.0, the Settings
	window in Display Properties comes up and prompts you to install a new driver
	every time the system restarts.
	
	If the system is restarted from the Default option in Boot.ini (which is the
	first entry), the Display Properties screen reappears. If the system is
	restarted in VGA mode, there is no message.
	
	CAUSE
	=====
	
	The upgrade process could not determine the correct video driver to install. You
	must upgrade the video driver manually.
	
	WORKAROUND
	==========
	
	To manually install the correct driver:
	
	1. In Control Panel, double-click Display, and then click the Settings tab.
	
	2. Click the Display Type button, and then click the Change button.
	
	3. Select ATI Technologies in the Manufacturers menu.
	
	4. Select ATI Technologies 8514 ULTRA in the Display menu.
	
	5. Install the drivers.
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
