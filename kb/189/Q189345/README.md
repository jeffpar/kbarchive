---
layout: page
title: "Q189345: XCON: MTA Logs Event 9301 Though X.400 Connector Is Identified"
permalink: /kb/189/Q189345/
---

## Q189345: XCON: MTA Logs Event 9301 Though X.400 Connector Is Identified

{% raw %}

	Article: Q189345
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Events similar to the following are seen in the Application Event log:
	
	  Event ID: 9301
	  Source: MSExchangeMTA
	  Type: Information
	  Category: Configuration
	  Description:
	  "The message transfer gateway that uses the network address xxxxxxxx and
	  the transport stack
	  /o=EXORG/ou=EXSITE/cn=Configuration/cn=Servers/cn=EXSERVER/cn=TCP
	  (EXSERVER) could not be found. Check the configuration of the mail
	  gateway.
	  [BASE IL TCP/IP DRVR 8 218] (10)"
	
	There is no problem in transferring messages over the connector.
	
	CAUSE
	=====
	
	This occurs on a message transfer agent (MTA) that receives a connection request
	over an X.400 Connector using a TCP/IP Stack. The connection request contains
	the IP address of the remote MTA. The local MTA tries to find the corresponding
	X.400 Connector in its configuration by comparing this address with the values
	for address on the Stack Properties page of each connector. If it fails to find
	the address (because, for example, the stack address is a computer name or a
	fully qualified domain name), it logs the 9301 Event.
	
	The MTA then attempts a reverse-lookup on the address (using DNS or a hosts file,
	for example) and successfully matches this result with the name in the Stack
	Properties Address field. The connection is then accepted and the message
	transferred.
	
	If the reverse lookup fails, the MTA logs a second 9301 event, and no message is
	transferred. In this case, you can either configure the X.400 Connector with the
	IP Address, or investigate the problem with reverse lookup.
	
	RESOLUTION
	==========
	
	The event is informational and can be safely ignored. However, a fix to the MTA
	now exists that logs only the second event; that is, if the connector cannot be
	found and messages cannot be transferred.
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
