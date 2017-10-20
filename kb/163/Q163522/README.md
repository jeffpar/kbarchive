---
layout: page
title: "Q163522: SNA Server Doesn't Support Digi Cards w/ SDLC and X.25 Driver"
permalink: /kb/163/Q163522/
---

## Q163522: SNA Server Doesn't Support Digi Cards w/ SDLC and X.25 Driver

	Article: Q163522
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbusagekbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server versions 2.0, 2.1, 2.11, and 2.11 Service Pack 1 do not support the
	use of a Digi card over the IBM SDLC and X.25 link services.
	
	CAUSE
	=====
	
	The two main limiting factors for using Digi cards with the IBM x.25 and the
	SDLC link services are:
	
	- the lack of provision for multiple link services accessing the same instance
	  of the driver.
	
	- the need to support significantly larger BTU sizes.
	
	
	STATUS
	======
	
	An update to SNA Server is available; it was modified to enable support of Digi
	cards with the IBM SDLC and X.25 link services.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 SP1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbusage kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
