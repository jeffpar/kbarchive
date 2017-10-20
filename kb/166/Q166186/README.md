---
layout: page
title: "Q166186: OS/2 with TCP/IP May Refuse Socket Connections from Windows NT"
permalink: /kb/166/Q166186/
---

## Q166186: OS/2 with TCP/IP May Refuse Socket Connections from Windows NT

{% raw %}

	Article: Q166186
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Workstation clients connecting to an OS/2 Warp server running Lotus
	Notes may experience a problem where the clients are using all of the available
	sockets on the OS/2 Warp server. This causes a problem where no new clients are
	able to attach to the Lotus Notes server because there are no sockets
	available.
	
	Netstat -n shows clients with several connections with a state of FIN-WAIT-2.
	
	Traces show that the computer running Windows NT Workstation is not completing
	the close correctly by ACKing the server Fin. The OS/2 server retries several
	times and then resets the connection:
	
	CLIENT (ack-Fin)
	================
	13 0.237 HP    D882D6 Cisco 01522C TCP .A...F, len:    0, seq: 960111578-
	960111578, ack:2041908096, win: 7826, src: 2130  dst: 1352  Client
	144.250.61.21 IP
	
	Server(ack)
	===========
	14 0.239 Cisco 01522C HP    D882D6 TCP .A...., len:    0, seq:2041908096-
	2041908096, ack: 960111579, win:28672, src: 1352  dst: 2130  144.250.61.21
	Client IP
	
	Server (ack-Fin)
	================
	15 0.244 Cisco 01522C HP    D882D6 TCP .A...F, len:    0, seq:2041908096-
	2041908096, ack: 960111579, win:28672, src: 1352  dst: 2130  144.250.61.21
	Client IP
	
	Server (ack-Fin)
	================
	19 0.804 Cisco 01522C HP    D882D6 TCP .A...F, len:    0, seq:2041908096-
	2041908096, ack: 960111579, win:28672, src: 1352  dst: 2130  144.250.61.21
	Client IP
	.
	.
	.
	
	The server continues to ACK-Fin retry and then resets the connection.
	
	Server (reset)
	==============
	100 319.554 Cisco 01522C HP    D882D6 TCP .A.R.., len:    0, seq:2041908097-
	2041908097, ack: 960111579, win:28672, src: 1352  dst: 2130  144.250.61.21
	Client IP
	
	CAUSE
	=====
	
	There is a problem in Tcpip.sys where the Fin ACK is received from the server
	and is processed, but it is not acknowledgeed. This problem has been corrected
	in a new version of Tcpip.sys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
