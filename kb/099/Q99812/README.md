---
layout: page
title: "Q99812: BUG: GP Fault with Visual Basic DDE Sample &amp; Word for Windows"
permalink: /kb/099/Q99812/
---

## Q99812: BUG: GP Fault with Visual Basic DDE Sample &amp; Word for Windows

	Article: Q99812
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.0a,2.0b,2.0c,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Word for Windows, versions 2.0a, 2.0b, 2.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Visual Basic DDE sample with Microsoft Word for Windows may cause a
	general protection (GP) fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Word for Windows
	versions 2.0a, 2.0b, and 2.0c. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Word for Windows (WINWORD.EXE).
	
	2. Start Visual Basic version 3.0 for Windows.
	
	3. From the File menu, choose Open Project (ALT, F, O). Then open the DDE.MAK
	  project from the \VB\SAMPLES\DDE directory.
	
	4. From the Run menu, choose start (ALT, R, S), or press F5. The main form of
	  DDE.MAK is titled DDE Experimenter.
	
	5. From the DDE Experimenter form, select WinWord as the Application and
	  Document1 as the Topic. The Item automatically becomes \Doc.
	
	6. Select the Manual option.
	
	7. Click the Connect button. The caption for the command button will change to
	  Disconnect.
	
	8. Type text into the text box in the Destination Data section of the DDE
	  Experimenter form.
	
	9. Click the Poke button.
	
	10. Select the Automatic option.
	
	At this point, a GP fault occurs in USER.EXE. The address of the GP fault varies
	depending on the version of Word for Windows. Although the message indicates
	that Visual Basic caused the GP fault, the problem is actually caused by Word
	for Windows, not Visual Basic.
	
	Additional query words: 3.00 WinWord 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVB300Search kbVB300 kbWord200a kbWord200b kbWord200c
	Version           : :2.0,2.0a,2.0b,2.0c,3.0
	Issue type        : kbbug
	
	=============================================================================
	
