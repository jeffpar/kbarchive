---
layout: page
title: "Q156104: HOWTO: Hide Focus on an Active Page Tab in a Pageframe"
permalink: /kb/156/Q156104/
---

## Q156104: HOWTO: Hide Focus on an Active Page Tab in a Pageframe

	Article: Q156104
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 5.0 or later, when a page within a PageFrame control becomes
	active, the focus is placed on the caption of the tab of the active page. Visual
	FoxPro versions 3.0 and 3.0b do not exhibit this behavior.
	
	MORE INFORMATION
	================
	
	The following example shows you how to create a PageFrame control and hide the
	focus on the caption of the tab of the active page:
	
	1. Create a form.
	
	2. Place a Container control onto the form, name it "CONTAINER1," and set the
	  following properties in the Properties window:
	
	  BORDERWIDTH = 0
	  LEFT = 60
	  TOP = 60
	  WIDTH = 348
	  HEIGHT = 200
	
	3. Right-click the Container control. On the Shortcut menu, click Edit. Place a
	  PageFrame control into the Container control, and name it "PAGEFRAME1." Set
	  the following properties for the PageFrame control in the Properties window:
	
	  LEFT = 0
	  TOP = 0
	  WIDTH = 348
	  HEIGHT = 200
	
	4. Remove the caption for all pages within the PageFrame control by deleting the
	  value in the Caption property.
	
	  You should have a PageFrame control, with no captions for any of the pages,
	  inside a Container control
	
	5. Making sure the Container control is in the Edit mode and not the PageFrame
	  control, place two labels where the deleted captions used to be, and name
	  them "LABEL1" and "LABEL2."
	
	6. Set the Caption property for these two labels to the appropriate value in the
	  Properties window, such as Page1 for LABEL1 and Page2 for LABEL2.
	
	7. In the Click event of LABEL1, add the following code:
	
	        THISFORM.CONTAINER1.PAGEFRAME1.ACTIVEPAGE = 1
	
	  In the Click event for LABLE2, add the following code:
	
	        THISFORM.CONTAINER1.PAGEFRAME1.ACTIVEPAGE = 2
	
	8. Save and run the form.
	
	When you click the tab of the page within the PageFrame control, no focus shows
	up for the active page tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
