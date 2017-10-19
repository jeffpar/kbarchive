---
layout: page
title: "Q175035: Diskless Workstations Cannot Find BOOTP Server with DHCP"
permalink: /kb/175/Q175035/
---

## Q175035: Diskless Workstations Cannot Find BOOTP Server with DHCP

	Article: Q175035
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your diskless workstations (or other devices) that use Dynamic Host Control
	Protocol (DHCP) to obtain IP address information and BOOTP file and server
	information fail to connect to the Trivial File Transfer Protocol (TFTP) server.
	
	CAUSE
	=====
	
	Your Microsoft Windows NT DHCP server is not sending the boot file name in the
	DHCPACK frame to the DHCP client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For your Microsoft Windows NT DHCP server to supply boot file and boot server
	information to a DHCP client, the DHCP options 66 and 67 must be used. If you
	are using BOOTP, then configure the BOOTP tab in DHCP Administrator, not the
	DHCP options.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q174765
	TITLE : How to Configure Microsoft DHCP Server for BOOTP Clients
	
	In Microsoft's DHCP Server implementation, DHCP option 66 TFTP Server Name will
	be used to fill the SIADDR field in the DHCP header. Please note that option 66
	is not being used to fill the sname field in the DHCP header. Option 66 can be
	configured as an IP address or a fully-qualified domain name. If a fully
	qualified domain name (FQDN) is used, the DHCP Server will resolve the name to
	an IP address before sending it to the client in the DHCP Offer and ACK. SIADDR
	is the address of a TFTP server that is the next server to be used in the
	bootstrap process. DHCP option 67 Bootfile Name will fill the file field of the
	DHCP header in a DHCPOffer. File is the name of the boot file that will be
	downloaded from the TFTP Server. Microsoft does not provide a TFTP server.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q142373
	TITLE : TFTP Server Not Included With Windows NT
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
