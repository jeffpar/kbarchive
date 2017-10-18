---
layout: page
title: "Q156285: Windows NT Setup Does Not Detect or Install Sound Cards"
permalink: kb/156/Q156285/
---

## Q156285: Windows NT Setup Does Not Detect or Install Sound Cards

	Article: Q156285
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbsound kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0, you may notice that your sound card was not
	detected or installed.
	
	CAUSE
	=====
	
	Windows NT 4.0 Setup does not automatically detect or install sound cards. This
	behavior is consistent with previous versions of Windows NT.
	
	RESOLUTION
	==========
	
	To install your sound card, follow these steps:
	
	1. In Control Panel, double-click Multimedia.
	
	2. On the Devices tab, click Add.
	
	3. Click the appropriate driver for your sound card, and then click OK.
	
	MORE INFORMATION
	================
	
	The behavior described in this article should occur only when you perform a new
	installation of Windows NT. If you are upgrading a previous version of Windows
	NT in which a sound card was properly installed, Windows NT 4.0 uses the
	existing settings.
	
	Additional query words: prodnt wav event device audio
	
	======================================================================
	Keywords          : kbhw kbsetup kbsound kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
