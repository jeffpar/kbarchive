---
layout: page
title: "Q133432: PRB: Fonts Inconsistent Using Dialog Editor on Windows NT 3.51"
permalink: /kb/133/Q133432/
---

## Q133432: PRB: Fonts Inconsistent Using Dialog Editor on Windows NT 3.51

{% raw %}

	Article: Q133432
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20
	Operating System(s): 
	Keyword(s): kbVC200 kbVC210 kbVC220 kbprb kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the resource dialog editor, dialog boxes are bigger in layout mode than in
	test mode (on the Resource menu, click Test). Additionally, the fonts in the
	dialog box are bold in layout mode but normal in test mode. At run time, the
	dialog box size and font are equivalent to the test-mode dialog box size and
	font.
	
	This is not a problem in Microsoft Visual C++ version 4.0 or greater.
	
	CAUSE
	=====
	
	The size of a dialog box is based on the size of its font. In layout mode, the
	font is forced to be bold, and because a bold font is larger than a normal font
	of the same point size, the dialog box appears bigger in layout mode than it
	does in test mode.
	
	RESOLUTION
	==========
	
	Here are three possible resolutions:
	
	- Use the test-mode dialog box as an estimate for the final dialog box size.
	
	-or-
	
	- Calculate the size of the dialog box area in pixels, and convert it to Dialog
	  Base Units (Dialog box measurements are given in dialog base units) based on
	  the font and size of the dialog box being used.
	
	For more information on how to calculate dialog box units, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q125681 How to Calculate Dialog Base Units with Non-System-Based Font
	
	  Q74280 Translating Dialog-Box Size Units to Screen Units
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC200 kbVC210 kbVC220 kbprb kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 2.00 2.10 2.20
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
