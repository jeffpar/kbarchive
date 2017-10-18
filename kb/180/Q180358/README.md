---
layout: page
title: "Q180358: SNA User Information Not Updated On Windows NT Member Server"
permalink: kb/180/Q180358/
---

## Q180358: SNA User Information Not Updated On Windows NT Member Server

	Article: Q180358
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user is changed (either added or deleted) in a global group using User
	Manager for Domains, the user information is not updated on the SNA Server
	unless the SnaBase is stopped and restarted. This only occurs when SNA Server is
	running on a Windows NT member server.
	
	WORKAROUND
	==========
	
	To work around this problem, make changes to Configured Users in SNA Server
	Manager, and then save the information. The user records are updated on the SNA
	Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 SP2 and
	4.0. A supported fix is not available, but will be available in the next service
	pack. Contact Microsoft Product Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP2,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
