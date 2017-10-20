---
layout: page
title: "Q94246: TCP Connections Require Extra Time to Close"
permalink: /kb/094/Q94246/
---

## Q94246: TCP Connections Require Extra Time to Close

{% raw %}

	Article: Q94246
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Microsoft LAN Manager TCP/IP stack has configurable parameters to select the
	number of NetBIOS sessions and TCP connections available. The parameters are
	configurable because each connection requires MS-DOS memory for buffering data
	and memory is often tight. When a TCP connection is closed, there is a short
	delay before the same connection can be used again.
	
	This can create an interesting situation for LAN Manager MS-DOS clients using
	logon scripts with many TCP connections. If you are already logged on and enter
	
	  " net logon user password /y" (without the quotation marks)
	
	some of the old connections may still be pending when the script attempts to log
	you on and establish new ones. In some instances, this can result in errors,
	including "DOS error 53".
	
	SYMPTOMS
	========
	
	A "DOS error 53" or "bad username or password" error is displayed when you
	re-log on, or a long pause may occur when you executing batch files that connect
	and disconnect to many resources.
	
	CAUSE
	=====
	
	This problem occurs because LAN Manager adheres to RFC 793 and RFC 1122, which
	stipulate how TCP connections are to be closed in systems configured with
	insufficient TCP connections. This method is best explained by the following
	excerpt from RFC 1122, Section 4.2.2.13:
	
	  A TCP connection may terminate in two ways: (1) the normal TCP close sequence
	  using a FIN handshake, and (2) an "abort" in which one or more RST segments
	  are sent and the connection state is immediately discarded. If a TCP
	  connection is closed by the remote site, the local application MUST be
	  informed whether it closed normally or was aborted.
	
	The normal TCP close sequence delivers buffered data reliably in both directions.
	Because the two directions of a TCP connection are closed independently, it is
	possible for a connection to be "half closed," (that is, closed in only one
	direction), and a host is permitted to continue sending data in the open
	direction on a half-closed connection.
	
	A host MAY implement a "half-duplex" TCP close sequence, so an application that
	has called CLOSE cannot continue to read data from the connection. If such a
	host issues a CLOSE call while received data is still pending in TCP, or if new
	data is received after CLOSE is called, its TCP should send an RST to show that
	data was lost.
	
	When a connection is closed actively, it MUST linger in TIME-WAIT state for a
	time 2xMSL (maximum segment lifetime). However, it MAY accept a new SYN from the
	remote TCP to reopen the connection directly from TIME- WAIT state, if it:
	
	- Assigns its initial sequence number for the new connection to be larger than
	  the largest sequence number it used on the previous connection incarnation
	
	and
	
	- Returns to TIME-WAIT state if the SYN turns out to be an old duplicate
	
	RESOLUTION
	==========
	
	MS-DOS systems using TCP/IP may need to be configured for extra TCPCONNECTIONS
	in the PROTOCOL.INI file to prevent exhausting this resource. Alternatively, to
	re-logon you may "net logoff" first, wait 5 seconds, then "net logon".
	
	  The parameter TCPCONNECTIONS defaults to (NBSESSIONS + 1 + NUMSOCKETS +
	  NSESSIONS).
	
	  * NBSESSIONS = The number of NetBIOS sessions, defaults to 6.
	  * NUMSOCKETS = The number of sockets, only present if Microsoft TCP/IP
	  Utilities for LAN Manager are installed, defaults to 8 in 2.1 and 2.1a, 4 in
	  2.2. This parameter is set in TCPUTILS.INI.
	
	  * NSESSIONS = The number of telnet connections, only present if Microsoft
	  TCP/IP Utilities for LAN Manager are installed, defaults to 2. This parameter
	  is set in TCPUTILS.INI.
	
	Thus, systems with the utilities default TCPCONNECTIONS to 17, which is usually
	adequate. Systems without the utilities default to 7, which is often too low for
	heavy network users.
	
	TCPCONNECTIONS is best adjusted by altering one of the above parameters. In LAN
	Manager 2.1, 2.1a, and 2.2, TCPCONNECTIONS itself can be set in PROTOCOL.INI,
	but Microsoft may remove it as a configurable parameter in a future version.
	Therefore you should alter one of the other parameters and let TCPCONNECTIONS be
	determined by the formula.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  tuning and TCP/IP and tcpwindowsize and tcpsegmentsize
	
	Additional query words: RFC 1122 793 DOS error 53 tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
