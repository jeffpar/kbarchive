---
layout: page
title: "Q243411: SmartStor Jukeman Files Occupy Twice the Space on NTFS Partition"
permalink: /kb/243/Q243411/
---

## Q243411: SmartStor Jukeman Files Occupy Twice the Space on NTFS Partition

{% raw %}

	Article: Q243411
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SmartStor Jukeman file may occupy twice the amount of drive space that is
	required for the file after the file is copied or moved on an NTFS partition.
	The file's properties list the correct amount of space, but the file uses twice
	that amount of space on the hard disk.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in SmartStor Jukeman version 2.3.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to SmartStor Jukeman version 2.4.1 or later.
	
	To work around this problem, copy the file to a FAT partition and then back to
	the NTFS partition. When you copy the file to a FAT partition, you remove the
	data stream that causes the file to occupy twice the required space (because
	NTFS partitions support data streams but FAT partitions do not).
	
	MORE INFORMATION
	================
	
	
	For additional information about data streams, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q219291 How Multiple Data Streams Are Handled in a Windows 2000 Network
	
	Or, see pages 617 through 619 of the Microsoft Windows NT Workstation 4.0
	Resource Kit.
	
	For additional information about SmartStor Jukeman, visit the following Smart
	Storage Web site:
	
	  http://www.smartstorage.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
