---
layout: page
title: "Q72442: Not Enough Memory to Run PageMaker 4.0"
permalink: /kb/072/Q72442/
---

## Q72442: Not Enough Memory to Run PageMaker 4.0

{% raw %}

	Article: Q72442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience out of memory errors when running Aldus PageMaker version 4.0
	with Microsoft Windows even if other large applications run without error.
	
	CAUSE
	=====
	
	The most common reason for this problem is that the PageMaker installation
	procedure did not correctly assemble PM4.EXE due to low disk space. At least 9
	megabytes of hard disk space is needed to install PageMaker if you install all
	the options.
	
	RESOLUTION
	==========
	
	To correct this problem, manually assemble the PM4.EXE file or reinstall
	PageMaker.
	
	To reinstall PageMaker, follow these steps:
	
	1. Back up all PageMaker data files and delete PageMaker from the hard drive.
	
	2. Make sure that the hard drive has at least 9 megabytes of available space and
	  is optimized.
	
	3. Start Windows in standard mode and install PageMaker. Starting Windows in
	  standard mode ensures that a temporary swap file is not created; therefore,
	  the maximum disk space will be available to PageMaker.
	
	MORE INFORMATION
	================
	
	The product included here, Aldus PageMaker, is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.00a 3.0a 3.10 3.11 page maker
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
