---
layout: page
title: "Q138967: PRB: Using Reserved Name as Filename Launches Converter"
permalink: /kb/138/Q138967/
---

## Q138967: PRB: Using Reserved Name as Filename Launches Converter

	Article: Q138967
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
	
	In Visual FoxPro, a converter is launched if you create a new form by using the
	MODIFY FORM command or create a new report by using the MODIFY REPORT command,
	and you use a reserved device name such as COM1, COM2, LPT1, or LPT2 as the
	name. Clicking the Continue button in the Converter dialog box to bring up the
	next dialog box, clicking the Yes button, and then pressing the ESC key may
	cause an Illegal Operation, termination of FoxPro, or cause the computer to hang
	(stop responding).
	
	RESOLUTION
	==========
	
	Do not use a reserved device name as a filename.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you create a new form or report by clicking New on the File menu, and then
	try to save it to a reserved device name, the correct error message appears:
	
	  The filename is a reserved device name. Use a different filename.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type:
	
	  " Modify Report com1.
	
	  The report Converter launches. " (without the quotation marks)
	
	2. Click the Continue button to enter the next dialog box.
	
	3. Click Yes.
	
	4. Press the ESC key. An illegal operation is reported and FoxPro terminates.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
