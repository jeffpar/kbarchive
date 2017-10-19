---
layout: page
title: "Q165939: 3270 LUs May Now Be Assigned to TCP/IP Addresses"
permalink: /kb/165/Q165939/
---

## Q165939: 3270 LUs May Now Be Assigned to TCP/IP Addresses

	Article: Q165939
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In previous versions of SNA Server, 3270 LUs could not be assigned to IP
	addresses. This feature will be available in the next Service Pack for SNA
	Server version 3.0.
	
	CAUSE
	=====
	
	Microsoft SNA Server was not originally designed to support assigning 3270 LUs
	to IP addresses.
	
	RESOLUTION
	==========
	
	The option to assign LUs and LU Pools to the following address types will be
	supported in the next Service Pack for SNA Server version 3.0: IP, IPX, Vines
	IP, and AppleTalk. The workstation property page allows a choice from three
	types of Workstation IDs: a name, an address (IP, IPX, AppleTalk, Banyan Vines),
	or an IP subnet. If an IP subnet is entered, an IP subnet mask is also
	required.
	
	IP Address
	----------
	
	The IP address is specified in the familiar dotted decimal format. An example of
	the dotted decimal address is:
	
	  157.57.122.19
	
	IPX Address
	-----------
	
	The IPX address is the MAC address of the client's network adapter. An example of
	this address is:
	
	  000A00605CC7
	
	Vines IP Address
	----------------
	
	The Vines IP address is specified in the format
	
	  <network_number>.<subnetwork_number>
	
	where both are in hexadecimal format. The network_number length is 4 bytes and
	the subnetwork_number length is 2 bytes. An example of this address is:
	
	  0027E3CA.801E
	
	AppleTalk Address
	-----------------
	
	The AppleTalk address is specified in the format
	
	  <network>.<node>
	
	where both are in decimal format. The network length is 2 bytes (0 - 65535) and
	the node length is 1 byte (0 - 255). An example of this address is:
	
	  5.37
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
