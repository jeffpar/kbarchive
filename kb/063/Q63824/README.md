---
layout: page
title: "Q63824: 386 Enhanced-Mode Windows on 2 MB 386 Computers"
permalink: /kb/063/Q63824/
---

## Q63824: 386 Enhanced-Mode Windows on 2 MB 386 Computers

{% raw %}

	Article: Q63824
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully run 386 enhanced-mode Microsoft Windows on a 386 computer with
	only 2 MB of random access memory (RAM), you must have approximately 5 to 6 MB
	of free disk space. Without ample disk space, you experience problems printing
	and running MS-DOS applications. Print jobs either terminate prematurely or are
	garbled. MS-DOS applications report insufficient memory.
	
	MORE INFORMATION
	================
	
	The disk space is necessary for writing temporary files. In enhanced mode,
	Windows is dependent upon virtual memory to swap in and out code to and from the
	hard drive. If little disk space is free, then demand paging is disabled. Once
	this occurs, it is impossible to start additional MS-DOS applications without
	first closing others.
	
	As an alternative for freeing disk space, and as a system performance boost, it
	is possible to supplement the system's internal RAM with additional physical
	memory. Consult your hardware vendor for assistance in determining the system's
	needs.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
