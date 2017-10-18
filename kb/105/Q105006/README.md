---
layout: page
title: "Q105006: How to Use the MsgBox() Function in FOXTOOLS.FLL"
permalink: kb/105/Q105006/
---

## Q105006: How to Use the MsgBox() Function in FOXTOOLS.FLL

	Article: Q105006
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MsgBox() function in FOXTOOLS.FLL displays a message in a dialog box, waits
	for the user to choose a button, and returns a value indicating which button was
	chosen.
	
	By using the MsgBox() function, you can take advantage of the Windows default
	message dialog boxes. Another benefit of using the MsgBox() function is that it
	does not create a new READ level.
	
	Below is syntax information about MsgBox() and a code example.
	
	NOTE: In FoxPro 2.x, when you are using the MsgBox() function in a project, the
	FOXTOOLS.FLL file must be listed, or you will receive an "Undefined reference"
	error message.
	
	In Visual Foxpro, however, FOXTOOLS.FLL isn't required in order to use the
	MESSAGEBOX() Function. For more information, see the MESSAGEBOX() topic in
	online Help.
	
	MORE INFORMATION
	================
	
	Function Syntax
	---------------
	
	  MsgBox(<msg>,<title>,<type>)
	
	The MsgBox() function takes these arguments:
	
	1. <msg> - Character expression displayed as the message in the dialog
	  box.
	
	2. <title> - Character expression displayed in the title bar of the dialog
	  box.
	
	3. <type> - Numeric expression that controls the buttons and icons to
	  display in the dialog box. This number is derived by adding the numbers from
	  each group of values. For example, number and type of buttons+icon
	  style+default button= type.
	
	MsgBox displays a maximum of 1024 characters. Longer messages are truncated after
	the 1024th character. Message strings longer than 255 characters with no
	intervening spaces are truncated after the 255th character.
	
	MsgBox breaks lines automatically at the right edge of the dialog box. To set
	line breaks manually, place a carriage return (ANSI character 13) and a linefeed
	(ANSI character 10) before the first character of the text that is to begin each
	new line.
	
	The argument type is the sum of values that specify the number and type of
	buttons to display, the icon style to use, and the identity of the default
	button. The following table illustrates the values used and the meaning of each
	group of values:
	
	  Value    Meaning
	  -------------------------------------------------
	
	        Number and type of buttons
	        --------------------------
	
	    0      Display OK button only
	    1      Display OK and Cancel buttons
	    2      Display Abort, Retry, and Ignore buttons
	    3      Display Yes, No, and Cancel buttons
	    4      Display Yes and No buttons
	    5      Display Retry and Cancel buttons
	
	        Icon style
	        ----------
	
	    0      Display no icon
	   16      Display Critical Message icon
	   32      Display Warning Query icon
	   48      Display Warning Message icon
	   64      Display Information Message icon
	
	        Default button
	        --------------
	
	    0      First button is default
	  256      Second button is default
	  512      Third button is default
	
	The first group of values (1-5) describes the number and type of buttons
	displayed in the dialog box; the second group (0, 16, 32, 48, 64) describes the
	icon style; and the third group (0, 256, 512) determines which button is the
	default. When adding numbers to create a final value for the argument type, use
	only one number from each group. The value returned by the MsgBox() function
	indicates which button has been chosen, as shown in the following table:
	
	  Value    Button chosen
	  ----------------------
	
	    1      OK
	    2      Cancel
	    3      Abort
	    4      Retry
	    5      Ignore
	    6      Yes
	    7      No
	
	If the dialog box displays a Cancel button, pressing the ESC key has the same
	effect as choosing Cancel.
	
	Sample Code
	-----------
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	     msg="Do you want to continue?"
	     title="User Input Needed"
	     userchoice=MSGBOX(msg,title,276)
	     * 276 is created from 4+16+256
	     * (Display Yes and No Buttons)+(Display Critical Message Icon)
	     * + (Second Button is Default)
	     IF userchoice=6
	            WAIT WINDOW 'User has chosen "YES"'
	     ELSE
	            WAIT WINDOW 'User has chosen "NO"'
	     ENDIF
	     RELEASE LIBRARY SYS(2004)+"FOXTOOLS.FLL"
	
	Additional query words: FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a alert
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
