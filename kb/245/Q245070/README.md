---
layout: page
title: "Q245070: Primary Domain Controller Cannot Validate Account."
permalink: /kb/245/Q245070/
---

## Q245070: Primary Domain Controller Cannot Validate Account.

	Article: Q245070
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to the network from a backup domain controller (BDC),
	you may receive the following error message:
	
	  The session setup to the NT domain controller PDCName for the domain
	  DomainName failed because the NT domain controller does not have an account
	  for the computer ComputerName
	
	CAUSE
	=====
	
	The cause of this behavior is unknown.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. At the primary domain controller (PDC), remove the computer account for the
	  BDC from the domain:
	
	  a. In the Server Manager list, click the BDC.
	
	  b. On the Computer menu, click Remove From Domain.
	
	  c. To confirm the removal, click Yes, and then click OK.
	
	2. At the PDC, synchronize the entire domain:
	
	  a. In the Server Manager list, click the PDC.
	
	  b. On the Computer menu, click Synchronize Entire Domain, and then click Yes.
	
	3. At the PDC, add the computer account for the BDC back into the domain:
	
	  a. In Server Manager, click Add To Domain on the Computer menu.
	
	  b. Click Windows NT Backup Domain Controller.
	
	  c. In the appropriate box, type the computer name, click Add, and then click
	     Close.
	
	4. At the PDC, synchronize the domain again.
	
	5. At the PDC, synchronize the BDC with the PDC:
	
	  a. In the Server Manager list, click the BDC.
	
	  b. On the Computer menu, click Synchronize With Primary Domain Controller,
	     and then click Yes.
	
	Additional query words: session setup controller
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
