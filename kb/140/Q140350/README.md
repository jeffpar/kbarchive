---
layout: page
title: "Q140350: Deleting .frx File Causes Visual Basic to Exit Abnormally"
permalink: /kb/140/Q140350/
---

## Q140350: Deleting .frx File Causes Visual Basic to Exit Abnormally

{% raw %}

	Article: Q140350
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you delete the .frx file of a form containing a ListView control that has at
	least two column headers, you will encounter the following error when attempting
	to reload the project in the Visual Basic design environment.
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	MORE INFORMATION
	================
	
	Visual Basic stores binary information vital to the functionality of the form
	and its child controls in the .frx files.
	
	The .frx files should never be deleted or modified manually.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic 4.0 (32-bit) or on the File menu, click New Project (ALT,
	  N, P) if Visual Basic is already running. Form1 is created by default.
	
	2. Add a ListView control to Form1.
	
	3. Right click the ListView control, click the Column Headers tab. Insert at
	  least two column headers. Click OK to exit the dialog box.
	
	4. Save the project.
	
	5. In the File Manager or the Explorer delete the .frx file for Form1.
	
	6. Reopen the project in Visual Basic 4.0 (32-bit).
	
	7. Open Form1, by double-clicking it in the Project window. You will receive the
	  following warning:
	
	  Errors during load. Refer to '<form path>\<form file>.log' for
	  details.
	
	8. Close Form1. As a result, an application error occurs and Visual Basic
	  terminates.
	
	RESOLUTION
	==========
	
	The .frx files should never be deleted or modified manually. Deleting or
	modifying the .frx file results in Visual Basic acting unpredictably when
	accessing the associated form.
	
	Additional query words: kbVBp400 kbdss kbVBp kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
