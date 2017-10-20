---
layout: page
title: "Q319859: Networking An MSN DSL Internet Connection To Multiple Computers"
permalink: /kb/319/Q319859/
---

## Q319859: Networking An MSN DSL Internet Connection To Multiple Computers

{% raw %}

	Article: Q319859
	Product(s): The Microsoft Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN DSL, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MSN Broadband, you can have multiple computers connecting simultaneously.
	Options listed below will assist you with this process. While MSN Broadband
	Support does not assist with or support networking multiple computers, many
	resources exist to guide you with installation and problem solving for networked
	DSL connections.
	
	MORE INFORMATION
	================
	
	Using Connection Sharing Software:
	----------------------------------
	
	This option will work with any of the modems currently in use with Msn Broadband.
	It requires that you use connection sharing software such as Internet Connection
	Sharing (ICS) (which is included with Microsoft Windows 98 Second Edition,
	Windows Millennium Edition, Windows 2000 and Windows XP operating systems) or a
	third-party proxy server program (obtainable from a computer retailer or by
	downloading it from the Internet). If you choose the connection sharing option,
	you must obtain and install the following:
	
	a. If you have the Arescom or Cisco 675/678:
	  You will need a second Ethernet adapter (a total of two adaptors for your main
	  computer). One adaptor connects to the DSL modem and one connects to the
	  second computer, Networking Hub, or Switch.
	
	   - Ethernet adapters: One for each of the other computers.
	
	   - Ethernet cables: One for each of the other computers.
	
	   - Networking Hub or Switch: The hub or switch is only necessary if you plan
	     on connecting more than one computer to the computer that connects
	     directly to the DSL modem.
	
	b. If you have the Cisco 605 or the Intel 2100, 2200 or 3200:
	  You will need to install one Ethernet adapter in the main computer to connect
	  the main computer to the second computer, Networking Hub, or Switch.
	   - Ethernet adapters: One for each of the other computers.
	
	   - Ethernet cables: One for each of the other computers.
	
	   - Networking Hub or Switch: The hub or switch is only necessary if you plan
	     on connecting more than one computer to the computer in which the DSL
	     modem is installed
	
	The Microsoft operating systems help file has information on using ICS and on
	networking multiple computers together. If you're using a proxy server you can
	obtain assistance from the proxy server support resource.
	
	Using an Internet Gateway Router (IGR) (Arescom modem using Ethernet only): 
	---------------------------------------------------------------------------
	
	If you have an Arescom modem you can use an Internet Gateway Router (which you
	will need to purchase from a computer retailer). Please speak with your computer
	retailer about the various versions of Internet Gateway Routers. Tell them how
	many computers you have and where they are located in relation to your Arescom
	modem. Some examples include:
	
	- Wireless or wired
	
	- Multi-port or single port
	
	1. Using the Arescom with an Internet Gateway Router (IGR):
	  Because the Arescom modem issues the following settings automatically to the
	  Internet Gateway Routers WAN port, you may have to make changes to the
	  default gateway on the IGR?s LAN port.
	   - IP Address: 192.168.1.2
	
	   - Subnet Mask: 255.255.255.252
	
	   - Default Gateway: 192.168.1.1
	
	  Note: Networks will not allow the same IP address on more than one computer.
	
	If the Internet Gateway Router (IGR) has 192.168.1.1 set for its Default Gateway
	on the LAN port, this setting must be changed to 192.168.5.1, since the Arescom
	has already assigned 192.168.1.1 to the IGR?s WAN port.
	This change should automatically allow the DHCP server on the IGR to issue IP
	Addresses to all other computers, according to the new IP address scheme.
	2. The Internet Gateway Router must be set to receive an IP address via DHCP
	  from the DSL Modem.
	   - Ethernet adapters: One for each of the other computers.
	
	   - Ethernet cables: One for each of the other computers.
	
	Note: The Cisco 675/678 modem will work with an Internet Gateway Router, but
	because the Cisco has a DHCP server that will issue settings to multiple
	computers, it is not necessary to use an IGR. You can use an Ethernet Hub or
	Switch instead.
	
	Using the Cisco 675/678 with an Ethernet Hub or Switch:
	-------------------------------------------------------
	
	For any hub or switch you purchased, you must have the correct Ethernet
	cable--either cross-over or straight-through--for the particular port you are
	connecting the Cisco 675/678 to. The Cisco 675/678, in combination with a hub or
	switch, will support as many computers as the hub or switch has ports. The Cisco
	675/678 will use one of the ports reducing the total number by one.
	
	- Ethernet adapters: One for each of the other computers.
	
	- Ethernet cables: One for each of the other computers.
	
	Additional query words: kbimu msn dsl broadband
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSNDSL200
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
