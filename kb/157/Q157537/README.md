---
layout: page
title: "Q157537: Windows NT Backup Does Not Recognize Multiple Tape Partitions"
permalink: /kb/157/Q157537/
---

## Q157537: Windows NT Backup Does Not Recognize Multiple Tape Partitions

{% raw %}

	Article: Q157537
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Backup to perform a backup or restore operation using a
	tape that has been partitioned into multiple partitions, the tape cannot be
	erased or formatted for use.
	
	NOTE: Third-party software must be used to create multiple partitions on a backup
	tape. Backup does not provide this functionality.
	
	CAUSE
	=====
	
	Backup recognizes only the first partition on a tape. Other partitions on the
	tape cannot be removed or formatted by Backup.
	
	RESOLUTION
	==========
	
	Remove the additional partitions on the tape using the third-party program that
	was originally used to create the additional partitions.
	
	Additional query words: prodnt volumes
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
