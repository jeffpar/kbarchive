---
layout: page
title: "Q130088: Windows NT: Corrupt Files on Siemens PCE-5S (P90/100) Computers"
permalink: kb/130/Q130088/
---

## Q130088: Windows NT: Corrupt Files on Siemens PCE-5S (P90/100) Computers

	Article: Q130088
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT 3.1 on a Siemens PCE-5s (P90/100) computer, error
	messages may occasionally appear indicating certain files are corrupt and
	unusable.
	
	This problem can occur when you access files on a Windows NT file system (NTFS)
	formatted drive. Running CHKDSK may not report or correct the problem.
	
	CAUSE
	=====
	
	Windows NT 3.1 has not been tested with these computer models. They are
	therefore not on the Windows NT 3.1 Hardware Compatibility List (HCL).
	
	Windows NT 3.1 requires modifications to the Windows NT kernel in order to work
	reliably with these computers.
	
	RESOLUTION
	==========
	
	Upgrade to Windows NT version 3.5 or obtain the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	This problem was corrected in Windows NT version 3.5.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :
	
	=============================================================================
	
