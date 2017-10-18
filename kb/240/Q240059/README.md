---
layout: page
title: "Q240059: Split Horizon with Poison Reverse Causes Incorrect RIP Updates"
permalink: kb/240/Q240059/
---

## Q240059: Split Horizon with Poison Reverse Causes Incorrect RIP Updates

	Article: Q240059
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Routing Information Protocol (RIP) with multiple adapters and
	with all the default settings (including the Split Horizon with Poison Reverse
	advanced settings), the RIP updates that are sent out have the correct metrics
	for both of the RIP routes. However, RIP also advertises the routes that it
	learns on the same subnet with a metric of 16 (poison reverse). On the Routing
	and Remote Access Services (RRAS) computer that receives the RIP updates (with
	the poison reverse update), the route should not be processed because RIP
	already has a better route for that subnet (subnet A). It should also
	distinguish the fact that this update is from a computer that is not the
	destination router for that route to subnet A. However, RRAS processes that
	route and therefore discards out a good route in favor of an unreachable route
	(metric = 16). Any computer on its own remote subnet cannot reach this subnet
	(subnet A), which now has a metric of 16.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The Split Horizon with Poison Reverse setting improves RIP convergence over a
	simple split horizon by advertising all network IDs, but those network IDs
	learned in a given direction are advertised with a metric of 16, indicating that
	the network is unavailable. The Poison Reverse setting has no benefit beyond the
	split horizon setting in a single-path internetwork. However, in a multiple-path
	internetwork, the Split Horizon with Poison Reverse setting greatly reduces
	counts to infinity and routing loops.
	
	This behavior is described in Request for Comments (RFC) 1058, "Routing
	Information Protocol."
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
