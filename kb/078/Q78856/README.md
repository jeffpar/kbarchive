---
layout: page
title: "Q78856: INFO: Watch Window Displays Arrays as Pointers"
permalink: /kb/078/Q78856/
---

## Q78856: INFO: Watch Window Displays Arrays as Pointers

{% raw %}

	Article: Q78856
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Visual Workbench Integrated Debugger, when you display an array in the
	Watch window, the array appears as if it was a pointer (that is, no brackets
	appear after the name). However, if you expand the watch value, the debugger
	displays all the elements of the array, not only the first element as occurs
	with pointers.
	
	MORE INFORMATION
	================
	
	The code example below includes a character array named test. When you add a
	watch expression to the Watch window, the debugger displays exactly the
	specified expression; it does not look in the symbol table for the definition.
	This occurs because the Watch window allows different editing types while the
	Locals window does not.
	
	If you place a watch on test, it appears in the Watch window as follows:
	
	16-bit
	------
	
	  +test = 0x<HHHH>:0x<HHHH>
	
	32-bit
	------
	
	  +test = 0x<HHHHHHHH> ""
	
	where each H is replaced by a hexadecimal digit and the "" in the 32-bit debugger
	is the character string (in this case, an empty string).
	
	However, the Locals display resembles the following:
	
	16-bit
	------
	
	  [BP-<HHHH>] +char test[20] = 0x<HHHH>:0x<HHHH>
	
	32-bit
	------
	
	  [EBP-<HHHH>] +char test[20] = 0x<HHHHHHHH> ""
	
	The debugger searches the symbol table before it displays a value in the Locals
	window and shows the form above. Microsoft CodeView also searches the symbol
	table and displays an array as an array.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: /Zi /Od
	   */ 
	
	  void main(void)
	  {
	     char test[20];
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
