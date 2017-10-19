---
layout: page
title: "Q221740: FIX: Form Does Not Close After Using PEMSTATUS()"
permalink: /kb/221/Q221740/
---

## Q221740: FIX: Form Does Not Close After Using PEMSTATUS()

	Article: Q221740
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After calling the PEMSTATUS() function within a form, you cannot release the
	form object using the Close button (in the upper right corner of the form) or
	Close on the File menu. Even issuing a
	
	  _Screen.ActiveForm.Release 
	
	command does not release the form object from memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	  PUBLIC goForm
	  goForm = CreateObject('Demo11')
	  goForm.Show()
	  *
	  * Form class to show
	  *
	  DEFINE CLASS Demo11 AS Form
	  *
	  * Add a command button to click
	  *
	  ADD OBJECT cmdDemo AS CommandButton WITH Top = 25, Left = 25, Height = 25, Caption = 'Call PemStatus()'
	  *
	  * Called when the command button is clicked
	  *
	  PROCEDURE cmdDemo.Click()
	  *
	  * Three nested class to PemStatus() cause the form object not to be released
	  * Remove these lines for form to operate as expected
	  *
	  IF    PemStatus(_SCREEN.ActiveForm, 'Click', 5) ;
	    AND PemStatus(_SCREEN.ActiveForm, 'Init', 5) ;
	    AND PemStatus(_SCREEN.ActiveForm, 'Load', 5)
	  ENDIF
	  RETURN
	  ENDDEFINE
	
	2. Run the program.
	
	3. Click the Call PemStatus() command button.
	
	4. Close the form using the Close button or Close on the File menu.
	
	Note that the form does not close. To close it, type the following in the Command
	window:
	
	  CLEAR ALL
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbvfp600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
