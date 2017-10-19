---
layout: page
title: "Q151696: Extending DHCP Start Address"
permalink: /kb/151/Q151696/
---

## Q151696: Extending DHCP Start Address

	Article: Q151696
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	If you extend the start address of the Dynamic Host Configuration Protocol
	(DHCP) scope, you may receive one of the following error messages:
	
	Windows NT Server 3.5
	---------------------
	
	  The parameter is incorrect
	
	Windows NT Server 3.51 or later
	-------------------------------
	
	  The range is extended less than the specified backward extension. Extend the
	  range in integral of 32 IP addresses.
	
	CAUSE
	=====
	
	The above error messages are a result of the DHCP Scope being extended in
	increments not equal to 32.
	
	RESOLUTION
	==========
	
	Configure the start address in increments of 32 IP addresses.
	
	MORE INFORMATION
	================
	
	Below is an example of an invalid extended start address of a DHCP scope:
	
	  DHCP Scope Start Address:  150.32.100.200
	  Extended DHCP Scope Start Address: 150.32.100.167
	
	Below are examples of a valid extended start address of a DHCP scope:
	
	  DHCP Scope Start Address:  150.32.100.200
	  Extended DHCP Scope Start Address: 150.32.100.168
	  Extended DHCP Scope Start Address: 150.32.100.136
	  Extended DHCP Scope Start Address: 150.32.100.104
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
