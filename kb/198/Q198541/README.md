---
layout: page
title: "Q198541: Using DHCPCMD to Modify a Reservation Converts It to a Lease"
permalink: kb/198/Q198541/
---

## Q198541: Using DHCPCMD to Modify a Reservation Converts It to a Lease

	Article: Q198541
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DHCPCMD command ADDRESERVEDIP to modify an existing
	reservation, error 20022 (ERROR_DHCP_RESERVEDIP_EXISTS) is returned. When you
	subsequently inspect the reservation using DHCP ADMIN, the reservation has been
	turned into an active lease. If DHCPCMD is run again to modify the lease, it
	works correctly and is turned back into a reservation.
	
	CAUSE
	=====
	
	This is a problem in DHCP server, which incorrectly handles the modification of
	an existing reservation, causing the reservation to be partially deleted. This
	results in the remaining data looking like an active lease.
	
	Running the same command again causes the reservation to be correctly re- added.
	
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
	
	
	Additional query words: 4.00 dhcpadmn tcpip
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
