---
layout: page
title: "Q181122: Event ID 627 Running SNA Services Under WinNT User Account"
permalink: /kb/181/Q181122/
---

## Q181122: Event ID 627 Running SNA Services Under WinNT User Account

	Article: Q181122
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT service is written to use the SNA Server APPC, CPIC, LUA, or
	3270 EIS API interfaces, and the Windows NT service is not running under an
	account with administrator privileges, the application will fail to work.
	
	This can be reproduced by trying to start the SNA Server AFTP Server service
	under a Windows NT user account. This causes the following Windows NT
	application event to be logged:
	
	  Event ID: 627
	  Source: SNA Server
	  Description:
	  Internal message routing error: process id <pid>, mhtype 15, msgtype 0
	
	The equivalent application does run correctly under the same user context when
	run interactively.
	
	CAUSE
	=====
	
	SNA Server was originally designed to restrict Windows NT services to only run
	in administrative-level accounts (to accommodate requirements on the SNA Server
	services themselves). However, this restriction is not necessary for services
	that need access to the SNA Server API interfaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was corrected in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
