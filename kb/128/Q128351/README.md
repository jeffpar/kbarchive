---
layout: page
title: "Q128351: Online Documentation on Managing Domains is Incorrect"
permalink: kb/128/Q128351/
---

## Q128351: Online Documentation on Managing Domains is Incorrect

	Article: Q128351
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
	
	SUMMARY
	=======
	
	The following two topics are incorrectly documented in chapter 2 of the Network
	Operations Quick Reference (NETOPS.HLP) included on the Windows NT Server
	version 3.5 CD:
	
	- Promoting a Server to Primary Domain Controller
	
	- Demoting a Primary Domain Controller to Backup
	
	MORE INFORMATION
	================
	
	The "Promoting a Server to Primary Domain Controller" topic states:
	
	  When a server is promoted to primary domain controller, an up-to-date copy of
	  the user account database is replicated from the old primary domain
	  controller to the new one, and then the old primary domain controller is
	  automatically demoted to backup domain controller (unless it is not currently
	  running).
	
	The "Demoting a Primary Domain Controller to Backup" topic states:
	
	  Usually, when a server is promoted to primary domain controller, no special
	  action needs to be taken to demote the former primary to backup domain
	  controller because the system does this automatically.
	
	  However, if a server is promoted to primary domain controller while the
	  existing primary domain controller is unavailable (for example, if it is
	  being repaired), and the former primary domain controller later returns to
	  service, you must demote it.
	
	Both of these topics incorrect indicate that a server can be promoted to a PDC.
	To promote a server to domain controller status you must reinstall Windows NT
	Server.
	
	Additional query words: prodnt managing domains trust relationships
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
