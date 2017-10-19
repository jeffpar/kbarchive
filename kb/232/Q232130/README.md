---
layout: page
title: "Q232130: BUG: Opening Then Closing 2nd Modal Form Disables VFP Close Box"
permalink: /kb/232/Q232130/
---

## Q232130: BUG: Opening Then Closing 2nd Modal Form Disables VFP Close Box

	Article: Q232130
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbGrpDSFox
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual FoxPro application which runs a modal form. This modal form
	displays a second modal form. After closing the second modal form and returning
	to the first modal form, the close box in the Visual FoxPro desktop becomes
	disabled.
	
	RESOLUTION
	==========
	
	As a workaround, in the Destroy method of the second modal form, set the form's
	Visible property to .F. and toggle the _SCREEN.Closable property to .F. and back
	to .T.. This code demonstrates:
	
	  Thisform.Visible = .F.
	  _SCREEN.Closable = .F.
	  _SCREEN.Closable = .T.
	
	There may be a very rapid flicker of the close box, but the flicker should only
	be visible if you look directly at the close box when you close the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  LOCAL loForm1
	  loForm1 = CREATEOBJECT('form1')
	  loForm1.SHOW
	
	  Define CLASS form1 AS FORM
	     Caption = 'Form 1 - Click on me to open next form'
	     WindowType = 1
	     Procedure CLICK
	        LOCAL loForm2
	        loForm2 = CREATEOBJECT('form2')
	        loForm2.SHOW
	     Endproc
	  Enddefine
	
	  Define CLASS form2 AS FORM
	     Caption = 'Form 2 - Click on [X] to close me'
	     AutoCenter = .T.
	     WindowType = 1
	     Procedure DESTROY
	        * Uncomment following 3 lines of code for workaround
	        * This.Visible = .F.
	        * _Screen.Closable = .F.
	        * _Screen.Closable = .T.
	     Endproc
	  Enddefine
	
	2. Click on Form 1 in an area other than the titlebar. Form 2 displays.
	
	3. Click on the close box in Form 2. This is the [X] in the upper right corner
	  of the form.
	
	4. The close box in the Visual FoxPro desktop is disabled. It appears grayed out
	  and will not respond to mouse clicks.
	
	5. Uncomment the code in the Destroy procedure for Form 2 to demonstrate the
	  workaround.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0,6.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
