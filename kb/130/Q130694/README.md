---
layout: page
title: "Q130694: NTFS Performance with Numerous Long Filenames"
permalink: /kb/130/Q130694/
---

## Q130694: NTFS Performance with Numerous Long Filenames

{% raw %}

	Article: Q130694
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT takes a long time to perform directory operations on Windows NT file
	system (NTFS) formatted drives that contain a large number of files with long
	file names (names that do not conform to the 8.3 convention) in a single
	directory.
	
	CAUSE
	=====
	
	When you save a file with a long file name to an NTFS drive, NTFS creates, by
	default, a second file directory entry with a short file name conforming to the
	8.3 convention.
	
	When NTFS enumerates files in a directory, it has to look up the 8.3 names
	associated with the long file names. Because an NTFS directory is maintained in
	a sorted state, corresponding long file names and 8.3 names are generally not
	next to one another in the directory listing. So, NTFS uses a linear search of
	the directory for every file present. As a result, the amount of time required
	to perform a directory listing increases with the square of the number of files
	in the directory. For small numbers of files (less than a few hundred) the time
	delay is negligible. But as the number of files in a directory increases to
	several thousand, the time required to perform a listing can increase to
	minutes, hours, or even days. The problem is aggravated if the long file names
	are very similar -- differing only in the last few characters.
	
	WORKAROUND
	==========
	
	To work around this problem in Windows NT 3.1, avoid having large numbers of
	files with long file names in a single directory.
	
	To work around this problem in Windows NT 3.5, turn off NTFS automatic 8.3 name
	generation using the Registry Editor:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Control\FileSystem
	
	3. Select NtfsDisable8dot3NameCreation.
	
	4. From the Edit menu choose DWORD.
	
	5. Change the Data value to 1. Leave the Radix set to Hex.
	
	6. Shutdown and restart Windows NT.
	
	NTFS will no longer create short file names (8.3 names) when you create files
	with long file names.
	
	NOTE: Files that already have long file names and short file names are not be
	affected by this change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: 3.10 prodnt lfn 0x1
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5
	
	=============================================================================
	

{% endraw %}
