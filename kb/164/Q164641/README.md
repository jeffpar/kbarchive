---
layout: page
title: "Q164641: SNA Server 3.0 Windows 3.x Client Does Not Allow Logon Retry"
permalink: /kb/164/Q164641/
---

## Q164641: SNA Server 3.0 Windows 3.x Client Does Not Allow Logon Retry

	Article: Q164641
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
	
	The SNA Server 3.0 Windows 3.x client does not allow a logon retry if the user
	enters an invalid password.
	
	CAUSE
	=====
	
	This problem was inadvertently introduced in the SNA Server 3.0 Windows 3.x
	client.
	
	
	RESOLUTION
	==========
	
	Obtain the SNA Server Windows 3.x client.
	
	The updated module is \<snaroot>\Wnap.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snawin3x
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
