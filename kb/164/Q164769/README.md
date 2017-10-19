---
layout: page
title: "Q164769: UDCONFIG Displays Wrong User Name"
permalink: /kb/164/Q164769/
---

## Q164769: UDCONFIG Displays Wrong User Name

	Article: Q164769
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
	
	When starting the Host Account Manager (UDCONFIG) to set the user's password in
	the SNA Server host account cache, Host Account Manager may show the incorrect
	domain in the Windows NT User Name field that indicates the currently logged on
	user. If this User Name is not a member of the host security domain group, the
	Host Account Manager also displays the following error:
	
	  You do not have sufficient privilege
	
	CAUSE
	=====
	
	The Host Account Manager attempts to look up the local SID for the user. If a
	user is logged on to a Windows NT Server domain account from a Windows NT Member
	Server, and attempts to run Host Account Manager, the local account is used for
	the lookup, instead of the domain account.
	
	You are more likely to encounter this problem when using common account names
	(such as Administrator) that exist within the Windows NT Server domain as well
	as on member servers.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
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
	
