---
layout: page
title: "Q162055: Ipconfig and Winipcfg Display Only One Default Gateway Address"
permalink: /kb/162/Q162055/
---

## Q162055: Ipconfig and Winipcfg Display Only One Default Gateway Address

	Article: Q162055
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; WINNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Ipconfig and Winipcfg tools display only one default gateway address when
	you have configured the Transmission Control Protocol/Internet Protocol (TCP/IP)
	to use more than one default gateway.
	
	CAUSE
	=====
	
	The Ipconfig and Winipcfg tools can display only the address of the first
	configured default gateway.
	
	MORE INFORMATION
	================
	
	The following information is a sample of the output from the Ipconfig tool:
	
	  Windows NT IP Configuration
	
	     Host Name . . . . . . . . . : MYPC
	     DNS Servers . . . . . . . . :
	     Node Type . . . . . . . . . : Mixed
	     NetBIOS Scope ID. . . . . . :
	     IP Routing Enabled. . . . . : No
	     WINS Proxy Enabled. . . . . : No
	     NetBIOS Resolution Uses DNS : No
	
	  Ethernet adapter Elnk31:
	
	     Description . . . . . . . . : ELNK3 Ethernet Adapter.
	     Physical Address. . . . . . : 00-C0-4F-D7-DB-91
	     DHCP Enabled. . . . . . . . : Yes
	     IP Address. . . . . . . . . : 100.50.84.54
	     Subnet Mask . . . . . . . . : 255.255.248.0
	     Default Gateway . . . . . . : 100.50.80.1
	     DHCP Server . . . . . . . . : 100.50.40.9
	     Primary WINS Server . . . . : 100.50.16.153
	     Secondary WINS Server . . . : 100.50.16.155
	     Lease Obtained. . . . . . . : Friday, January 10, 1997 7:29:32 AM
	     Lease Expires . . . . . . . : Wednesday, January 29, 1997 7:29:32 AM
	
	To determine which default gateways have been assigned, you can use the ROUTE
	command by typing the following line at a command prompt:
	
	  route print
	
	The following table is a sample of the output from the ROUTE PRINT command:
	
	  Active Routes:
	
	  Network Address          Netmask  Gateway Address     Interface  Metric
	          0.0.0.0          0.0.0.0      100.50.80.2     100.50.84.54    1
	          0.0.0.0          0.0.0.0      100.50.80.1     100.50.84.54    1
	        127.0.0.0        255.0.0.0        127.0.0.1        127.0.0.1    1
	     100.50.41.50  255.255.255.255      100.50.80.2     100.50.84.54    1
	      100.50.80.0    255.255.248.0     100.50.84.54     100.50.84.54    1
	     100.50.84.54  255.255.255.255        127.0.0.1        127.0.0.1    1
	   100.50.255.255  255.255.255.255     100.50.84.54     100.50.84.54    1
	        224.0.0.0        224.0.0.0     100.50.84.54     100.50.84.54    1
	  255.255.255.255  255.255.255.255     100.50.84.54     100.50.84.54    1
	
	The lines that have a 0.0.0.0 network address indicate that there are two
	assigned default gateways. The Tracert utility can be used to find out which
	default gateway is active.
	
	NOTE: Only one of the default gateways is used for each network adapter. If you
	assign more than one default gateway address, the second address is used only if
	the Dead Gateway Detection feature determines that the first gateway is not
	operational.
	
	For more information about dead gateway detection, see the following articles in
	the Microsoft Knowledge Base:
	
	  Q159168 Multiple Default Gateways Can Cause Connectivity Problems
	
	  Q128978 Dead Gateway Detection in TCP/IP for Windows NT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	Additional query words: tcpip
	
	======================================================================
	Keywords          : kbnetwork kbtool win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WINDOWS:3.11,95; WINNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
