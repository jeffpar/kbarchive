---
layout: page
title: "Q165149: TN3270E Access Violation in HonestySeatAvailable"
permalink: kb/165/Q165149/
---

## Q165149: TN3270E Access Violation in HonestySeatAvailable

	Article: Q165149
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
	
	An access violation (AV) occurs in the TN3270 HonestySeatAvailable() function
	when a client disconnects from the TN3270 Server Service on SNA Server. A Dr.
	Watson log is generated when this access violation occurs.
	
	CAUSE
	=====
	
	The TN3270 Server occasionally traps when a client disconnects, because it
	attempts to access an internal control block that has already been freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	TN3270 Server service has been updated to correct this problem. The updated file
	is Tn3servr.exe.
	
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
	
