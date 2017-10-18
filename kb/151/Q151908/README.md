---
layout: page
title: "Q151908: SYSDIFF /dump Displays Some Registry Data Types Incorrectly"
permalink: kb/151/Q151908/
---

## Q151908: SYSDIFF /dump Displays Some Registry Data Types Incorrectly

	Article: Q151908
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use SYSDIFF /dump to view the contents of your difference file, you may
	notice that some of the registry data types (such as REG_BINARY, REG_MULTI_SZ,
	and REG_DWORD) are not displayed correctly. An example is listed below:
	
	  Regedt32 shows                         SYSDIFF /dump shows
	  ----------------------------------------------------------
	
	  LogEvents REG_DWORD: 0x1               LogEvents: REG_DWORD: 0x3018f0
	  Dcache REG_MULTI_SZ: 20                Dcache REG_MULTI_SZ: Binary Data
	                                         type 7
	  DCacheUpdate REG_BINARY: f0 b6 45 8a   DCacheUpdate REG_BINARY: Binary
	  26 9d bc 00                            data of type 3
	
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
	
	
	Additional query words: 4.00 zak unattend deployment
	
	======================================================================
	Keywords          : kbfile kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
