---
layout: page
title: "Q137138: WFW 3.11 Computer with Windows NT 3.51 Update Files Hangs"
permalink: kb/137/Q137138/
---

## Q137138: WFW 3.11 Computer with Windows NT 3.51 Update Files Hangs

	Article: Q137138
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows for Workgroups 3.11 clients with ODI drivers and updated files from the
	Windows NT Server 3.51 CD-ROM stop responding (hang) in a IPX WAN environment
	when heavy database transactions are in progress.
	
	CAUSE
	=====
	
	In a WAN environment using IPX only and forwarding type 20 broadcasts, the
	Windows for Workgroups computer hangs and must be rebooted. This occurs under
	the following conditions:
	
	- The Windows for Workgroups computer is using the NetWare ODI stack.
	
	- All Windows for Workgroups computers are members of the workgroup named
	  "WORKGROUP."
	
	- The Windows for Workgroups computer is performing many transactions with a
	  Windows NT server.
	
	- The Windows for Workgroups computer is a potential master browser.
	
	The Windows for Workgroups computer fails if it receives a browser announcement
	or a browser election is forced while it is busy with database transactions.
	
	WORKAROUND
	==========
	
	Have all Windows for Workgroups computers join the domain, or disable Windows
	for Workgroups browsing by adding "MaintainServerList=NO" (without the quotation
	marks) to the [network] section of the SYSTEM.INI file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups 3.11. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
