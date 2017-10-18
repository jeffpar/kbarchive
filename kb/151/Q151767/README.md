---
layout: page
title: "Q151767: BUG: 2.x @ SAY Report May Print Differently in Visual FoxPro"
permalink: kb/151/Q151767/
---

## Q151767: BUG: 2.x @ SAY Report May Print Differently in Visual FoxPro

	Article: Q151767
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An @ SAY report may print differently in Visual FoxPro than it did when printed
	from FoxPro for Windows. The spacing in the report may be different and items
	may be shifted in different positions. This problem is most likely to occur when
	different fonts are used in the same line.
	
	CAUSE
	=====
	
	FoxPro for Windows shipped a font called FOXPRINT.TTF used as the default print
	font for any report using @ SAYs or question marks. It uses this font to
	determine the row and column of the @ SAY. The FOXPRINT.TTF does not ship with
	Visual FoxPro, but it still looks for the font to be the default print font.
	When the font is not found, Windows does a font substitution that may have a
	different font matrix than FOXPRINT.TTF, putting the same row and column in a
	different position on the page.
	
	WORKAROUND
	==========
	
	- Install the FOXPRINT.TTF and FOXPRINT.FOT font files from FoxPro for Windows
	  into the Windows system subdirectory.
	
	-or-
	
	- Use the SET PRINT FONT command to set the default print font to a font that
	  you know is on the system. This would mean a rewrite of the row and column of
	  the @ SAYs to have the items line up as they were in FoxPro for Windows.
	
	For more information about the SET PRINT FONT command, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q99621 Changing Font Used in Print Commands in FP for Windows
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
