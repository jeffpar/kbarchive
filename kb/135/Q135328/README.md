---
layout: page
title: "Q135328: FIX: TOP and LEFT Properties Do not Reset to Default"
permalink: /kb/135/Q135328/
---

## Q135328: FIX: TOP and LEFT Properties Do not Reset to Default

	Article: Q135328
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
	
	When designing a form in Visual FoxPro, you can move the form to any part of the
	screen by changing the Top or Left property to a number greater than zero. If
	the form is changed from its default position of the upper-left corner using
	this method, the user is supposed to be able to return the form to its original
	position by choosing the Top and/or Left property, clicking the secondary mouse
	button, and clicking the Reset to Default option. The problem is that if you
	choose the Reset to Default option, a negative number appears in the property
	box and the form is moved past the upper-left corner and off the screen.
	
	There is no way to move the form back to the original default position while
	modifying it unless zero is typed into the Top and/or Left property box. If the
	form is run while in this position, it returns to the original default position
	when shown on the desktop. Modifying the form after running it shows the form
	returned to its original default position.
	
	WORKAROUND
	==========
	
	Type zero in the Top property of the form in the form's properties box. This
	will move the form back to its original position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form in Visual FoxPro.
	
	2. In the properties box, click the Layout tab, and type 100 in the Top property
	  box. The form will move down from the top of the screen after pressing ENTER
	  to accept the number.
	
	3. Click the secondary mouse button while the pointer is resting on the Top
	  property.
	
	4. Click the Reset to Default option in the popup box.
	
	5. Note that the number is reset to a negative number, and the form is
	  positioned off the screen.
	
	6. Type 0 in the Top property box, and watch the form return to the upper-left
	  corner.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
