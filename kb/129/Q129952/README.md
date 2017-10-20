---
layout: page
title: "Q129952: PC NTMMTA: No Limitations on Memory Management"
permalink: /kb/129/Q129952/
---

## Q129952: PC NTMMTA: No Limitations on Memory Management

{% raw %}

	Article: Q129952
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail Multitasking MTA (MMTA) for OS/2, running OS/2 version 1.3, is limited
	to 16 megabytes of memory. However, the MMTA running under Microsoft Windows NT
	can use all available memory on the Windows NT machine.
	
	MORE INFORMATION
	================
	
	Some of the memory management limitations of OS/2 1.x are removed. The most
	important of these is the limit of 16 MB of physical RAM. The OS/2 subsystem
	uses the large memory capability of Windows NT. As a result, you get an increase
	in performance, and the applications can use the additional memory.
	
	Protection Model
	----------------
	
	The OS/2 subsystem implements protection between OS/2 applications. It constructs
	their address spaces (both the flat address space and LDTs) and implements the
	same protection as in OS/2.
	
	Segment Swapping
	----------------
	
	The OS/2 subsystem uses the Windows NT paging mechanism; no segment swapping is
	performed. Paging works better than segment swapping, and it exists in OS/2 only
	to support the 80286 processor, which is not supported in Windows NT.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
