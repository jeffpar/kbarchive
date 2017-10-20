---
layout: page
title: "Q143312: Form with a Menu Is Not Sizable During Run Time"
permalink: /kb/143/Q143312/
---

## Q143312: Form with a Menu Is Not Sizable During Run Time

{% raw %}

	Article: Q143312
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A form in a 16-bit or 32-bit Visual Basic application with the BorderStyle
	property set to "5 - Sizable ToolWindow" and that includes a hidden or visible
	menu is not sizable during run time.
	
	If a status bar is added to this same form in 32-bit Visual Basic, then it (the
	status bar) can be re-sized; however, the form still cannot be resized.
	
	This behavior is by design and controlled by the operating system.
	
	MORE INFORMATION
	================
	
	The expected result of setting the border style (5 - Sizable ToolWindow) of a
	form is that the form should always be sizable or that this border style should
	not be available as a selection if a menu is added to the form. Documentation of
	this border style does not explain this behavior when a menu item is present.
	
	Steps to Re-create
	------------------
	
	1. Start Visual Basic for 32 bit.
	
	2. Set the Form1 BorderStyle property to 5 (Sizable ToolWindow).
	
	3. Add a menu to the form.
	
	4. Press the F5 key to run the Program. Notice that the form isn't sizable.
	
	5. End the program and add a StatusBar control to the form.
	
	6. Press the F5 key again to run the program. Note that the form is noticeable,
	  but the status bar has a size handle at the bottom right which allows it to
	  be re-sized.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
