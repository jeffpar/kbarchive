---
layout: page
title: "Q142437: Error Adding Global Group to Local Group of Another Domain"
permalink: /kb/142/Q142437/
---

## Q142437: Error Adding Global Group to Local Group of Another Domain

	Article: Q142437
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a global group of a master accounts domain (maintains
	user account information) to a local group on a resource domain (maintains
	resources such as printer and file sharing), the following error message
	appears:
	
	  A new member could not be added to a local group because the member does not
	  exist.
	
	CAUSE
	=====
	
	This problem occurs when a domain controller changes the domain name in order to
	create a new domain. If you change the domain name of your domain controller in
	Control Panel Network, the domain security identifier (SID) information remains
	the same.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Reinstall Windows NT Server if you want to change the domain name of your
	  domain controller.
	
	2. Create a trust between the master accounts domain and the resource domain.
	
	3. Add the global group of the master accounts domain to the local group of the
	  resource domain.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
