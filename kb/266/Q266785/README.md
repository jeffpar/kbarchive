---
layout: page
title: "Q266785: XADM: ADC Er. Mssg.: Server Specified on the Connection Page..."
permalink: kb/266/Q266785/
---

## Q266785: XADM: ADC Er. Mssg.: Server Specified on the Connection Page...

	Article: Q266785
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a new Connection Agreement for the Active Directory Connector
	(ADC) on a computer that is running Windows 2000 Server and Exchange Server 5.5
	Service Pack 3 and is a domain controller, if you click Add on the From Exchange
	tab to add an Exchange Server recipients container, or click Modify on the From
	Windows tab to add an Exchange Server default destination, you may receive the
	following error message:
	
	  The Microsoft Exchange server specified on the Connections page is invalid.
	  Enter a valid server name.
	  ID no: c103aa1a
	  Microsoft Active Directory Connector Management
	
	On the Connections tab, the Exchange Server computer name is displayed correctly.
	The server name fields on this tab are not case sensitive. Verify that the
	Exchange Server computer name is the server name as it appears in the Exchange
	Server Administrator program (not the Windows 2000 Server name) and that the
	Exchange Server computer name is spelled correctly.
	
	CAUSE
	=====
	
	This issue can occur if the Lightweight Directory Access Protocol (LDAP) port
	that Exchange Server is listening on has been changed because Exchange Server
	and Active Directory are both located on the same server.
	
	WORKAROUND
	==========
	
	To work around this issue, determine which LDAP port Exchange Server is
	currently using, and change the LDAP port on the Connections tab of the
	Connection Agreement properties to the LDAP port number that Exchange Server is
	currently using.
	
	To determine which LDAP port Exchange Server is currently using:
	
	1. Start the Exchange Server Administrator program.
	
	2. Under the server name, click Protocols.
	
	3. In the right pane, double-click LDAP (Directory) Settings.
	
	4. Check the LDAP port number that is displayed on the General tab.
	
	MORE INFORMATION
	================
	
	For additional information about how to change the LDAP ports for Exchange
	Server and Active Directory, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q224447 XADM: How To Change LDAP Port Assignments in Exchange Server
	
	  Q250989 XADM: Installing the ADC on a Windows 2000 Domain Controller That
	  Also Runs Exchange Server
	
	Additional query words: "connection agreement"
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
