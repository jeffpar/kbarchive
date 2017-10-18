---
layout: page
title: "Q264809: Keeping Users from Accessing a Server over the Network While You"
permalink: kb/264/Q264809/
---

## Q264809: Keeping Users from Accessing a Server over the Network While You

	Article: Q264809
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to temporarily prevent users from accessing a server
	over the network. This procedure is useful when you are performing maintenance.
	
	MORE INFORMATION
	================
	
	To prevent users from connecting to a server while maintenance is being
	performed, temporarily remove the Everyone group from the user right, Access
	this computer from the network. Follow these steps:
	
	1. Start User Manager for Domains.
	
	2. On the Policies menu, click User Rights.
	
	3. In the User Rights Policy dialog box, in the Right box, click Access this
	  computer from the network.
	
	4. In the Grant To box, click Everyone and then click Remove.
	
	5. Click OK, and then quit User Manager for Domains.
	
	After server maintenance is complete, add the Everyone group back to the Access
	this computer from the network user right so users can connect to the server
	over the network.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
