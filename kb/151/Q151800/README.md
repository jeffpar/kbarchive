---
layout: page
title: "Q151800: Err Msg: Windows Disk Compression Is Incompatible..."
permalink: /kb/151/Q151800/
---

## Q151800: Err Msg: Windows Disk Compression Is Incompatible...

{% raw %}

	Article: Q151800
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 95 boots into mini-Windows with low conventional memory during a
	disk uncompress operation, the following error message may be displayed:
	
	  Windows disk compression is incompatible with DoubleDisk.
	
	  You must use the software provided by DoubleDisk to manage any compressed
	  drives. DRVSPACE 525
	
	CAUSE
	=====
	
	This error can occur on computers with 326K to 332K free conventional memory
	when mini-Windows starts.
	
	RESOLUTION
	==========
	
	To work around this issue, perform a clean boot to free conventional memory. To
	do so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose "Step-By-Step Confirmation" from the Startup
	  menu.
	
	2. Press N to avoid loading any unnecessary device drivers or TSRs.
	
	  NOTE: If you are prompted whether to load the following items, press Y. These
	  items are required by Windows 95:
	
	  - DoubleSpace driver
	  - System registry
	  - Himem.sys
	  - Ifshlp.sys
	  - Dblbuff.sys
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
