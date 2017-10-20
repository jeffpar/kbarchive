---
layout: page
title: "Q49935: PRB: L2028 Error Caused by HEAPSIZE, STACKSIZE and DGROUP Size"
permalink: /kb/049/Q49935/
---

## Q49935: PRB: L2028 Error Caused by HEAPSIZE, STACKSIZE and DGROUP Size

{% raw %}

	Article: Q49935
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.01.21,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6; OS/2:5.01.21,5.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.01.21, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.01.21, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK displays the
	following message:
	
	  L2028: Automatic data segment plus heap exceeds 64K
	
	CAUSE
	=====
	
	This error occurs when the segment containing the stack and data plus the near
	heap (DGROUP) exceeds 64K.
	
	RESOLUTION
	==========
	
	Use one of the following three methods to address this situation:
	
	- Reduce the amount of data in the default data segment.
	
	  If the L2028 error occurs with object modules produced by the Microsoft C
	  compiler, one or more of the following three techniques will decrease the
	  amount of data in the default data segment.
	
	  If the application uses the compact, large, or huge memory model, specify the
	  /Gt3 compiler option switch to move any data item three bytes or larger from
	  the default data segment (DGROUP) into a far data segment. If desired, you
	  can specify a larger threshold.
	
	  Remove data from DGROUP by declaring it as FAR (in an application designed for
	  the Microsoft Windows operating system), or far, _far, or __far depending on
	  the version of Microsoft C, C/C++, or Visual C++ you are using.
	
	  If your application requires a large stack due to a great deal of local data
	  (which is any non-static data declared in a function), declare that data as
	  static to prevent it from being stored on the stack. Because this technique
	  only moves the data to a different area in DGROUP, it must be combined with
	  one of the techniques described earlier to remove it from DGROUP.
	
	- Use the /ST linker option switch or the STACKSIZE option in the module
	  definition (.DEF) file to reduce the size of the stack.
	
	- Use the /CP linker option switch or the HEAPSIZE option in the .DEF file to
	  reduce the amount of near heap space that the application requests. NOTE:
	  this switch is only useful for building DOS applications. If you're building
	  Windows applications, HEAPSIZE must be used.
	
	The L2028 error was omitted from the linker error messages in the Microsoft C
	"CodeView and Utilities, Microsoft Editor, Mixed-Language Programming Guide"
	manual for version 5.1.
	
	Additional query words: 5.10 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50121DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2
	Version           : MS-DOS:5.01.21,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6; OS/2:5.01.21,5.1
	
	=============================================================================
	

{% endraw %}
