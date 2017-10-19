---
layout: page
title: "Q129130: Services for Macintosh and Preexisting Novell Appletalk Zones"
permalink: /kb/129/Q129130/
---

## Q129130: Services for Macintosh and Preexisting Novell Appletalk Zones

	Article: Q129130
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	If you attempt to integrate NT into a preexisting Novell network, Novell
	requires that one of it's servers act as seed routers. The function of
	Novell seed routers is much different from the function of seed routers
	familiar to Windows NT users. The initial difference is the Zone Range.
	A legal Novell zone range would be 1000-1000. This would also be a legal
	range for Windows NT. This would preclude anyone from getting into this
	zone range since it has a length of zero. However, Novell allows an
	indeterminate number of members in that zone since additions are demand
	driven rather than hard coded. Zones can be added from any Novell server
	and are not based on a single seed router (as it would be on a hardware
	based or Windows NT-based router). A Windows NT machine will not be able to
	generate its own zone but will be able to insert itself into one of the
	existing Novell zones.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
