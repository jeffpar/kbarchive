---
layout: page
title: "Q180615: BUG: Text Box Value Does Not Change If ControlSource Is .NULL."
permalink: kb/180/Q180615/
---

## Q180615: BUG: Text Box Value Does Not Change If ControlSource Is .NULL.

	Article: Q180615
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbHWMAC kbvfp kbvfp500aBUG kbvfp500bug kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the ControlSource property of a text box control is set to the custom
	property of a form and the custom property is .NULL., the text in the control
	cannot be changed. If the text in the control is edited, the text changes to
	.NULL. when the control loses focus.
	
	RESOLUTION
	==========
	
	Change the class definition in the code below to add the KeyPress method as
	follows:
	
	     DEFINE CLASS NewTextBox AS textbox
	        PROCEDURE KeyPress
	        LPARAMETERS nKeyCode, nShiftAltCtrl
	                *-- Once the text has changed, set the custom
	                *-- property of the form to the text box.
	           ThisForm.custom_prop = This.Value
	        ENDPROC
	     ENDDEFINE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program using the code below that creates a form with a custom
	  property and two text boxes. The ControlSource of the first text box is set
	  to the form's custom property.
	
	        frmMain = CREATEOBJECT("frmBase")
	        frmMain.Show
	        READ EVENTS
	
	        DEFINE CLASS frmBase AS Form
	
	             *-- Set the property to a character type.
	             custom_prop = ""
	
	             PROCEDURE Init
	                 ThisForm.custom_prop = .NULL.
	             ENDPROC
	
	             PROCEDURE Unload
	           CLEAR EVENTS
	        ENDPROC
	
	            *-- Create the text box that gives the problem.
	            ADD OBJECT text AS NewTextBox WITH ;
	               Left = 100, ;
	               Top = 0, ;
	               Width = 250, ;
	               Name = "txtText",;
	               NullDisplay = ".NULL.",;
	               ControlSource = "thisform.custom_prop"
	
	           *-- Create another text box to give you something to tab into.
	           ADD OBJECT text2 AS TextBox WITH ;
	              Left = 100, ;
	              Top = 50, ;
	              Width = 250, ;
	              Name = "txtText2"
	        ENDDEFINE
	
	        DEFINE CLASS NewTextBox AS textbox
	        ENDDEFINE
	
	2. Run the program and enter text into the first text box.
	
	3. Tab to the next text box.
	
	  The text in the control changes to .NULL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHWMAC kbvfp kbvfp500aBUG kbvfp500bug kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
