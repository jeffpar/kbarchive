---
layout: page
title: "Q154487: SYSDIFF /dump Err. Msg: The Data Is Invalid"
permalink: /kb/154/Q154487/
---

## Q154487: SYSDIFF /dump Err. Msg: The Data Is Invalid

	Article: Q154487
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following error message when you perform SYSDIFF /dump:
	
	  The data is invalid.
	
	Clicking OK closes Sysdiff. Also, the output file that was created is incomplete
	and may contain an error message similar to:
	
	  Error 8 encountered; dump phase aborted.
	
	CAUSE
	=====
	
	This problem occurs when the difference file contains .INI entries that do not
	have equal signs in the appropriate places.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack. Please note that you must rebuild any packages that were built using the
	previous Sysdiff.exe.
	
	This hotfix has been posted to the following Internet location:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/
	utilities/Sysdiff-fix
	
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
	
	
	
	Additional query words: 4.00 unattend zak deployment
	
	======================================================================
	Keywords          : kbfile kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
