---
layout: page
title: "Q268643: XFOR: Internet Mail Service Does not Start with Event 4003, 4020"
permalink: kb/268/Q268643/
---

## Q268643: XFOR: Internet Mail Service Does not Start with Event 4003, 4020

	Article: Q268643
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbExchange550 kbProxyServ
	Last Modified: 05-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Internet Mail Service (IMS) on a computer that is running
	Exchange Server 5.5 and Winsock Proxy (WSP) Client, IMS may not start. The
	application log of Event Viewer reports the following events:
	
	  Event ID=4003 The following error occurred while trying to retrieve protocol
	  information. Error=11004
	
	  Event ID=4020 Unable to start the service because Winsock could not be
	  initialized.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the TCP/IP protocol, reinstall the TCP/IP
	protocol, and then reapply the latest Microsoft Windows NT 4.0 service pack and
	the latest Exchange Server 5.5 service pack:
	
	1. On the Windows taskbar, click Start, point to Settings, and then click
	  Control Panel.
	
	2. In Control Panel, double-click Network, and then click the Protocols tab.
	
	3. In the Protocols properties page, click TCP/IP Protocols, and then click
	  Properties. Record the settings from the TCP/IP properties page.
	
	4. In the Protocols properties page, click TCP/IP Protocols, click Remove, click
	  OK, and then restart the Exchange Server computer.
	
	5. On the Windows taskbar, click Start, point to Settings, and then click
	  Control Panel.
	
	6. In Control Panel, double-click Network, and then click the Protocols tab.
	
	7. In the Protocols properties page, click Add, click TCP/IP, and then click OK.
	
	8. Configure the TCP/IP protocol, using the settings you noted in Step 3, and
	  then restart the Exchange Server computer.
	
	9. Apply the latest Windows NT 4.0 service pack and the latest Exchange Server
	  5.5 service pack. Restart the Exchange Server computer.
	
	10. If IMS does not restart, in Control Panel, double-click Services, click
	  Microsoft Exchange Internet Mail Service, and then click Start.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q193928 XCON:Internet Mail Service Won't Start, Event ID 4007 and 4020
	
	  Q222134 XADM: Unable to Establish Proxy Functionality with Exchange Server
	  Behind Proxy Server
	
	  Q222553 XFOR: IMC Events 4020, 4007 with Error 10048: Winsock Failed to
	  Initialize
	
	  Q178532 XFOR: Configuring Exchange Internet Protocols with Proxy Server
	
	  Q181847 XADM: How to Configure Microsoft Exchange Server with Proxy Server
	
	For additional information about obtaining service packs for Windows NT 4.0 and
	Exchange Server 5.5, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbExchange550 kbProxyServ 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
