---
layout: page
title: "Q138398: PRB: RELEASE May Not Remove OLE Objects from Memory"
permalink: kb/138/Q138398/
---

## Q138398: PRB: RELEASE May Not Remove OLE Objects from Memory

	Article: Q138398
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating an OLE object using the CREATEOBEJCT() function, releasing that
	object does not remove the OLE application session from memory.
	
	RESOLUTION
	==========
	
	For Visual FoxPro to remove certain OLE application session objects from memory,
	the OLE application must be terminated. For example, after running the following
	code, three instances of Microsoft Excel remain in memory:
	
	     FOR i = 1 TO 3
	
	         oObject = CREATEOBJECT('Excel.Application')
	         RELEASE oObject
	
	     ENDFOR
	
	To end each Microsoft Excel session before reentering the FOR loop, the Microsoft
	Excel session must first be terminated. For example:
	
	     FOR i = 1 TO 3
	
	         oObject = CREATEOBJECT('Excel.Application')
	         oObject.Quit
	         RELEASE oObject
	
	     ENDFOR
	
	In this example, Microsoft Excel is told to quit, and then the code releases the
	memory variable in Visual FoxPro by using the oObject.Release command. Quit is a
	method that Microsoft Excel recognizes and can act upon, the actual method for
	your OLE automation application may differ.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The OLE Automation release method is program specific. In the previous example,
	Microsoft Excel was used. Microsoft Excel version 7.0 is designed to remain in
	memory after a OLE object is released. However, other programs may behave
	differently. For example, Microsoft Word version 7.0 terminates with just a
	RELEASE command.
	
	For more information on how your program will handle an OLE Automation RELEASE
	command, please refer to that program's documentation or refer to the vendor of
	that program.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run this code:
	
	     FOR i = 1 TO 3
	        
	         oObject = CREATEOBJECT('Excel.Application')
	         WAIT WINDOW 'Created Excel Object' + STR(i)
	         RELEASE oObject
	
	     ENDFOR
	
	2. View the Windows Task List, and notice that three sessions of Microsoft Excel
	  remain in memory.
	
	Additional query words: VfoxWin kbvfp300 kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
