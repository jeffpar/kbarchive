---
layout: page
title: "Q45536: FIX: LINK 5.02 Should Not Be Used with ILINK 1.1"
permalink: /kb/045/Q45536/
---

## Q45536: FIX: LINK 5.02 Should Not Be Used with ILINK 1.1

{% raw %}

	Article: Q45536
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.02
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, version 5.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the LINK utility version 5.02, which comes as a secondary linker for QuickC
	version 2.0, is used with ILINK version 1.1, which also comes with QuickC 2.0,
	floating-point values printed with the printf() function may be printed
	incorrectly within the QuickC environment. Outside of the environment, the same
	executable may result in math error M6104.
	
	RESOLUTION
	==========
	
	LINK version 4.06 should be used if ILINK is also used. If it is necessary to
	use version 5.02 of the linker, incremental linking should be disabled from
	within the environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the LINK utility version 5.02.
	This problem was corrected in the LINK utility version 5.03.
	
	MORE INFORMATION
	================
	
	The source code below incorrectly prints "FP = 0.00000" instead of "FP =
	5.020000".
	
	Sample Code
	-----------
	
	  // Compile options needed: none
	
	  #include <stdio.h>
	
	  void main( void )
	  {
	     float fp = 5.02F;
	     printf( "FP = %f\n", fp );
	  }
	
	Additional query words: 2.00 1.10 5.03 buglist5.02 fixlist5.03
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : MS-DOS:5.02
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
