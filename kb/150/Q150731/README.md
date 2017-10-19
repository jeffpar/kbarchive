---
layout: page
title: "Q150731: Deleting Single Entries From Static Multihomed Box Fails w/ Sp4"
permalink: /kb/150/Q150731/
---

## Q150731: Deleting Single Entries From Static Multihomed Box Fails w/ Sp4

	Article: Q150731
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When a Multihomed Static entry is added with multiple IP Addresses in WINS,
	removing a single IP Address from the list fails.
	
	MORE INFORMATION
	================
	
	Previous to Windows NT 3.51 SP4, when a Static Multihomed entry is added with
	multiple IP addresses, removing an IP Address from the list required opening the
	static entry and removing the IP Address from the list box. With SP4 installed,
	this method of removing single IP Addresses from the Static box is no longer
	available.To change or remove a single IP Address from a Static Multihomed
	entry, Delete the static entry, and re-add.
	
	The method of removing a Static Internet Group entry has not changed and can be
	modified without deleting the entire group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.SP4. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt winsadmin
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
