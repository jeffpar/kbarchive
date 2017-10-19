---
layout: page
title: "Q190567: BUG: GotFocus() Sets Commandbutton Default to Initial Setting"
permalink: /kb/190/Q190567/
---

## Q190567: BUG: GotFocus() Sets Commandbutton Default to Initial Setting

	Article: Q190567
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a form which programmatically sets a command button Default
	property to .T., when you navigate through controls on your form, the Default
	status of any of the command buttons on your forms reverts to the initial
	setting. For example, if your form had no default command button, there will be
	no default command button. If your form had a different default command button,
	that button will once again become the default.
	
	CAUSE
	=====
	
	The intrinsic Visual FoxPro Gotfocus() event behavior resets the command button
	default properties to their initial values.
	
	RESOLUTION
	==========
	
	See the MORE INFORMATION section below for a possible workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	A command button with a Default property set to .T., appears with a darkened
	border. It also responds as if clicked when you press the ENTER key when focus
	is on another control, such as a text box.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	              PUBLIC oForm1
	        oForm1=CREATEOBJECT("form1")
	        oForm1.Show
	
	        DEFINE CLASS Form1 AS form
	           AutoCenter = .T.
	           Height = 252
	           Width = 326
	           Name = "Form1"
	
	           ADD OBJECT Text1 AS textbox WITH ;
	              Height = 23, ;
	              Left = 36, ;
	              Top = 24, ;
	              Width = 100, ;
	              Name = "Text1"
	
	           ADD OBJECT Command1 AS commandbutton WITH ;
	              Top = 24, ;
	              Left = 204, ;
	              Height = 27, ;
	              Width = 84, ;
	              TabStop = .F., ;
	              Name = "Command1", ;
	              Default = .T.
	
	           ADD OBJECT Command2 AS commandbutton WITH ;
	              Top = 72, ;
	              Left = 204, ;
	              Height = 27, ;
	              Width = 84, ;
	              TabStop = .F., ;
	              Name = "Command2"
	
	           ADD OBJECT Edit1 AS editbox WITH ;
	              Height = 49, ;
	              Left = 48, ;
	              Top = 192, ;
	              Width = 216, ;
	              Name = "Edit1"
	
	           PROCEDURE Text1.LostFocus
	              ThisForm.Command1.default = .T.
	           ENDPROC
	
	           PROCEDURE Edit1.LostFocus
	              ThisForm.Command2.default = .T.
	           ENDPROC
	
	        ENDDEFINE
	
	2. Tab through the text box and edit box.
	
	Command1 remains the default command button. The property is actually set, but a
	reset to the original default occurs in the intrinsic GotFocus behavior for all
	Visual FoxPro controls.
	
	This following program demonstrates this behavior. You issue a GotFocus() in the
	GotFocus() event for the text box and edit box, to cause the intrinsic behavior
	to occur, then you set the default button. In this case, the default button
	actually changes.
	
	Sample Code
	-----------
	
	        PUBLIC oForm1
	        oForm1=CREATEOBJECT("form1")
	        oForm1.Show
	
	        DEFINE CLASS Form1 AS form
	           AutoCenter = .T.
	           Height = 252
	           Width = 326
	           Name = "Form1"
	
	           ADD OBJECT Text1 AS textbox WITH ;
	              Height = 23, ;
	              Left = 36, ;
	              Top = 24, ;
	              Width = 100, ;
	              Name = "Text1"
	
	           ADD OBJECT Command1 AS commandbutton WITH ;
	              Top = 24, ;
	              Left = 204, ;
	              Height = 27, ;
	              Width = 84, ;
	              TabStop = .F., ;
	              Name = "Command1", ;
	              Default = .T.
	
	           ADD OBJECT Command2 AS commandbutton WITH ;
	              Top = 72, ;
	              Left = 204, ;
	              Height = 27, ;
	              Width = 84, ;
	              TabStop = .F., ;
	              Name = "Command2"
	
	           ADD OBJECT Edit1 AS editbox WITH ;
	              Height = 49, ;
	              Left = 48, ;
	              Top = 192, ;
	              Width = 216, ;
	              Name = "Edit1"
	
	           PROCEDURE text1.GotFocus
	              DoDefault()
	              ThisForm.Command1.default = .T.
	           ENDPROC
	
	           PROCEDURE edit1.GotFocus
	              DoDefault()
	              ThisForm.Command2.default = .T.
	           ENDPROC
	        ENDDEFINE
	
	A potential workaround, which is likely to be difficult to implement, would be to
	use code like the preceding code to manage your default command buttons. Keep in
	mind that the intrinsic GotFocus behavior does the reset, so the GotFocus()
	event for all controls, even those which do not set a command button to default,
	causes the reset to occur. A workaround would involve adding code to all
	control's GotFocus() method to find and store the current default button, issue
	a DoDefault(), and restore the correct default button. However, the DoDefault()
	function only works in Visual FoxPro 5.0 and later versions.
	
	Code similar to the following could be added to the GotFocus() method for all
	controls on a form for a workaround:
	
	Sample Code
	-----------
	
	     LOCAL loDefaultButton, lni
	     WITH thisform
	        FOR lni = 1 to .Controlcount
	           IF .Controls(lni).Baseclass = 'Commandbutton' ;
	                 and .Controls(lni).Default = .t.
	              loDefaultButton = .Controls(lni)
	           ENDIF
	        ENDFOR
	     ENDWITH
	     DoDefault()
	     IF type('loDefaultButton') = "O"
	        loDefaultButton.Default = .t.
	     ENDIF
	
	Note that this assumes that any default command buttons are directly on the form,
	and not in a non-form container such as a container or page. It fails to find a
	command button not directly on the form.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
