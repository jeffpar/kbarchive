---
layout: page
title: "Q315075: FIX: Error Clicking in Properties Window After Editing Grid"
permalink: kb/315/Q315075/
---

## Q315075: FIX: Error Clicking in Properties Window After Editing Grid

	Article: Q315075
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a grid object on a form in the Form Designer, and you then click
	the Properties window, Visual FoxPro reports the following error message and
	closes unexpectedly:
	
	  Fatal Error: Exception code: C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called "Test" and add the following code to it:
	
	  SET RESOURCE OFF && Take the FoxPro user file out of the picture.
	  CLEAR TYPEAHEAD 
	  LOCAL aobj[1], xx
	  DELETE FILE testxx.sc?
	  CREATE FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.autocenter = .t.
	  xx.addobject('grid1','grid')
	  ACTIVATE WINDOW properties 
	  * WDOCKABLE('properties',.f.)  && Behavior occurs whether dockable or not.
	  xx.grid1.columncount = 2
	  xx.grid1.columns[1].name = 'Col1'
	  * Trigger Properties window object dropdown.
	  KEYBOARD '{ctrl+pgdn}'
	  DOEVENTS 
	  xx.grid1.columns[2].name = 'Col2'
	  * Trigger Properties window object dropdown
	  KEYBOARD '{ctrl+pgdn}'
	  DOEVENTS 
	  xx.grid1.columncount = 3
	  xx.grid1.columns[3].name = 'Col3'
	  ACTIVATE WINDOW 'form designer - testxx.scx'
	  * Save form via File/Save from menu.
	  KEYBOARD '{alt+f}s'
	  DOEVENTS 
	  MOUSE CLICK AT 200, 100 PIXELS WINDOW 'properties'
	  DOEVENTS  
	  RETURN 
	
	2. Save the program file, and then execute the program from the Command window.
	
	The preceding code is an automated example. To create the error by using the user
	interface, follow these steps:
	
	1. Create a form called "Temp". Make sure that the Form Designer window is
	  normal size, not maximized.
	
	2. Place a baseclass Grid on the form.
	
	3. Select the grid, and then open the Properties sheet.
	
	4. In the Properties window, change the grid's ColumnCount property to 2.
	
	5. In the Properties window, select column 1, and then change the Name property
	  to Col1.
	
	6. In the Properties window, select column 2, and then change the Name property
	  to Col2.
	
	7. In the Properties window, change the grid's ColumnCount to 3.
	
	8. In the Properties window, select column 3, and then change the Name property
	  to Col3.
	
	9. Click the Form Designer window title bar (not the form title bar).
	
	10. Press ALT+F+S to save the form.
	
	11. Click the Properties window.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
