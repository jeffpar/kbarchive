---
layout: page
title: "Q153839: Tape Backup Restore Fails on Extremely Full Volumes"
permalink: /kb/153/Q153839/
---

## Q153839: Tape Backup Restore Fails on Extremely Full Volumes

{% raw %}

	Article: Q153839
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When NTBACKUP attempts to read the catalog file of a tape backup volume, one of
	the following error messages is displayed:
	
	  Catalog Information: Unable to load catalog data from tape.
	
	-or-
	
	  Catalog Error: Error writing a catalog file, check available space.
	
	CAUSE
	=====
	
	This error may be caused by insufficient available space on the target drive for
	catalog file expansion, occurring when the target drive has approximately 99
	percent or more of its space allocated.
	
	RESOLUTION
	==========
	
	Currently, there are only two workarounds for this problem:
	
	- Delete files on the target drive to create more available space
	
	  -or-
	
	- Replace the target drive with a larger-capacity hard disk drive
	
	Additional query words: prodnt ntbackup
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
