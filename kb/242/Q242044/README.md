---
layout: page
title: "Q242044: PDC Cannot Validate Account on Member Server or Workstation"
permalink: kb/242/Q242044/
---

## Q242044: PDC Cannot Validate Account on Member Server or Workstation

	Article: Q242044
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
	
	When you attempt to log on to the network from a computer running either
	Microsoft Windows NT Server version 4.0 or Microsoft Windows NT Workstation
	version 4.0, you may receive the following error message:
	
	  The session setup to the NT domain controller <PDC name> for the domain
	  <domain name> failed because the NT domain controller does not have an
	  account for the computer <computer name>.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. At the computer running Windows NT 4.0, move the computer account from the
	  domain into a workgroup:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Identification tab, and then click Change.
	
	  c. Under Member of, click Workgroup, and then type the name of the workgroup
	     you are moving the computer to.
	
	  d. Click OK, and then click Yes.
	
	2. At the primary domain controller (PDC), remove the computer account from the
	  domain:
	
	  a. In the Server Manager list, click the member server.
	
	  b. On the Computer menu, click Remove From Domain, click Yes, and then click
	     OK.
	
	3. At the PDC, synchronize the entire domain:
	
	  a. In the Server Manager list, click the PDC.
	
	  b. On the Computer menu, click Synchronize Entire Domain, and then click Yes.
	
	4. At the PDC, add the computer account back into the domain:
	
	  a. In Server Manager, click Add to Domain on the Computer menu.
	
	  b. Click Windows NT Workstation or Server.
	
	  c. In the appropriate box, type the computer name, click Add, and then click
	     Close.
	
	5. At the PDC, synchronize the domain again.
	
	6. At the computer running Windows NT 4.0, move the computer account back into
	  the domain:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Identification tab, and then click Change.
	
	  c. Under Member Of, click Domain, and then in the appropriate box, type the
	     name of the domain.
	
	  d. To confirm the move from the workgroup back to the domain, click OK, and
	     then click Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
