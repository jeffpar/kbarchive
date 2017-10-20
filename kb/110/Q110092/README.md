---
layout: page
title: "Q110092: How to Flush 32-Bit File Access Cache (VCACHE)"
permalink: /kb/110/Q110092/
---

## Q110092: How to Flush 32-Bit File Access Cache (VCACHE)

{% raw %}

	Article: Q110092
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	You can commit the contents of the 32-bit file access cache (VCACHE) to
	disk by running MS-DOS Prompt from the Main group and the pressing CTRL+C
	or CTRL+BREAK.
	
	CTRL+C and CTRL+BREAK cause MS-DOS to issue a disk reset, which causes
	32-bit file access to flush, but not invalidate. the cache.
	
	Additional query words: 3.11 VFAT dump write empty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
