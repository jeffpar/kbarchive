---
layout: page
title: "Q163016: Access Violation in GetHonestyLicense Using TN3270 Server"
permalink: /kb/163/Q163016/
---

## Q163016: Access Violation in GetHonestyLicense Using TN3270 Server

	Article: Q163016
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270 Server service generates a Dr. Watson error. The Drwtsn32.log shows
	that an access violation occurred in the TN3270 GetHonestyLicense() function.
	
	CAUSE
	=====
	
	The access violation occurs because a session control block was being accessed
	by the TN3270 licensing code outside the critical section used to protect
	session control blocks.
	
	RESOLUTION
	==========
	
	The TN3270 Server service has been updated to correct this problem. The updated
	file is Tn3servr.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11. This
	problem was corrected in the latest SNA Server version 2.11 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Solution Type     : kbfix
	
	=============================================================================
	
