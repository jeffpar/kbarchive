---
layout: page
title: "Q271963: Services Do Not Start, Event ID 7023 Generates Message, 'Duplica"
permalink: /kb/271/Q271963/
---

## Q271963: Services Do Not Start, Event ID 7023 Generates Message, 'Duplica

	Article: Q271963
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, some services (including but not limited to the
	Workstation, Server, WWW, and FTP services) may not start, and Event Viewer may
	record the following error message:
	
	  Event ID: 7023 A Duplicate Name Exists on the Network.
	
	CAUSE
	=====
	
	This behavior can occur for the following reasons:
	
	- A multihomed computer has the WINS Client [TCP/IP] protocol or the NetBEUI
	  protocol enabled on both network adapters.
	
	- Multiple Windows Internet Naming Service (WINS) servers are present in the
	  network environment, but replication between them is not configured.
	
	- WINS clients are registering with more than one WINS server ("split
	  registration").
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Disable the NetBEUI protocol and the WINS Client [TCP/IP] protocol on the
	  external network adapter on the multihomed server.
	
	2. Configure the WINS servers to replicate between themselves.
	
	3. Configure the WINS servers to point to themselves on the WINS Address tab in
	  Microsoft TCP/IP Properties.
	
	MORE INFORMATION
	================
	
	For more information about disabling the NetBEUI protocol and the WINS Client
	[TCP/IP] protocol on one of your network adapters, please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q197157 Workstation Service Does Not Start
	
	For more information about configuring the WINS Address tab, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q150737 Setting Primary and Secondary WINS Server Options
	
	For more information about configuring WINS replication, please refer to the
	following white paper, which is available on the Microsoft anonymous FTP server
	at the following location:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/Winswp.doc
	
	File Name: Winswp.doc
	Title : "Windows Internet Naming Service (WINS)"
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
