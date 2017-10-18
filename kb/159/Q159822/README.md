---
layout: page
title: "Q159822: DHCP Clients' Ability to Send DHCPDECLINE Message"
permalink: kb/159/Q159822/
---

## Q159822: DHCP Clients' Ability to Send DHCPDECLINE Message

	Article: Q159822
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the current implementation of the Microsoft dynamic host configuration
	protocol (DHCP) service, if a device is provided with an Internet Provider (IP)
	configuration by way of DHCP, we do a courtesy Address Resolution Protocol (ARP)
	with the provided IP address. If anyone responds, that means the address is in
	use. In this case, when a duplicate IP is detected as the TCP/IP protocol tries
	to initialize, a popup message is provided to the user stating that a duplicate
	IP address exists. The user is informed to get system administration assistance.
	At that point, the TCP/IP protocol initialization is failed and the user can't
	access any network resources.
	
	MORE INFORMATION
	================
	
	DHCP RFC 1541 permits that instead of informing the user, initiating a manual
	process, a DHCP_DECLINE transaction can be returned to the DHCP server. The
	server will then allocate a different IP address for the device.
	
	DHCP RFC 1541 indicates that it is the responsibility of the DHCP client to
	notify the DHCP server with a DHCP_DECLINE transaction if the client determines
	that there is a problem with the DHCP parameters provided by the DHCP Server.
	
	The RFC states:
	
	  3.1 Client-server interaction - allocating a network address:
	
	  The client receives the DHCPACK message with configuration parameters. The
	  client performs a final check on the parameters and notes the duration of the
	  lease and of the lease identification cookie specified in the DHCPACK
	  message. At this point, the client is configured. If the client detects a
	  problem with the parameters in the DHCPACK message, the client sends a
	  DHCPDECLINE message to the server and restarts the configuration process. The
	  client should wait a minimum of ten seconds before restarting the
	  configuration process to avoid excessive network traffic in case of looping.
	
	  4.3.3 DHCPDECLINE message:
	
	  If the server receives a DHCPDECLINE message, the client has discovered
	  through some other means that the suggested network address is already in
	  use. The server MUST mark the network address as "not allocated" and SHOULD
	  notify the local system administrator of a possible configuration problem.
	
	The Windows 95/98 Downlevel DHCP Clients have also been updated to include
	DHCPDECLINE functionality. Windows 98 includes the DHCPDECLINE ability. For
	Windows 95, please refer to either of the following articles:
	
	  ARTICLE-ID: Q191494
	  TITLE : Dial-Up Networking 1.3 Upgrade Available
	
	  ARTICLE-ID: Q182108
	  TITLE : Availability of Windows Sockets 2.0 for Windows 95
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: w95 SP2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
