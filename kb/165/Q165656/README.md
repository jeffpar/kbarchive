---
layout: page
title: "Q165656: Connection for Downstream PU Fails to Reactivate After Outage"
permalink: /kb/165/Q165656/
---

## Q165656: Connection for Downstream PU Fails to Reactivate After Outage

	Article: Q165656
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A downstream connection fails to activate after an outage even though both
	stations are ready.
	
	CAUSE
	=====
	
	If SNA Server received a reactivation XID while it was processing the outage, it
	would set the link in a state from which it could not reactivate. The connection
	would have to be manually reset for it to reactivate.
	
	NOTE: This article is related to the following Knowledge Base article, which
	documents a similar (but not identical) issue for SNA Server version 2.11:
	
	  Q150472 Downstream PU Fails to Reactivate After an Outage
	
	RESOLUTION
	==========
	
	The components have been instructed to not pass reactivation XIDs to the server
	component until it has finished processing the outage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: dspu down stream
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
