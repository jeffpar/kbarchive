---
layout: page
title: "Q150147: BUG: LOADIMAGE() or LOADIMAGE_W() Graphics Functions Can Fail"
permalink: /kb/150/Q150147/
---

## Q150147: BUG: LOADIMAGE() or LOADIMAGE_W() Graphics Functions Can Fail

{% raw %}

	Article: Q150147
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the LOADIMAGE() or LOADIMAGE_W() graphics functions to display a bitmap
	file (.bmp) having 256 or more colors or containing complex graphics images
	fails in a QuickWin or Standard Graphics application.
	
	RESOLUTION
	==========
	
	Either use bitmaps having no more than 256 colors or use less complex bitmap
	images.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a source file that contains the sample code listed below.
	
	2. Copy any 256-color or greater bitmap file (.bmp) to the directory containing
	  the sample code.
	
	3. Modify the sample code to include the 256-color or greater bitmap file name
	  in the LOADIMAGE_W() function.
	
	4. Compile and run the application.
	
	Sample Code
	-----------
	
	  ! Compile options needed: /MW
	        include 'FGRAPH.FI'
	        include 'FGRAPH.FD'
	        integer*4 i
	        i=LOADIMAGE_W('winnt256.bmp',0,0)
	        if( i .ne. 0 ) print *, 'LoadImage failed'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
