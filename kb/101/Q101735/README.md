---
layout: page
title: "Q101735: Letter 8.5 x 11 and Note 8.5 x 11 Options in PostScript Driver"
permalink: /kb/101/Q101735/
---

## Q101735: Letter 8.5 x 11 and Note 8.5 x 11 Options in PostScript Driver

{% raw %}

	Article: Q101735
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PostScript printer driver for Windows 3.1 and Windows for Workgroups 3.1
	(PSCRIPT.DRV) versions 3.50 to 3.56 provide two paper choice options: Letter 8.5
	x 11 and Note 8.5 x 11. These options are identical.
	
	MORE INFORMATION
	================
	
	With Windows versions earlier than 3.1, each paper size required a unique,
	predefined identification value. To create a Windows printer driver for a
	PostScript printer, the Microsoft Windows Device Development Kit (DDK) utility
	called MKPRN is used. If two or more paper sizes have the same dimensions, MKPRN
	either ignores the duplicate or maps it to a unique, predefined paper size. In
	the case of the PostScript printer driver, the paper sizes Letter 8.5 x 11 and
	Note 8.5 x 11 were mapped to different paper sizes with the same dimensions.
	
	
	Additional query words: wfw wfwg 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
