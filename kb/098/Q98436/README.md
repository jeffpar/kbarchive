---
layout: page
title: "Q98436: How to Create a Default Text Button on an Input Screen"
permalink: kb/098/Q98436/
---

## Q98436: How to Create a Default Text Button on an Input Screen

	Article: Q98436
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code example below demonstrates how to create a default text button on an
	input screen. For example, you may want the OK button to be chosen by default
	when the ENTER key is pressed.
	
	MORE INFORMATION
	================
	
	To create a default text button:
	
	1. Place the text button(s) on the .SCX screen.
	
	2. Draw a thicker outline around the button that is to be the default button.
	  (This gives the appearance of a default button, but does not actually make
	  this the default button. The ON KEY command is what controls the action of
	  the "default" button.)
	
	3. Generate the .SCX screen into a format file.
	
	4. Open the .FMT file as a program and enter code above and below the generated
	  screen code so that it resembles the following:
	
	     CLEAR
	     SET PROCEDURE TO <This FMT Filename>
	     STORE 0 TO mchoice
	     SET TALK OFF
	     SET CONFIRM OFF
	     ON KEY = 13 DO veri    && This is the carriage return trap.
	     STORE 1 TO a
	     STORE "This is z" TO z
	
	     ********Begin:  generated screen code ******************
	     SCREEN 1 TYPE 0 HEADING "Screen 1" AT 40,2 SIZE 286,492 PIXELS ;
	          FONT "Geneva",12 COLOR 0,0,0,-1,-1,-1
	     @ PIXELS 78,312 TO 112,392 STYLE 28479 COLOR 0,0,0,-1,-1,-1
	     @ PIXELS 83,317 GET mchoice STYLE 1 FONT "Chicago",12 ;
	          PICTURE "@*V OK;Cancel" SIZE 2072,70 COLOR 0,0,0,-1,-1,-1
	     @ PIXELS 76,46 GET a STYLE 0 FONT "Geneva",12 SIZE 15,113 ;
	          COLOR 0,0,0,-1,-1,-1
	     @ PIXELS 117,47 GET z STYLE 0 FONT "Geneva",12 SIZE 15,173 ;
	          COLOR 0,0,0,-1,-1,-1
	     ********End:  generated screen code **********************
	
	     READ
	
	     PROCEDURE veri
	          ALERT NOTE 2 "I'm here in the default button action."
	          KEYBOARD CHR(23)   && This terminates the READ.
	          RETURN .T.
	
	Additional query words: foxbase+/mac 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
