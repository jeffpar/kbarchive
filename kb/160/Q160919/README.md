---
layout: page
title: "Q160919: PRB: Cannot Call Suspend with the On Shutdown Command"
permalink: /kb/160/Q160919/
---

## Q160919: PRB: Cannot Call Suspend with the On Shutdown Command

{% raw %}

	Article: Q160919
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type the Suspend command in an On Shutdown procedure, the following
	error message appears:
	
	  CANCEL or SUSPEND is not allowed.
	
	In order to quit Visual FoxPro, the On Shutdown command must be cleared by typing
	the "ON SHUTDOWN" (without quotation marks) command in the Command window.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	Place the Suspend command in an event that occurs before Visual FoxPro actually
	begins to shutdown, as in the Destroy event of a form.
	
	MORE INFORMATION
	================
	
	When you exit Visual FoxPro, you trigger the On Shutdown command. Once Visual
	FoxPro begins removing itself from memory, you cannot type the Suspend command.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Test.prg.
	
	2. Type the following two lines of code:
	
	        ON SHUTDOWN SUSPEND
	        QUIT
	
	3. Run the program and the error message appears.
	
	4. Select Cancel from the error dialog. Now when you try to close Visual FoxPro
	  the error message will appear.
	
	5. Type the following command in the Command window and press ENTER:
	
	        ON SHUTDOWN
	
	  Now you will be able to close Visual FoxPro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
