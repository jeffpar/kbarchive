---
layout: page
title: "Q92350: INFO: Use the FoxPro ON KEY Command"
permalink: kb/092/Q92350/
---

## Q92350: INFO: Use the FoxPro ON KEY Command

	Article: Q92350
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox
	Last Modified: 19-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ON KEY command clears all previous ON KEY LABEL commands. However, the ON
	KEY LABEL <keyname> commands clears only the specified key.
	
	The following sample application demonstrates how the ON KEY command works by
	displaying an appropriate message when the user presses one of the arrow keys:
	
	  SET TALK OFF
	     CLEAR
	     mexit=.F.
	     ON ESCAPE mexit=.T.
	     ON KEY LABEL RIGHTARROW ? "Right Arrow"
	     ** Sets ON KEY LABEL for right arrow to display "Right Arrow".
	
	     ON KEY LABEL LEFTARROW ? "Left Arrow"
	     ** Sets ON KEY LABEL for left arrow to display "Left Arrow".
	
	     ON KEY LABEL UPARROW ? "Up Arrow"
	     ** Sets on key label for up arrow to display the "Up Arrow".
	
	     ON KEY LABEL DNARROW ? "Down Arrow"
	     ** Sets on key label for down arrow to display "Down Arrow".
	
	     @ 0,0 SAY "Press any arrow key or Press <Escape> to exit"
	     DEFINE WINDOW menter FROM 10,20 TO 14,60 DOUBLE
	     ACTIVATE WINDOW menter
	     DO WHILE NOT mexit
	     ENDDO
	     DEACTIVATE WINDOW menter
	     ON KEY LABEL RIGHTARROW
	     ** This statement removes the ON KEY LABEL for the right arrow only.
	
	     ON KEY
	     ** This statement removes all remaining ON KEY LABEL assignments.
	
	Additional query words: reset
	
	======================================================================
	Keywords          : kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
