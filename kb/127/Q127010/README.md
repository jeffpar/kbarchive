---
layout: page
title: "Q127010: PRB: Check Box Loses 3D Look at Higher Font Sizes"
permalink: /kb/127/Q127010/
---

## Q127010: PRB: Check Box Loses 3D Look at Higher Font Sizes

	Article: Q127010
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Increasing the FontSize of a check box at design or run time results in
	displaying the check box as a 2D check box. The thicker border on the left side
	disappears. This occurs even though the value of the SpecialEffect property is
	0-3D.
	
	CAUSE
	=====
	
	The border for the check box is not wide enough to accommodate the check box.
	
	WORKAROUND
	==========
	
	Use the Autosize property for this control and set it to .T. (True). The
	Autosize property specifies whether a control is automatically sized to fit its
	content. It defaults to a .F. (False) value.
	
	For more information about the Autosize property, search for Autosize using the
	FoxPro Help system.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin pointsize
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
