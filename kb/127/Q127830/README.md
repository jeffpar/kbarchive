---
layout: page
title: "Q127830: Time Stamps Change When Copying From NTFS to FAT"
permalink: /kb/127/Q127830/
---

## Q127830: Time Stamps Change When Copying From NTFS to FAT

{% raw %}

	Article: Q127830
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you copy a file from a Windows NT file system (NTFS) drive to a file
	allocation table (FAT) drive, the time stamp changes to an even number of
	seconds.
	
	MORE INFORMATION
	================
	
	File time stamps on FAT drives are rounded to the nearest two seconds (even
	number) when the file is written to the drive. The file time stamps on NTFS
	drives are rounded to the nearest 100 nanoseconds when the file is written to
	the drive. Consequently, file time stamps on FAT drives always end with an even
	number of seconds, while file time stamps on NTFS drives can end with either
	even or odd number of seconds.
	
	When files are copied from NTFS drives to FAT drives, some file time stamp
	rounding has to occur; the file time stamp is rounded up to the next even
	second.
	
	To preserve exact NTFS file times, always copy files from NTFS drives to other
	NTFS drives. If you are writing a program to compare file times between NTFS and
	FAT drives, accommodate for the expected rounding.
	
	For example, when you compare time stamps between an original file in NTFS and a
	file in FAT, which is copied from NTFS, you will see the following:
	
	NTFS time stamp: 7 hours 31 min 0 sec 000.
	FAT time stamp becomes 7 hours 31 min 0 sec 000.
	
	NTFS time stamp: 7 hours 31 min 0 sec 001.
	FAT time stamp becomes 7 hours 31 min 2 sec 000.
	
	NTFS time stamp: 7 hours 31 min 1 sec 000.
	FAT time stamp becomes 7 hours 31 min 2 sec 000.
	
	NTFS time stamp: 7 hours 31 min 1 sec 999.
	FAT time stamp becomes 7 hours 31 min 2 sec 000.
	
	Additional query words: 3.10 granularity partition
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,4.0
	
	=============================================================================
	

{% endraw %}
