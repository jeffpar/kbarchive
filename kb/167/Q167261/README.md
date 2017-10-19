---
layout: page
title: "Q167261: Document Error: Replacing a Primary Domain Controller"
permalink: /kb/167/Q167261/
---

## Q167261: Document Error: Replacing a Primary Domain Controller

	Article: Q167261
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Replacing a Primary Domain Controller," paragraph on page 4, Chapter 1 of
	the Windows NT Server 4.0 Resource Guide is incorrect.
	
	It states that, if the primary domain controller (PDC) is not available, you can
	install a new PDC and the PDC will create a new security identifier (SID) for
	the existing domain. This is partially correct. The new PDC will be created as a
	new domain, but the existing backup domain controllers (BDC) will not be able to
	synchronize with the new PDC.
	
	Promoting an existing BDC is the only working and supported procedure for
	replacing a PDC.
	
	Additional query words: reskit how to promote procedure
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
