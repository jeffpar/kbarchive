---
layout: page
title: "Q130478: Reconcile Feature Fixes Inconsistent IP Addresses"
permalink: /kb/130/Q130478/
---

## Q130478: Reconcile Feature Fixes Inconsistent IP Addresses

	Article: Q130478
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server Dynamic Host Configuration Protocol (DHCP) Manager offers a
	feature named Reconcile. Reconcile fixes inconsistent IP addresses. This option
	can be chosen from the Active Leases dialog box in DHCP Manager.
	
	MORE INFORMATION
	================
	
	Inconsistency of IP addresses in DHCP service can occur when leases are recorded
	in the Registry but are not reflected in the DHCP database. The Reconcile option
	in the Active Leases dialog box does a consistency check on the DHCP database
	and lists all inconsistent IP addresses in that scope.
	
	To correct the inconsistency, choose this option and select all IP addresses that
	need to be fixed. Reconcile either restores those IP addresses to the original
	owner or creates a temporary reservation for those addresses. These reservations
	will be valid for the lease time assigned to the scope. Once the lease time is
	expired the addresses will be recovered for future use.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
