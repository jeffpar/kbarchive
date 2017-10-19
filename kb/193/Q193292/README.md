---
layout: page
title: "Q193292: BUG: Commandbutton.SetFocus() in Form Init Sets Default = .T."
permalink: /kb/193/Q193292/
---

## Q193292: BUG: Commandbutton.SetFocus() in Form Init Sets Default = .T.

	Article: Q193292
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp300 kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have created a form that contains a command button. The command button's
	Default property is set to .F. In the form Init method, you call the SetFocus()
	method of the command button. When the form displays, the Default property of
	the command button is set to .T. and the command button becomes the default
	button.
	
	RESOLUTION
	==========
	
	Set the Default property of the Commandbutton to .F. after calling the
	SetFocus() in the Init method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	  PUBLIC oform1
	        oform1=CREATEOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	           AUTOCENTER = .T.
	           HEIGHT = 408
	           WIDTH = 389
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           ADD OBJECT text1 AS TEXTBOX WITH ;
	              HEIGHT = 23, ;
	              LEFT = 108, ;
	              TOP = 48, ;
	              WIDTH = 100, ;
	              NAME = "Text1"
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 216, ;
	              LEFT = 120, ;
	              HEIGHT = 27, ;
	              WIDTH = 84, ;
	              CAPTION = "Command1", ;
	              NAME = "Command1" , ;
	              TABINDEX = 1, ;
	              DEFAULT = .F.
	
	           ADD OBJECT text2 AS TEXTBOX WITH ;
	              HEIGHT = 23, ;
	              LEFT = 108, ;
	              TOP = 84, ;
	              WIDTH = 100, ;
	              NAME = "Text2"
	
	           PROCEDURE INIT
	              * SetFocus() here causes the behavior.
	              ThisForm.Command1.SetFocus()
	              * Uncomment the following line for Work-around.
	              * Thisform.Command1.Default = .F.
	           ENDPROC
	
	           PROCEDURE Command1.CLICK
	              WAIT WINDOW PROGRAM() TIMEOUT 1
	           ENDPROC
	
	        ENDDEFINE
	
	2. Tab once to move to the first text box.
	
	3. Press ENTER.
	
	RESULTS: The WAIT WINDOW displays, indicating that the command button's Click
	event fired.
	
	Workaround
	----------
	
	To demonstrate the workaround, uncomment the line of code that sets the Default
	property of the Commandbutton to .F.
	
	NOTE: In Visual FoxPro for the Macintosh, KEYCOMP must be set to WINDOWS for the
	behavior described in this article to occur.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp300 kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
