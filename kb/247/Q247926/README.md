---
layout: page
title: "Q247926: Windows NT Server 4.0-Based PDC Repeatedly Reports Event 3224"
permalink: kb/247/Q247926/
---

## Q247926: Windows NT Server 4.0-Based PDC Repeatedly Reports Event 3224

	Article: Q247926
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a trust relationship is no longer used, you may find that the following
	event appears repeatedly in Event Viewer on the primary domain controller (PDC)
	computer:
	
	  Event 3224:
	  Changing machine account password for account (domain name)$ failed with the
	  following error:
	  There are currently no logon servers available to service the logon request
	
	CAUSE
	=====
	
	This behavior can occur when a trust relationship that is no longer in use has
	not been removed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, break the trust relationship in both the domains
	involved.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
