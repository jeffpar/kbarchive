---
layout: page
title: "Q273797: XADM:  UDP Packets Are Sent Where Link Monitor Runs"
permalink: /kb/273/Q273797/
---

## Q273797: XADM:  UDP Packets Are Sent Where Link Monitor Runs

{% raw %}

	Article: Q273797
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice that User Datagram Protocol (UDP) packets are sent from one
	Exchange Server computer to another Exchange Server computer or workstation
	where the Microsoft Exchange Server Administrator program is running a link
	monitor.
	
	MORE INFORMATION
	================
	
	This behavior can occur in the following scenario:
	
	You install the Administrator program on ServerA, and then configure the
	Administrator Program to run a link monitor that you have created. When you
	start the monitor, you choose Exchange1 as the server to connect to when
	prompted.
	
	When the System Attendant on Exchange1 sends a message to test the link, the
	message is returned. When the message is returned and it reaches the System
	Attendant mailbox on Exchange1, a new e-mail notification is sent to the client
	that is logged (the Administrator program on ServerA). This new mail
	notification is sent through UDP.
	
	The amount of UDP traffic corresponds to the number of servers that are monitored
	by the link monitor and the polling interval that you set on the link monitor.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q264035 XADM: No Way to Configure Port for UDP New Mail Notification Packets
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
