---
layout: page
title: "Q103888: OSI Model Data Transfer Services and LAN Manager Requirements"
permalink: /kb/103/Q103888/
---

## Q103888: OSI Model Data Transfer Services and LAN Manager Requirements

{% raw %}

	Article: Q103888
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	DATA TRANSFER SERVICES
	
	A connection oriented service requires that before any data transfer
	can take place a connection must be established from the source
	station to a single destination station. A connection functions like a
	tube: the sender pushes objects in at one end, and the receiver takes
	them out in proper sequence at the other end.  Since sequencing is
	provided, a message that is larger than the maximum transmit frame
	size can be broken down into multiple frames, sent across the network,
	and properly reassembled at the receiving station.
	
	A connectionless service requires no initial connection, and offers no
	guarantee that data units sent will arrive in sequence. Since no
	connection is required, messages can be sent to one or multiple
	destination stations. However, since no sequencing is provided, only
	single-frame messages can be sent.
	
	A "reliable" service never loses data because it requires that the
	the receiver acknowledge receipt of all data sent. If the sender does
	not receive acknowledgment, a reliable service re-sends. An
	"unreliable" service requires no acknowledgments.
	
	With message mode, data is sent, received, sequenced and acknowledged
	as discrete messages. Message boundaries are preserved from the
	sending entity to the receiving entity. With byte mode, data is sent,
	received, sequenced and acknowledged as a stream of bytes, with no
	message boundaries: when a 2K stream is received, there is no way to
	tell if it was sent as one 2K message, two 1K messages, or even 2048
	1-byte messages.
	
	A connectionless message (single-frame size) can be unacknowledged
	(datagram); or it can be acknowledged either with a simple ack (acked
	datagram) or an ack with data (request-reply).
	
	LAN MANAGER REQUIREMENTS
	
	LAN Manager requires that the underlying network drivers provide both
	reliable connection oriented, and unreliable connectionless datagram
	data transfer services.
	
	Reliable Connection Oriented
	----------------------------
	
	- Network logon (verified)
	
	- User password modification
	
	- Messages sent/received (computername or logon name)
	
	- Network file access
	
	- Network printer access
	
	- Network comm I/O device access
	
	- Remote server administration
	
	- Remote command execution
	
	- Reliable inter-process communications (Named Pipes, First-class Mailslots)
	
	- Domain controller synchronization
	
	- Dynamic file replication
	
	Unreliable Connectionless Datagram
	----------------------------------
	
	- Network logon (verified)
	
	- User password modification
	
	- Messages sent/received (domain or network)
	
	- Unreliable inter-process communications (Second-class Mailslots)
	
	- Server announcements
	
	- Domain controller synchronization
	
	- Dynamic file replication
	
	- Domain logon list maintenance
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
