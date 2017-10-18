---
layout: page
title: "Q150738: Windows NT Hangs When Logging on After Regional Settings Change"
permalink: kb/150/Q150738/
---

## Q150738: Windows NT Hangs When Logging on After Regional Settings Change

	Article: Q150738
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsoundkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a sound card in your computer and you change the Regional Settings
	in Control Panel, your computer may stop responding (hang) when you log on.
	
	CAUSE
	=====
	
	This problem occurs when a process holding a shared resource is "starved" by
	another process running at a higher priority.
	
	
	RESOLUTION
	==========
	
	Log on using an account that does not play a sound on Windows NT startup or
	apply the hotfix given below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 4.00 sound blaster hang
	
	======================================================================
	Keywords          : kbsound kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
