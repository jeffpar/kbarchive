---
layout: page
title: "Q164596: Event ID 3216 System Error 67"
permalink: kb/164/Q164596/
---

## Q164596: Event ID 3216 System Error 67

	Article: Q164596
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Replication fails and the following event is logged:
	
	  Event ID 3216
	  Source: Replicator
	  System error 67 has occurred
	
	RESOLUTION
	==========
	
	Specify the name of the Import/Export servers in the To/From list within the
	Directory Replication properties.
	
	CAUSE
	=====
	
	Under Net Helpmsg, System Error 67 is reported as "The network name cannot be
	found." If a name is not explicitly set, replication will fail with the above
	error.
	
	Additional query words: replicate
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
