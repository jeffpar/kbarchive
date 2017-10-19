---
layout: page
title: "Q221626: FIX: Debug/Fix in Form Shows Form Controls Toolbar in Debugger"
permalink: /kb/221/Q221626/
---

## Q221626: FIX: Debug/Fix in Form Shows Form Controls Toolbar in Debugger

	Article: Q221626
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGr
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You run a form from the Form Designer with CTRL+E or the [!] toolbar button,
	suspend on a line of code, and the Debugger Trace window is displayed. You then
	select Debug, then Fix from the Debugger window menu. If the Form Controls or
	other form toolbars were displayed before you ran the form, they will
	subsequently be displayed within the Debugger window, rather than in the Visual
	FoxPro desktop.
	
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
	
	The code below programmatically creates a form and adds code to its Activate
	method that intentionally causes an error. The behavior demonstrated is the same
	as if you carry out the steps manually:
	
	1. Run the following code from a program (.PRG) file:
	
	  SET RESOURCE OFF  	&& Ensures Form Controls toolbar is visible
	  CLOSE ALL
	  DELETE FILE testxx.sc?
	  LOCAL aobj[1], xx
	  CREATE FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.WRITEMETHOD('activate',[x=xx])
	  KEYBOARD 'Y' CLEAR
	  RELEASE WINDOW 'Form Designer - testxx.scx'
	  MODIFY FORM testxx NOWAIT
	  KEYBOARD '{ctrl+e}'   && Run form
	
	2. When the error dialog is displayed, click the Suspend button.
	
	3. When the Debugger appears, select Debug, then Fix from the Debugger menu bar.
	
	4. Look for the Form Controls toolbar in the Visual FoxPro desktop; it does not
	  appear there.
	
	5. Press the ALT+TAB key combination to go back to the Debugger window.
	
	Results:
	
	1. Form controls toolbar appears in the Debugger Window.
	
	2. This also happens with SET RESOURCE ON, and can also happen with the Layout
	  and Color Palette toolbars if they are open before running the form, and SET
	  RESOURCE is on.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
