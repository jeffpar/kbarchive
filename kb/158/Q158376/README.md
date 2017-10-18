---
layout: page
title: "Q158376: &quot;Stop 0xc000021a&quot; During Setup"
permalink: kb/158/Q158376/
---

## Q158376: &quot;Stop 0xc000021a&quot; During Setup

	Article: Q158376
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0, you may receive the following error message
	after the second restart:
	
	  Setup was unable to verify your C drive...
	
	Installation then continues. After the third restart, you receive the following
	error message on a blue screen:
	
	  Stop: c000021a {Fatal System Error}
	  The Session Manager Initialization system process terminated unexpectedly with
	  a status of 0xc000022 (0x00000000,0x0000000)
	  The system has been shut down
	
	CAUSE
	=====
	
	This error occurs if the Administrator's rights are restricted on the NTFS
	partition on which Windows NT is being installed.
	
	RESOLUTION
	==========
	
	Make sure that the Administrators have full rights on the NTFS partition before
	you install or upgrade Windows NT.
	
	MORE INFORMATION
	================
	
	Setup uses the Administrator account for maximum access during the upgrade.
	
	Additional query words: prodnt 0xc00021a 0xc0021a 0xc021a 0x21a 0xc0000021a 0xC000021a
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
