---
layout: page
title: "Q162219: RasSetEntryProperties API Resets Selected Modem"
permalink: kb/162/Q162219/
---

## Q162219: RasSetEntryProperties API Resets Selected Modem

	Article: Q162219
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbProgramming
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With multiple modems installed under Windows NT 4.0, the RasSetEntryProperties
	or RasSetSubEntryProperties API function calls will reset the selected modem to
	the first available modem.
	
	CAUSE
	=====
	
	This is a problem in the implementation of the API functions listed above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt programming
	
	======================================================================
	Keywords          : kbenv kbnetwork kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
