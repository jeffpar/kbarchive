---
layout: page
title: "Q180529: BUG: Menu Shortcut Keys Do Not Always Work"
permalink: /kb/180/Q180529/
---

## Q180529: BUG: Menu Shortcut Keys Do Not Always Work

	Article: Q180529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a menu is created with the menu editor with an ampersand character (&)
	to indicate a shortcut key for the menu, the menu shortcut key does not work in
	the emulator. Additionally, the menu shortcut keys will not work on the remote
	device unless the form contains a control that can receive focus (such as a
	CommandButton).
	
	An example of a shortcut key would be "ALT-F" to access a menu with the caption
	of "&File."
	
	NOTE: This problem only exists in the emulation environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: wince vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
