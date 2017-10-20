---
layout: page
title: "Q178697: Remote Access Server Stops Responding After Several Connections"
permalink: /kb/178/Q178697/
---

## Q178697: Remote Access Server Stops Responding After Several Connections

{% raw %}

	Article: Q178697
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Windows NT Remote Access Service (RAS) server,
	you may receive the following error message:
	
	  Error Connecting to <RAS_server>. Dialing <Phone_number>.
	  Error 678: There is no answer.
	
	You may receive this error message even though the RAS server is available.
	
	CAUSE
	=====
	
	This problem can occur if the RAS server you are attempting to connect to is
	configured to use Dynamic Host Configuration Protocol (DHCP) to assign remote
	Transmission Control Protocol/Internet Protocol (TCP/IP) client addresses, and
	one of the following conditions exists:
	
	- There is no DHCP server on the network.
	
	- The DHCP server on the network is unavailable.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	Verify that a DHCP server exists and is available on the network.
	
	Method 2
	--------
	
	Configure the RAS server so that TCP/IP is not used as a RAS protocol. To do so,
	follow these steps on the RAS server:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, click the Services tab, click Remote Access Service,
	  click Properties, and then click Network.
	
	3. Under Server Settings, click the TCP/IP check box to clear it. Make sure the
	  check box for at least one other protocol under Server Settings is selected.
	
	4. Click OK, click Continue, and then click Close.
	
	5. When you are prompted to restart your computer, click Yes.
	
	Method 3
	--------
	
	Configure the RAS server to use a static address pool to assign remote TCP/IP
	client addresses. To do so, follow these steps on the RAS server:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, click the Services tab, click Remote Access Service,
	  and then click Properties.
	
	3. Click Network, and then click Configure next to the TCP/IP check box.
	
	4. Click Use Static Address Pool, and then type a beginning and ending range of
	  IP addresses for the RAS server to assign to remote TCP/IP clients.
	
	  NOTE: The range of IP addresses must be valid for the RAS server's subnet.
	
	5. Click OK, click OK, click Continue, and then click Close.
	
	6. When you are prompted to restart your computer, click Yes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If your RAS server is configured to use TCP/IP and another protocol, it may
	function correctly the first few times a RAS client attempts to make a
	connection, although the client is not assigned an IP address.
	
	For more information about TCP/IP subnets and addressing, see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q164015
	  TITLE : Understanding TCP/IP Addressing and Subnetting Basics
	
	
	Additional query words: dun netbeui nwlink ipx spx ring phone line
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
