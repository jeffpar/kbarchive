---
layout: page
title: "Q117378: INFO: Command IDs and In-Place Frame Window Toolbar"
permalink: /kb/117/Q117378/
---

## Q117378: INFO: Command IDs and In-Place Frame Window Toolbar

{% raw %}

	Article: Q117378
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1
	Operating System(s): 
	Keyword(s): kbwizard kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbGrpDSTools
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AppWizard generates code that uses a static UINT array called "buttons" to
	associate command IDs to a single toolbar bitmap that contains several images
	for buttons 16 pixels wide and 15 pixels high. The IDs are associated with the
	toolbar buttons, based on their order in the array.
	
	When you construct a full-server or mini-server OLE application using AppWizard
	and you have not selected context-sensitive Help support, the "buttons" array
	used by the application's in-place frame window class will contain one less
	command ID than the toolbar contains buttons. This behavior is by design. The
	image for the Help mode button is included in the toolbar bitmap, even when the
	application is generated without context- sensitive Help support.
	
	MORE INFORMATION
	================
	
	To view this behavior, perform the following steps:
	
	1. Start AppWizard and choose full-server or mini-server for the application by
	  selecting OLE Options from the main AppWizard dialog box.
	
	2. Have AppWizard create the application.
	
	3. Open App Studio, and, if you have a full-server application, open the bitmap
	  with the ID "IDR_xxxxxxTYPE_SRVR_IP", where xxxxxx is the first six letters
	  of your project. For example, if the project is named "EXAMPLE", the bitmap
	  would be "IDR_EXAMPLTYPE_SRVR_IP". If you have a mini-server application, the
	  bitmap would have the ID "IDR_SRVR_INPLACE".
	
	4. Open the file IPFRAME.CPP in Visual C++. Find the variable named "buttons".
	  Count how many IDs are there besides the ID_SEPARATOR IDs. This would
	  normally be equal to the number of button images that appear on the toolbar
	  bitmap, but in this situation they are not equal.
	
	5. Now count how many button images are in the bitmap. There will be one more
	  image than there are IDs (not including ID_SEPARATOR IDs). In a default
	  application created by AppWizard, there will be four IDs and five button
	  images.
	
	You need to be aware of this behavior if you decide to add buttons to the toolbar
	for the in-place frame window class. If the application does not support
	context-sensitive Help or the Help mode button, the button image could simply be
	replaced with the new button. If context-sensitive Help will be part of the
	application, then you need to make sure the command IDs that you add correspond
	to the correct button image. Otherwise, the buttons will not operate the way you
	expect them to operate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : :1.5,1.51,1.52,2.0,2.1
	
	=============================================================================
	

{% endraw %}
