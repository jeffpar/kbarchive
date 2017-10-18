---
layout: page
title: "Q316205: XCON:  How to Block Port 25 Access to an Exchange Server 5.5"
permalink: kb/316/Q316205/
---

## Q316205: XCON:  How to Block Port 25 Access to an Exchange Server 5.5

	Article: Q316205
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Routing tab, located in the Microsoft Exchange Internet mail
	connector (IMC), to apply routing restrictions such as Post Office Protocol
	version 3 (POP3), Internet Message Access Protocol, Version 4rev1 (IMAP4),
	Simple Mail Transfer Protocol (SMTP) and specific computer Transmission Control
	Protocol and Internet Protocol (TCP/IP) traffic. However, in certain
	circumstances you may only want to block port 25 connectivity to an Exchange
	Server 5.5 computer and still enable the other protocols to connect. This
	article describes how to block port 25 connectivity by selecting the IMC that is
	included in the Microsoft Exchange Server Administrator program.
	
	MORE INFORMATION
	================
	
	The IMC snap-in is included in the Microsoft Exchange Server 5.5 IMC. You can
	use the Connections tab, located in the IMC snap-in, to block port 25
	connectivity. To do so:
	
	1. Start the Exchange Server 5.5 Administrator program.
	
	2. Locate the Configuration container, and then click Connections.
	
	3. In the right pane, click Internet Mail Service, click Properties, and then
	  click the Connections tab.
	
	4. Click the "Specify by host from the Accept Connections" check box.
	
	5. Click Add, enter the IP Address of the computer that you want to accept
	  connections from, type "255.255.255.255" (without the quotation marks) for
	  the subnet mask, and then make sure the "Accept connection from this host"
	  check box is selected.
	
	6. Click Add, enter the IP Address "0.0.0.0" (without the quotation marks),
	  subnet mask "0.0.0.0" (without the quotation marks), and then make sure the
	  "Reject connection from this host" check box is selected.
	
	  NOTE: Make sure that you maintain the IP 0.0.0.0, subnet mask 0.0.0.0, Reject
	  rule as the last rule. Any rules that you create after this rule is applied
	  are not maintained.
	
	7. Click OK, and then restart Internet Mail Service so that the changes take
	  effect.
	
	Additional query words: imc xcon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
