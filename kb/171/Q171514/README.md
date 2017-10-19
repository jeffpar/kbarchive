---
layout: page
title: "Q171514: FIX: Visual Basic 5.0 Crashes When Shutting Down Forms"
permalink: /kb/171/Q171514/
---

## Q171514: FIX: Visual Basic 5.0 Crashes When Shutting Down Forms

	Article: Q171514
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing a modal form in the Visual Basic 5.0 design environment may cause one of
	the following errors:
	
	  "Access Violation: Unhandled exception in VB5.EXE 0xC0000005: Access
	  Violation" (Windows NT4)
	
	  -or-
	
	  "VB has caused an invalid page fault in module VB5.EXE at 0137:00419f1e"
	  (Windows 95, Windows 98, and Windows Me)
	
	CAUSE
	=====
	
	Visual Basic is trying to get the thread data from a control after it has been
	unloaded. The error code that signaled that the control got unloaded is not
	handled properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The Threed32.ocx control shipped with Visual Basic 4.0 is required in order for
	this behavior to occur.
	
	A sample that reproduces this behavior is not available because this behavior
	tends to occur sporadically, and usually only in large, complex projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
