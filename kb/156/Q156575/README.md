---
layout: page
title: "Q156575: PRB: Word Wrap is Disabled when Syntax Coloring Is Enabled"
permalink: /kb/156/Q156575/
---

## Q156575: PRB: Word Wrap is Disabled when Syntax Coloring Is Enabled

	Article: Q156575
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to turn Word Wrap on while editing a .prg file in Visual FoxPro 5.0
	or 6.0, make sure that the Syntax Coloring check box is not selected. The Word
	Wrap check box is automatically disabled when the Syntax Coloring check box is
	selected. Note that Word Wrap is always disabled when only the Command window is
	active.
	
	RESOLUTION
	==========
	
	Clear the Syntax Coloring check box if you want to use the Word Wrap option.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When editing a .prg file, you can make changes in the way the file is edited by
	clicking Properties on the Edit menu. This functionally was under Options on the
	Tools menu on the Edit Tab in Visual FoxPro 3.0 and has been changed in Visual
	FoxPro 5.0 or 6.0. To ensure that words wrap correctly while editing the file,
	make sure that the Word Wrap check box is cleared. If the Word Wrap check box is
	grayed out, clear the Syntax Coloring check box. The Word Wrap and Syntax
	Coloring check boxes cannot be checked at the same time. Also, Word Wrap is
	never available when the Command window is the active window.
	
	NOTE: "Syntax Coloring" is always dimmed when you are editing a .txt file.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
