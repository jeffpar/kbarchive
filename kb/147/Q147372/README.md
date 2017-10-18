---
layout: page
title: "Q147372: Problem Using Full Tape Backup Requiring More than One Tape"
permalink: kb/147/Q147372/
---

## Q147372: Problem Using Full Tape Backup Requiring More than One Tape

	Article: Q147372
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Compaq's Turbo DAT 4/16 tape drive on Compaq Proliant 1500 P-100 system fails
	when performing a full tape backup. The tape backup fails at the end of the
	first tape and before requiring a second tape. The differential tape backup
	works normally.
	
	MORE INFORMATION
	================
	
	The full tape backup is hitting the end of media. Fixing this would require
	fixing the contents of the catalog.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
