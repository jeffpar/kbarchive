---
layout: page
title: "Q137309: Stop Msg: 0x0000003F NO_MORE_SYSTEM_PTEs SNA &amp; TCP/IP Sockets"
permalink: /kb/137/Q137309/
---

## Q137309: Stop Msg: 0x0000003F NO_MORE_SYSTEM_PTEs SNA &amp; TCP/IP Sockets

{% raw %}

	Article: Q137309
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This Windows NT STOP Message appears when SNA Server 2.1 or 2.11 supports users
	over native TCP/IP sockets.
	
	  STOP: 0x0000003f
	  NO_MORE_SYSTEM_PTEs
	
	CAUSE
	=====
	
	When an SNA client computer has a TCP/IP socket connection to an SNA Server, the
	server periodically sends a KeepAlive message to the client to speed up the
	detection of a lost client LAN session. SNA Server TCP/IP KeepAlive messages do
	not complete because the client's TCP receive window size dropped to zero. The
	SNA Server keeps on queuing new KeepAlive messages (even though earlier keep
	alive messages haven't completed) until the SNA Server runs out of system PTEs.
	
	RESOLUTION
	==========
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	Microsoft has modified the files, SNADMOD.DLL and SNAIP.DLL, so that SNA Server
	does not queue a new KeepAlive until the previous one has completed.
	
	
	Thus, the connection is aborted after a configurable timeout. The timeout is
	specified in the following registry parameter:
	
	  HKEY_LOCAL_MACHINE
	    \System
	      \CurrentControlSet
	        \Services
	          \Snabase
	            \Parameters
	              \SnaTcp
	                KeepAliveLimit: REG_DWORD: 0 - 0xFFFFFFFF
	
	The KeepAliveLimit specifies how many WatchDogTimeouts SNA Server waits before
	aborting the connection. The default watchdogtimeout value is 60 seconds, though
	this is also configurable under:
	
	  Hkey_local_machine
	    \System
	      \CurrentControlSet
	        \Services
	          \SnaBase
	            \Parameters
	              \watchdogtimeout REG_DWORD: <value>
	
	If a second keepalive is sent to a client box, SNA Server now logs Event 700 to
	indicate this (logged only when detailed problem analysis logging is enabled).
	If the limit is exhausted, then SNA Server logs a 701 event at a high severity
	to indicate this. The client's IP address is logged in these new events.
	
	The registry value, HardClse, controls how the connection is aborted. If the
	value is "yes", the connection is reset immediately and no effort is made to
	close the connection gracefully. The default value is "no". HardClse is found in
	the following subtree:
	
	  Hkey_local_machine
	    \System\CurrentControlSet
	      \Services
	        \SnaBase
	          \Parameters
	            \TcpIp
	              \HardClse
	
	REG_SZ: ("no" -or- "yes")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna no_more_system_ptes sna server
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.1,2.11
	
	=============================================================================
	

{% endraw %}
