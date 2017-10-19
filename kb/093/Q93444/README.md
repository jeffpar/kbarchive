---
layout: page
title: "Q93444: Tuning TCP/IP for Performance"
permalink: /kb/093/Q93444/
---

## Q93444: Tuning TCP/IP for Performance

	Article: Q93444
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The performance of Microsoft LAN Manager networks using TCP/IP can often be
	increased significantly by carefully tuning several stack parameters:
	
	- tcpsegmentsize (the maximum size of a single TCP segment)
	
	- tcpwindowsize (the amount of data a receiving TCP stack can buffer)
	
	- nbsessions (the maximum number of NetBIOS sessions available)
	
	- tcpconnections (the maximum number of TCP connections available)
	
	For optimum performance, tcpsegmentsize should be the size of the MTU (maximum
	transfer unit) the media can handle, minus all headers up through the IP layer.
	LAN Manager TCP/IP allows sizes of 1450 bytes or less to be assigned to this
	parameter.
	
	Also for optimum performance, tcpwindowsize should typically be as large as
	possible, in increments of tcpsegmentsize. Increasing tcpwindowsize, however,
	requires more memory, which can be a problem under MS-DOS. The TCP driver must
	load into a single 64K segment of memory. The driver must be able to buffer
	"tcpwindowsize" bytes of data on EACH tcpconnection, so the tcpwindowsize and
	tcpconnections values must be balanced against each other to achieve the best
	overall performance and connectivity.
	
	MORE INFORMATION
	================
	
	When a Microsoft LAN Manager TCP/IP workstation connects to a resource on a
	server, a TCP connection is established to the server unless one already exists.
	Next, a NetBIOS session is established over that TCP connection. If a second
	resource on the same server is requested, the SAME NetBIOS session and TCP
	connection are used, and activity for both resources is multiplexed over that
	single session and connection. However, any connections made using the Microsoft
	TCP/IP utilities for LAN Manager to other resources use one TCP connection
	each.
	
	So, tuning can be reduced to a simple process:
	
	1. Determine the number of TCP connections needed on your workstation.
	
	2. Set nbsessions and TCPUTILS.INI parameters as appropriate.
	
	3. Use the table below to choose the largest possible tcpwindowsize.
	
	Example
	-------
	
	A "net use" command on the client shows:
	
	Status      Local name     Remote name
	
	OK          D:             \\server1\shareD
	OK          E:             \\server1\shareE
	OK          F:             \\server2\shareF
	OK          G:             \\server2\shareG
	OK          H:             \\server3\shareH
	OK          I:             \\server3\shareI
	OK          LPT1           \\server1\laser
	OK          LPT2           \\server1\lineprint
	
	Notice there are sessions to three servers, using three nbsessions, and three
	tcpconnections. In addition, assume you have the Microsoft TCP/IP Utilities for
	LAN Manager installed, and you use one telnet session and three sockets. By
	default, the value of nbsessions is 6, which allows some headroom for sessions
	to more LAN Manager servers.
	
	The formula used internally for tcpconnections is:
	
	  tcpconnections = nbsessions + 1 + [nsessions + numsockets]
	
	Nsessions and numsockets exist only if the utilities are installed, and examining
	the TCPUTILS.INI file reveals their default values to be 2 and 8, respectively.
	(In LAN Manager 2.2, the value for numsockets is scheduled to change to 4).
	
	So, if you are using LAN Manager version 2.1a or earlier, the default
	tcpconnections are 6 + 1 + 2 + 8 = 17. You only need one telnet connection and
	three sockets, so you should first reduce those parameters in TCPUTILS.INI.
	After the reduction, you are left with 6 + 1 + 1 + 3 = 11 tcpconnections. The
	table below shows that you can support a tcpwindowsize of no more than 2900
	bytes on an MS-DOS client.
	
	tcpconnections  tcpwindowsize  tcpsegmentsize
	 6 or less         5800           1450
	 7 - 8             4350           1450
	 9 - 11            2900           1450  <-- Optimum configuration
	12 - 22            1450           1450      for 11 tcpconnections
	
	You can add these parameters to the PROTOCOL.INI file in the [TCPIP_XIF] section.
	You should also modify the MS OS/2 server for versions 2.1 and 2.1a. In
	PROTOCOL.INI, set:
	
	tcpsegmentsize=1450   (the same as for the clients)
	tcpwindowsize=4350    (MS OS/2 normally has plenty of memory for this)
	
	Microsoft no longer recommends setting the tcpconnections value in PROTOCOL.INI,
	and may remove the parameter in a future version. For the best results, adjust
	the parameters that are used to calculate tcpconnections and allow it to adjust
	internally.
	
	Note that if you don't have the utilities installed and aren't using sockets or
	telnet, tcpconnections calculates to 6 + 1 = 7, so you would select a
	tcpwindowsize of 4350 from the above table.
	
	NOTE: If your network adapter card is incapable of handling a tcpwindowsize burst
	of frames, it may drop one or more of them. If this occurs, performance will
	degrade seriously. Some older cards may be able to buffer only one incoming
	frame at a time.
	
	The tcpwindowsize should be as large as possible within the memory constraints of
	the systems involved. On MS OS/2, tcpwindowsize should work at 4350 in all
	cases, and this will be the new default in LAN Manager 2.2. Performance gains
	will be most significant on high-delay networks such as those found in many WAN
	environments.
	
	REFERENCES
	==========
	
	"Optimizing The Microsoft LAN Manager TCP/IP Protocol," a tech note available
	from Microsoft Inside Sales.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
