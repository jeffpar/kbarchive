---
layout: page
title: "Q182087: XCLN: NDR Sending to Internet Recipient When Offline"
permalink: /kb/182/Q182087/
---

## Q182087: XCLN: NDR Sending to Internet Recipient When Offline

{% raw %}

	Article: Q182087
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to send a message to an Internet recipient when you are not
	connected to a Microsoft Exchange Server computer, you may receive a non-
	delivery report (NDR) similar to the following when you connect to the server:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: <subject>
	     Sent: 7/19/96 11:20:50 AM
	
	  The following recipient(s) could not be reached:
	
	     <recipient> on 7/19/96 11:20:52 AM
	
	     No transport provider was available for delivery to this recipient.
	
	This problem occurs with Internet recipients that are not located in your
	personal address book (PAB) or the global address list. The problem can occur
	when you are using offline folders and an offline storage file (OST) or the
	remote features of your e-mail client and a set of personal folders (.pst file).
	Note that creating a new OST or a new profile does not resolve the problem.
	
	WORKAROUND
	==========
	
	To work around this problem, you must connect to the Exchange Server computer in
	online mode once, in order to cache all the gateway address routing table
	(GWART) entries. To do so, follow these steps:
	
	1. Configure the Microsoft Exchange Server information service to connect
	  through a network instead of working offline. To do so, follow these steps:
	
	  a. In Control Panel, double-click Mail.
	
	  b. Click Microsoft Exchange Server in the list of information services, and
	     then click Properties.
	
	  c. In the When Starting area, click the Connect With The Network option to
	     select it, click OK, and then click OK again.
	
	2. Verify that your computer is physically connected to the network. If you
	  cannot physically connect your computer to the network, connect to the
	  network using Dial-Up Networking.
	
	3. Start your e-mail client, send a message to an Internet recipient, and then
	  verify that you do not receive an NDR. Do not continue with these steps if
	  you receive an NDR when you attempt to send a message to an Internet
	  recipient while you are connected to the Microsoft Exchange Server computer.
	
	4. Quit and log off the e-mail client. If you connected to the network using
	  Dial-Up Networking, end the Dial-Up Networking connection.
	
	5. Configure the Microsoft Exchange Server information service to work offline
	  instead of connecting through the network. To do so, follow these steps:
	
	  a. In Control Panel, double-click Mail.
	
	  b. Click Microsoft Exchange Server in the list of information services, and
	     then click Properties.
	
	  c. In the When Starting area, click the Work Offline And Use Dial-Up
	     Networking option to select it, click OK, and then click OK again.
	
	6. Start your e-mail client, send a message to an Internet recipient, and then
	  verify that you do not receive an NDR.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post additional information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 95 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
