---
layout: page
title: "Q218636: DHCP Options Not Set by SBS Setup"
permalink: /kb/218/Q218636/
---

## Q218636: DHCP Options Not Set by SBS Setup

	Article: Q218636
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Small Business Server (SBS) clients are unable to find the SBS server or any
	resources registered with WINS, especially if there is a router on the LAN
	between the clients and the SBS server.
	
	CAUSE
	=====
	
	The SBS automated setup program configures the DHCP scope with the address range
	of 10.0.0.x with a subnet mask of 255.255.255.0.
	
	No other supporting options, such as the addresses of WINS servers, the DNS
	domain name, and the router (default gateway) address, are set.
	
	RESOLUTION
	==========
	
	To work around this problem, use the DHCP Options menu in DHCP Manager to add
	the following options to the default DHCP scope for improved functionality.
	Except for router all other options can be added as global options; the router
	option is added as a Scope option.
	
	NOTE: Global options apply to all subnets. Scope options apply to the particular
	scope for which they are configured.
	
	- Option 003 Router: Add the address of the SBS server's internal network
	  interface card (NIC). Default is 10.0.0.2.
	
	- Option 015 Domain Name: Specify the Internet registered domain name, if you
	  have one.
	
	- Option 044 Wins/NBNS servers: Add the SBS server's internal NIC's address two
	  times. Default is 10.0.0.2.
	
	- Option 046 WINS/NBT Node Type: Set this to your preferred node type, usually
	  0x8 (h-node) or 0x4 (m-node).
	
	You do not need to restart your computer after adding these options. They are
	provided when an IP address is leased or when a existing lease is renewed.
	
	To force clients to renew their IP information, do the following, depending on
	the client's operating system.
	
	- Windows 95 or Windows 98 clients:
	
	  a. Run Winipcfg.exe.
	
	  b. Select the network adapter, and then click Renew.
	
	  c. Click More Info To verify that all the new information has been received
	     by the client computer.
	
	- Windows NT clients:
	
	  a. At a command prompt, type "IPCONFIG /renew" (without the quotation marks).
	
	  b. To check if the new information was received, type "IPCONFIG /all | MORE"
	     (without the quotation marks).
	
	MORE INFORMATION
	================
	
	These changes should be made if there will be RAS clients on your network.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	
