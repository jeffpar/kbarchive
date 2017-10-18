---
layout: page
title: "Q149402: PRB: F1 Key Does Not CLEAR READ in Visual FoxPro for Windows"
permalink: kb/149/Q149402/
---

## Q149402: PRB: F1 Key Does Not CLEAR READ in Visual FoxPro for Windows

	Article: Q149402
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a READ command is in effect in FoxPro 2.x for Windows or FoxPro 2.x for
	MS-DOS at the time the F1 key is pressed, the READ command clears. Otherwise, by
	default, pressing the F1 key invokes Help. The F1 key doesn't perform a CLEAR
	READ command in Visual FoxPro for Windows under the same circumstances.
	
	WORKAROUND
	==========
	
	You'll need to modify applications written in FoxPro 2.x for Windows or FoxPro
	2.x for MS-DOS that depend on the F1 function key to perform a CLEAR READ
	command to make them do the same thing in Visual FoxPro for Windows.
	
	Use an ON KEY LABEL assignment to force the F1 key to perform a CLEAR READ
	command. For example, add the following line to the beginning of the program
	listed in the "More Information" section, and run the program again:
	
	     ON KEY LABEL F1 CLEAR READ
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run the following program:
	
	     cMytest=""
	     DEFINE WINDOW test FROM 1,1 TO 10,20
	     ACTIVATE WINDOW test
	     @ 2,1 GET cMytest SIZE 1,10
	     READ
	
	2. Press the F1 key, and Help will pop up.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
