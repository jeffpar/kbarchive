---
layout: page
title: "Q193078: BUG: Scrollable Form Displays Improperly on Resize or Scroll"
permalink: kb/193/Q193078/
---

## Q193078: BUG: Scrollable Form Displays Improperly on Resize or Scroll

	Article: Q193078
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a form with the ScrollBars property set to three, when you resize
	the form the vertical and horizontal scrollbars may alternately appear and
	disappear. Also, when you attempt to scroll the form after resizing it, the edge
	of the form that repaints during the scrolling may display a ghosted image with
	some of the form's controls.
	
	RESOLUTION
	==========
	
	As a workaround, you can call the form's Draw method from within the Resize and
	Scrolled event procedures.
	
	Place the following code in the form's Resize procedure:
	
	  
	
	     This.Draw()
	
	Place the following code in the form's Scrolled procedure:
	
	  
	
	     LPARAMETERS nDirection
	     This.Draw()
	
	Please see the MORE INFORMATION section of this document for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You can create a scrollable form in Visual FoxPro 6.0 by setting the form's
	ScrollBars property to a value of one, two, or three. Scrollbars appear on the
	form whenever the form is sized such that any of the form's controls are not
	fully visible.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Alternate Appearance and Disappearance of Scrollbars
	----------------------------------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  
	
	        PUBLIC oform1
	        oform1=NEWOBJECT("form1")
	        oform1.Show
	        IF .T.
	           SUSPEND
	           oform1.width = oform1.width - 14
	           SUSPEND
	           oform1.width = oform1.width + 28
	           SUSPEND
	           oform1.width = oform1.width + 1
	           ON key label f5 oform1.width = oform1.width - 1
	        ELSE
	           SUSPEND
	           oform1.width = oform1.width + 15
	        ENDIF
	
	        DEFINE CLASS form1 AS form
	           AutoCenter = .T.
	           Height = 329
	           Width = 614
	           ScrollBars = 3
	           Caption = "Form1"
	           Name = "Form1"
	
	        PROC Resize
	           * Remove comment from following line for workaround.
	           * This.Draw()
	        ENDPROC
	
	        PROC Scrolled
	           LPARAMETERS nDirection
	           * Remove comment from following line for workaround.
	           * This.Draw()
	        ENDPROC
	
	        ADD OBJECT Edit1 AS editbox WITH ;
	           Height = 316, ;
	           Left = 12, ;
	           Top = 12, ;
	           Width = 604, ;
	           Name = "Edit1"
	
	        ENDDEFINE
	
	2. Press CTRL+M three times to resume the program and resize the form.
	
	3. Press F5 a few times, pausing between each press. This resizes the form by
	  reducing its width by one pixel each time.
	
	RESULTS: Each time F5 is pressed, each scrollbar appears or disappears
	alternately. The same thing happens when the form is resized with the mouse.
	
	Incorrect Repaint When Scrolling Form After Resize
	--------------------------------------------------
	
	1. Modify the preceding program. Change the IF .T. line to read IF .F..
	
	2. Run the program.
	
	3. Press CTRL+M once.
	
	4. Click the form's vertical scrollbar DOWN ARROW twice with the mouse.
	
	RESULTS: The area of the form just above the bottom edge contains a ghosting of
	the bottom edge of the edit box. The same thing happens when the form is resized
	with the mouse.
	
	Demonstration of Workaround
	---------------------------
	
	Remove the (*) asterisk character before the This.Draw() code in the Resize and
	Scrolled procedures in the preceding program example. Repeat the steps in both
	scenarios to show that the behaviors described in the SYMPTOMS section no longer
	occur.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: kbVFp600bug kbOOP kbContainer kbCtrl kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
