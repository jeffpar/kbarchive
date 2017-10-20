---
layout: page
title: "Q138558: PRB: INKEY() May Return Same ASCII Values for Different Keys"
permalink: /kb/138/Q138558/
---

## Q138558: PRB: INKEY() May Return Same ASCII Values for Different Keys

{% raw %}

	Article: Q138558
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using INKEY() to trap for a keystroke can sometimes lead to unexpected results.
	For example, INKEY() will return the same value, 19, for the LEFT ARROW key and
	ALT+R. This effect may be altered by using the following command before using
	the INKEY():
	
	     SET COMPATIBLE DB4
	
	RESOLUTION
	==========
	
	Use the SET COMPATIBLE DB4 command immediately before you use the INKEY()
	function. Then use the SET COMPATIBLE OFF command after using INKEY(). This may
	have side effects. Please see SET COMPATIBLE DB4 in the Help file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Certain commands and functions in FoxPro, including INKEY(), behave differently
	depending on the SET COMPATIBLE setting. For more information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q114752 Commands and Functions Affected by SET COMPATIBLE
	
	Step-by-Step Resolution
	-----------------------
	
	Using INKEY(0,'M') to trap for a key or mouse click, you can distinguish which
	key was pressed by using the following loop example.
	
	1. Place the following code into a program (.prg) file, and then run it.
	
	     i=1
	     tmpcompt=SET('COMPATIBLE')
	     SET COMPATIBLE OFF
	     FOR i= 1 TO 2                         && Sets up 2 passes in loop
	        DEFINE WINDOW keypress FROM 4,4 TO 20,75 DOUBLE TITLE "This is with ;
	            Set Compatible "+ IIF(SET('COMPATIBLE') ='ON','DB4','OFF')
	        ACTIVATE WINDOW keypress
	        @ 6,16 SAY 'Press a key to start or press the Esc key to quit'
	        @ 8,16 SAY ':'
	        keyvar = 0             && Initialize inkey system memory variable
	
	        *** Main program loop ***
	        DO WHILE .T.
	           keyvar = INKEY(0,'M')    && Get INKEY() value
	           IF keyvar = 0            && No key press or mouse click
	               LOOP                 && Creates Wait State
	           ENDIF
	           IF keyvar = 27           && ESC key pressed, exit main loop
	               EXIT
	           ENDIF
	           IF keyvar # 151          && Not a mouse click
	               CLEAR
	               @ 10,16 SAY 'The ASCII code for the key you hit is ' + ;
	                   ALLTRIM(STR(keyvar))
	           ENDIF
	        ENDDO                       && End of Main loop
	        RELEASE WINDOW keypress
	        SET COMPATIBLE DB4
	     ENDFOR
	     SET COMPATIBLE &tmpcompt
	
	2. Try pressing ALT+R and the LEFT ARROW key. Each will return an ASCII
	  equivalent of 19 because the first time through, COMPATIBLE is set OFF.
	
	3. Press the ESC key. The window will come back up with SET COMPATIBLE DB4.
	
	4. Try pressing ALT+R, and the LEFT ARROW key again. ALT+R returns -418 and LEFT
	  ARROW still returns 19.
	
	You can use this technique to maintain a distinction between hot keys and other
	keystrokes.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
