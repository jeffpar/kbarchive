---
layout: page
title: "Q135612: BUG: Form Does Not Release After Being Changed to Modal"
permalink: /kb/135/Q135612/
---

## Q135612: BUG: Form Does Not Release After Being Changed to Modal

	Article: Q135612
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is changed from modeless to modal during run time, the form cannot
	be closed (terminated).
	
	NOTE: In Visual FoxPro 6.0, the Close icon of the control box in the upper right
	corner of the form allows the form to close.
	
	WORKAROUND
	==========
	
	If the form needs to be Modal, set the WindowType to Modal at design time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When a form is changed to Modal at run time, it does not release when a Release
	ThisForm or ThisForm.Release is issued. The only way to close the form is to
	cancel the program.
	
	Steps to Reproduce Problem
	--------------------------
	
	Example One:
	
	1. Create a form with the following command buttons:
	
	  a. Command1 with Modal as the caption and the following code for Visual
	     FoxPro 5.0:
	
	        ThisForm.Visible=.F.
	        ThisForm.Show(1)
	        ThisForm.Visible=.T.
	
	  b. Command2 with Release as the caption and ThisForm.Release in the Click
	     event procedure.
	
	     NOTE: Ensure that the form's WindowType property is set to 0-Modeless.
	
	2. Run the form, and verify that the form is Modeless and that the Release
	  button closes the form.
	
	3. Run the form, and click the Modal button. Verify that the form is modal.
	  Click the Release button. The form will not close.
	
	4. Edit the form, and change the WindowType property to 1-Modal.
	
	5. Run the form, verify that the form is modal. Then click the Release button.
	  The form should close.
	
	Example Two: Setting the modal property programatically before the program
	executes causes the form to behave a little differently. Run the following
	program with the form's WindowType property set to 1. Click the Release button
	and verify that although the form is no longer visible, it has not closed.
	However, defining the form as modeless and then changing it to modal by pressing
	the Modal command button causes the form to remain on the screen.
	
	     ******* Start of Example *******
	
	     frmModalForm=CREATEOBJECT("ModalForm")
	     frmModalForm.Show
	     READ EVENTS
	
	     DEFINE CLASS ModalForm AS Form
	       Top        = 9
	       Left       = 26
	       DoCreate   = .T.
	       Caption    = "Modal Form Test"
	       WindowType = 1 && Change WindowType to 0 to start the form as Modeless
	
	       ADD OBJECT Command1 AS CommandButton WITH ;
	            Top     = 145, ;
	            Left    = 31, ;
	            Height  = 29, ;
	            Width   = 94, ;
	            Caption = "Modal", ;
	            Name    = "Command1"
	
	       ADD OBJECT Command2 AS CommandButton WITH ;
	            Top     = 145, ;
	            Left    = 127, ;
	            Height  = 29, ;
	            Width   = 94, ;
	            Caption = "Modeless", ;
	            Name    = "Command2"
	
	       ADD OBJECT Command3 AS CommandButton WITH ;
	            Top     = 145, ;
	            Left    = 225, ;
	            Height  = 29, ;
	            Width   = 94, ;
	            Caption = "Release", ;
	            Name    = "Command3"
	
	       PROCEDURE Command1.Click
	            ThisForm.Visible=.f.
	            ThisForm.Show(1)
	            ThisForm.Visible=.t.
	       ENDPROC
	
	       PROCEDURE Command2.Click
	            ThisForm.Visible=.f.
	            ThisForm.Show(0)
	            ThisForm.Visible=.t.
	       ENDPROC
	
	       PROCEDURE Command3.Click
	            ThisForm.Release
	            CLEAR Events
	       ENDPROC
	
	     ENDDEFINE
	
	     ******* End of Example *******
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
