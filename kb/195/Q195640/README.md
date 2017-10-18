---
layout: page
title: "Q195640: Split Horizon with Poison Reverse Causes Incorrect RIP Updates"
permalink: kb/195/Q195640/
---

## Q195640: Split Horizon with Poison Reverse Causes Incorrect RIP Updates

	Article: Q195640
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When RIP is set with all the default settings, including the Advanced settings
	of Split Horizon with Poison Reverse, the RIP update will occur for both bound
	IP addresses but with an incorrect hop count (or metric) of 16. Because it
	advertises the metrics as 16, no other routers will know that this computer is
	the router between those two subnets and, thus, the two subnets will be unable
	to communicate with each other.
	
	This problem occurs on a computer that is configured to use RIP and that has a
	single network adapter configured for multiple IP addresses on different
	subnets.
	
	CAUSE
	=====
	
	RRAS assigns an incorrect metric in outbound RIP requests when two IP addresses
	are bound to the same network card.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Split Horizon with Poison Reverse:
	
	Split horizon with poison reverse improves RIP convergence over simple split
	horizon by advertising all network IDs, but those network IDs learned in a given
	directions are advertised with a metric of 16, indicating that the network is
	unavailable. Poison reverse has no benefit beyond split horizon in a single path
	internetwork. However, in a multipath internetwork, split horizon with poison
	reverse greatly reduces count to infinity and routing loops.
	
	This behavior is described in RFC 1058, "Routing Information Protocol".
	
	Additional query words: 4.00 rras multinet
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
