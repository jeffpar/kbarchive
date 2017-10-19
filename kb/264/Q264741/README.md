---
layout: page
title: "Q264741: Cannot Connect to Remote Computers by Using User Manager and Ser"
permalink: /kb/264/Q264741/
---

## Q264741: Cannot Connect to Remote Computers by Using User Manager and Ser

	Article: Q264741
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NetBIOS-based applications such as User Manager and Server Manager
	to connect to remote computers, the connection may not be established and the
	following error message may appear:
	
	  Could not find domain controller for this domain
	
	Administrative tools that connect by Internet Protocol (IP) address, such as DHCP
	Manager and WINS Manager, work properly.
	
	In addition, you are able to ping the remote computers by IP address but not by
	computer name. If you create an LMHOSTS file that includes mappings to the
	remote computers, you can ping by computer name but cannot connect to resources
	on the remote computer. The Net Use\\server_name\share command also does not
	work. The problem does not occur when you are connecting to computers with
	static IP addresses.
	
	CAUSE
	=====
	
	This behavior can occur when the Dynamic Host Configuration Protocol (DHCP)
	server is configured to assign clients a NetBIOS Scope ID and the option is
	being used incorrectly.
	
	RESOLUTION
	==========
	
	From a client computer experiencing this behavior, use the IPCONFIG / all
	command to verify that a NetBIOS Scope ID has been assigned. From DHCP Manager,
	remove the NetBIOS Scope ID from the DHCP scope options. Have all DHCP client
	computers use the IPCONFIG command to release and renew their IP addresses.
	
	MORE INFORMATION
	================
	
	To remove the NetBIOS Scope ID from the DHCP scope options, follow these steps:
	
	1. Start DHCP Manager.
	
	2. In the left pane of DHCP Manager, double-click the IP address of the
	  appropriate server to display the DHCP scopes.
	
	3. In the left pane, click the scope.
	
	4. On the DHCP Options menu, click Scope.
	
	5. In the DHCP Options: Scope dialog box, under Active Options, click 047
	  NetBIOS Scope ID and then click Remove.
	
	6. Click OK, and then quit DHCP Manager.
	
	To release and renew DHCP client IP addresses, follow these steps:
	
	1. Start a command prompt.
	
	2. To release the IP address, use the following command:
	
	  "IPCONFIG /RELEASE" (without the quotation marks)
	
	3. To renew the IP address, use the following command:
	
	  "IPCONFIG /RENEW" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
