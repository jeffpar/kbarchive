---
layout: page
title: "Q106531: BUG: Debugger Problems Modifying Character Variables"
permalink: kb/106/Q106531/
---

## Q106531: BUG: Debugger Problems Modifying Character Variables

	Article: Q106531
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Modifying character variables with the debugger may not be possible and may
	result in garbage in the string or cause a general protection (GP) fault. At
	times, no variable of any type can be modified in the Watch window.
	
	RESOLUTION
	==========
	
	Do not attempt to modify the value of a character variable from the debugger.
	
	If the Watch window does not allow modification or removal of a variable, switch
	the focus to the Source or Locals window, and then switch the focus back to the
	Watch window.
	
	In addition, avoid the following with the Watch window:
	
	- Making a large number of changes in the Watch window (it may eventually GP
	  fault).
	
	- Clicking in the Watch window after the program completes execution (it may GP
	  fault).
	
	- Using an equal sign (=) in a watch expression because it is interpreted as a
	  C operator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation versions
	1.0 and 1.0a for MS-DOS.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Before attempting to duplicate these problems, be sure to start the Visual
	Workbench with the /v option so that it will be possible to terminate the WINTEE
	session after a GP fault.
	
	The following sequence of steps demonstrate many of the problems with modifying
	variables while debugging:
	
	1. From the Visual Workbench, build the following sample program with the
	  project in debug mode:
	
	         character*10 a
	         integer i
	         a='String'
	         i=5
	         print *, a,i
	         end
	
	2. Debug the application after opening the Watch and Locals windows (from the
	  Windows menu, choose Locals and Watch).
	
	3. Single step through the program (press F8) until the print statement.
	
	4. In the Watch window type, an "i" (without the quotation marks), press the
	  DOWN ARROW key, then type an "a" (without the quotation marks), and then
	  press the UP ARROW key.
	
	5. Change the value of i from 5 to 6, and press the DOWN ARROW key; the Locals
	  window now shows i = 6.
	
	6. Attempt to change the string a. Press the UP ARROW key and try to change i
	  from 6 to 7.
	
	7. If you are unsuccessful, click the Locals window to change focus, and then
	  reclick the Watch window.
	
	8. Now the debugger will allow you to change the 6 to a 7.
	
	9. In the Source code window, select the a variable, and press SHIFT+F9.
	
	10. Choose the Modify button and type "abcd" (without the quotation marks).
	
	11. If you press the ENTER key now, you may get a GP fault.
	
	Additional query words: nofpsnt 1.00 1.00a GPF gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
