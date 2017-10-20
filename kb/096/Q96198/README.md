---
layout: page
title: "Q96198: TCP/IP PROTOCOL.INI Documentation Updates and Corrections"
permalink: /kb/096/Q96198/
---

## Q96198: TCP/IP PROTOCOL.INI Documentation Updates and Corrections

{% raw %}

	Article: Q96198
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article contains corrections and additions to the TCP/IP PROTOCOL.INI
	configuration parameters. The first section contains corrections to the
	published documentation. The second contains several undocumented parameters.
	
	Documentation Corrections and Explanations
	------------------------------------------
	
	BCASTADDR: The IP address to which broadcasts are sent. The default for this is a
	segment broadcast, which is the workstation's IP address with the node portion
	all set to ones. Not supported for OS/2.
	
	TCPKEEPALIVE: The interval between sending TCP keepalive packets on an idle
	connection. Keepalives are sent as a connection assurance mechanism.
	
	Default: 600 seconds
	Range: 60-32767
	
	
	TCPCONNTIMEOUT: The timeout period for establishing a new connection.
	
	Default: 30 seconds
	Range: 1-32767
	
	SCOPE: The SCOPE parameter is not supported under OS/2.
	
	Undocumented Parameters
	-----------------------
	
	TCPRETRIES: Under LAN Manager versions earlier than 2.2, the number of TCPRETRIES
	is fixed at 17, and the following timings are used for TCPRETRIES:
	
	     Retry #         Delay      Total Elapsed Time
	               --------------------------------------------------
	     1st retry:     1 second      1 second
	     2nd retry:     2 seconds     3 seconds
	     3rd retry:     4 seconds     7 seconds
	     4th retry:     6 seconds    13 seconds
	     5th retry:     8 seconds    21 seconds
	     6th retry:    10 seconds    31 seconds
	     7th retry:    15 seconds    46 seconds
	     8th retry:    20 seconds    66 seconds
	     9th retry:    30 seconds    96 seconds
	     10th retry:   40 seconds   136 seconds
	     11th retry:   50 seconds   186 seconds
	     12th retry:   60 seconds   246 seconds
	     13th retry:   80 seconds   326 seconds
	     14th retry:  100 seconds   426 seconds
	     15th retry:  120 seconds   546 seconds
	     16th retry:  150 seconds   696 seconds
	     17th retry:  200 seconds   896 seconds
	
	Under 2.2, the TCPRETRIES parameter is exposed. The same timings are used, but by
	specifying a value for TCPRETRIES in PROTOCOL.INI you can control the timeout
	period. The default has been changed to 8.
	
	Default: 8 (About 1 minute total)
	Range: 1-17 (17 would be about 15 minutes)
	
	UDP_Q_PER_USER: The number of UDP buffers to allocate for each UDP port. When a
	datagram is received for a given UDP port, it must be queued by UDP. A pool of
	buffers is maintained for this purpose. UDP stuffs incoming datagrams into
	buffers; upper layers read them from the queue and return buffers to the pool.
	When no UDP buffers are available, datagrams are dropped. Extremely busy (high
	broadcast) network clients may benefit from raising this value slightly above
	the default. If a third-party application is using UDP, the number may also need
	to be increased.
	
	  DOS OS/2
	
	  Default: 3 16
	  Range: 1-10 1-64
	
	UDP_Q_TOTAL: The total number of UDP buffers available for all ports.
	
	  DOS OS/2
	
	  Default: 20 64
	  Range: 1-30 1-256
	
	TCPMAXBDS2USER: (OS/2 only) The maximum number of TCP buffers a client may hold.
	Applications using large numbers of small packets may benefit from increasing
	this parameter.
	
	Default: 4
	Range: 1-30
	
	TCPMAXBDS2HOLD: (OS/2 only) The total number of TCP buffers allocated for all
	incoming TCP packets. Applications using large numbers of small packets may
	benefit from increasing this parameter.
	
	Default: 10
	Range: 1-30
	
	
	BCASTTIMEOUT: Timeout during netbios name query/registration, specified in
	multiples of timer-ticks
	(1 timer-tick = 55ms). 2.1a and 2.2 only.
	
	Default: 5 (this is what the RFC specifies)
	Range: 4-51
	
	BCASTRETRY: Number of retries during NetBIOS name query/registration. 2.1a and
	2.2 only.
	
	Default: 3
	Range: Any number greater than 0
	
	The above parameters override the existing documentation as shown. Care should be
	taken when spelling parameters, as they will be accepted but won't have any
	effect when mis-spelled.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2 tuning tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
