---
layout: page
title: "Q130525: PRB: SetFocus Doesn't Work When Called in the Valid Event"
permalink: /kb/130/Q130525/
---

## Q130525: PRB: SetFocus Doesn't Work When Called in the Valid Event

{% raw %}

	Article: Q130525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp300
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SetFocus method does not set the focus to the specified control if placed in
	the Valid event procedure code of the following controls: list box, text box,
	combo box, spinner, and edit box. Instead, the focus is placed on the next
	control in the Tab order.
	
	This behavior happens only with list box, edit box, text box, spinner, and combo
	box controls. The SetFocus method can be called from the Valid event of command
	buttons, option buttons, and check boxes.
	
	CAUSE
	=====
	
	Control is passed from the current control to the control whose SetFocus method
	is called, then returns to execute the LostFocus event of the current control.
	Then the LostFocus by default sets the focus to the next control in the Tab
	order.
	
	WORKAROUND
	==========
	
	Call the SetFocus method for the desired control in the LostFocus event of the
	current control, rather than in the Valid event.
	
	NOTE: The NODEFAULT command can be used to skip the default behavior in any event
	or method code, including the LostFocus event. In the case of the LostFocus
	event, use of NODEFAULT causes the focus to stay on the current control rather
	than moving to the next control in the Tab order.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In FoxPro version 2.x, the _CUROBJ system variable was used to select the object
	where the cursor was to be moved. This was often placed in the Valid code
	snippet of an object. The SetFocus method is used in Visual FoxPro to perform
	the same functionality, but will not work as expected in the Valid event of
	certain controls.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place four text boxes on it.
	
	2. Place the following command in the Valid event code for Text1:
	
	     THISFORM.Text3.SETFOCUS
	
	3. Save and run the form. Enter some text into Text1, and press ENTER.
	
	4. The focus moves to Text2 rather than Text3. To set the focus to Text3, follow
	  these steps:
	
	  a. Open the form in design mode.
	
	  b. Double-click the Text1 box.
	
	  c. In the Object combo box, make sure Text1 is selected. In the Procedure
	     combo box, select LostFocus.
	
	  d. Place the following command in the LostFocus event code for Text1:
	
	        THISFORM.Text3.SETFOCUS
	
	  e. In the Procedure combo box, select Valid. Select all the code in the Valid
	     event, and choose Cut from the Edit menu.
	
	  f. Save and run the form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
