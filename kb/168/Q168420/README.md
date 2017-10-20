---
layout: page
title: "Q168420: FIX: NMAKE Build Fails When Intermediate Dir Starts with ..&#92;"
permalink: /kb/168/Q168420/
---

## Q168420: FIX: NMAKE Build Fails When Intermediate Dir Starts with ..&#92;

{% raw %}

	Article: Q168420
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your intermediate directory starts with ..\ and you export a makefile for the
	project, the makefile may not be written correctly. The result is that some or
	all files in the project may not compile.
	
	RESOLUTION
	==========
	
	1. Change the intermediate directory to start with .\..\ instead of ..\.
	
	2. Export a new makefile for the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default Appwizard application.
	
	2. From the Project menu select Settings and then General.
	
	3. Change the intermediate directory for the debug build to ..\debug.
	
	4. Run "Export Makefile" from the Project menu.
	
	5. Open a Command Shell and run vcvars32.bat from the <msdevpath>\bin
	  directory.
	
	6. Build the exported makefile using nmake /a /f <makefile>. You get the
	  following error:
	
	  LINK : fatal error LNK1104: cannot open file ".\..\Debug\Appwz50.obj" NMAKE :
	  fatal error U1077: 'link.exe' : return code '0xa'
	
	7. Now change the intermediate directory for the debug build to .\..\debug.
	
	8. Repeat steps 4 [ASCII 150] 6 and not that the project builds successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
