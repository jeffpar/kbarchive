---
layout: page
title: "Q39485: MS-DOS: Maximum Usage of FASTOPEN in Expanded Memory"
permalink: /kb/039/Q39485/
---

## Q39485: MS-DOS: Maximum Usage of FASTOPEN in Expanded Memory

{% raw %}

	Article: Q39485
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MS-DOS versions 4.0 and later, FASTOPEN.EXE has been enhanced to allow the
	use of expanded memory to store the cached information. The amount of expanded
	memory that FASTOPEN can use is 16K, one expanded memory page.
	
	MORE INFORMATION
	================
	
	MS-DOS Version 4.0
	------------------
	
	FASTOPEN allows two parameters: (m,n). The m parameter specifies the number of
	files FASTOPEN can work with, and the n parameter specifies the number of file
	extents FASTOPEN can work with. FASTOPEN needs approximately 48 bytes for each
	file and 16 bytes for each file extent specified. Given these values, then you
	can decide the proper values for (m,n) that fit in one page and provide the
	optimal performance for the type of work being done.
	
	MS-DOS Versions 5.0 and Later
	-----------------------------
	
	MS-DOS versions 5.0 and later use the /X switch to create the name cache in
	expanded memory instead of in conventional memory.
	
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.0,4.01,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
