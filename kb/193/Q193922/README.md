---
layout: page
title: "Q193922: XFOR: Preventing the Internet Mail Service From Relaying UCE"
permalink: kb/193/Q193922/
---

## Q193922: XFOR: Preventing the Internet Mail Service From Relaying UCE

	Article: Q193922
	Product(s): Microsoft Exchange
	Version(s): 5.5
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
	
	Administrators of Microsoft Exchange Server version 5.5 can prevent their server
	from acting as a relay host for unsolicited commercial e-mail (UCE) messages.
	Using Exchange Server version 5.5 Service Pack 1 (SP1), the administrator can
	configure these options on the Routing tab in the properties of the Internet
	Mail Service object.
	
	Microsoft recommends that you upgrade to either Exchange Server 5.5 SP1 or the
	latest Exchange Server 5.5 service pack to obtain this functionality. If you are
	unable to upgrade to Exchange Server 5.5 SP1 or later, this article describes
	the registry keys that you need to add to your Exchange Server computer to gain
	this functionality.
	
	NOTE: This functionality is included with Exchange Server 5.5 Service Pack 2
	(SP2). This functionality is located in the Microsoft Exchange Server
	Administrator program, under the Routing Restrictions option, on the Routing tab
	under the properties of the Internet Mail Service object. Although this article
	describes in detail the method to configure these options, it is best to
	configure these options through the Administrator program.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When you install the Internet Mail Service, it is configured by default to enable
	rerouting for Post Office Protocol version 3 (POP3) and Internet Message Access
	Protocol, Version 4rev1 (IMAP4) clients. This rerouting is found on the Routing
	tab of the Internet Mail Service object. The Internet Mail Service accepts and
	relays mail to non-local recipients. Message relay occurs when a client or
	remote SMTP server connects to the Internet Mail Service and submits messages
	for non-local recipients. If the Internet Mail Service does not restrict message
	relay, it may be used to relay UCE messages.
	
	If your server configuration prevents the client from relaying mail, SMTP RCPT
	(receipt) commands that specify a non-local recipient are refused, and the
	following message is displayed:
	
	  550 relaying prohibited.
	
	To configure relay restrictions in the registry, use the values in the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Service\MSExchangeIMC\Parameters
	
	The following examples outline the value, the data type, and the function the
	value performs. After you make the changes, stop the Internet Mail Service, and
	then restart it.
	
	- RelayFlags, REG_DWORD
	
	  Defines which relay control rules are in effect.
	
	- RelayDenyList, REG_MULTI_SZ
	
	  Specifies hosts that cannot relay messages through your server.
	
	- RelayAllowList, REG_MULTI_SZ
	
	  Specifies hosts that can relay messages through your server.
	
	- RelayLocalIPList, REG_MULTI_SZ
	
	  Specifies the local IP addresses of the server that an SMTP client can
	  connect to and relay mail. This is useful for multi-homed servers that have
	  internal and external interfaces. Enabling IP forwarding disables this
	  feature.
	
	NOTE: RelayDenyList, RelayAllowList, and RelayLocalIPList consist of a net
	address and optional mask per line. Order is not important in these lists. Each
	line consists of two parts, the net address and the mask, separated by a
	semicolon. For example:
	
	  Net[;mask]
	
	If the mask is omitted, the default used is 255.255.255.255.
	
	A net address matches a rule if the bitwise-AND of the IP address and the mask
	equals the net. That is:
	
	  (IP Address AND mask) = net
	
	For example:
	
	- To add net 192.168.0.0 to a list, add the following line to the list:
	
	  192.168.0.0;255.255.0.0
	
	- To add the host 192.168.1.17 to a list, add one of the following lines to the
	  list:
	
	  192.168.1.17;255.255.255.255
	
	  - or -
	
	  192.168.1.17
	
	What follows is the logic that is used to determine if the client can relay mail.
	If none of these statements apply, the client is not allowed to relay mail.
	
	- If bit 1 of RelayFlags is set (decimal value 1) and the IP address of the
	  client matches a pattern in RelayDenyList, the client is not allowed to relay
	  mail.
	
	- If bit 2 of RelayFlags is set (decimal value 2) and the IP address of the
	  client matches a pattern in RelayAllowList, the client is allowed to relay
	  mail.
	
	- If bit 3 of RelayFlags is set (decimal value 4) and the client is connected
	  to a local IP address that matches a pattern in RelayLocalIPList, the client
	  is allowed to relay mail.
	
	- If bit 4 of RelayFlags is set (decimal value 8) and the client is
	  authenticated, the client is allowed to relay mail.
	
	- If only bit 1 is set, the client is allowed to relay mail.
	
	For example:
	
	- All clients not explicitly denied can relay mail.
	
	Set bit 1 of RelayFlags (set its decimal value to 1), and add a rule to
	RelayDenyList for each host or group of hosts that you want to deny. To prevent
	all hosts on the subnet 192.168.17.0 from relaying mail, add the following line
	to RelayDenyList:
	
	  192.168.17.0;255.255.255.0
	
	- All clients not explicitly allowed are denied.
	
	Set bit 2 of RelayFlags (set its decimal value to 2), and add a rule to
	RelayAllowLists for each host or group of hosts that you want to allow. To allow
	all hosts on subnet 192.168.1.0 to relay mail, add the following line to
	RelayAllowList.
	
	  192.168.1.0;255.255.255.0
	
	- Allow all hosts on a subnet except for a subset.
	
	To allow all hosts on a subnet, set bit 2 of RelayFlags (set its decimal value to
	2), and add a rule to RelayAllowList to match the subnet. For the subnet
	192.168.1.0, the following rule works:
	
	  192.168.1.0;255.255.255.0
	
	To prevent a subset of the hosts on subnet 192.168.1.0 from relaying mail, also
	set bit 1 in RelayFlags in addition to bit 2, (which was set above); the net
	result is to set its decimal value to 3. Add the IP address of each host to
	RelayDenyList. If the subset of hosts is grouped together, you can add a single
	rule to match all of them. For example, if 192.168.1.1 through 192.168.1.7 are
	not allowed to relay, the following rule is adequate. Listing each address
	explicitly in RelayDenyList also works.
	
	  192.168.1.0;255.255.255.248
	
	- Allow clients that connect to the selected network interfaces to relay.
	
	  This method is useful if the host has multiple network interfaces, and IP
	  forwarding is not enabled. Set bit 3 of RelayFlags (set its decimal value to
	  4), and add the IP addresses of the network interfaces that relay mail to
	  RelayLocalIPList.
	
	- Allow authenticated clients to relay.
	
	  Set bit 4 of RelayFlags (set its decimal value to 8) to allow clients that
	  have authenticated (by using the Auth command) to relay mail.
	
	After you create or modify these registry settings, in Control Panel,
	double-click Services, and then stop and restart the Internet Mail Service so
	that the changes take effect.
	
	If you set the SMTP Interface Events diagnostics logging category to minimum or a
	higher logging level in the Internet Mail Service Diagnostic Logging property
	page, when a message is denied for relay through the Internet Mail Service an
	event is logged to the application event log. The event indicates the sender's
	IP address, sender's host name (if available), the sender's authentication
	account (if authentication was used), and the recipient address for the message.
	
	Additional query words: XADM anti spam anti-spam
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
