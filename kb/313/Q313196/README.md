---
layout: page
title: "Q313196: PRB: SET DATE Resets SelStart Property in Text Boxes"
permalink: kb/313/Q313196/
---

## Q313196: PRB: SET DATE Resets SelStart Property in Text Boxes

	Article: Q313196
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp300b kbvfp300bBUG kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSuppor
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the value of SET("DATE") while the focus is in a text box, the
	SelStart property is reset to 0, placing the insertion point before the first
	character. This occurs even if the form is in a different data session than the
	one in which you perform the SET DATE.
	
	RESOLUTION
	==========
	
	You can partially work around this behavior by saving and restoring the SelStart
	property in the routine that performs the SET DATE.
	
	  FOR i = 1 TO _SCREEN.FormCount
	     loScreenForm = _SCREEN.Forms(i)
	     IF TYPE("loScreenForm.ActiveControl.SelStart") = "N"
	        loScreenForm.Tag = STR(loScreenForm.ActiveControl.SelStart)
	     ENDIF
	  ENDfor
	
	  SET DATE TO (SET("DATE")) && This line will reset the SelStart property.
	
	  FOR i = 1 TO _SCREEN.FormCount
	     loScreenForm = _SCREEN.Forms(i)
	     IF TYPE("loScreenForm.ActiveControl.SelStart") = "N"
	        loScreenForm.ActiveControl.SelStart = VAL(loScreenForm.Tag)
	     ENDIF
	  ENDFOR
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to see the behavior in any version of Visual FoxPro:
	
	  PUBLIC oForm
	  oForm = CREATEOBJECT("Form")
	  oForm.Show()
	  oForm.AddObject("txtBox", "textbox")
	  oForm.txtBox.Visible = .T.
	
	  oForm.txtBox.SetFocus()
	  oForm.txtBox.Value = "12345"
	  oForm.txtBox.SelStart = LEN(oForm.txtBox.Value)
	  ? oForm.txtBox.SelStart && will be 5
	
	  SET DATE TO (SET("DATE"))
	  ? oForm.txtBox.SelStart && will be 0
	
	NOTE: Although these examples all show the behavior within a form, you may also
	see this behavior when running a process from a timer that parses external
	data.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300b kbvfp300bBUG kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
