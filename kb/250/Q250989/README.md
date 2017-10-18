---
layout: page
title: "Q250989: XADM: Installing ADC on Windows 2000 DC w/Exchange Server"
permalink: kb/250/Q250989/
---

## Q250989: XADM: Installing ADC on Windows 2000 DC w/Exchange Server

	Article: Q250989
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are setting up a new connection agreement for the Active Directory
	Connector (ADC) on a Windows 2000 domain controller (DC) that is also running
	Exchange Server 5.5, you may receive the following error message:
	
	  The Microsoft Exchange specified on the Connections page is invalid. Enter a
	  valid server name.
	
	  ID no c1031b9e
	  Microsoft Active Directory Connector Management.
	
	CAUSE
	=====
	
	Lightweight Directory Access Protocol (LDAP) is the protocol used by the ADC to
	communicate with Exchange Server. By default, the ADC tries to communicate with
	the Exchange Server directory by means of port 389 (the default LDAP port in
	Exchange Server). On a domain controller, Active Directory locks up port 389 as
	it starts, and the ADC cannot set up the connection agreement.
	
	WORKAROUND
	==========
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. To change the LDAP port for all servers within the site, make the following
	  changes:
	
	  a. Click to expand Site, click to expand Configuration, click to expand
	     Protocols, and then click to expand the LDAP (Directory) Site Defaults
	     object.
	
	  b. Change the port assignment from 389 to a port that is not currently in
	     use. You can gather the status of the TCP ports by typing the following
	     command at the command prompt:
	
	  "netstat -a" (without the quotation marks)
	
	     This command displays all active ports that are listening on all
	     interfaces. Choose a port number that is not currently in use; 390 is
	     commonly available.
	
	  c. Stop and restart the Exchange Server directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q224447 XADM: How To Change LDAP Port Assignments in Exchange Server
	
	
	Additional query words: win2k
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000AdvServSearch kbwin2000DataServSearch kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
