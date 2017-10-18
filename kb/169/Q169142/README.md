---
layout: page
title: "Q169142: Unable To Change 3270 Printer LU Name"
permalink: kb/169/Q169142/
---

## Q169142: Unable To Change 3270 Printer LU Name

	Article: Q169142
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LU Name for an existing 3270 Print Session is not updated after it is
	changed in SNA Server Manager.
	
	RESOLUTION
	==========
	
	The current workaround is to delete the 3270 Print Session and recreate it using
	the new LU Name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2, 3.0 SP3, and 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To reproduce this problem, follow these steps:
	
	1. Open SNA Server Manager.
	
	2. Create a new 3270 Print Session using an existing printer LU name (LU03).
	
	3. Save the changes in SNA Server Manager.
	
	4. Change the LU Name of 3270 Print Session that you created in Step 2 (LU03
	  -> LU05).
	
	5. Save the changes in SNA Server Manager.
	
	6. The 3270 Print Session properties will show the original LU Name (LU03).
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
