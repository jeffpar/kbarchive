---
layout: page
title: "Q200266: PRB: Form's KeyPress Is Not Fired When ActiveX Control Has Focus"
permalink: kb/200/Q200266/
---

## Q200266: PRB: Form's KeyPress Is Not Fired When ActiveX Control Has Focus

	Article: Q200266
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp6
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a form with code in the KeyPress event and the KeyPreview property is
	set to true (.T.). When an ActiveX control has focus, the KeyPress event of the
	form does not fire.
	
	CAUSE
	=====
	
	The KeyPress event for many ActiveX controls happens to have the same name as
	the Visual FoxPro native KeyPress event. ActiveX controls on Visual FoxPro forms
	also have their own window. As a result, they handle the KeyPress event
	independently of Visual FoxPro.
	
	RESOLUTION
	==========
	
	In the KeyPress of the ActiveX control, add the following code as the first line
	of the event:
	
	  ThisForm.KeyPress
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form with a command button and an ActiveX control. Use an
	  ActiveX control with a KeyPress event, such as the Calendar control. Set the
	  KeyPreview property of the form to .T. (true).
	
	2. Add the following code to the following events (assumes default object names
	  are used). When finished, save and run the form.
	
	   - Form1.KeyPress:
	
	  WAIT WINDOW "Form" TIMEOUT 1
	
	   - Command1.KeyPress:
	
	  WAIT WINDOW "Button" TIMEOUT 1
	
	   - Olecontrol1.KeyPress:
	
	  WAIT WINDOW "control" TIMEOUT 1
	
	3. With the form running, set focus to the command button and press any key.
	  Watch the Wait windows in the upper right-hand corner of the screen. Note
	  that the KeyPress event of the form fires before that of the command button.
	
	4. Set focus to the ActiveX control and press any key. The form's KeyPress event
	  does not fire, but the control's KeyPress event does.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
