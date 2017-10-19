---
layout: page
title: "Q137279: PRB: Program w/ @..SAY..GETs Exits If Press PAGE UP/PAGE DOWN"
permalink: /kb/137/Q137279/
---

## Q137279: PRB: Program w/ @..SAY..GETs Exits If Press PAGE UP/PAGE DOWN

	Article: Q137279
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600 kbDSupport
	Last Modified: 30-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some developers porting code form other FoxPro versions, including MS-DOS and
	Windows, are still using hard coded screen displays (@..SAY..GETs in a .prg
	file).
	
	In Visual FoxPro, you will find that the behavior is somewhat different from
	version 2.x products and other XBase languages. Pressing the PAGE UP or PAGE
	DOWN key while the program is running causes the program to stop, and no
	validation takes place if the GET command has a Valid clause.
	
	RESOLUTION
	==========
	
	In the beginning of the program place this code:
	
	     ON KEY LABEL PGUP KEYBOARD "{BACKTAB}"
	     ON KEY LABEL PGDN KEYBOARD "{TAB}"
	
	This will allow the program to continue normally as if the ENTER key was pressed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program containing this code:
	
	     CLEAR
	     mvar  = SPACE(10)
	     mvar2 = SPACE(10)
	     @ 1,1 GET mvar VALID myvalid()
	     @ 4,1 GET mvar2
	     READ CYCLE
	
	     PROCEDURE myvalid
	       WAIT WINDOW 'In the Procedure of Myvalid'
	     RETURN
	
	2. Run the program.
	
	3. Put a value in mvar and press ENTER. The message 'In the Procedure of
	  Myvalid' appears as expected.
	
	4. Enter a value in mvar2 and press ENTER. The program cycles back to mvar.
	
	5. Press the PAGE DOWN Key. The program exits, and no validation takes place.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
