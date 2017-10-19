---
layout: page
title: "Q150918: FPNW Event ID 2630 Unable to Access PDC for Write"
permalink: /kb/150/Q150918/
---

## Q150918: FPNW Event ID 2630 Unable to Access PDC for Write

	Article: Q150918
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have File and print Services for NetWare (FPNW) set up on a primary
	domain controller (PDC) and a backup domain controller (BDC), Event ID 2630 may
	be logged in the system log every few minutes. The following message appears:
	
	  Event ID: 2630
	  Source: FPNW
	
	  The bindery library failed to connect to \\<PDC server name> for write.
	  Bindery operations may be limited"
	
	The following is the hex data returned in Event ID 2630:
	
	  Data:
	
	  0000: c00000022
	
	CAUSE
	=====
	
	The BDC is attempting to establish a connection to the PDC using an RPC null
	session. This is not supported for security accounts manager (SAM) calls because
	a user context needs to be used.
	
	The hex data returned in the Event ID 2630: maps to be an access denied message
	from the PDC.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50 fpnw
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
