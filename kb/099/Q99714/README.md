---
layout: page
title: "Q99714: MHS: Connecting Microsoft Mail to cc:Mail"
permalink: /kb/099/Q99714/
---

## Q99714: MHS: Connecting Microsoft Mail to cc:Mail

	Article: Q99714
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus cc:Mail includes MHSLink software that connects to the MHS host, which
	then sends the messages. Within cc:Mail, the users in MHS look like another
	cc:Mail Post Office. The MHS host is spawned by the cc:Mail Router, but this
	makes it difficult to do asynchronous connections from that host.
	
	Version 3.0 of Microsoft Mail Gateway to MHS (MHS Gateway) must be defined from
	the cc:Mail gateway as indirect, through the host that runs the gateway. This is
	because the MHS host has to create messages for every recipient going from
	Microsoft Mail to cc:Mail.
	
	Standard Message Format (SMF)
	-----------------------------
	
	The cc:Mail Gateway to MHS is Standard Message Format (SMF) 64 compliant. This
	means messages can have only one recipient. If a message is sent from Microsoft
	Mail to cc:Mail through MHS, addressed to multiple recipients, the routing
	procedure in MHS splits the message up into the corresponding number of messages
	and submits them to the cc:Mail gateway
	
	The MHS Gateway supports SMF 70 by default, but SMF 64 can be implemented by
	means of the -G64 option in the command line. The gateway setup area, under
	Routes to Workgroups, Hosts or Gateways has an area where the gateway version
	can be changed. This line appears only if you are installing the gateway on an
	MHS version 1.21 or 1.5 host.
	
	If you are installing the gateway on an MHS version 1.21 host, use SMF 64. If you
	are installing the gateway on an MHS version 1.5 host, use SMF 70. Also use SMF
	70 on a NetWare Global MHS server (this is under the SMF Gateways section).
	
	Addressing
	----------
	
	To add user names in cc:Mail as the administrator, add the remote postoffice as
	described in the cc:Mail documentation.
	
	To add an individual user, enter the address
	
	  " POSTOFF {NETWORK/POSTOFFICE/MAILBOX} " (without the quotation marks)
	
	where POSTOFF is the locally defined postoffice. This allows cc:Mail to send mail
	using the extended addressing format.
	
	To send mail to an unlisted user on a defined remote postoffice, first select the
	destination postoffice, and then type the full or concise extended address of
	the Microsoft Mail user:
	
	  " USER@GATEWAY " (without the quotation marks)
	
	When the message has been received by Microsoft Mail, choose Reply and the
	cc:Mail address is displayed. In the Windows client, the friendly name is
	displayed. Double-click the name to display the MHS addressing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
