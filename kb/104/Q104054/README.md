---
layout: page
title: "Q104054: PRB: Calling Screen from Another Without Jumping a READ Level"
permalink: kb/104/Q104054/
---

## Q104054: PRB: Calling Screen from Another Without Jumping a READ Level

	Article: Q104054
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Many FoxPro programmers want to be able to execute one screen from another. This
	may present problems if the READ command from the calling screen is not cleared
	before the next screen is executed and more than five screens are executed. The
	most common error message encountered is "Too many READs in effect," which is
	the result of having more than five READS in effect, which is a FoxPro limit.
	
	CAUSE
	=====
	
	The most common, though incorrect, way to try to solve this problem is to enter
	something similar to the following code in the VALID clause of a push button on
	Screen1:
	
	     CLEAR READ
	     DO screen2.spr
	
	Looking at this code, it appears that the READ command will be cleared and that
	Screen2 will then be executed. Actually, the READ command from Screen1 stays in
	effect, Screen2 is executed, and the Screen1 READ command is not cleared until
	the READ command from Screen2 is cleared and control is returned to Screen1.
	
	This behavior occurs because in order for the CLEAR READ command to be recognized
	by the current READ command, program control has to be returned to that READ
	command. In this example, the CLEAR READ command is issued and then program
	control is immediately transferred to SCREEN2.SPR; the READ command for Screen1
	never has a chance to act on the CLEAR READ command and therefore Screen1's READ
	command is not cleared before the DO command for SCREEN2.SPR is issued.
	
	RESOLUTION
	==========
	
	  
	
	  ***************************************************************************
	  IMPORTANT: This technique is not intended to replace a foundation READ, but
	  is a way to get around the limitation of not being able to have more than
	  five READs in effect at one time. Because a DO command is being executed
	  from another DO command, there is a form of recursion occurring and the
	  error "DO nesting too deep" will appear if the limit of 32 DO levels is
	  reached.
	  ***************************************************************************
	
	To achieve the desired behavior, issue the CLEAR READ command as done above, but
	don't issue the DO screen2.spr command until after the READ command has been
	cleared. For example:
	
	1. In the Screen Builder, create a new screen.
	
	  NOTE: In FoxPro for MS-DOS, choose Screen Layout from the Screen menu, and
	  change the screen type from Desktop to Window.
	
	2. Create a push button with two prompts: <Screen2> and <Quit>. Make
	  the variable "m.choice". Open the Valid code snippet and add this code:
	
	        IF m.choice=1
	           tobedone="screen2.spr"
	        ENDIF
	        CLEAR READ
	
	  If the Screen2 button is chosen, TOBEDONE is set to the name of the proper
	  program file. The CLEAR READ command is issued if either button is chosen.
	  Control is returned to the READ command and it is CLEARed.
	
	3. Open the Setup code snippet and add this line of code:
	
	        tobedone=space(12)
	
	  This variable stores the next screen to be executed.
	
	4. Open the Cleanup code snippet and add these lines of code:
	
	        IF EMPTY(PROGRAM(30))     && Check if we are about to exceed the
	           IF NOT EMPTY(tobedone) && 32-level DO limit. If we are, the next
	              DO (tobedone)       && program isn't executed and an error
	        *                            message appears.
	           ENDIF
	        ELSE
	           WAIT WINDOW "32 DO Level Limit exceeded"
	        ENDIF
	
	  This code tests whether TOBEDONE has been assigned a value that means the
	  Screen2 button was chosen. If Screen2 was chosen, the value in TOBEDONE is
	  executed using a name expression. If the screen is exited in some other
	  fashion, that is, the ESC key or the Quit button was chosen, nothing is
	  executed.
	
	  NOTE: Make sure this is the last line in the Cleanup code.
	
	This code example never leaves the originating program, so all variables declared
	in each screen set will remain defined until you quit the original calling
	screen. The program will have to manually release the memory variables in the
	Cleanup code.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.00 2.50 2.50a 2.50b 2.50c errmsg err msg jump
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
