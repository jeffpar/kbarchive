---
layout: page
title: "Q73511: FIX: CodeView Cannot Display Data in a Huge Array Beyond 64k"
permalink: /kb/073/Q73511/
---

## Q73511: FIX: CodeView Cannot Display Data in a Huge Array Beyond 64k

{% raw %}

	Article: Q73511
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 3.0, 3.11, 3.12, 3.5 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A huge array that contains more than 64K (65535) bytes of data cannot be fully
	expanded in Microsoft CodeView. Both the Watch and Quick Watch windows only
	allow the display of the first 64K of data in a huge data structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of CodeView listed
	above. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	The example code below demonstrates this limitation. Compile and link the
	program for huge memory model (/AH) and specify CodeView debugging information
	(/Zi). Bring the program up in CodeView and set a watch on big_array, which is a
	huge array of 10000 doubles (80000 bytes). Expand the array by clicking on it in
	the Watch window with the mouse or by moving the cursor to it and pressing
	ENTER.
	
	At this point, you can scroll down through the array, but the only visible array
	elements will be 0 through 8191 (65536 bytes).
	
	Sample Code
	-----------
	
	  /* Compile options needed: /AH /Zi /Od
	  */ 
	
	  #include <stdio.h>
	
	  double big_array[10000];
	
	  void main( void)
	  {
	     int i;
	     double d;
	     for( i = 0, d = 0.0f ; i < 10000 ; i++, d += 0.01)
	        big_array[i] = d;
	
	     for( i = 0 ; i < 10000 ; i++)
	        printf( "big_array[%d] = %2.2f\n", i, big_array[i]);
	  }
	
	Additional query words: 3.00 3.50 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2 kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
