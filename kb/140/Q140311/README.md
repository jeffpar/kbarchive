---
layout: page
title: "Q140311: BUG: Setting Value Property of Toolbar to Zero Clears Button"
permalink: /kb/140/Q140311/
---

## Q140311: BUG: Setting Value Property of Toolbar to Zero Clears Button

{% raw %}

	Article: Q140311
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Value property of a Toolbar button group member to zero at run time
	causes that button to become cleared regardless of whether or not it is the
	selected button.
	
	MORE INFORMATION
	================
	
	Within a button group, one button and only one button should remain checked at
	all times. If another button is checked, the first button becomes cleared.
	
	The only way to clear a button that is member of a button group is to check
	another member of that group.
	
	This is the expected behavior.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic, or on the File menu, click New Project (ALT, F, N).
	
	2. Add a toolbar.
	
	3. From the Toolbar Properties window, click the Custom property. Click the
	  button to display the Toolbar Control Properties dialog box.
	
	4. In the Toolbar Control Properties dialog box, select the Buttons tab.
	
	5. Insert four buttons, each having a style of "Button Group."
	
	6. Click OK to exit the Toolbar Control Properties dialog box.
	
	7. Press F5 to run the application.
	
	8. Click the various buttons and observe the selection behavior. Only one button
	  is depressed at a time. You cannot clear a button that has been depressed.
	
	9. Click CTRL+BREAK to halt the program.
	
	10. Type the following code in the debug window:
	
	         Toolbar1.Buttons(x).value=0  'where x = button # that is depressed
	
	  The result is that all buttons are now cleared.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 4.0 for
	Windows. This problem has been corrected in the Visual Basic version 4.0a for
	Windows synchronization release.
	
	Additional query words: 4.00 4.00a vb4win vb432 buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
