---
layout: page
title: "Q160190: RasSetEntryProperties Does Not Save a Full Path Script Name"
permalink: kb/160/Q160190/
---

## Q160190: RasSetEntryProperties Does Not Save a Full Path Script Name

	Article: Q160190
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the RasSetEntryProperties API call to change the connection
	information for an entry in the phone book or create a new phone-book entry, the
	szScript parameter of the RASENTRY structure is not always preserved.
	
	CAUSE
	=====
	
	Although the RasSetEntryProperties API call does save the szScript value if it
	is the old Switch.inf style scripting, it does not save the szScript value if it
	is the full path to one of the new Windows 95-style scripts.
	
	For example, this string value is correctly saved:
	
	  "[Generic login"
	
	But this one is not saved:
	
	  "c:\\winnt\\system32\\ras\\pppmenu.scp"
	
	WORKAROUND
	==========
	
	Either use the old Switch.inf style scripting or obtain the hotfix described
	below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt programming
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
