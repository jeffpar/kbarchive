---
layout: page
title: "Q172144: Allow Link Service to be Distributed Option for Polaris / ESCON"
permalink: kb/172/Q172144/
---

## Q172144: Allow Link Service to be Distributed Option for Polaris / ESCON

	Article: Q172144
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The "Allow Link Service to be distributed" option for the Polaris Bus and Tag
	channel adapter and the ESCON channel adapter is not available.
	
	RESOLUTION
	==========
	
	The fix was to add the "Allow Link Service to be distributed" option in the link
	service config dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0 and 3.0
	SP1.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words: distributed link Polaris
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
