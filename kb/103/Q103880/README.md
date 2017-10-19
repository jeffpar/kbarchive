---
layout: page
title: "Q103880: Overview: Protocol Drivers"
permalink: /kb/103/Q103880/
---

## Q103880: Overview: Protocol Drivers

	Article: Q103880
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	THE PROTOCOL DRIVER
	
	The redirector uses the services of a protocol driver (such as
	NetBEUI or TCP/IP) to communicate with the network. Generally
	speaking, the redirector formats a server message block (SMB)
	request and submits it to the protocol driver to be transmitted
	on the network.
	
	Microsoft network system protocol drivers provide two data transfer
	service types required by the redirector for communication with
	remote stations:
	
	- Reliable connection oriented, also called session
	
	- Unreliable connectionless, also called datagram
	
	Reliable Connection Oriented--Session
	-------------------------------------
	
	In this transfer service, the protocol driver assumes responsibility
	for transferring the entire message (that has been passed down from
	the redirector) from source to destination, with full acknowledgment
	from the destination station, and within an acceptable time period.
	If, for any reason, the protocol driver cannot transfer the message
	within the time specified, it returns an explanatory error code to the
	redirector.
	
	The redirector uses this service for remote file reads and writes,
	and all other operations that require guaranteed reliable data
	transfer.
	
	Unreliable Connectionless--Datagram
	-----------------------------------
	
	In this transfer service, the protocol transmits the message once or a
	specified number of times, assuring only that the message was properly
	transmitted on the network medium. No acknowledgment from destination
	stations is required.
	
	The redirector uses this service for operations that do not require
	guaranteed message delivery, such as "broadcasting" a message to
	multiple users.
	
	MULTIPLE PROTOCOL DRIVERS
	
	Two stations must run the same protocols in order to communicate.
	
	An important feature of Microsoft network systems is that you can
	install and concurrently use a variety of protocol drivers, so that
	you can simultaneously communicate with remote stations running
	different protocols.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
