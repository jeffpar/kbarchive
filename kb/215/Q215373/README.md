---
layout: page
title: "Q215373: BUG: Intrinsic Controls: Shortcut Keys Do Not Work as Expected"
permalink: kb/215/Q215373/
---

## Q215373: BUG: Intrinsic Controls: Shortcut Keys Do Not Work as Expected

	Article: Q215373
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding numeric shortcut keys to your controls appears to have no effect.
	
	RESOLUTION
	==========
	
	Numeric shortcuts are remapped to the CTRL+ALT+NUMBER key combination instead of
	ALT+NUMBER key combination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE pro.
	
	2. Place two Labels and two TextBoxes on Form1.
	
	3. Change the TabIndex of the controls as follows:
	
	   - Label1.TabIndex = 0
	   - Text1.TabIndex = 1
	   - Label2.TabIndex = 2
	   - Text2.TabIndex = 3
	
	4. Set the Caption property of Label1 to "&1."
	
	5. Set the Caption property of Label2 to "&a."
	
	6. Run the application.
	
	If you run the application in emulation, you are able to switch between Text1 and
	Text2 by pressing ALT+1 and ALT+A key combinations respectively.
	
	If you run the application on a device, you are not able to switch to Text1 using
	the ALT+1 keyboard shortcut. Instead, you need to use the CTRL+ALT+1 key
	combination.
	
	Additional query words: vbce wce vbce6 eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Hardware          : WinCE
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
