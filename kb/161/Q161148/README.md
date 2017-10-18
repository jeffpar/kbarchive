---
layout: page
title: "Q161148: PRB: ActiveX Control Click Event Not Firing When Form Is Modal"
permalink: kb/161/Q161148/
---

## Q161148: PRB: ActiveX Control Click Event Not Firing When Form Is Modal

	Article: Q161148
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using ActiveX controls on a modal form in Visual FoxPro 5.0, the Click
	event does not fire if that form has been called from an ActiveX control on
	another form. This also applies to Threed controls used on a form in Visual
	FoxPro 3.0.
	
	RESOLUTION
	==========
	
	Change the second form's WindowType to Modeless or call the second form with a
	standard FoxPro control on the first form.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When adding code to the Click event of an ActiveX or Threed control, normally
	the code in the Click event fires when that control is clicked regardless if the
	form is a modeless or modal form. If that form is modal and called from a
	ActiveX or Threed control on another form, then the code in the Click event of
	that ActiveX or Threed control does not fire. For the code to fire correctly,
	the form that is called has to be modeless or the control that calls the form
	with the ActiveX or Threed control has to be a standard FoxPro control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	When using Visual FoxPro 3.0, substitute the phrase "Threed control" for "ActiveX
	control" in the following steps:
	
	1. Create two forms called Active1 and Active2, respectively, and add an ActiveX
	  control (the Threed Command button will do) to each form.
	
	2. In the Active2 form change the WindowType property to Modal and add the
	  following code to the Click event of the ActiveX control:
	
	        WAIT WINDOW "ActiveX Control"
	
	3. In the Active1 form add a FoxPro command button and add the following code to
	  the Click event of the ActiveX control and the Click event of the Visual
	  FoxPro command button:
	
	        DO FORM Active2
	
	4. Run the Active1 form and click on the ActiveX control. When the Active2 form
	  appears, note that clicking on its ActiveX control does not fire the WAIT
	  WINDOW command.
	
	5. Close the Active2 form and click on the standard command button on the
	  Active1 form. Note that the WAIT WINDOW command fires when clicking the
	  ActiveX control on the second form.
	
	6. Close the Active2 form, modify the form, and change the WindowType property
	  in the Active2 form to modeless. Note that when the Active2 form is called
	  from the ActiveX control on the Active1 form, the code fires properly when
	  clicking on the ActiveX control on the Active2 form.
	
	Additional query words: ActiveX kbdse vfoxwin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :3.0,3.0b,5.0,6.0
	
	=============================================================================
	
