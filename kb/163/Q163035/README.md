---
layout: page
title: "Q163035: FIX: Printer Fonts Won't Stay Selected in VFP Report Designer"
permalink: kb/163/Q163035/
---

## Q163035: FIX: Printer Fonts Won't Stay Selected in VFP Report Designer

	Article: Q163035
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbvfp kbvfp500bug
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changing the font for a report expression in the Report Designer, any of
	the fonts that show up in the Font properties box that have a printer icon in
	front of them do not stay selected after closing the font box.
	
	These so-called "printer fonts" stay selected while the Font properties box is
	open. Once the Font properties box is closed, they are deselected and the report
	expression does not print in that chosen font. Reopening the Font properties box
	shows that there is no font currently selected. If any other font is selected,
	it stays selected when the font box is reopened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro version
	6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create or modify any report in Visual FoxPro.
	
	2. Click once on any expression in the Report Designer and choose the Format pad
	  on the menu bar.
	
	3. After selecting the Font menu bar, choose any font that has a printer icon
	  beside it.
	
	4. Close the Font Properties box and reopen it. Note that the font box has
	  nothing in it.
	
	
	Additional query words: stick report writer kbvfp600fix
	
	======================================================================
	Keywords          : kbprint kbvfp kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
