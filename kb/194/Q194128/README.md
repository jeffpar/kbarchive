---
layout: page
title: "Q194128: XFOR: Exchange 5.5 SP1 Upgrade Fails on Cluster Server"
permalink: /kb/194/Q194128/
---

## Q194128: XFOR: Exchange 5.5 SP1 Upgrade Fails on Cluster Server

	Article: Q194128
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing Exchange Server 5.5 Service Pack 1 on a Windows NT cluster will fail
	if Internet Mail Service is running on the cluster. After the upgrade, when you
	try to start the Internet Mail Service, you will receive the following events in
	the Event Viewer application log:
	
	  Event: 4058
	  Description: The Internet Mail Connector cannot start because the name
	  resolver cannot be initialized. Check your network settings in the
	  Control Panel to ensure that you have set a domain name in the DNS
	  dialog box of the TCP/IP configuration.
	
	  Event: 4067
	  Description: The Internet Mail Connector cannot start because the
	  TCP/IP domain name was not found during initialization.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2423.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
