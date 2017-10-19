---
layout: page
title: "Q178071: Disable SNA Admin/Manager Support for Windows NT Clients"
permalink: /kb/178/Q178071/
---

## Q178071: Disable SNA Admin/Manager Support for Windows NT Clients

	Article: Q178071
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA server sponsor connections may utilize more bandwidth in LAN/WAN
	environments than necessary for clients that do not use SNA Server Admin/Manager
	components to remotely administer SNA Server.
	
	CAUSE
	=====
	
	SNA Server sends a large amount of information to Windows NT clients over the
	sponsor connection which is only needed if Admin/Manager is running on the
	client. This update makes it possible to disable the Admin/Manager support on
	Windows NT clients by adding the following registry parameter after applying the
	hotfix:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\ 
	  Parameters\NoManager: REG_DWORD:0|1
	
	The default is 0. (1 disables Manager support)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	SP1, 2.11 SP2, 3.0, 3.0 SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
