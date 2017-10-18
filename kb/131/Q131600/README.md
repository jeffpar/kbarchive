---
layout: page
title: "Q131600: How to Customize RightClick Behavior"
permalink: kb/131/Q131600/
---

## Q131600: How to Customize RightClick Behavior

	Article: Q131600
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, you may want to customize the behavior of the right
	mouse button. In Visual FoxPro, you usually click the right mouse button to
	bring up additional popup menus. This article shows by example how to do the
	same thing in your applications. You can present the user with a popup menu of
	choices (including a choice to Exit) when the user clicks the right mouse
	button.
	
	MORE INFORMATION
	================
	
	You cannot change the default behavior of the _Screen.RightClick method, so
	instead of using the RightClick method, use an ON KEY LABEL RIGHTMOUSE command
	to achieve the desired result.
	
	For example, the following code sample defines a window for the popup, builds the
	popup, and then executes a WAIT WINDOW showing the user's choice.
	
	To make the following code example work, type the following command in the
	Command window:
	
	     ON KEY LABEL RIGHTMOUSE DO RightPop
	
	Note that for this example, when you press the ESC key, the ON KEY LABEL
	definitions are reset, so this only works for a single pass as it is written. To
	force the definition for the right mouse button to remain in effect even after
	the ESC key is pressed, comment out the ON KEY LABEL RIGHTMOUSE command in
	RelWind procedure.
	
	NOTE: To place the popup at the mouse pointer's location, use the MCOL() and
	MROW() functions to retrieve the X & Y coordinates for use when defining the
	popup's window.
	
	Code Sample
	-----------
	
	  *------------------------------------------------------------------------*
	  * Program: RightPop                                                      *
	  * Purpose: Demonstrate how to mimic the behavior of the right mouse      *
	  *          button in Visual FoxPro.                                     *
	  *------------------------------------------------------------------------*
	  ON KEY LABEL esc DO RelWind IN RightPop
	
	  DEFINE WINDOW test FROM 0,0 to 5,12 FLOAT CLOSE NOMINIMIZE
	
	  DEFINE POPUP conversion MARGIN RELATIVE SHADOW COLOR SCHEME 4 ;
	     IN WINDOW test
	  DEFINE BAR 1 OF conversion PROMPT 'Ar\<ea' KEY CTRL+E, '^E'
	  DEFINE BAR 2 OF conversion PROMPT '\<Length' ;
	     KEY CTRL+L, '^L'
	  DEFINE BAR 3 OF conversion PROMPT 'Ma\<ss' ;
	     KEY CTRL+S, '^S'
	  DEFINE BAR 4 OF conversion PROMPT 'Spee\<d' ;
	     KEY CTRL+D, '^D'
	
	  ON SELECTION POPUP conversion;
	     DO choice IN RightPop WITH PROMPT( ), POPUP( )
	  ACTI WINDOW test
	  ACTIVATE POPUP conversion NOWAIT
	
	  PROCEDURE choice
	  PARAMETERS mprompt, mpopup
	  WAIT WINDOW 'You chose ' + mprompt + ;
	      ' from popup ' + mpopup NOWAIT
	
	  PROCEDURE RelWind
	  On Key Label Esc
	  On Key Label RightMouse
	  Release Window Test
	  *----------------------------< End program code >------------------------*
	
	Additional query words: VFoxWin _SCREEN rightclick
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
