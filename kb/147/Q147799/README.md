---
layout: page
title: "Q147799: Net3779 Errors During Domain Validation"
permalink: /kb/147/Q147799/
---

## Q147799: Net3779 Errors During Domain Validation

	Article: Q147799
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to log on to a Windows NT domain controller from a LAN Manager
	2.2c client computer, an Error Net3779 appears.
	
	CAUSE
	=====
	
	This problem occurs if the computer name of the validating domain controller
	begins with an invalid character, even though the user name and password are
	valid. Computernames disallow the period (.), as well as the characters below:
	
	ASCII characters 1 - 31 decimal, as well as the following:
	
	  . " / \ [ ] : | < > + = ; , ?
	
	
	RESOLUTION
	==========
	
	Change the computername so that it does not begin with invalid characters.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220c
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
