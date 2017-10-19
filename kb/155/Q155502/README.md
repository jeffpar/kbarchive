---
layout: page
title: "Q155502: Manual Default Gateway Does Not Override DHCP Lease"
permalink: /kb/155/Q155502/
---

## Q155502: Manual Default Gateway Does Not Override DHCP Lease

	Article: Q155502
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Windows 95 is configured to be a DHCP client, TCP/IP communication to some
	remote network segments is sporadic or completely dysfunctional.
	
	CAUSE
	=====
	
	When you configure the TCP/IP protocol properties (in the Network Control Panel
	tool), you have manually entered an IP address in Installed Gateways (on the
	Gateway tab). The program Winipcfg.exe confirms that this manually configured
	default gateway is not being used. The DHCP-assigned default gateway is used
	instead of the one listed in the TCP/IP properties in the Network Control Panel
	tool.
	
	RESOLUTION
	==========
	
	You can run the program Route.exe from an MS-DOS command prompt (command window)
	to manually override the default gateway that was assigned in the DHCP lease.
	For example, if DHCP assigned a default gateway of 199.199.10.1, yet you need to
	override with 199.199.10.50, you would use the following commands:
	
	1. View the routing table using the following command:
	
	     c:>  ROUTE  print
	
	2. Your default gateway will show up at the top of the list:
	
	    Net Address   Netmask   Gateway Addr     Interface     Metric
	        0.0.0.0   0.0.0.0   199.199.10.1   199.199.10.69        1
	
	3. Delete the existing default gateway using the following command:
	
	     c:>  ROUTE  delete  0.0.0.0
	
	4. Add your new default gateway using the following command:
	
	     c:>  ROUTE  add  0.0.0.0  MASK  0.0.0.0  199.199.10.50
	
	5. Confirm the new default gateway you entered in the previous step:
	
	    Net Address   Netmask   Gateway Addr     Interface     Metric
	        0.0.0.0   0.0.0.0  199.199.10.50   199.199.10.69        1
	
	NOTE: The new gateway address will not be accepted if Windows 95 is unable to
	reach the gateway using the IP address and Subnet mask of the installed network
	card(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: DG D.G.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win95
	
	=============================================================================
	
