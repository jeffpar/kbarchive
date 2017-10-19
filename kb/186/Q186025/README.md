---
layout: page
title: "Q186025: PRB: AGETCLASS() Function may Truncate Fifth Parameter"
permalink: /kb/186/Q186025/
---

## Q186025: PRB: AGETCLASS() Function may Truncate Fifth Parameter

	Article: Q186025
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the fifth parameter, the cFileNameCaption, is longer than 11 characters,
	including spaces, the value appears truncated in the dialog box.
	
	CAUSE
	=====
	
	The limit for the cFileNameCaption parameter in the AGETCLASS() function is 11
	characters.
	
	RESOLUTION
	==========
	
	Use a name that is less than 11 characters.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following line of code as one continuous line into the Command
	  window and then press ENTER:
	
	        ?AGETCLASS(cmdhelp,home()+"\ffc\_datetime.vcx","_clock",
	        "Choose a class","Classxxxx x","Pick class")
	
	  Note that the label for the file name text box displays.
	
	2. Add one more character to the cFileNameCaption parameter so that the command
	  reads like this:
	
	        ?AGETCLASS(cmdhelp,home()+"\ffc\_datetime.vcx","clock",
	        "Choose a class","Classxxxx xx","Pick class")
	
	  Note that the label for the text box is truncated.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
