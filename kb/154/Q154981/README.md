---
layout: page
title: "Q154981: PRB: AppleScript: &quot;Results&quot; are Not Implemented"
permalink: kb/154/Q154981/
---

## Q154981: PRB: AppleScript: &quot;Results&quot; are Not Implemented

	Article: Q154981
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AppleScript returns the message "the variable x is not defined" when it tries to
	execute the "set x to result" command. "Result" is a predefined variable in
	AppleScript. It contains the results of the most recently evaluated expression
	or the most recently executed command. If a command returns nothing, the result
	is not defined.
	
	CAUSE
	=====
	
	An equal sign (=) placed in front of a function tells FoxPro to compile the
	function as a command. However, commands have no return value in FoxPro. The
	equal sign tells the compiler that the return value is to be ignored because it
	is not being assigned to anything.
	
	RESOLUTION
	==========
	
	Do not use an equal sign in front of the function. The result variable will then
	be assigned to the value returned by the function.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following AppleScript:
	
	     Tell Application "Microsoft Visual FoxPro"
	        Activate "Microsoft Visual FoxPro"
	        Do Script "=DATE()"
	        Set x To Result
	        QUIT
	     End Tell
	     Display Dialog x
	
	AppleScript returns the message "the variable x is not defined" when it tries
	execute the "set x to result" command.
	
	Remove the equal sign, and the dialog will display the date.
	
	NOTE: FoxPro must be activated for "result" to be assigned the value of DATE().
	Also the "Display Dialog x" should be placed after the end tell. If placed
	inside the End Tell statement, FoxPro will not quit because it loses focus
	before it has a chance to quit.
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
