---
layout: page
title: "Q216032: Telnet 3270 Clients Experience Delay During Session Startup"
permalink: /kb/216/Q216032/
---

## Q216032: Telnet 3270 Clients Experience Delay During Session Startup

	Article: Q216032
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Telnet 3270 clients may experience a long delay when starting sessions. This
	symptom is observed when a DNS Server is not available.
	
	CAUSE
	=====
	
	In the event a DNS Server is not available and Use Name Resolution is
	configured, a Telnet client will experience a delay of up to 50 seconds during
	session startup. The SNA Server expects a response from the DNS Server. SNA
	Server will delay the session until a timeout is reached.
	
	RESOLUTION
	==========
	
	The TN3270 Server Service contains a configuration option titled "Use Name
	Resolution". Use Name Resolution is found on the General tab of the TN3270
	Properties dialog box. Use Name Resolution is required if access to TN3270
	sessions is restricted through workstation names. It is not required if access
	to TN3270 sessions is restricted through a TCP/IP address or subnet. This option
	should be checked only if a domain name resolver is available on the network.
	
	MORE INFORMATION
	================
	
	A Microsoft Network Monitor trace shows the Telnet client and SNA Server
	performing a three-way TCP handshake to initiate the session within 0.003
	seconds. A delay in excess of 45 seconds occurred before the Telnet session was
	available to the client.
	
	Here is an example of a three-way handshake to initiate a Telnet session.
	
	  Frame 1 TCP ....S., len:    4, seq:   4505720-4505723, ack:         0, win: 8192, src: 1147  dst:   23 (TELNET)  <BR/>
	
	  Frame 2 TCP .A..S., len:    4, seq:   2489546-2489549, ack:   4505721, win:16064, src:   23 (TELNET)  dst: 1147 <BR/>
	
	  Frame 3 TCP .A...., len:    0, seq:   4505721-4505721, ack:   2489547, win:16064, src: 1147  dst:   23 (TELNET)
	
	Here is an example of the first two frames in the Telnet session. These frames
	will be delayed from the first three frames by 45 seconds or more.
	
	  Frame 4 TELNET To Client With Port = 1147 
	
	  Frame 5 TELNET To Server From Port = 1147
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	
