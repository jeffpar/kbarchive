---
layout: page
title: "Q81684: Maximizer Memory Manager Incompatible with Windows 3.1"
permalink: /kb/081/Q81684/
---

## Q81684: Maximizer Memory Manager Incompatible with Windows 3.1

{% raw %}

	Article: Q81684
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Maximizer memory manager (MAXIMIZE.COM) is incompatible with Microsoft
	Windows versions 3.1 and 3.11.
	
	MORE INFORMATION
	================
	
	The Maximizer is a memory manager that provides upper memory block (UMB) support
	for loading devices into the upper memory area (UMA). Initial testing of Windows
	3.1 has shown the Maximizer to be incompatible with Windows. The Maximizer
	causes the Windows 3.1 Setup program to fail. If Windows 3.1 is successfully
	installed, Windows fails to run in standard or enhanced mode if the Maximizer is
	loaded with UMB support enabled.
	
	NOTE: The Maximizer comes with a version of HIMEM.SYS that is older than the
	HIMEM.SYS file that ships with Windows 3.1. Microsoft recommends using HIMEM.SYS
	version 3.0, which is shipped with Windows 3.1.
	
	The Maximizer product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 win31 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
