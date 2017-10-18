---
layout: page
title: "Q131739: Windows NT 3.5: NetBT Event ID 4320"
permalink: kb/131/Q131739/
---

## Q131739: Windows NT 3.5: NetBT Event ID 4320

	Article: Q131739
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Event appears in the Event Viewer:
	
	  Event ID 4320
	  Source NetBT
	
	  Another machine has sent a name release message to this machine probably
	  because a duplicate name has been detected on the TCP network. The IP
	  address of the node that sent the message is in the data. Use nbtstat -n
	  in a command window to see which name is in the Conflict state.
	
	There is no duplicate name found on the network. The network functions correctly.
	
	CAUSE
	=====
	
	Windows NT 3.5 logs this error when a user logs onto two machines with the same
	user name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
