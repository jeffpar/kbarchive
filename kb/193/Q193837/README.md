---
layout: page
title: "Q193837: Windows NT 4.0 DNS Server Default Zone Security Settings"
permalink: /kb/193/Q193837/
---

## Q193837: Windows NT 4.0 DNS Server Default Zone Security Settings

	Article: Q193837
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default setting for Zone Security in the DNS server included with Microsoft
	Windows NT Server is to allow zone transfer request from any client. This allows
	easier configuration and setup of a new DNS server. The default settings may
	allow unauthorized or undesired read access to the DNS Zone information. A
	client may request a zone transfer with the Nslookup utility, or by configuring
	a secondary zone on a DNS server. To restrict access, you can configure the
	Microsoft DNS server to "Only allow access from secondaries included on the
	notify list." This setting will limit access to the DNS server's zone
	information to IP addresses specified in the notify list. This parameter is on a
	per-zone basis; therefore, zones must be individually configured.
	
	MORE INFORMATION
	================
	
	To configure zone security, use the following procedure:
	
	1. Click Start, click Programs, click Administrative Tools (Common), and then
	  click DNS Manager.
	
	2. In DNS Manager, from the Server list, right-click the primary zone icon.
	
	3. Click Properties.
	
	4. Click the Notify tab.
	
	5. In the Notify List, add the IP addresses of the secondaries that are allowed
	  to access the primary.
	
	6. Click the "Only Allow Access From Secondaries Included on the Notify List"
	  check box.
	
	For additional information about DNS zone transfers, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q164017 Explanation of a DNS Zone Transfer
	
	For more information on the notify feature, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q163745 Explanation of DNS Notify List "Secondary Notification" Behavior
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
