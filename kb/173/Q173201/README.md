---
layout: page
title: "Q173201: XCLN: Exchange Brings Up IE Dial-up Connection on Start-up"
permalink: /kb/173/Q173201/
---

## Q173201: XCLN: Exchange Brings Up IE Dial-up Connection on Start-up

{% raw %}

	Article: Q173201
	Product(s): Microsoft Exchange
	Version(s): Win95:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You have a Microsoft Exchange profile set to connect with a dial-up networking
	connection. You also have another dial-up networking connection set in Microsoft
	Internet Explorer on the Connection tab, under Connect to the Internet as Needed
	(formerly Autodial). Exchange brings up the Internet Explorer connection on
	start-up despite being set for another dial-up connection. When Autodial is
	disabled, Exchange uses whatever connection is specified on the Exchange Server
	Service Dial-Up Networking tab.
	
	CAUSE
	=====
	
	This is by design. The dial-up connection dialog box is called because of
	initialization of the TCP/IP protocol on the local computer. Anything that you
	call up that uses TCP/IP will bring up the specified connection. There is no way
	to adjust the LAN Adapter (LANA) order to change this.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Create a separate Hardware Profile to use Autodial. You must restart the
	  computer and start the other profile in order to use Autodial.
	
	- Disable Autodial, and create a shortcut on the desktop for the ISP
	  connection. You will need to open this connection prior to starting Internet
	  Explorer.
	
	- Disable Autodial before starting the Exchange dial-up session, and enable
	  Autodial when finished.
	
	MORE INFORMATION
	================
	
	Please see the following related Microsoft Knowledge Base articles:
	
	  Q167030 XCLN: Using Exchange Client with IE Dial When Needed (AutoDial)
	
	  Q152344 XCLN: Winsock Application Starts When Exchange Client Starts
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : Win95:5.0
	
	=============================================================================
	

{% endraw %}
