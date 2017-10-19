---
layout: page
title: "Q146640: FIX: Controls Saved as Class from PageFrame Becomes Invisible"
permalink: /kb/146/Q146640/
---

## Q146640: FIX: Controls Saved as Class from PageFrame Becomes Invisible

	Article: Q146640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro controls saved as a class from the top of a PageFrame's page
	appear to be missing from the class when it is modified with the Class Designer.
	The problem is that the controls in the class are not viewable due to the fact
	that the Top Property is Negative; sometimes the Left property is also Negative.
	
	WORKAROUND
	==========
	
	Open the Class, go to the properties sheet, and select the control from the
	Object list. Set the Top and Left properties to a positive number (such as 5) to
	move the controls down to the viewable area of the Class Designer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form, and place a PageFrame on the form.
	
	2. Edit the PageFrame, and add a label and text box to the top of page1.
	
	3. Save and run the form.
	
	4. Edit the form, and select the PageFrame. Right-click the PageFrame, and
	  select Edit to edit the PageFrame.
	
	5. Select the two controls. On the File menu, click Save as Class. Name the
	  class, and save it to a Visual Class library.
	
	6. Edit the class using the Class Designer. Note that the controls are not
	  visible.
	
	7. Go to the Properties, and find the Controls. Notice that the Top property is
	  set to a negative number. The Left property may also be negative.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
