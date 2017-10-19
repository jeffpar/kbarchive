---
layout: page
title: "Q193600: Windows NT Load Balancing Service Setup Screen Is Slow to Load"
permalink: /kb/193/Q193600/
---

## Q193600: Windows NT Load Balancing Service Setup Screen Is Slow to Load

	Article: Q193600
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows NT Load Balancing Service (WLBS) Setup dialog box starts, it
	encounters a lengthy delay prior to returning control to the configuration
	screen.
	
	CAUSE
	=====
	
	The network is unreachable. You entered the final license key when installing
	WLBS prior to setting up the TCP/IP configuration and ensuring network access.
	The final license key causes the WLBS Setup dialog box to use the network to
	resolve the cluster's full Internet name to the primary IP address. If the
	network is unreachable, the dialog box will encounter a temporary delay.
	
	RESOLUTION
	==========
	
	Be sure to use the initial license key until Windows NT Load Balancing Service
	has been installed and network access has been established.
	
	Additional query words: Convoy WLBS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
