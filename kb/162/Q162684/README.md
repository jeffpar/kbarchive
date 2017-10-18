---
layout: page
title: "Q162684: FIX: Modal Form Fails to Close with Focus on Check Box"
permalink: kb/162/Q162684/
---

## Q162684: FIX: Modal Form Fails to Close with Focus on Check Box

	Article: Q162684
	Product(s): Microsoft FoxPro
	Version(s): 5.0a 3.0b 5.00
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the focus on a check box in a modal form, the form does not close, although
	code to close the form has been executed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place and run the following code in a program called Boxfocus.prg
	
	        * Begin boxfocus.prg
	        PUBLIC oform1
	
	        oForm1=CREATEOBJECT("Form1")
	        oForm1.SHOW
	        RETURN
	
	        *-- ParentClass:  form
	        *-- BaseClass:    form
	
	        DEFINE CLASS Form1 AS form
	           DoCreate = .T.
	           Caption = "Form1"
	           WindowType = 1
	           Name = "Form1"
	
	           ADD OBJECT Check1 AS checkbox WITH ;
	               Top = 84, ;
	               Left = 36, ;
	               Caption = "Check1", ;
	               TabIndex = 2, ;
	               Name = "Check1"
	
	           ADD OBJECT Command1 AS commandbutton WITH ;
	               Top = 134, ;
	               Left = 68, ;
	               Caption = "Command1", ;
	               Default = .T., ;
	               TabIndex = 4, ;
	               Name = "Command1"
	
	           ADD OBJECT Text1 AS textbox WITH ;
	               Left = 132, ;
	               TabIndex = 3, ;
	               Top = 84, ;
	               Name = "Text1"
	
	           ADD OBJECT Label1 AS label WITH ;
	               AutoSize = .T., ;
	               Caption = "Press [CTRL+ENTER] on check box and " + ;
	                 "form will not close", ;
	               Left = 36, ;
	               Top = 12, ;
	               TabIndex = 1, ;
	               Name = "Label1"
	
	           ADD OBJECT Label2 AS label WITH ;
	               AutoSize = .T., ;
	               Caption = "Press [CTRL+ENTER] on textbox and " + ;
	                 "form will dismiss", ;
	               Left = 36, ;
	               Top = 36, ;
	               TabIndex = 1, ;
	               Name = "Label2"
	
	           PROCEDURE Unload
	               RETURN 5
	           ENDPROC
	
	           PROCEDURE Command1.Click
	               RELEASE THISFORM
	           ENDPROC
	
	       ENDDEFINE
	
	       * EndDefine: form1
	
	       * End code for boxfocus.prg
	
	2. With the focus on the check box, execute a CTRL+ENTER key combination.
	
	  NOTE: The program ends, but the form is still on the screen.
	
	3. Run Boxfocus.prg again and execute a CTRL+ENTER key combination with the
	  focus on the text box.
	
	  NOTE: The form disappears as the program ends.
	
	NOTE: The CTRL+ENTER key combination activates the default command button. The
	same behavior does not occur, however, in a form that is created visually (that
	is, with the Form Designer).
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP500a
	Version           : 5.0a 3.0b 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
