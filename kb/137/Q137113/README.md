---
layout: page
title: "Q137113: Disk Defragmenter Restarts Continually with Find Fast"
permalink: /kb/137/Q137113/
---

## Q137113: Disk Defragmenter Restarts Continually with Find Fast

{% raw %}

	Article: Q137113
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
	
	If you start Disk Defragmenter while the Find Fast Indexer tool included with
	Microsoft Office version 7.0 for Windows 95 is running, Disk Defragmenter may
	restart repeatedly.
	
	CAUSE
	=====
	
	The Find Fast Indexer tool is writing to the hard disk to update its index. When
	Disk Defragmenter detects that the hard disk has been written to, it restarts.
	
	RESOLUTION
	==========
	
	Temporarily disable the Find Fast Indexer tool before you start Disk
	Defragmenter. To do so, follow these steps:
	
	1. In Control Panel, double-click the Find Fast icon.
	
	2. On the Index menu, click Pause Indexing, and then close the Find Fast tool.
	
	3. Run Disk Defragmenter.
	
	4. When Disk Defragmenter is done, repeat steps 1-2.
	
	MORE INFORMATION
	================
	
	The Find Fast Indexer tool tracks the location on the hard disk of all Microsoft
	Word for Windows documents by default. When one of these files is moved, the
	Find Faster Indexer tool updates its index. If the index is stored on the drive
	being defragmented, the update causes Disk Defragmenter to restart.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
