---
layout: page
title: "Q165662: LUA LUs Not Allocated from Pools in Order of Their LU Number"
permalink: /kb/165/Q165662/
---

## Q165662: LUA LUs Not Allocated from Pools in Order of Their LU Number

	Article: Q165662
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	LUA LUs were not being allocated from pools in order of their LU number. This
	could cause the TN3270 Server to pick an LU from the pool that was least likely
	to come active when an on-demand connection was activated.
	
	RESOLUTION
	==========
	
	All LUs are now ordered by LU address. To resolve this problem, obtain the
	hotfix mentioned below. The updated file is:
	
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
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
