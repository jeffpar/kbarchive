---
layout: page
title: "Q208595: VBCE: Resetting Toolbars in the IDE Can Cause Application Error"
permalink: kb/208/Q208595/
---

## Q208595: VBCE: Resetting Toolbars in the IDE Can Cause Application Error

	Article: Q208595
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With a Windows CE Toolkit for Visual Basic (VBCE) project open in the Visual
	Basic design environment, resetting the toolbars causes an Application Error
	when exiting Visual Basic. The following error message is received:
	
	  VB6.EXE - Application Error
	  The instruction at "0x10009bac" referenced memory at "0x03466020".
	  The memory could not be "read".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Do not reset the toolbars while editing a Visual Basic CE project. This clears
	the menus as customized by the Visual Basic CE Add-In, causing an Application
	Error when you shut down Visual Basic.
	
	Additional query words: vbce vbce6 wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
