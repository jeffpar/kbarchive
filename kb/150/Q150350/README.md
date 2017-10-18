---
layout: page
title: "Q150350: NetLogon Maximum Value of Pulse Should Exceed 3600"
permalink: kb/150/Q150350/
---

## Q150350: NetLogon Maximum Value of Pulse Should Exceed 3600

	Article: Q150350
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your ISDN TCP/IP router telecommunication connection costs appear to be very
	high.
	
	- Your network spans two or more sites.
	
	- You use ISDN TCP/IP routers.
	
	- You use an ISDN service that charges you based on connection time.
	
	RESOLUTION
	==========
	
	
	1. Install Windows NT 3.51 Service Pack 5.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	2. Go to the following key in the Registry:
	
	    HKEY_LOCAL_MACHINE\SYSTEM
	      \CurrentControlSet
	        \Services
	           \Netlogon
	              \Parameters
	                          \Pulse
	
	You can now set the pulse to a maximum of 172800 (2A300h).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following example outlines a common scenario involving ISDN routers.
	
	One primary domain controller (PDC), with a significant number of backup domain
	controllers (BDCs), connects to one PDC via ISDN. Each time a network frame is
	exchanged between a BDC and the PDC, it costs one ISDN connection.
	
	PDC parameters:
	
	- Pulse = 3600 seconds = 1 hour
	- PulseConcurrency = 1 - 10
	
	In this case, the PDC may handle many user account transactions so that SAM
	changes are common and occur often. Each time the PDC detects a SAM change, it
	contacts all the BDCs. Having purchased ISDN routers, the you may not
	necessarily desire to have the BDC's SAMs updated every hour. Because of the
	cost of activation, you may want to update the BDCs as little as once every 48
	hours.
	
	Currently, if the Pulse parameter is set to its maximum, the cost for transaction
	updates is the number of BDC connections every hour. If there are 50 BDCs, there
	are 50 connections per hour. For 120 BDCs, the cost is 120 connections per
	hour.
	
	Looking at this on a monthly basis, the cost of connections becomes even more
	apparent: 120 connections x 24 hours a day x 30 days a month = 86,400
	connections.
	
	NOTE: For additional information on reducing domain browsing and WINS replication
	traffic over slow links, please see the following article in the Microsoft
	Knowledge Base:
	
	Q134985Browsing & Other Traffic Incur High Costs over ISDN Routers
	
	Additional query words: prodnt traffic WAN RAS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
