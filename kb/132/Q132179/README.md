---
layout: page
title: "Q132179: PRB: Controls in a Page Frame Are Not Refreshed"
permalink: /kb/132/Q132179/
---

## Q132179: PRB: Controls in a Page Frame Are Not Refreshed

	Article: Q132179
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a page frame, you observe that only the controls placed on the active page
	are refreshed when data changes. Controls in underlying pages are not refreshed
	until they receive the focus.
	
	CAUSE
	=====
	
	For performance reasons, only the active page in a page frame is refreshed when
	a form is refreshed. This is by design.
	
	WORKAROUND
	==========
	
	Alternatives include explicitly calling the Refresh method for each page that is
	to be refreshed. For example, it is possible to define a method that loops
	through the pages in a page frame and refreshes all the pages. The following
	code sample illustrates this method.
	
	Code Sample
	-----------
	
	  * Call this method ,and pass the name of the page frame as a
	  * parameter.
	  * For example,
	  *    Thisform.RefreshAllPages('PageFrame1')
	  *
	  PROCEDURE RefreshAllPages
	  PARAMETER tcPageFrameName
	  oRef=EVAL('thisform.'+tcPageFrameName)
	  FOR I=1 TO oRef.PageCount
	     oRef.Pages(I).Refresh
	  ENDFOR
	  Thisform.Refresh
	
	Alternative Workaround
	----------------------
	
	Another alternative is to refresh a page when it becomes active. To accomplish
	this, place the following code in the method associated with the activate event
	of the page:
	
	     This.Refresh
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form.
	
	2. Place a page frame on the Form.
	
	3. Using the secondary (right) mouse button, click the form. Then select Data
	  Environment. Add the Employee table, located in the Samples\Data directory,
	  to the Data Environment.
	
	4. Click Page1 on the Object menu in the Property sheet.
	
	5. Select the text box control from the Form Controls toolbar, and place the
	  text box on Page1. Modify the ControlSource property to be:
	
	     Employee.Emp_id
	
	6. Place another text box on Page1, and modify the ControlSource property to
	  be:
	
	     Employee.Last_name
	
	  NOTE: This step is important as the controls that do not have the focus when
	  the page is activated are not refreshed.
	
	7. Select Page2, and place two text boxes on that page. Change the ControlSource
	  property of the controls to Employee.Address and Employee.City, respectively.
	
	8. Place a command button on the form, and place the following code in its Click
	  event method:
	
	     SKIP
	     ThisForm.Refresh
	
	9. Save and run the form. Click the command button to skip through the table,
	  and activate each page. The data on the second text box is not refreshed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP500a
	Version           : WINDOWS: 3.0,5.0,5.0a
	
	=============================================================================
	
