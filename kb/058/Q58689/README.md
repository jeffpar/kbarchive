---
layout: page
title: "Q58689: Link Method Causes Unexpected Increase in .EXE File Size"
permalink: /kb/058/Q58689/
---

## Q58689: Link Method Causes Unexpected Increase in .EXE File Size

{% raw %}

	Article: Q58689
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2x, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	The method used to link a program determines the size of the resulting
	executable file. For example, command line one below produces an
	executable file much larger than that produced by command line two:
	
	1. link file1.obj file2.obj library.lib;
	
	2. link file1.obj file2.obj,,,library.lib;
	
	In command line one, the library name is listed in the same field as
	the object modules. A library in the object module filed is referred
	to as a "load library" instead of a "regular library." LINK
	automatically includes every module in a load library into the
	executable file; it does not search for unresolved external references
	first.
	
	A load library is useful if each module is required by the resulting
	application. By using a load library, you are not required to enter
	the name of each module on the LINK command line.
	
	Command line two instructs the linker to include only the object
	modules from the library that are necessary to resolve any external
	references.
	
	For more information on this process, refer to Article 20 in the
	"MS-DOS Encyclopedia" (Microsoft Press), particularly pages 701-702.
	Note, however, that this book is currently out of print.
	
	Additional query words: kbinf 1.08 1.10 2.00 2.01 2.10 2.40 2.41 2.44 2.50 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	

{% endraw %}
