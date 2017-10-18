---
layout: page
title: "Q198875: PRB: Text in Controls Are Clipped on Chinese/Korean Windows"
permalink: kb/198/Q198875/
---

## Q198875: PRB: Text in Controls Are Clipped on Chinese/Korean Windows

	Article: Q198875
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbOSWin95 kbOSWin98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application is running on Simplified/Traditional Chinese or Korean
	Windows 95/98, the text with San Serif font in a dialog box/control is clipped.
	The English version of Microsoft Publisher appears to have the same problem.
	
	CAUSE
	=====
	
	This problem occurs because the dialog box units are calculated based upon the
	system font (which is Chinese font); however, the font used in the dialog box is
	San Serif. This inconsistent matching causes the incorrect sizing of the dialog
	box/control.
	
	RESOLUTION
	==========
	
	Microsoft suggests that developers design their dialog boxes based on the
	largest font. The edit control is the only control that can automatically lay
	out the size of the control.
	
	For additional information about the edit control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124315 HOWTO: Calculate the Height of Edit Control to Resize It
	
	For other controls including buttons, developers must use a try/fail method.
	There is no automatic way to do this, unfortunately.
	
	Developers should make their control/buttons as large as possible, although this
	may not produce the best appearance on English Windows. There is no definite
	solution, but developers could try and make adjustments for each case.
	Applications can call the GetSystemMetrics function to retrieve various system
	metrics (widths and heights of display elements), including the size of the
	buttons, with such parameters as SM_CXEDGE and SM_CYEDGE, which return
	Dimensions, in pixels. With these values, applications should set the font/size.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95 kbOSWin98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbprb
	
	=============================================================================
	
