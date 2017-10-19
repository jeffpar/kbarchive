---
layout: page
title: "Q173040: Event 1003, 1008, 1017, 7023 After DHCP Service Installation"
permalink: /kb/173/Q173040/
---

## Q173040: Event 1003, 1008, 1017, 7023 After DHCP Service Installation

	Article: Q173040
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events are logged in the system event viewer:
	
	  Event ID: 1003
	  Source: DhcpServer
	  Description: The DHCP server failed to register its registry data. The
	  following error occourred: The system cannot find the path specified.
	
	  Event ID: 1008
	  Source: DhcpServer
	  Description: The DHCP server is shutting down due to the following error: The
	  system cannot find the path specified.
	
	  Event ID: 1017
	  Source: DhcpServer
	  Description: The DHCP server encountered the following error while Backing up
	  the registry configuration: The system cannot find the path specified.
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Description: The Microsoft DHCP Server service terminated with the following
	  error. The system cannot find the path specified.
	
	CAUSE
	=====
	
	The default directory <WinNT_root>\System32\Dhcp was not present before
	Microsoft DHCP Server service was installed. The Microsoft DHCP Server service
	installation process will not check for this directory, nor create it if it is
	missing.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Uninstall the Microsoft DHCP Server service from the Networks tool in Control
	  Panel.
	
	2. Manually create the <WinNT_root>\System32\Dhcp folder.
	
	3. Reinstall Microsoft DHCP Server service from the Networks tool in Control
	  Panel.
	
	4. Restart Windows NT Server.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: install remove dir
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
