---
layout: page
title: "Q128348: Doc Err: Promoting and Demoting Domain Controllers and Servers"
permalink: kb/128/Q128348/
---

## Q128348: Doc Err: Promoting and Demoting Domain Controllers and Servers

	Article: Q128348
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
	
	The section on page 482 of the Windows NT Server version 3.5 System Guide,
	titled "Promoting and Demoting Domain Controllers" contains the following
	three documentation errors:
	
	- Item 2 of the first subsection titled "To promote a backup domain controller
	  to primary domain controller" states the following:
	
	  From the Computer menu, choose Promote to Primary Domain Controller.
	
	  This can take several minutes. When completed, the old primary domain
	  controller automatically reverts to server status.
	
	  This is incorrect. A domain controller does not revert to server status. When
	  a backup domain controller (BDC) is promoted to a primary domain controller
	  (PDC), the PDC is automatically demoted to BDC status.
	
	- Paragraph 5 states the following:
	
	  However, if a server is promoted to primary domain controller while the
	  existing one is unavailable (for example, if it is being repaired), and if
	  the former primary domain controller later returns to service, you must
	  demote it.
	
	  This is incorrect. A server cannot be directly promoted to domain controller
	  status. In order for a server to become a domain controller, you must
	  reinstall Windows NT Server.
	
	- The second subsection is titled:
	
	  To demote a former primary domain controller to server
	
	  This is incorrect. In order to demote a former PDC to server, you must
	  reinstall Windows NT Server.
	
	Additional query words: prodnt docs docerr
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
