---
layout: page
title: "Q216331: PRB: Pages of Page Frame Activate with Click When the PageFrame."
permalink: /kb/216/Q216331/
---

## Q216331: PRB: Pages of Page Frame Activate with Click When the PageFrame.

	Article: Q216331
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500 kbvfp600
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pages on a page frame may be activated with a mouse click when the Tabs property
	of the page frame has been set to .F. and no tabs are displayed on the object.
	This behavior does not occur if a form containing a PageFrame object is created
	programmatically.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a PageFrame object to the form.
	
	3. Set the Tabs property of the page frame to .F.
	
	4. Select Page1 of the page frame and add a label captioned "Page 1."
	
	5. Select Page2 of the page frame and add a label captioned "Page 2."
	
	6. Save and run the form.
	
	7. Click the left-mouse button in the upper-right hand corner of the PageFrame
	  Object, until the label captioned "Page 2" is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
