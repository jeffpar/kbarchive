---
layout: page
title: "Q84992: UMBFILES.COM and Windows Err Msg: Unsupported MS-DOS Version"
permalink: /kb/084/Q84992/
---

## Q84992: UMBFILES.COM and Windows Err Msg: Unsupported MS-DOS Version

{% raw %}

	Article: Q84992
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows version 3.1 in 386 enhanced mode, you may receive the
	following error message:
	
	  Error: Unsupported MS-DOS Version.
	
	You may also receive the following error message when installing Windows 3.1
	using the SETUP /N option.
	
	  Incorrect ms-dos version
	
	CAUSE
	=====
	
	These error messages occur if the PC Magazine utility UMBFILES.COM is being
	loaded into memory.
	
	
	UMBFILES.COM is a PC Magazine utility dated 11/26/91. It allows you to load the
	MS-DOS file handles into the upper memory area (UMA). This utility is
	incompatible with Microsoft Windows operating system version 3.1 in 386 enhance
	mode.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: err msg 3.10 3.11 3rdparty QEMM LoadHigh Files Novell LH
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
