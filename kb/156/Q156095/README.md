---
layout: page
title: "Q156095: Replace Command with Space Character in the Path Does Not Work"
permalink: /kb/156/Q156095/
---

## Q156095: Replace Command with Space Character in the Path Does Not Work

	Article: Q156095
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the REPLACE command with a path that contains a space character,
	the command will not be accepted.
	
	For example, when you use the Replace command with a path that contains a space
	character such as "test 1" and "test 2", the command will not be accepted and
	you will receive the following error message:
	
	  Invalid switch - 2
	  No files replaced.
	
	CAUSE
	=====
	
	The utility does not parse the command line correctly; it ignores the quotes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	and Server versions 3.5, 3.51, and 4.0. This problem was corrected in the latest
	Microsoft Windows NT 4.0 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
