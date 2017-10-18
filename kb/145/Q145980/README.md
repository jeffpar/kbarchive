---
layout: page
title: "Q145980: Node Type And Scope ID Not Updated Upon Lease Renewal"
permalink: kb/145/Q145980/
---

## Q145980: Node Type And Scope ID Not Updated Upon Lease Renewal

	Article: Q145980
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the DHCP lease of your Windows 95 or Windows for Workgroups 3.11 computer
	is released and renewed, the node type and scope ID are not updated. For
	example, when you release the lease, make changes to the Node Type and Scope ID
	information and renew the lease with the IPCONFIG /RENEW (or WINIPCFG /RENEW for
	Windows 95) command, the new lease does not include the updated Node Type and
	Scope ID.
	
	
	RESOLUTION
	==========
	
	To work around this problem, reboot your Windows 95 or Windows for Workgroups
	3.11 computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11 and Windows 95. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 3.11 95 TCP/IP wfw win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51; :3.11
	
	=============================================================================
	
