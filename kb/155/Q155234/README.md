---
layout: page
title: "Q155234: Computer Restart After Text-Mode Setup Fails"
permalink: /kb/155/Q155234/
---

## Q155234: Computer Restart After Text-Mode Setup Fails

	Article: Q155234
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT 4.0, the screen may go black at the end of
	text-mode Setup after Ntdetect finishes. When this occurs, you must turn the
	computer off and on to reset it.
	
	CAUSE
	=====
	
	This behavior can be caused by SCSI miniport drivers attempting to access the
	hardware incorrectly. On some computers, this could cause the computer to stop
	responding (hang) on the next boot.
	
	RESOLUTION
	==========
	
	Turn the computer off and on to reset it. Setup should continue normally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
