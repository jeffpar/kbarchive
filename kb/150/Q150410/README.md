---
layout: page
title: "Q150410: Having 300+ Print Queues Causes Access Violation in Localmon"
permalink: kb/150/Q150410/
---

## Q150410: Having 300+ Print Queues Causes Access Violation in Localmon

	Article: Q150410
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create 300 or more printer queues on a single server, the computer will
	return a message indicating an access violation in the Localmon.dll.
	
	
	CAUSE
	=====
	
	The access violation occurred the initialization of the Localmon.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
