---
layout: page
title: "Q165089: SLI API Can Now Acquire a 3270 LU"
permalink: /kb/165/Q165089/
---

## Q165089: SLI API Can Now Acquire a 3270 LU

	Article: Q165089
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
	
	There is no way to acquire a 3270 LU with the SNA Server SLI API. It can only
	access LUA defined LUs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	SLI application can access LUs configured as 3270 Lus, in addition to LUA LUs.
	To do so, the application must set the lua_resv56[2] byte in the SLI_OPEN VCB to
	0x01.
	
	NOTE: The RUI API uses a different byte to perform the same operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
