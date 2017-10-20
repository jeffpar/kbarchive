---
layout: page
title: "Q164374: FIX: Cannot Use Printer Fonts with ? Printing in VFP 5.0"
permalink: /kb/164/Q164374/
---

## Q164374: FIX: Cannot Use Printer Fonts with ? Printing in VFP 5.0

{% raw %}

	Article: Q164374
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprint kbvfp kbvfp500aBUGkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SET PRINTER FONT command to print with a printer font is ignored when
	printing with question marks (?). Instead of a using the specified printer font,
	Visual FoxPro 5.0 substitutes a soft font. Printing with @...SAY commands also
	ignores the specified the printer font. However, using @...SAY commands with the
	SET DEVICE to PRINTER command causes an error in Visual FoxPro for Windows 5.0.
	This error is unrelated to this printer font issue.
	
	This feature works properly in Visual FoxPro 3.0b.
	
	RESOLUTION
	==========
	
	As a workaround, use a soft font that closely emulates the look of the desired
	printer font.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	In the example below, the LaserJet printer driver is used because the
	LinePrinter font is available with that printer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install an HP LaserJet printer driver and set it as the default printer.
	
	2. Create a program file and add the following code:
	
	        SET PRINTER FONT "LinePrinter"
	        SET PRINTER ON
	        ? "This should be Printer Font"
	        ? "but it prints in a proportional font."
	        ? "IIIII"
	        ? "WWWWW"
	        SET PRINTER TO
	
	After the example code runs, notice that the "I" and "W" characters appear. In a
	non-proportional font, each character takes up the same amount of printer space.
	Since the characters are not printed with the non- proportional LinePrinter
	font, the two letters take up a differing amount of space on the paper.
	
	REFERENCES
	==========
	
	For more information about this error , please see the following article in the
	Microsoft Knowledge Base:
	
	  Q162301 PRB: @ SAY Causes Error After SET DEVICE to PRINTER Command
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprint kbvfp kbvfp500aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
