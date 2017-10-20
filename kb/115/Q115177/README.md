---
layout: page
title: "Q115177: Incorrect Qemm READ.ME Reference to MemMaker"
permalink: /kb/115/Q115177/
---

## Q115177: Incorrect Qemm READ.ME Reference to MemMaker

{% raw %}

	Article: Q115177
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quarterdeck Qemm 7.03 READ.ME file states the following:
	
	  If you ever want to switch back to MS-DOS's memory manager, simply run
	  MemMaker again. If you are using QEMM's DOS-Up feature, be sure to run QSETUP
	  and disable DOS-Up before you run MemMaker.
	
	Although this is mostly correct, MemMaker does not remove the QDPMI.SYS command
	from the CONFIG.SYS file. As a result, you receive the following error message
	when you boot your computer:
	
	  Cannot locate QEMM386.SYS Memory Manager - Not loaded.
	
	Additional query words: readme
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
