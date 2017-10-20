---
layout: page
title: "Q163714: ATDISK Finds the Same Disk Twice on SunDisk PCMCIA ATA Adapter"
permalink: /kb/163/Q163714/
---

## Q163714: ATDISK Finds the Same Disk Twice on SunDisk PCMCIA ATA Adapter

{% raw %}

	Article: Q163714
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting Windows NT 4.0 on a computer that has the hard disk connected to
	a SunDisk PCMCIA ATA Adapter, you may see two drive letters that point to the
	same disk.
	
	CAUSE
	=====
	
	The disk replies to the Identify command on both Disk 0 and Disk 1, which ATDISK
	queries.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned in the article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
