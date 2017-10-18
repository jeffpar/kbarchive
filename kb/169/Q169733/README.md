---
layout: page
title: "Q169733: WD97: Equation 3.0 Incorrectly Converts Spaces From Version 2.x"
permalink: kb/169/Q169733/
---

## Q169733: WD97: Equation 3.0 Incorrectly Converts Spaces From Version 2.x

	Article: Q169733
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbfield kbformula
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 for Windows, you may receive the following error message:
	
	  This equation is the maximum size allowed. Please save the equation
	  immediately. If you want to continue, you must divide it into smaller pieces.
	
	CAUSE
	=====
	
	When you open a document created in an earlier version of Word, if the document
	contains equations from Equation Editor version 2.x, Equation Editor version 3.0
	may make the spacing in the equation wider or narrower than it was in the
	original.
	
	NOTE: If Show All is selected in the View menu, space markers are visible before
	conversion, but not afterwards.
	
	WORKAROUND
	==========
	
	To work around this problem, you can select and delete unwanted spaces; however,
	this may be impractical depending on the number of equations and spaces.
	
	To make the overall spacing more closely match the original, use the following
	steps in Microsoft Word 97 with Microsoft Equation 3.0:
	
	1. Double-click the equation to edit it. If Microsoft Equation 3.0 displays the
	  error message described in the "Symptoms" section of this article, click "OK"
	  until the message is no longer displayed.
	
	2. On the Format menu, click Spacing.
	
	3. Scroll down the list of items, and click Spacing Adjustment.
	
	4. Change the setting to about 40-50% to compress, or to about 120-140% to
	  expand, and then click OK.
	
	5. On the Edit menu, click Select All.
	
	6. Press F9 to update all fields in the document, including the equation fields.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following table describes typical conversion results.
	
	                                          Appearance in Editor 3.0
	Description      Shortcut key              AFTER Conversion from 2.x
	--------------------------------------------------------------------
	
	Zero space       SHIFT+SPACEBAR            Thin space (no marker)
	
	1-point space    CTRL+ALT+SPACEBAR         Em space (no marker)
	
	Thin space       CTRL+SPACEBAR             Zero space (no marker)
	
	Thick space      CTRL+SHIFT+SPACEBAR       Zero space (no marker)
	
	Em space         No shortcut - insert      Zero space (no marker)
	                from palette
	
	
	Additional query words: word8 word97 8.0 GDI
	
	======================================================================
	Keywords          : kberrmsg kbfield kbformula 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
