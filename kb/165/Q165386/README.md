---
layout: page
title: "Q165386: SNA Server Now Supports 15,000 3270 LUs and 1,250 APPC LUs"
permalink: kb/165/Q165386/
---

## Q165386: SNA Server Now Supports 15,000 3270 LUs and 1,250 APPC LUs

	Article: Q165386
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server 3.0 only supported 10,000 3270 LUs and 512 Local APPC LUs.
	
	NOTE: LUA LUs are counted against the 3270 LUs session limit.
	
	CAUSE
	=====
	
	The limit of 10,000 3270 LUs and 1,250 Local APPC LUs per SNA Server is the
	maximum number that SNA Server 2.11 supported and this limit was not increased
	in the initial release of SNA Server 3.0.
	
	
	RESOLUTION
	==========
	
	SNA Server has been updated to support a maximum of 15,000 3270 LUs and 1,250
	Local APPC LUs.
	
	To resolve this problem, obtain the hotfix mentioned below. The updated files
	are:
	
	  Snaservr.exe
	  Trcservr.exe
	  Snacfg.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
