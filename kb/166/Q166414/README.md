---
layout: page
title: "Q166414: DCA SDLC and DCA X.25 Links Don't Start When SNA Server Starts"
permalink: /kb/166/Q166414/
---

## Q166414: DCA SDLC and DCA X.25 Links Don't Start When SNA Server Starts

	Article: Q166414
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
	
	When the SNA Server Service starts, the DCA ISCA SDLC Link Service and/or DCA
	ISCA X.25 link service do not start automatically.
	
	CAUSE
	=====
	
	In the registry, the DependOnGroup and DependOnService are not set properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
