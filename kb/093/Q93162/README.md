---
layout: page
title: "Q93162: BUG: Cannot Watch Undimensioned Array"
permalink: /kb/093/Q93162/
---

## Q93162: BUG: Cannot Watch Undimensioned Array

	Article: Q93162
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01 
	- Microsoft CodeView for Windows, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The versions of CodeView listed above do not properly display undimensioned
	arrays in C++ code, such as the argv formal parameter to the main() function.
	The array value does not appear in the locals window, if it is a local variable
	or function parameter. An attempt to place a quick watch on the array yields an
	error dialog box. A watch on the array yields a random integer value. In the
	Visual Workbench, and CVW, watching the first array element (array[0]) causes
	this error to appear in the watch window:
	
	  CXX0030: Error: expression cannot be evaluated
	
	In the locals window, the array will be displayed as:
	
	  [BP+0008] char * array[?] = 0xnnnn:0xnnnn
	
	Since the + symbol is not placed before "char", the pointer cannot be expanded.
	
	RESOLUTION
	==========
	
	Modify the code to declare the array as a pointer to a pointer. For example,
	change
	
	     void main (int argc, char *argv[])
	
	to the following equivalent definition:
	
	     void main (int argc, char **argv)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0 and 4.01
	for MS-DOS, and version 4.10 for Windows. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
