---
layout: page
title: "Q297268: Data Fragmentation Occurs When You Restore Data to Clean Volume"
permalink: /kb/297/Q297268/
---

## Q297268: Data Fragmentation Occurs When You Restore Data to Clean Volume

{% raw %}

	Article: Q297268
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbOSWin2000fix kbWinNT400PreSP7Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore data from a tape to a clean NTFS file system volume, many of
	the restored files may be fragmented on the disk.
	
	CAUSE
	=====
	
	This behavior occurs because Ntbackup.exe does not give NTFS any information
	about how big the file that is being restored is. Because of this, NTFS must
	pre-allocate standard size runs of clusters to hold the file. This means that it
	typically allocates too much space that is later returned to the free cluster
	pool when the file is fully restored. These small runs are then used again for
	restoring later files, and this caused file fragmentation to occur.
	
	STATUS
	======
	
	This behavior is by design. This problem was first corrected in Windows 2000
	Service Pack 3.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	MORE INFORMATION
	================
	
	To reduce the affect of this fragmentation, you may want to defragment your
	disks at regular intervals. To change this functionality requires a design
	change request, but design change requests are no longer accepted for Windows NT
	4.0.
	
	Additional query words: kbBaseOS
	
	======================================================================
	Keywords          : kbtool kbOSWin2000fix kbWinNT400PreSP7Fix kbWin2000sp3fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
