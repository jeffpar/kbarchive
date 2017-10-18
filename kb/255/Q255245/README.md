---
layout: page
title: "Q255245: Unable to Remove or Change the DNS IP Address Assigned by RAS"
permalink: kb/255/Q255245/
---

## Q255245: Unable to Remove or Change the DNS IP Address Assigned by RAS

	Article: Q255245
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a Microsoft Windows 95-based client connects to a Microsoft Windows NT
	4.0-based remote access server and uses a server-assigned Internet Protocol (IP)
	address, the client inherits the IP address of the Domain Name System (DNS)
	server used by the remote access server, and not the DNS server IP address
	assigned by the Dynamic Host Configuration Protocol (DHCP) scope options. You
	are unable to remove or change the IP address of the DNS server that is assigned
	by the remote access server.
	
	CAUSE
	=====
	
	This behavior is by design. The DNS server IP address is taken from the remote
	access server (RAS) if the RAS server is configured with DNS server IP
	addresses. The client acquires the first DNS server address listed in the RAS
	server's DNS Service Search Order.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, perform the following procedure to remove the DNS
	server IP address from a Windows 95 RAS client:
	
	1. Start Registry Editor (Regedit).
	
	2. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\DHCPInfo00\OptionInfo
	
	3. Change the value data for OptionInfo to 00.
	
	  NOTE: The IP addresses for the DNS servers are given in hexadecimal format in
	  the OptionInfo key. To determine the DNS server IP addresses currently in
	  use, you need to convert the addresses from hexadecimal format to decimal
	  format. Changing all hexadecimal numbers to 00 clears the DNS IP addresses.
	
	4. Quit Registry Editor, and then restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information about how DHCP-enabled RAS clients obtain their
	TCP/IP configuration, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q160699 Understanding DHCP IP Address Assignment for RAS Clients
	
	  Q200211 DUN Clients Do Not Receive DNS Domain Name over RAS/RRAS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
