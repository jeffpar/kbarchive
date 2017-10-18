---
layout: page
title: "Q215404: BUG: Graphical Style Property of CheckBox Does Not Work"
permalink: kb/215/Q215404/
---

## Q215404: BUG: Graphical Style Property of CheckBox Does Not Work

	Article: Q215404
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the Style property of a CheckBox to '1 - Graphical,' the CheckBox
	appears to function like a CommandButton. You expect that the CheckBox would
	appear similar to a CommandButton, but would appear to stay pressed or
	unpressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a CheckBox on Form1.
	
	3. Set the Style property of the CheckBox to '1 - Graphical.'
	
	4. Run the project targeting either emulation or the default device.
	
	Note that the CheckBox does not toggle, but behaves exactly like a regular
	CommandButton.
	
	REFERENCES
	==========
	
	Windows CE Toolkit for Visual Basic 6.0 Help
	
	Additional query words: vbce6 vbce wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
