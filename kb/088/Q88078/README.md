---
layout: page
title: "Q88078: Using the Quantum Hardcard XL with Windows 3.1"
permalink: /kb/088/Q88078/
---

## Q88078: Using the Quantum Hardcard XL with Windows 3.1

{% raw %}

	Article: Q88078
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the required configuration for using the Quantum Hardcard
	XL with Microsoft Windows 3.1.
	
	MORE INFORMATION
	================
	
	To use a Hardcard XL with Windows 3.1, Quantum (formerly Plus Development)
	recommends the following:
	
	- In the CONFIG.SYS file, load all memory managers before loading Quantum's
	  ATDOSXL.SYS device driver. For example:
	
	        device=c:\windows\himem.sys
	        device=c:\windows\emm386.exe
	        device=c:\atdosxl.sys
	
	- Exclude the Hardcard XL's BIOS address range (the default is C800-C9FF),
	  using either a memory manager (EMM386.EXE) or the EMMEXCLUDE= statement in
	  the SYSTEM.INI file.
	
	- Use version 1.7 of Quantum's ATDOSXL.SYS device driver. This device driver
	  can be downloaded from Quantum's bulletin board service (BBS). The device
	  driver is in a self-extracting file called HCIIXL.EXE.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 Plus Development 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
