---
layout: page
title: "Q130401: WAN Browsing May Fail After Promoting New PDC"
permalink: kb/130/Q130401/
---

## Q130401: WAN Browsing May Fail After Promoting New PDC

	Article: Q130401
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you promote a new PDC on a network that routes only TCP/IP, browse lists
	may no longer contain the names of all the computers and domains on the network.
	
	CAUSE
	=====
	
	In network where only TCP/IP is routed, the primary domain controller (PDC) acts
	as the domain master browser. The PDC is also be the master browser for its
	subnet. Every other subnet (an independent broadcast region) has a separate
	computer acting as the master browser.
	
	Every 12 minutes, the master browser for each subnet:
	
	- Sends a directed master browser announcement to the Domain Master Browser.
	
	- Establishes a TCP/IP connection to the domain master browser, and pulls two
	  browse lists from it. One is a list of all machines in the domain that are
	  participating in browsing, and the other is a list of all domains that have
	  been discovered.
	
	Upon receiving the master browser announcement from a subnet master browser, the
	PDC should establish a TCP connection to it and pull the updated browse lists
	for that subnet. It should then merge those lists into the complete browse list,
	which it maintains.
	
	A timing condition exists in Windows NT 3.5 where the user-mode portion of the
	browser code may not have an IRP posted to receive master browser announcements.
	When this occurs, the domain master browser begins to drop master browser
	announcements. This causes it to stop collecting browse lists from the subnet
	master browsers. Computers on those subnets will age out of the master browse
	list and no longer be visible in browse lists.
	
	
	RESOLUTION
	==========
	
	Obtain an updated BROWSER.DLL file from Microsoft . The new BROWSER.DLL file
	should be installed on any machine that may be promoted to PDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
