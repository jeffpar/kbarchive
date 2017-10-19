---
layout: page
title: "Q274791: PRB: ON KEY LABEL ALT+F6 Doesn't Work In Windows 95, 98, or Me"
permalink: /kb/274/Q274791/
---

## Q274791: PRB: ON KEY LABEL ALT+F6 Doesn't Work In Windows 95, 98, or Me

	Article: Q274791
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSuppor
	Last Modified: 14-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 98 Second Edition 
	   - Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the ON KEY LABEL ALT+F6 command to assign an action, when you press
	ALT+F6, the action does not execute.
	
	NOTE: The other ALT+F1 to ALT+F12 key combinations work correctly. This problem
	does not occur on Microsoft Windows NT or Microsoft Windows 2000.
	
	CAUSE
	=====
	
	In Windows 95, Windows 98, and Windows Millennium Edition, ALT+F6 is the
	shortcut key to toggle on windows within the same application.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. In the Command window, enter "ON KEY LABEL ALT+F6 ? "Testing ALT+F6""
	  (without the quotation marks) and press ENTER.
	
	3. In the Command window, enter "? ON('KEY','ALT+F6')" (without the quotation
	  marks) and press ENTER to verify that the key is assigned.
	
	4. Press ALT+F6. Nothing is displayed on the screen.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q126449 Keyboard Shortcuts for Windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet kbOSWinME 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :3.0,3.0b,5.0,5.0a,6.0,95,98,98 Second Edition
	Issue type        : kbprb
	
	=============================================================================
	
