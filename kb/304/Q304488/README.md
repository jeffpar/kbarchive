---
layout: page
title: "Q304488: MCSE Training Kit: Microsoft Windows 2000 Advanced Server Cluste"
permalink: /kb/304/Q304488/
---

## Q304488: MCSE Training Kit: Microsoft Windows 2000 Advanced Server Cluste

	Article: Q304488
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Training Kit, Windows 2000 Advanced Server Clustering Services ISBN 0-7356-1293-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Training Kit: Microsoft Windows 2000
	Advanced Server Clustering Services, ISBN 0-7356-1293-5.
	
	The following topics are covered:
	
	- Pages 51 & 345: Correction To Question 6
	
	- Page 81: Remove Windows 2000 Datacenter Server
	
	- Page 98: Incorrect Dependencies In Table 4.3
	
	- Page 165: Incorrect Path In Figure 6.3
	
	- Page 211: Incorrect Statement About Possible Owners
	
	- Page 335: Incorrect Information About Unexpected Manner Of Network Traffic
	
	MORE INFORMATION
	================
	
	Pages 51 & 345: Correction To Question 6
	----------------------------------------
	
	On pages 51 and 345, question 6,
	
	Change:
	"6. When you use Windows 2000 Advanced Server and Cluster Service, which of the
	following drive type are supported for the shared device?"
	
	To:
	"6. When you use Windows 2000 Advanced Server and Cluster Service, which of the
	following technologies are supported for the shared device?"
	
	
	Page 81:  Remove Windows 2000 Datacenter Server
	-----------------------------------------------
	
	On page 81, under Lesson Summary,
	
	Change:
	"This lesson explained how to perform rolling upgrades of a cluster from Windows
	NT 4 Enterprise Edition to Windows 2000 Advanced Server or Windows 2000
	Datacenter Server."
	
	To:
	"This lesson explained how to perform rolling upgrades of a cluster from Windows
	NT 4 Enterprise Edition to Windows 2000 Advanced Server."
	
	
	Page 98: Incorrect Dependencies In Table 4.3
	--------------------------------------------
	
	On page 98, in Table 4.3,
	
	Change:
	"Generic Application - None
	Generic Service - None"
	
	To:
	"Generic Application - Network Name
	Generic Service - Network Name"
	
	
	Page 165: Incorrect Path In Figure 6.3
	--------------------------------------
	
	Page 165, in Figure 6.3,
	
	Change:
	"q:\dhcp\backup"
	
	To:
	"w:\dhcp\backup"
	
	
	Page 211: Incorrect Statement About Possible Owners
	---------------------------------------------------
	
	On page 211, in the eighth bulleted item,
	
	Change:
	"Check the Possible Owners list of the group and each resource to ensure..."
	
	To:
	"Check the Possible Owners list of each resource to ensure..."
	
	
	Page 335: Incorrect Information About Unexpected Manner Of Network Traffic
	--------------------------------------------------------------------------
	
	On page 335, in the top paragraph, change:
	"Network traffic might be causing a large amount of collisions or might not
	consistently arrive at its intended destination. In this situation, the switch
	and the unicast network address are conflicting with each other. If you're using
	a switch to connect the hosts in your cluster configuration, NLB must be set to
	use multicast mode. If you cannot change the mode to unicast, you must connect
	your cluster hosts in some other way, perhaps with a hub or coaxial cable.
	Otherwise, you'll have to switch to multicast mode using the Cluster Parameters
	tab of the network load balancing properties dialog box."
	
	To:
	"Network traffic might be causing a large amount of collisions or might not
	consistently arrive at its intended destination when connections are made across
	a switch to which the NLB virtual adapters are connected. This problem occurs
	because a large number of unknown unicast and multicast packets are being
	blocked on the port(s) of the switch. By default, NLB masks the source media
	access control (MAC) address on outbound packets, preventing switches from
	learning and forcing them to broadcast packets for unknown addresses to all
	ports.
	
	"To resolve this issue, you can replace the switch with a hub, disable port
	blocking, add a static address to the MAC address table on the switch that maps
	to the virtual MAC address used by the NLB cluster, or modify the registry of
	each NLB cluster host to disable masking of the MAC address."
	
	For further details on this issue, please refer to the following Microsoft
	Knowledge Base article:
	http://support.microsoft.com/support/kb/articles/q247/2/97.asp
	(http://support.microsoft.com/support/kb/articles/q247/2/97.asp)
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1293-5 TKBOOK WIN2000
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
