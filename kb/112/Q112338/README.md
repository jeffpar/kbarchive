---
layout: page
title: "Q112338: Visual C++ 32-bit Edition Phar Lap Requires 16-Bit GRAPHICS.LIB"
permalink: /kb/112/Q112338/
---

## Q112338: Visual C++ 32-bit Edition Phar Lap Requires 16-Bit GRAPHICS.LIB

{% raw %}

	Article: Q112338
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb3rdparty kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Phar Lap Lite DOS-Extender included with Visual C++ 32-bit Edition has a
	sample program, GRAPHICS, that demonstrates the use of the 16-bit MS-DOS
	graphics routines under Win32s.
	
	However, the sample program does not mention that the 16-bit MS-DOS graphics
	library is not included with Visual C++ 32-bit Edition, version 1.0. The user
	must also have a version of Visual C++ for Windows (or C/C++ 7.0) to make 16-bit
	graphics function calls under Win32s, because GRAPHICS.LIB is included in these
	products.
	
	Visual C++ 2.x is shipped with a version of Visual C++ for Windows which contains
	GRAPHICS.LIB.
	
	Additional query words: kbinf 1.00
	
	======================================================================
	Keywords          : kb3rdparty kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
