---
layout: page
title: "Q128336: MS-DOS 5.0 UNFORMAT.COM Err Msg: Wrong DOS Version"
permalink: /kb/128/Q128336/
---

## Q128336: MS-DOS 5.0 UNFORMAT.COM Err Msg: Wrong DOS Version

{% raw %}

	Article: Q128336
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
	
	When you try to run the Microsoft MS-DOS version 5.0 UNFORMAT.COM tool in
	Windows 95, you receive the following error message:
	
	  Wrong DOS version
	
	You receive this error message even if you are loading SETVER.EXE in the
	CONFIG.SYS file and have created the appropriate SETVER entry.
	
	CAUSE
	=====
	
	The MS-DOS 5.0 UNFORMAT.COM tool finds the true version of the operating system
	and is not affected by SETVER.EXE. UNFORMAT.COM has a file size of 18,576 bytes
	and a date of 04-09-91 5:00a.
	
	RESOLUTION
	==========
	
	You must use UNFORMAT.COM from MS-DOS version 6.0 or later.
	
	Additional query words: msdos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
