---
layout: page
title: "Q129122: DHCP: Excluding an Address Before Lease Expires Gives Error"
permalink: kb/129/Q129122/
---

## Q129122: DHCP: Excluding an Address Before Lease Expires Gives Error

	Article: Q129122
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	If you add an exclusion to the DHCP scope after a lease is removed
	from the active leases list, but before the expiration date has
	expired, the following error appears:
	
	  The specified range either overlaps with an already existing range or is
	  invalid.
	
	
	To work around this problem, wait until the expiration time has passed for
	the address and then add it to the exclusion list.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
