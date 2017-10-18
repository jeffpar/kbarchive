---
layout: page
title: "Q164772: Host-Initiated Password Changes Are Not Sent to All Domains"
permalink: kb/164/Q164772/
---

## Q164772: Host-Initiated Password Changes Are Not Sent to All Domains

	Article: Q164772
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Host-initiated password changes are not propagated correctly to other host
	domains.
	
	CAUSE
	=====
	
	The SNA Server Windows NT Account Synchronization service does not correctly
	propagate host-initiated password changes to other domains.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	
	The updated file is:
	
	  <Snaroot>\Hssystem\Snapmp.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snahostsec
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
