---
layout: page
title: "Q141911: PRB: Form with DeskTop=.T. Changes the Left or Top Properties"
permalink: kb/141/Q141911/
---

## Q141911: PRB: Form with DeskTop=.T. Changes the Left or Top Properties

	Article: Q141911
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the DeskTop property set to True (.T.), the Top and Left properties of a
	form may change if the form is moved programmatically.
	
	WORKAROUND
	==========
	
	In the control that is used to move the form, the Left or Top properties of the
	form must subtract twice the original form position value from the new form
	position. Please see the "More Information" section for an example workaround.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Example One
	-----------
	
	1. Create a form, and set its DeskTop property to true (.T.).
	
	2. Run the form and in the Command window type:
	
	  " <formname>.Left = 100 " (without the quotation marks)
	
	The form will move to position 100 but the form will also move up.
	
	NOTE: A similar behavior occurs if, after the form is visible, the FoxPro desktop
	is moved and the form's Top property is changed. The form's Left property will
	be affected.
	
	Example Two
	-----------
	
	1. In the form's Click event, place this code:
	
	     ThisForm.Left = ThisForm.Left + 100
	
	2. Run the form, and note that the Example One behavior is exhibited.
	
	3. Create two new properties for the form:
	
	   - OrgLeft to hold the form's original Left property.
	
	   - OrgTop to hold the form's original Top property
	
	4. In the form's Init event, place this code:
	
	     This.OrgLeft = This.Left
	     This.OrgTop  = This.Top
	
	5. Add a "Move to the Right" command button with the following code in its Click
	  event:
	
	     ThisForm.Top  = ThisForm.Top - (2*ThisForm.OrgTop)
	     ThisForm.Left = ThisForm.Left + 100 - (2*ThisForm.OrgLeft)
	
	  NOTE: This moves the form 100 pixels to the right of its current position.
	
	6. Add a "Move to the Bottom" command button with the following code in its
	  Click event:
	
	     ThisForm.Top  = ThisForm.Top  + 100 - (2*ThisForm.OrgTop)
	     ThisForm.Left = ThisForm.Left - (2*ThisForm.OrgLeft)
	
	  NOTE: This move the form 100 pixels to the bottom of the current form
	  position.
	
	7. Run the form and observe the behavior.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
