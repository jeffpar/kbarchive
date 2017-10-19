---
layout: page
title: "Q169385: PRB: Screen Turns Black While Making .exe"
permalink: /kb/169/Q169385/
---

## Q169385: PRB: Screen Turns Black While Making .exe

	Article: Q169385
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create an executable (.EXE) with Visual Basic, the entire
	display turns black. You see the same behavior whether you compile to Native
	Code or P-Code. This problem only occurs on Windows NT.
	
	CAUSE
	=====
	
	The Console Windows Display (DOS Window) is set to "Full Screen."
	
	RESOLUTION
	==========
	
	To work around this problem, you need to change the Console Windows Display to
	"Window" instead of "Full Screen."
	
	Step-by-Step Example
	--------------------
	
	1. Go to Control Panel and double-click on the Console icon.
	
	2. From the Console Windows Properties Dialog, select the Options tab.
	
	3. Select "Window" under Display Options.
	
	4. Return to the Visual Basic IDE.
	
	5. Make an executable. The screen should not turn black.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Go to Control Panel and double-click on the Console icon.
	
	2. From the Console Windows Properties Dialog select, the Options tab.
	
	3. Select "Full Screen" under Display Options.
	
	4. Start a new Standard EXE in Visual Basic.
	
	5. Select "Make Project1.exe" under the File menu. The entire display turns
	  black. However, after the executable is made, it will return to normal.
	
	Additional query words: blank
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
