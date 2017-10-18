---
layout: page
title: "Q165198: SNA Server Manager Traps When Assigning 5000 Pools to a User"
permalink: kb/165/Q165198/
---

## Q165198: SNA Server Manager Traps When Assigning 5000 Pools to a User

	Article: Q165198
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
	
	An application exception in SNA Server Manager (Snaexp.exe) occurs when 5000 LU
	pools are assigned to one user. A Drwtsn32.log is generated in the Windows NT
	directory when the application exception occurs.
	
	CAUSE
	=====
	
	The addition of the 4,329th LU pool to a user record in SNA Server version 3.0
	causes the user record's length to grow beyond 64 KB, causing the application
	exception to occur when the configuration is being written.
	
	RESOLUTION
	==========
	
	The limit on the number of pools that may be assigned to a user has been set at
	4000.
	
	To resolve this problem, obtain the hotfix mentioned below. The following file
	has been updated:
	
	  <Snaroot>\System\Snacfg.dll
	
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
	
