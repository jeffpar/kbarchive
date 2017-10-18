---
layout: page
title: "Q186393: PRB: Problems Trying to Resize the MonthView Control"
permalink: kb/186/Q186393/
---

## Q186393: PRB: Problems Trying to Resize the MonthView Control

	Article: Q186393
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After dropping the MonthView ActiveX control onto a form, the control resizes
	itself after losing focus. Only part of the control is visible either in design
	mode or at run-time. Trying to resize the MonthView ActiveX control by dragging
	the control's handles results in the control snapping to a certain size, and any
	other attempts appear to have no effect at all in resizing the control. Changing
	the Height and Width properties also appear to have no effect after resizing the
	control once. When the form runs, the border around the MonthView ActiveX
	control appears resized but the size of the control remains the same.
	
	RESOLUTION
	==========
	
	You should resize the MonthView ActiveX control using only the Font.Size
	property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Normally, when resizing a control located on a form at design-time, you would
	click on the control and drag one of the handles or change the Height and Width
	properties to resize it. Doing this to the MonthView ActiveX control results in
	resizing the border around the control. Of course, the Appearance property of
	the MonthView ActiveX control must be set to "3D," which is the default.
	
	After resizing the MonthView control once, any attempts to resize the control
	again have no effect because the size of the control or its border do not change
	visually while in design mode. If the form is run, then the border of the
	MonthView ActiveX control will be resized, either covering part of the control
	or being expanded to an area larger than the control, depending on which way it
	was resized. Use the Font.Size property to resize the control. You can change
	the Font.Size property at design-time or during run-time.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add the MonthView ActiveX control to it by clicking the
	  ActiveX Control (OleControl) icon on the Form Controls toolbar and dropping
	  it on the form.
	
	2. In the Insert Object dialog box, select the Create Control button, then
	  scroll down the Object Type list box and choose the Microsoft MonthView
	  control.
	
	3. Click the form to make the MonthView ActiveX control lose focus and note that
	  the control changes size and only part of the control can now be seen.
	
	4. Grab the lower-right handle on the MonthView ActiveX control and drag it down
	  and to the right. Note that the control resizes once and any other attempts
	  to resize it seem to have no effect. Run the form and observe that the border
	  may be larger than the control itself depending on how far the handle was
	  dragged.
	
	5. Modify the form, drop a spinner control onto the form, and then add the
	  following code to the respective events:
	
	  Spinner Init event:
	
	           This.Value = ThisForm.OleControl1.Object.Font.Size
	
	  Spinner InterActiveChange Event:
	
	           ThisForm.OleControl1.Object.Font.Size = This.Value
	
	6. Run the form and change the value in the spinner. Note that the MonthView
	  ActiveX control changes its size according to the value of the spinner.
	
	Additional query words: FxinteropOcx vfoxwin FxtoolFormdes kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
