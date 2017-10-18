---
layout: page
title: "Q184344: Reconcile on DHCP Scope Does Not Work Correctly for BOOTP Client"
permalink: kb/184/Q184344/
---

## Q184344: Reconcile on DHCP Scope Does Not Work Correctly for BOOTP Client

	Article: Q184344
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a reconcile to synchronize the database with the registry,
	after deleting the DHCP database, all reservations are put back into the
	database but the media access control addresses are incorrect.
	
	The DHCP server sends a NACK or does not respond to BOOTP requests from a client
	as the request is based on the media access control address.
	
	CAUSE
	=====
	
	When the BOOTP request is processed by the DHCP server, the server matches the
	requested media access control address in the request to an IP address and marks
	the reservation as in use. After performing a reconcile, the media access
	control address is no longer correct in the DHCP database and the client
	requests are either receive a NACK or the DHCP server does not respond to the
	BOOTP request.
	
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
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
