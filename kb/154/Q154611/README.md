---
layout: page
title: "Q154611: SMS: NetCard ID Not Detected on a Direct Hosted IPX Client"
permalink: /kb/154/Q154611/
---

## Q154611: SMS: NetCard ID Not Detected on a Direct Hosted IPX Client

{% raw %}

	Article: Q154611
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Systems Management Server (SMS) inventories a 16-bit client, the Network
	card MAC address or NetCard ID will not be reported if direct hosted IPX is the
	only protocol installed on the client. Adding another protocol that uses NetBIOS
	or adding NetBIOS support to the IPX stack will allow the network card MAC
	address to be reported normally.
	
	CAUSE
	=====
	
	Currently, SMS will identify the 16-bit client is either a Microsoft or a
	NetWare client. If it is determined that the system in question is a Microsoft
	client, a NetBIOS "GET_ADAPT_STATUS" call is issued to return the network card
	information, including the network card MAC address. When a direct hosted IPX
	stack is installed, the NetBIOS layer is not installed and this call fails.
	Subsequently, the MAC address is not reported to the SMS database.
	
	Because Windows 95 installs IPX as a default protocol, with direct hosting
	enabled, the default client configuration will not report the MAC address.
	Adding any additional protocol that supports the NetBIOS interface allows the
	MAC address to be reported to the SMS database.
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	- Install NetBIOS support for IPX.
	
	-or-
	
	- Add a second protocol stack that has a NetBIOS interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
