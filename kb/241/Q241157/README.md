---
layout: page
title: "Q241157: XCON: Send and Receive Mail Through a Demand Dial Router"
permalink: /kb/241/Q241157/
---

## Q241157: XCON: Send and Receive Mail Through a Demand Dial Router

{% raw %}

	Article: Q241157
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You may run into an issue when your connection to the Internet is through a
	demand dial router and you are using the Microsoft Exchange Server's Internet
	Mail Service. The Internet Mail Service forwards a message just as if it were a
	permanent connection. When the router detects that data needs to be sent, it
	initiates the dial, and sends the message. Exchange Server cannot tell the
	difference between this type of connection and a permanent connection, such as a
	T1 or Frame Relay. Most likely, when using a demand dial router, the primary MX
	record is your Internet server provider's (ISP's) mail server. The ISP queues
	the mail for the final destination. Normally, Exchange Server issues the ETRN
	command to the ISP's mail server to de-queue the mail. However, there is no way,
	within the Exchange Server Administrator program, to enable ETRN functionality
	outside of the normal Internet Mail Service dial-up configuration.
	
	MORE INFORMATION
	================
	
	You can tell Exchange Server to always issue the ETRN command to the host
	specified in the "Forward all mail to host" field by setting the following
	registry parameter.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\
	  Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: AlwaysUseETRN
	  Data Type: REG_DWORD
	  Value: 0x1
	
	4. Quit Registry Editor.
	
	Now, every time the Internet Mail Service forwards mail to the specified host, it
	will also issue the ETRN command to that host. There is no way to issue the ETRN
	command to another host. So, for this to work properly, the host that is queuing
	the mail also has to be able to relay mail.
	
	One possible drawback to this approach is that incoming mail is only received
	when outgoing mail is sent. If this delay is an issue, you can configure an
	Exchange Server link monitor to the Internet. The link monitor uses an SMTP
	custom recipient that is a false user at a valid domain. The monitor sends a
	message to this custom recipient at the specified interval. Because this is an
	SMTP message, the Internet Mail Service sends it and also de-queues mail at the
	same time. Assuming the connection is functional, the message is returned as
	non-deliverable, indicating that the link is active. For the link monitor to
	stay active, the Administrator program needs to remain open. For additional
	information on configuring a link monitor, please see the Microsoft Exchange
	Server 5.5 Administrator's Guide.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	Additional query words: AlwaysUseEtrn, dequeue adsl dsl cable modem cablemodem
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
