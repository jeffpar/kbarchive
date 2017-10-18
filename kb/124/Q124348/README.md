---
layout: page
title: "Q124348: FIX: Exiting ON SHUTDOWN Window Disables GET Objects"
permalink: kb/124/Q124348/
---

## Q124348: FIX: Exiting ON SHUTDOWN Window Disables GET Objects

	Article: Q124348
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fix KBQ kbvfp260aBUGkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ON SHUTDOWN procedure calls a window that is then exited, the mouse can
	only access the current GET object in the READ that was active when the ON
	SHUTDOWN procedure was called.
	
	CAUSE
	=====
	
	Control is not passed from the ON SHUTDOWN procedure back to the previous READ
	level if the RELEASE WINDOW command is used.
	
	WORKAROUND
	==========
	
	Replace the "RELEASE WINDOW window1" command with the "DEACTIVATE WINDOW
	window1" command to send control back to the previous screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program containing the following commands, and run it:
	
	     ON SHUTDOWN DO shutdialog
	
	     mbutton = 1
	     @ 10, 10 GET mbutton ;
	        PICTURE "@*HN Button1; Button2" ;
	        SIZE 2, 12, 2
	     READ CYCLE
	     ON SHUTDOWN         && To clear the setting
	
	     PROCEDURE shutdialog
	     DEFINE WINDOW window1 FROM 0,0 TO 4,45
	     ACTIVATE WINDOW window1
	     @ 1,2 SAY 'Type "q" To Quit Or Any Key To Continue:'
	     mwindow1=INKEY(0,"H")
	
	     IF mwindow1=113 or mwindow1=81     && INKEY() values for "q" and "Q"
	        QUIT
	     ELSE
	        RELEASE WINDOW window1   && Becomes DEACTIVATE WINDOW window1
	     ENDIF
	
	2. Press ALT+F4 to invoke ON SHUTDOWN.
	
	3. Press a key other than q to exit the ON SHUTDOWN window. The mouse will only
	  access the GET object which was active when ON SHUTDOWN was called. Moving
	  between GET objects with the cursor keys will allow the object that has the
	  focus to be accessed with the mouse.
	
	The RELEASE WINDOW <windowname> command does not release the window. This
	can be verified by going into the Window menu and seeing Window1 even after the
	RELEASE WINDOW command has been executed. However, the RELEASE WINDOW command
	releases the window correctly if executed outside the ON SHUTDOWN procedure.
	
	Using DEACTIVATE WINDOW <windowname> in place of RELEASE WINDOW allows the
	GETS to work as expected.
	
	Additional query words: 3.00 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix KBQ kbvfp260aBUG kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5a,2.5b,2.6,2.6a,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
