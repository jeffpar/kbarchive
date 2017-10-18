---
layout: page
title: "Q215389: BUG: Application May Not Close When Frame Contains a CommandBar"
permalink: kb/215/Q215389/
---

## Q215389: BUG: Application May Not Close When Frame Contains a CommandBar

	Article: Q215389
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual C++ version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.11, 3.0 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking the Close button of a Commandbar when the Commandbar is inside a frame
	does not close the application. Instead, the frame (and its contents) is no
	longer visible on the form.
	
	RESOLUTION
	==========
	
	Avoid putting the Commandbar control in the Frame control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Select Components from the Project menu and select the Microsoft CE
	  CommandBar Control.
	
	3. Add a Frame control to Form1 and place it in the middle of the form.
	
	4. Add a CommandBar control to Frame1.
	
	5. Run the project in either emulation or on the remote device.
	
	6. Click the Close button on the CommandBar control, and note that the frame is
	  no longer visible, but the application is still open. The expected behavior
	  is that clicking the Close button would close the application.
	
	Additional query words: vbce wince vbce6 wce eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbVCeMb
	Version           : :1.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
