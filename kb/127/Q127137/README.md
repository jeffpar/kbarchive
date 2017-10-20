---
layout: page
title: "Q127137: Disk Defragmenter Continuously Loops At 50% Completed"
permalink: /kb/127/Q127137/
---

## Q127137: Disk Defragmenter Continuously Loops At 50% Completed

{% raw %}

	Article: Q127137
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
	
	When you run the Disk Defragmenter tool in Windows 95, you receive the message
	"Starting over, contents have changed" when the process is 50 percent complete.
	Disk Defragmenter starts over each time it reaches 50 percent complete and the
	process never finishes.
	
	CAUSE
	=====
	
	Norton System Doctor, a utility from Symantec that continually monitors the free
	space and fragmentation level on the hard disk, is running.
	
	RESOLUTION
	==========
	
	Quit Norton System Doctor before you run Disk Defragmenter. Note that this
	utility may be located in the Startup group so that it starts each time you
	start your computer. If Norton System Doctor is in the Startup group, remember
	to quit the utility each time you want to run Disk Defragmenter.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
