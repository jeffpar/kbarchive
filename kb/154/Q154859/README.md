---
layout: page
title: "Q154859: The Number of Managed NetWare Servers Should Not Exceed 32"
permalink: /kb/154/Q154859/
---

## Q154859: The Number of Managed NetWare Servers Should Not Exceed 32

	Article: Q154859
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can add multiple NetWare servers to a single Windows NT Server domain.
	However, to ensure a high level of performance, it is recommended that you add
	no more than 32 NetWare servers per domain.
	
	MORE INFORMATION
	================
	
	If you have more than 32 NetWare servers to add to Windows NT Server domains,
	you should divide the NetWare servers into smaller groups, and add each group to
	a different domain. When dividing NetWare servers into groups, consider what
	servers must be used by the same people. It is best if all the servers used by a
	particular group of users are in the same domain, so you should put that group
	of servers and users into a single domain.
	
	When each NetWare server is added, you specify which NetWare users and groups to
	transfer from that server to the domain. The domain's directory then contains a
	sum of all the users and groups that you copied from each NetWare server, plus
	the users and groups created directly in the Windows NT Server domain.
	
	The list of users and groups being propagated may differ for each NetWare server
	participating the domain. If a NetWare user needs access only to specific
	NetWare servers, you can propagate the user's account to only those servers.
	This enables you to minimize network traffic, making the Directory Service
	Manager for NetWare more efficient.
	
	For example, suppose members of the Accounting group need access to NetWare
	servers NW1 and NW2, while members of the Sales_Reps group need access only to
	NW1. When you specify which groups to propagate to NW1, select both Accounting
	and Sales_Reps. When you specify the users to propagate to NW2, select only
	Accounting.
	
	Additional query words: prodnt DSMN
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
