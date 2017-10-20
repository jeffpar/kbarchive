---
layout: page
title: "Q192576: FIX: Fix From Debugger Does Not Show VFP Desktop if Visible=.F."
permalink: /kb/192/Q192576/
---

## Q192576: FIX: Fix From Debugger Does Not Show VFP Desktop if Visible=.F.

{% raw %}

	Article: Q192576
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
	
	When viewing and executing program code in the Debugger Trace Window, you can
	select Debug then Fix from the Debugger menu. Normally, this closes your
	currently executing program and brings up the code you were tracing in the
	appropriate editor or designer. If the application you are tracing uses a Top
	Level form, and the Visual FoxPro desktop is hidden with _SCREEN.Visible = .F.,
	the Visual FoxPro desktop will not become visible, and the code is not displayed
	in the appropriate editor or designer.
	
	RESOLUTION
	==========
	
	To cause the Visual FoxPro desktop to display, you can do the following:
	
	1. Type "_SCREEN.Visible" (without the quotation marks) in the Watch Window and
	  then press the ENTER key.
	
	2. Click the .F. in the Value column adjacent to _SCREEN.Visible to edit it,
	  change it to .T., and then press the ENTER key.
	
	This causes the Visual FoxPro desktop to display, and the code is now visible in
	the appropriate editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure you have configured the Debugger to use the Debug Frame. To do
	  this, from the Tools menu, select Options, and then click the Debug tab in
	  the Options dialog box. The Environment drop-down list box must be set to
	  Debug Frame. Note that the Debugger must be closed for this drop- down list
	  box to be enabled.
	
	2. Run the following code from a program (.PRG) file:
	
	        PUBLIC oform
	        oform=CREATEOBJECT("TL_form")
	        oform.SHOW()
	        READ EVENTS
	
	        DEFINE CLASS TL_form AS FORM
	           ShowWindow = 2
	           AutoCenter = .T.
	           lIsFormUp=.F.
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 180, ;
	              LEFT = 80, ;
	              HEIGHT = 27, ;
	              WIDTH = 195, ;
	              CAPTION = "Press to display Debugger", ;
	              NAME = "Command1"
	
	           PROCEDURE DESTROY
	              Clear EVENTS
	              _SCREEN.VISIBLE=.T.
	           ENDPROC
	
	           PROCEDURE ACTIVATE
	              IF !THIS.lIsFormUp
	                 _SCREEN.VISIBLE = .F.   && We wait till now to hide desktop
	                    && to ensure Top Level form is active window.
	                 THIS.lIsFormUp = .T.
	              ENDIF
	           ENDPROC
	
	           PROCEDURE command1.CLICK
	             SET STEP ON
	             x = 1
	           ENDPROC
	        ENDDEFINE
	
	3. Press the "Press to display Debugger" command button.
	
	4. In the Debugger, select Debug then Fix from the menu.
	
	5. Select Yes to cancel the program.
	
	RESULTS: The Debugger remains displayed, and the Visual FoxPro desktop does not
	reappear with program in the editor.
	
	NOTE: You can get the Visual FoxPro desktop back by typing the following into the
	Watch window, and changing its value from .F. to .T.:
	
	  " _SCREEN.Visible" (without the quotation marks)
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500 kbVFp500a kbVFp600fix kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
