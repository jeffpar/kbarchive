---
layout: page
title: "Q150207: FIX: Error Message on Property Page of ImageList Reappears"
permalink: /kb/150/Q150207/
---

## Q150207: FIX: Error Message on Property Page of ImageList Reappears

{% raw %}

	Article: Q150207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the navigation arrow keys are used to try to change the Image size of icons
	when there are pictures already stored in the Image List property page, the user
	correctly receives the following error message:
	
	  "Property is read-only if imagelist contains images"
	
	However, closing this dialog by pressing the OK button causes the message box to
	reappear. This behavior continues in a loop until Microsoft Visual Basic is
	terminated.
	
	NOTE: This only occurs if the arrow keys are used in an attempt to change the
	image size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add an
	  ImageList control to Form1.
	
	2. Choose the ellipsis (...) button adjacent to the Custom property of the
	  control. Select the Images tab, click the Insert Picture button, and select
	  any picture file.
	
	3. Choose the General tab in the property page and use an arrow key to select an
	  image size. The following message box will appear:
	
	  "Property is read-only if imagelist contains images"
	
	Pressing OK causes the message box to reappear in a loop, and Visual Basic has to
	be shut down from the Windows Task List.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbIDE
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
