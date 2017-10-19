---
layout: page
title: "Q154882: Cannot Access Network with Intel EtherExpress Pro Adapter"
permalink: /kb/154/Q154882/
---

## Q154882: Cannot Access Network with Intel EtherExpress Pro Adapter

	Article: Q154882
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an Intel EtherExpress Pro Ethernet Adapter installed in your
	computer, you may experience any of the following symptoms:
	
	- You cannot access the network.
	
	- If you are configured as a DHCP client, you receive the following message
	  when you start Windows NT 4.0:
	
	  The DHCP client could not obtain an IP address.
	
	  If you want to see DHCP messages in the future, choose YES, otherwise choose
	  NO.
	
	- Event ID 1003 is logged in the System.log file and visible in Event Viewer
	  with the following detail:
	
	  DHCP failed to obtain a lease for the card with network address <12-digit
	  hexadecimal MAC address of the local network adapter>. The following error
	  occurred: The semaphore timeout period had expired.
	
	CAUSE
	=====
	
	The drivers for the Intel EtherExpress Pro Ethernet adapters included with
	Windows NT 4.0 default to a transceiver type setting of Thick Net (AUI/DIX). If
	your network adapter is configured for any other type of connection, such as
	Thinnet (BNC/Coax) or Twisted Pair (TPE), these errors can occur.
	
	
	RESOLUTION
	==========
	
	Configure the transceiver type for the Intel EtherExpress Pro adapter to use the
	Auto Connect setting. To do so, follow these steps:
	
	1. Use the right mouse button to click the Network Neighborhood icon on the
	  desktop, and then click Properties on the menu that appears.
	
	2. Click the Adapters tab, click Intel EtherExpress Pro Ethernet Adapter, and
	  then click Properties.
	
	3. In the Transceiver Type box, click Auto Connect, or click the connection type
	  that matches your installation.
	
	4. Click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
