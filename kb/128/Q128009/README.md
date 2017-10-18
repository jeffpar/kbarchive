---
layout: page
title: "Q128009: ErrMsg: Lockout Duration Must Be Greater Than...Reset Count"
permalink: kb/128/Q128009/
---

## Q128009: ErrMsg: Lockout Duration Must Be Greater Than...Reset Count

	Article: Q128009
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the User Manager for Domains Account Policy dialog box, if you set the
	Lockout Duration to a value less than the Reset Count After value, the following
	error message appears:
	
	  User Manager for Domains: The lockout duration must be greater than or equal
	  to the reset count time.
	
	MORE INFORMATION
	================
	
	The Reset Count After counts the number of bad logon attempts within a set time
	interval. If no bad logon attempt occurs within the specified time interval,
	then the bad logon attempt count is returned to zero.
	
	STATUS
	======
	
	This is a limitation of Windows NT Server version 3.5.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.10 3.50
	
	=============================================================================
	
