---
layout: page
title: "Q154987: Cannot Use Reserved Names with SYSDIFF"
permalink: kb/154/Q154987/
---

## Q154987: Cannot Use Reserved Names with SYSDIFF

	Article: Q154987
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbtool
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Sysdiff and use a reserved name (such as CON, PRN, LPTx, or COMx,
	where x is 1 through 9) for the output file, Dr. Watson reports that an error
	occurred.
	
	CAUSE
	=====
	
	CON, PRN, LPTx, COMx, and so on are reserved names to be used exclusively by the
	operating system. You cannot use these names for file names.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack. Please note that you must rebuild any packages that were built using the
	previous Sysdiff.exe.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/utilities/Sysdiff-fix
	
	NOTE: This version of Sysdiff replaces the version that ships with Service Pack
	3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: 4.00 unattend zak deployment words
	
	======================================================================
	Keywords          : kbfile kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
