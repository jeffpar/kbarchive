---
layout: page
title: "Q142052: RAS Clients Using TCP/IP Can Access All Subnets But Their Own"
permalink: kb/142/Q142052/
---

## Q142052: RAS Clients Using TCP/IP Can Access All Subnets But Their Own

	Article: Q142052
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 win98 win98se kbDialUp
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT or Windows 95/98 Remote Access (RAS) client whose network
	interface card (NIC) is disconnected from the local area network (LAN), cannot
	access its subnet after dialing the RAS server that is on the same subnet as the
	RAS client IP address even though the RAS client is also using the TCP/IP
	protocol.
	
	This problem does not occur on non-subneted networks.
	
	CAUSE
	=====
	
	Destination IP addresses that are on the same subnet as the client network card
	are always sent out over the NIC, even if the NIC is no longer connected to the
	LAN.
	
	Windows NT and Windows 95/98 will automatically build a route table for the use
	of the workstation. This route table will control the sending of TCP/IP packets
	over the network card on the LAN or RAS interface.
	
	RESOLUTION
	==========
	
	Windows NT 3.x
	--------------
	
	1. Type "route print" from the command prompt.
	
	  The following is a sample route table that appears for the route print
	  command:
	
	  Active Routes:
	
	  Network Address    Netmask           Gateway Address   Interface     Metric
	  <BR/><BR/>
	  0.0.0.0            0.0.0.0           157.57.24.1       157.57.24.194     2
	  0.0.0.0            0.0.0.0           157.54.24.66      157.54.24.66      1
	  127.0.0.0          255.0.0.0         127.0.0.1         127.0.0.1         1
	  157.54.0.0         255.255.0.0       157.54.24.66      157.54.24.66      1
	  157.54.24.66       255.255.255.255   127.0.0.1         127.0.0.1         1
	  157.57.24.0        255.255.248.0     157.57.24.194     157.57.24.194     2
	  157.57.24.194      255.255.255.255   127.0.0.1         127.0.0.1         1
	  157.57.255.255     255.255.255.255   157.57.24.194     157.57.24.194     1
	  224.0.0.0          224.0.0.0         157.54.24.66      157.54.24.66      1
	  224.0.0.0          224.0.0.0         157.57.24.194     157.57.24.194     1
	  255.255.255.255    255.255.255.255   157.57.24.194     157.57.24.194     1
	
	2. Find your subnet address in the "Network Address" column.
	
	  This Route will have your subnet address in the "Mask" column and the IP
	  address of your Network card in the "Gateway" and "Interface" column.
	
	3. Type "route delete xxx.xxx.xxx.xxx" where xxx.xxx.xxx.xxx is your subnet
	  address. In this example it would be "route delete 157.57.24.0".
	
	  This route will automatically be re-added at reboot. Now all packets will be
	  sent over the RAS interface.
	
	Windows NT 4.0
	--------------
	
	To fix this problem on Windows NT 4.0 requires the use of a network disabled
	profile:
	
	1. Open Control Panel, System, Hardware Profiles.
	
	2. Choose Copy, name this profile No Netcard Profile.
	
	3. Choose Properties for this profile, then select the Network tab and check
	  Network Disabled Hardware Profile.
	
	When you boot up the machine and you are not connected to the Local Area Network
	(LAN), choose the "No Netcard profile" profile.
	
	Windows 95/98
	-------------
	
	Windows allows you to create multiple hardware profiles. A hardware profile
	without a NIC should be used when the NIC is not connected to the LAN and you
	are using RAS. This method also removes a route, as in the example above, but is
	more convenient.
	
	
	1. Right click on "My Computer", then go to "Properties".
	
	2. Choose "Hardware Profiles" and copy the current configuration.
	
	3. Name the new configuration "Remote" or similar.
	
	4. Click the "Device Manager" tab and under "Network Adapters" double click on
	  your network card.
	
	5. Uncheck the box next to the name of your new boot option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x and
	Windows 95.
	
	Additional query words: prodnt 95ping request timed out error 53 combo card the route specified was not found
	
	======================================================================
	Keywords          : kbnetwork dun win95 win98 win98se kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	
