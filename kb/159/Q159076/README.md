---
layout: page
title: "Q159076: Windows NT 4.0 May Hang or Crash in Win32k.sys During Setup."
permalink: kb/159/Q159076/
---

## Q159076: Windows NT 4.0 May Hang or Crash in Win32k.sys During Setup.

	Article: Q159076
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During setup, Windows NT 4.0 may stop responding or crash in Win32k.sys.
	
	CAUSE
	=====
	
	A user mode callback occurs on the desktop system thread for a WM_SETICON
	message, causing the computer to stop responding.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
