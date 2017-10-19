---
layout: page
title: "Q139269: Using High Contrast Display Scheme Hides Part of Window"
permalink: /kb/139/Q139269/
---

## Q139269: Using High Contrast Display Scheme Hides Part of Window

	Article: Q139269
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenable win95 kbEnableSight kbEnableLearn
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a display scheme that causes the menu bar in a Windows- based
	program to wrap to more than one line, you may not be able to see the lower
	portion of the program's window.
	
	For example, this behavior is noticeable if you run Microsoft Calculator in
	Standard view with the "High Contrast Black (extra large)" or "High Contrast
	White (extra large)" display scheme.
	
	CAUSE
	=====
	
	This problem occurs when a Windows-based program does not correctly compute the
	size of its dialog box window. For example, Calculator (Calc.exe) does not
	resize its window properly when a large menu font causes the menu bar to wrap to
	more than one line.
	
	This problem may occur with any display scheme that sets the menu font size to a
	setting greater than 19.
	
	
	RESOLUTION
	==========
	
	To work around this problem in Calculator, view the calculator in Scientific
	view, or use a different display scheme.
	
	If you experience this problem in a program other than Calculator and using a
	different display scheme is not an option, contact the program's manufacturer
	for information about a possible workaround.
	
	Additional query words: accessibility options
	
	======================================================================
	Keywords          : kbenable win95 kbEnableSight kbEnableLearn 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
