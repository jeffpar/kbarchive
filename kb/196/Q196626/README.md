---
layout: page
title: "Q196626: XFOR: Restricting Routing in the Internet Mail Service"
permalink: /kb/196/Q196626/
---

## Q196626: XFOR: Restricting Routing in the Internet Mail Service

{% raw %}

	Article: Q196626
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server Internet Mail Service (IMS) allows you to configure the
	server to allow mail relaying. When you enable the Mail relaying in the IMS's
	'Routing' property page, all mail will be routed without restrictions. Exchange
	Server 5.5 Service Pack 1 allows the administrator to impose restrictions on
	routing.
	
	RESOLUTION
	==========
	
	To enable these restrictions on routing functionality, follow these steps:
	
	1. Install Exchange Server 5.5 Server Pack 1 (or later).
	
	2. Open the properties on the Exchange Server Internet Mail Service and select
	  the Routing page. After the SP1 installation, this page will have an
	  additional button called <Routing Restrictions...>.
	
	3. Click Routing Restrictions to bring up a dialog box with additional
	  Restrictions.
	
	MORE INFORMATION
	================
	
	Exchange Server 5.5 Service Pack 1 adds "Routing Restrictions" to the Internet
	Mail Service. This allows the administrator to specify who can relay mail off of
	your Exchange Server computer.
	
	The following Restrictions have been added:
	
	Specify the hosts and clients that can route mail when the following conditions
	have been met.
	
	- Hosts and clients that successfully authenticate:
	
	  Messages sent from hosts and clients with valid logon information are relayed.
	
	- Hosts and clients with these IP addresses:
	
	  Messages sent from host whose IP addresses and subnet mask fall within the
	  range to be allowed to relay.
	
	  To only allow a single host or client, enter in the format, IP=>full IP
	  address of client< (i.e 1.1.1.1), MASK=255.255.255.255
	
	  To allow a range of IP address to relay, enter in the format, IP=>scope to
	  allow< (i.e 1.1.1.0>, MASK=255.255.255.0. This will allow the address
	  range of 1.1.1.1 - 1.1.1.254 to relay.
	
	- Hosts and clients connecting to these internal addresses
	
	  Messages sent by hosts and clients that connect to the specified IP address on
	  the Microsoft Exchange Server computer are relayed. This allows multihomed
	  servers to restrict message relay based on the IP address to which the client
	  connects. If you select this option, you must disable IP forwarding on the
	  Networking property pages in Control Panel.
	
	Specify the hosts and clients that can NEVER route mail.
	
	- Messages sent from the specified IP addresses and subnet mask are NOT
	  relayed.
	
	Additional query words: rerouting spam spoof IMS SMTP restrict restrictions
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
