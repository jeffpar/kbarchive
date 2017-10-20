---
layout: page
title: "Q131741: Interrupted Disk Defragmenter Causes Lost Clusters"
permalink: /kb/131/Q131741/
---

## Q131741: Interrupted Disk Defragmenter Causes Lost Clusters

{% raw %}

	Article: Q131741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer loses power, is shut down, or is reset while you are running
	the Windows 95 Disk Defragmenter tool, lost clusters may be left on the hard
	disk.
	
	CAUSE
	=====
	
	During defragmentation, Disk Defragmenter duplicates files and moves them to
	unused clusters on the hard disk before writing the files to contiguous
	clusters. If Disk Defragmenter is interrupted, space designated to receive files
	during the move process remains improperly allocated and unusable.
	
	Note that this problem is limited to lost clusters and does not result in data
	loss.
	
	RESOLUTION
	==========
	
	Use the Windows 95 ScanDisk tool (or another disk repair program that is
	compatible with Windows 95) to repair the hard disk.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
