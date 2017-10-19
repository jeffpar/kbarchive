---
layout: page
title: "Q150281: Unexplained DHCP Broadcasts Using Windows NT and RAS"
permalink: /kb/150/Q150281/
---

## Q150281: Unexplained DHCP Broadcasts Using Windows NT and RAS

	Article: Q150281
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DHCP broadcasts are being inserted onto the network. The source MAC address for
	these packets begins with 5, but none of the network cards on the network have
	MAC addresses that match the source MAC address of the DHCP packets.
	
	CAUSE
	=====
	
	The likely cause of this is the Remote Access Service (RAS). When you configure
	a RAS server for dial-in with the TCP/IP protocol, Windows NT will, by default,
	attempt to obtain IP addresses for the RAS service using Dynamic Host
	Configuration Protocol (DHCP). NT will send DHCP requests every two minutes
	until it successfully obtains addresses for the RAS service. When there is no
	DHCP server available on the network, NT will continue to send DHCP requests
	indefinitely.
	
	Both DHCP and BOOTP use User Datagram Protocol (UDP) port 67. Because of this,
	DHCP requests are frequently interpreted to be BOOTP requests.
	
	RESOLUTION
	==========
	
	You can resolve this problem by statically configuring IP addresses for your RAS
	servers. To do this you must first stop the Remote Access Service, which is done
	by performing the following steps:
	
	1. From Control Panel, choose Services.
	
	2. From the list of services, select "Remote Access Server."
	
	3. Click on the Stop button.
	
	4. When NT asks "Are you sure you want to stop the Remote Access Server
	  Service?" select "Yes."
	
	5. After the service stops, click the "Close" button.
	
	When RAS is closed, you must then specify an IP address range for the RAS server,
	which is done by performing the following procedure:
	
	1. From Control Panel, choose Network.
	
	2. In the Installed Network Software dialog box, select "Remote Access Service."
	
	3. Click on the "Configure" button.
	
	4. Select the first RAS port that is configured for dial-in.
	
	5. Click on "Network."
	
	6. Under the Server Settings, click on "Configure" next to TCP/IP.
	
	7. Choose the "Use static address pool" button and specify an IP address range
	  on the same subnet as the RAS server. (The address range must have at least
	  as many unused IP addresses as the number of dial-in ports, plus one. For
	  example, a machine which has two dial-in ports configured must have at least
	  three IP addresses defined in the static address pool.)
	
	8. Select "OK," "OK," "Continue," and "OK."
	
	9. Restart the computer after it completes its bindings checks.
	
	To complete the entire process, restart RAS as needed.
	
	Repeat the above procedure on every RAS server that is configured for dial- in
	using TCP/IP.
	
	Additional query words: sniff trace netmon
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
