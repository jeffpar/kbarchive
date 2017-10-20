---
layout: page
title: "Q187743: PRB: Right Mouse with Manual OLE D&amp;D Disables Left Mouse"
permalink: /kb/187/Q187743/
---

## Q187743: PRB: Right Mouse with Manual OLE D&amp;D Disables Left Mouse

{% raw %}

	Article: Q187743
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When OLE Drag and Drop is started in manual mode by trapping for the right mouse
	button (right-click) on the drag source object, the left mouse button seems to
	be disabled until the right mouse button is clicked again.
	
	CAUSE
	=====
	
	This is caused by setting the nEffect parameter in the OLEStartDrag() event.
	
	RESOLUTION
	==========
	
	Here are two workarounds for this behavior:
	
	- Place the NODEFAULT keyword in the method that calls the OLEDrag() method of
	  the drag source. Normally, this is either the MouseDown or the MouseMove
	  event.
	
	  -or-
	
	- Do not set the nEffect parameter in the OLEStartDrag() event.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a new program file and save it as Test.prg:
	
	        PUBLIC oform1
	
	        oform1=NEWOBJECT("form1")
	        oform1.Show
	        RETURN
	
	        **************************************************
	        *-- Form:         form1
	        *-- ParentClass:  form
	        *-- BaseClass:    form
	        *
	        DEFINE CLASS form1 AS form
	
	           Top = 1
	           Left = 2
	           Height = 350
	           Width = 474
	           DoCreate = .T.
	           OLEDropMode = 1
	           Caption = "Try to move the form by dragging after right "+ ;
	             "clicking the button"
	           WindowState = 0
	           BackColor = RGB(0,128,128)
	           Name = "Form1"
	
	           ADD OBJECT command1 AS commandbutton WITH ;
	              Top = 120, ;
	              Left = 240, ;
	              Height = 73, ;
	              Width = 97, ;
	              Caption = "Right Click Me", ;
	              Name = "Command1"
	
	           PROCEDURE command1.MouseDown
	              LPARAMETERS nButton, nShift, nXCoord, nYCoord
	              IF nButton=2
	              *   NODEFAULT
	                  This.OLEDrag(.T.)
	              ENDIF
	           ENDPROC
	
	           PROCEDURE command1.OLEDrag
	              LPARAMETERS lDetectDrag
	              IF lDetectDrag
	                 This.ForeColor=RGB(0,255,64)
	              ELSE
	                 This.ForeColor=RGB(255,0,255)
	              ENDIF
	           ENDPROC
	
	           PROCEDURE command1.OLECompleteDrag
	              LPARAMETERS nEffect
	              This.ResetToDefault("ForeColor")
	           ENDPROC
	
	           PROCEDURE command1.OLEStartDrag
	              LPARAMETERS oDataObject, nEffect
	              nEffect=3
	           ENDPROC
	
	        ENDDEFINE
	
	2. Run the Test.prg program.
	
	3. Right-click the command button. The caption text should change color when you
	  click the button. This is just for visual confirmation.
	
	4. Try to move the form by dragging the title bar with the left mouse. The left
	  mouse button should act disabled, or in other words, you should not be able
	  to move the form. You may have to right-click the command button more than
	  once, because this behavior does not always occur.
	
	5. Right-clicking anywhere on the form enables the left mouse button allowing
	  you to move or close the form.
	
	6. Edit the Test.prg file and remove the remark on the NODEFAULT keyword in the
	  command1.MouseDown procedure. Save and rerun the form. Note that the left
	  mouse button is not disabled.
	
	REFERENCES
	==========
	
	For additional information on OLE Drag and Drop in manual mode and the nEffects
	parameter, please see the following articles in the Microsoft Knowledge Base:
	
	  Q185654 HOWTO: Starting OLE Drag and Drop In Manual Mode
	
	  Q184386 HOWTO: Using OLE Drag & Drop to Move Controls on a Form
	
	  Q186919 HOWTO: Manual Mode OLE Drag & Drop & Mouse Pointer Changes
	
	Additional query words: kbFVp600 FxprgClassoop
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
