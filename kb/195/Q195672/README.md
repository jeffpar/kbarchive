---
layout: page
title: "Q195672: SP4 and SP5 Winlogon Problems with Old Entries in LMHosts"
permalink: kb/195/Q195672/
---

## Q195672: SP4 and SP5 Winlogon Problems with Old Entries in LMHosts

	Article: Q195672
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 with Service Pack 4 (SP4) or later, installed, use entries in the
	LMHosts file with #PRE and will never query a WINS server. In the event that you
	have entries for your domain #DOM preloaded #PRE that are no longer valid,
	Windows NT will no longer query a WINS server to find updated entries.
	
	CAUSE
	=====
	
	In Service Pack 3, Windows NT would query a WINS server and, if an entry was not
	there, it would then use the entry in the LMHosts file (even if the entries were
	preloaded). With SP4, Windows NT will not query a WINS server. Instead it will
	only use the entries in the LMHosts file that have been preloaded.
	
	RESOLUTION
	==========
	
	To resolve this problem remove or update any outdated entries that are being
	preloaded in the LMHosts file.
	
	STATUS
	======
	
	This functionality is by design.
	
	Additional query words: NetBIOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
