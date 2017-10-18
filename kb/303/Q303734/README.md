---
layout: page
title: "Q303734: HOW TO: Configure the SMTP Virtual Server for Message Delivery"
permalink: kb/303/Q303734/
---

## Q303734: HOW TO: Configure the SMTP Virtual Server for Message Delivery

	Article: Q303734
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Configure Retry Tries and Intervals
	- Set the Message Hop Count
	- Set the Masquerade Domain
	- Set a Fully Qualified Domain Name
	- Configure a Smart Host
	- Enable a Reverse DNS Lookup
	
	SUMMARY
	=======
	
	After a connection has been opened and the receiving server has acknowledged
	that it is ready to receive data, messages can be transmitted for delivery. This
	step-by-step article describes how to deliver messages.
	
	Configure Retry Tries and Intervals
	-----------------------------------
	
	If a message cannot be delivered on the first try, the Microsoft Simple Mail
	Transport Protocol (SMTP) Service sends it again from the Queue directory after
	a specified time. You can set the interval between delivery tries and also
	designate the number of times to try to deliver a message. After the limit is
	reached, the non-delivery report (NDR) and messages are sent to the Badmail
	directory.
	
	You can use these settings to increase your server output speed, but these
	settings affect outgoing messages only and have no effect on the rate at which
	other servers process incoming messages. To configure these settings, follow
	these steps:
	
	1. In the Microsoft Management Console (MMC), click to select the SMTP virtual
	  server, and then click Properties on the Action menu.
	
	2. Click the Delivery tab.
	
	3. For First retry interval (minutes), type a value for the time to try delivery
	  before posting the first notification. The default is 15 minutes.
	
	4. For Second retry interval (minutes), type a value for the time to try
	  delivery before posting the second notification. The default is 30 minutes,
	  which is 30 minutes after the first retry interval.
	
	5. For Third retry interval (minutes), type a value for the time to try delivery
	  before posting the third notification. The default is 60 minutes, which is 60
	  minutes after the second retry interval.
	
	6. For Subsequent retry interval (minutes), type a value for the time to try
	  delivery before posting a notification. The default is 240 minutes.
	
	Set the Message Hop Count
	-------------------------
	
	When a message is delivered, it may be routed to a number of servers before it
	reaches its final destination. You can designate how many servers the message is
	permitted to pass through. This is named the hop count. To set the message hop
	count, follow these steps:
	
	1. In the MMC, click to select the SMTP virtual server, and then click
	  Properties on the Action menu.
	
	2. On the Delivery tab, click Advanced to open the Advanced Delivery dialog box.
	
	3. For Maximum hop count, type a value for the number of hops a message can take
	  between the source and destination servers. The default is 15 hops.
	
	NOTE: After the hop count is set, the SMTP server counts the hops that are listed
	in the Received fields of the message header. When the number of Received fields
	exceeds the maximum hop count setting, the message is returned to the sender
	with an NDR.
	
	Set the Masquerade Domain
	-------------------------
	
	The masquerade domain replaces any local domain name that is used in any Mail
	From lines in the protocol. The replacement occurs on the first hop only.
	
	1. In the MMC, click to select the SMTP virtual server, and then click
	  Properties on the Action menu.
	
	2. On the Delivery tab, click Advanced to open the Advanced Delivery dialog box.
	
	3. For Masquerade domain, type a domain name that you want to appear in message
	  headers, instead of the actual name of the domain.
	
	NOTE: All replies to such messages are routed through the SMTP virtual server
	that uses the masquerade domain.
	
	
	Set a Fully Qualified Domain Name
	---------------------------------
	
	At startup, the name that is designated on the Network Identification tab of the
	System Properties dialog box is automatically used for the fully qualified
	domain name (FQDN). If you change the name (either manually or by joining a
	Microsoft Windows 2000 domain), the new name is automatically used for the FQDN
	the next time the computer is restarted. You do not have to perform any action
	to update the FQDN for the virtual server.
	
	To override the automatic use of the computer and domain names on the Network
	Identification tab, change the FQDN in the Advanced Delivery dialog box (this is
	accessed through the Delivery tab). The Microsoft SMTP Service can then use the
	designated name instead of the name that is specified on the Network
	Identification tab. To set the FQDN, follow these steps:
	
	1. In the MMC, click to select the SMTP virtual server, and then click
	  Properties on the Action menu.
	
	2. On the Delivery tab, click Advanced to open the Advanced Delivery dialog box.
	
	3. For Fully-qualified domain name, type the FQDN.
	
	Configure a Smart Host
	----------------------
	
	You can route all outgoing messages for remote domains through a smart host
	instead of sending them directly to the domain. This permits you to route
	messages over a connection that may be more direct or less costly than other
	routes. The smart host is similar to the route domain option for remote domains.
	The difference is that after a smart host is designated, all outgoing messages
	are routed to that server. With a route domain, only messages for the remote
	domain are routed to a specific server.
	
	If you set up a smart host, you can still designate a different route for a
	remote domain. The route domain setting overrides the smart host setting. To set
	up a smart host, follow these steps:
	
	1. In the MMC, click to select the SMTP virtual server, and then click
	  Properties on the Action menu.
	
	2. On the Delivery tab, click Advanced to open the Advanced Delivery dialog box.
	
	3. In Smart host, type the name of the smart host server. You can type a string
	  to represent a name, or you can type an IP address.
	
	4. If you want the Microsoft SMTP Service to try to deliver remote messages
	  directly before it forwards them to the smart host server, click to select
	  the Attempt direct delivery before sending to smart host check box. The
	  default is to send all remote messages to the smart host, not to try direct
	  delivery.
	
	NOTE: You can identify the smart host by the FQDN or by an IP address. Note that
	if you change the IP address, you must also change it on every virtual server.
	If you use an IP address, enclose it in brackets ([]) to increase system
	performance. Microsoft SMTP Service checks first for a server name, then an IP
	address. The brackets identify the value as an IP address, so the DNS lookup is
	bypassed.
	
	Enable a Reverse DNS Lookup
	---------------------------
	
	If you select this option, Microsoft SMTP Service tries to verify that the IP
	address of the client matches the host or domain that is submitted by the client
	in the EHLO or HELO command.
	
	NOTE: Because this feature verifies addresses for all incoming messages, its use
	can affect Microsoft SMTP Service performance. Clear the check box to disable
	the feature.
	
	If the reverse DNS lookup is successful, the Received header remains intact. If
	the verification is unsuccessful, "unverified" appears after the IP address in
	the Received header of the message. To enable reverse DNS lookup, follow these
	steps:
	
	1. In the MMC, click to select the SMTP virtual server, and then click
	  Properties on the Action menu.
	
	2. On the Delivery tab, click Advanced to open the Advanced Delivery dialog box.
	
	3. Click to select the Perform reverse DNS lookup on incoming messages check
	  box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
