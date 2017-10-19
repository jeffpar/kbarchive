---
layout: page
title: "Q166148: RasSetEntryProperties() Fails to Set Options in Service Pack 2"
permalink: /kb/166/Q166148/
---

## Q166148: RasSetEntryProperties() Fails to Set Options in Service Pack 2

	Article: Q166148
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The RASEO_TerminalAfterDial and the RASEO_TerminalBeforeDial flags are not set
	if specified in the RasSetEntryProperties Win32 function call.
	
	CAUSE
	=====
	
	A Windows NT 4.0 Service Pack 2 regression causes these parameters to be
	ignored.
	
	RESOLUTION
	==========
	
	Set the Pop Up A Terminal Window option manually in the phone book after
	programmatically creating or modifying the phonebook entry.
	
	MORE INFORMATION
	================
	
	The RasSetEntryProperties call is used to programmatically create or modify
	Remote Access phone book entries. One of the options that can be specified is
	whether to open a terminal window before and/or after dialing using the
	RASEO_TerminalAfterDial and RASEO_TerminalBeforeDial option flags for dwfOptions
	in the rasentry structure that is passed as a parameter by
	RasSetEntryProperties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt sp2
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Issue type        : kbbug
	
	=============================================================================
	
