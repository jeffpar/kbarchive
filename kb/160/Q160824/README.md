---
layout: page
title: "Q160824: MSNDS Drops Connections to More Than Eight Servers"
permalink: kb/160/Q160824/
---

## Q160824: MSNDS Drops Connections to More Than Eight Servers

	Article: Q160824
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Service for NetWare Directory Services (MSNDS) to
	connect to NetWare servers, idle connections to drives mapped to NetWare servers
	are disconnected after approximately 10 minutes if there are connections to more
	than 8 servers.
	
	CAUSE
	=====
	
	There is a problem with the MSNDS version of the Microsoft Client for NetWare
	Networks (NWRedir). This client assumes a maximum of eight server attachments,
	and automatically disconnects any idle connections to servers after the first
	eight.
	
	This limitation was originally designed for compatibility with older versions of
	Novell's NetWare client. However, this limitation does not apply to Novell's
	NetWare Directory Services (NDS) clients. In this respect, MSNDS is not fully
	compliant with the comparable Novell client.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This symptom has also been observed with the Microsoft Client for NetWare
	Networks (bindery version, without MSNDS). Although this behavior is by design
	for the bindery client, it can be worked around with the following steps:
	
	1. Obtain and install the Microsoft Service for NetWare Directory Services
	  (MSNDS). For information about obtaining MSNDS, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	2. Obtain and install the update identified in the "Status" section above.
	
	3. Configure the MSNDS client to log in to the bindery server instead of to an
	  NDS tree. For information about how to do this, see the following article in
	  the Microsoft Knowledge Base:
	
	  Q164558 Configuring MSNDS to Log in to a NetWare Bindery Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
