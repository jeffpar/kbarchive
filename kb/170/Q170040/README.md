---
layout: page
title: "Q170040: Computer Associates InocuLAN May Cause Broadcast Storm"
permalink: /kb/170/Q170040/
---

## Q170040: Computer Associates InocuLAN May Cause Broadcast Storm

	Article: Q170040
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use InocuLAN on a Microsoft Windows NT network, you may experience
	large amounts of WINS name queries and broadcast storms. If you use Microsoft
	Network Monitor, you may view a large number of WINS queries for workgroup or
	domain names, and then broadcasts after the WINS queries are unsuccessful.
	
	CAUSE
	=====
	
	By default, InocuLAN is configured to automatically discover Windows NT domains.
	The default values for Auto Discovery and Heartbeat Update Interval are 24 hours
	and 1 minute, respectively.
	
	If a domain is manually entered and/or automatically discovered in Service
	Manager, and then later becomes unavailable or invalid, you can receive three NS
	Queries every 60 seconds for each invalid domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the invalid workgroup or domain names from
	InocuLAN's Service Manager. To do this, perform the following steps:
	
	1. In Service Manager, click Broadcast Configuration from the Service menu.
	
	2. In the Broadcast Configuration box, click the NT Domains tab.
	
	3. Remove the invalid workgroup or domain names.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Windows NT version 4.0 and InocuLAN.
	
	MORE INFORMATION
	================
	
	For further information or support on InocuLAN, contact Computer Associates.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: storm Internet Name naming Service services InnocuLAN Computer Associates
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
