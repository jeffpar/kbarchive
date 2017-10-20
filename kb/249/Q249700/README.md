---
layout: page
title: "Q249700: PRB: Hot Keys of a ToolBar ActiveX Control are not Active"
permalink: /kb/249/Q249700/
---

## Q249700: PRB: Hot Keys of a ToolBar ActiveX Control are not Active

{% raw %}

	Article: Q249700
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hot keys for buttons defined on a ToolBar control, from the Microsoft Common
	Controls ActiveX control (mscomctl.ocx), that are used in a Visual FoxPro form
	are not active when the form is executed.
	
	CAUSE
	=====
	
	The ToolBar ActiveX control does not have SetFocus, GotFocus, or LostFocus
	events and thus cannot receive focus. Since the ToolBar ActiveX control cannot
	receive focus, pressing the ALT key plus the underlined character of the ToolBar
	button(s) has no effect.
	
	RESOLUTION
	==========
	
	There are two ways you can work around this issue.
	
	- Issue an ON KEY LABEL command similar to the following code snippet:
	
	  ON KEY LABEL ALT+A _SCREEN.ACTIVEFORM.buttonclick(_SCREEN.ACTIVEFORM.BUTTONS(1))
	  ON KEY LABEL ALT+B _SCREEN.ACTIVEFORM.buttonclick(_SCREEN.ACTIVEFORM.BUTTONS(2))
	
	-or-
	
	- Another, somewhat more cumbersome workaround for this issue involves checking
	  for KeyPress events in the KeyPress method of a form, similar to the
	  following code snippet:
	
	  DO CASE
	     CASE nKeyCode=30
	        THISFORM.olecontrol1.buttonclick(THISFORM.olecontrol1.BUTTONS(1))
	     CASE nKeyCode=48
	        THISFORM.olecontrol1.buttonclick(THISFORM.olecontrol1.BUTTONS(2))
	  ENDCASE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and add a Microsoft ToolBar ActiveX control.
	
	2. Right-click the ToolBar ActiveX control, and then select the ToolBar
	  Properties menu option.
	
	3. Click the Buttons tab of the ToolBar Properties dialog box.
	
	4. Click Insert Button and insert &Alpha in the Caption text box.
	
	5. Click Insert Button again and enter &Beta in the Caption text box.
	
	6. Click the Apply command button.
	
	7. Click the OK command button to close the ToolBar Properties dialog box.
	
	8. Open the ButtonClick method of the ToolBar control and add the following
	  code:
	
	  DO CASE
	     CASE BUTTON.INDEX=1
	        WAIT WINDOW "Alpha" NOWAIT
	     CASE BUTTON.INDEX=2
	        WAIT WINDOW "Beta" NOWAIT
	  ENDCASE
	
	9. Save and run the form. Click the Alpha and Beta keys of the ToolBar control
	  and note that the wait window messages display.
	
	10. Press ALT+A, and then press ALT+B. Note that no wait window messages appear.
	
	11. Add the following code to the Load method of the form:
	
	  ON KEY LABEL ALT+A _SCREEN.ACTIVEFORM.buttonclick(_SCREEN.ACTIVEFORM.BUTTONS(1))
	  ON KEY LABEL ALT+B _SCREEN.ACTIVEFORM.buttonclick(_SCREEN.ACTIVEFORM.BUTTONS(2))
	
	12. Add the following code to the Unload method of the form:
	
	  ON KEY LABEL ALT+A
	  ON KEY LABEL ALT+B
	
	13. Save and run the form. Press ALT+A, and then press ALT+B. Note that the wait
	  window messages now appear.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbActiveX kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
