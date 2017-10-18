---
layout: page
title: "Q150158: NTFS: Directory Changes Reported to LMREPL Erroneously"
permalink: kb/150/Q150158/
---

## Q150158: NTFS: Directory Changes Reported to LMREPL Erroneously

	Article: Q150158
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With certain directory structures (deep directory nesting) some Replicator
	Import Servers may seem permanently busy. Also, in Server Manager the
	Replication Status will be updated periodically.
	
	CAUSE
	=====
	
	When the Import Directory is on an NTFS Volume, the NTFS driver might
	erroneously report directory changes to the Replicator.
	
	RESOLUTION
	==========
	
	Apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt replicator lmrepl
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
