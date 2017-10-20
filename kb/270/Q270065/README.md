---
layout: page
title: "Q270065: XADM: How to Troubleshoot New Mail Notification Issues"
permalink: /kb/270/Q270065/
---

## Q270065: XADM: How to Troubleshoot New Mail Notification Issues

{% raw %}

	Article: Q270065
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to test for new mail notification service issues.
	Since new mail delivery may be delayed, users may misinterpret delayed delivery
	to be slow delivery. If users report that the new mail notification icon is
	displayed only after they change folders or perform other actions that refresh
	the client computer, you should investigate new mail notification performance
	first.
	
	MORE INFORMATION
	================
	
	Using the following tests, you can verify if there is a new mail notification
	issue. The first test determines whether mail is flowing on the server. The
	second test determines whether new mail notifications are being sent.
	
	Test One
	--------
	
	From a MAPI client installed on the server:
	
	1. Create a new mail message and address it to the mailbox you are working from.
	
	2. Send the message.
	
	3. You should receive a new mail notification without having to refresh the
	  client.
	
	If this test fails, then you are having mail flow issues and you do not need to
	proceed with the second test.
	
	Test Two
	--------
	
	This test requires two workstations signed into two different mailboxes.
	
	1. Instruct User1 to create a new mail message and address it to the mailbox of
	  User2. Request a delivery receipt for this message.
	
	2. Send the message to User2. User1 should refresh the mail client until the
	  delivery receipt is received.
	
	3. User2 should not refresh the client during the previous step. When User1
	  receives the delivery receipt, if User2 has not received new mail
	  notification, then the service is not working.
	
	After you perform these tests, you should be able to verify if the issue is
	caused by a failure to receive new mail notifications. If test one was
	successful, and test two did not work, then you are having new mail notification
	issues.
	
	The issue may be caused by devices or configurations that block or redirect UDP
	ports between the Exchange client and server, such as firewalls, a Proxy Client
	installed on an Exchange Server, or a server configured with multiple default
	gateways.
	
	A new mail notification is a UDP packet that is sent from the server that forces
	the client to refresh its view. If the UDP packet does not reach the client,
	then the only way you can know that new mail has been delivered is if you
	refresh the view. When you change folders, the view is refreshed, and therefore
	it seems that new mail has just been delivered.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q159302 XCLN: Exchange Server Push Notifications Generate ICMP Messages
	
	  Q264035 XADM: No Way to Configure Port for UDP New Mail Notification Packets
	
	NOTE: If the proxy client is installed on the client, you may need to regenerate
	the LAT table and reboot the client machine in order to resolve the issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
