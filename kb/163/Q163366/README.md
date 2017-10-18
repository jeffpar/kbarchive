---
layout: page
title: "Q163366: WD97: Can't Type Text Across Entire Label Using DeskJet 500"
permalink: kb/163/Q163366/
---

## Q163366: WD97: Can't Type Text Across Entire Label Using DeskJet 500

	Article: Q163366
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a sheet of labels, you may find that you cannot type all the way
	across the label. It will appear as though there is about half an inch of white
	space on each side, between the text and the side of the label.
	
	CAUSE
	=====
	
	The problem occurs when you are using the Windows 95 printer driver for the HP
	DeskJet 500 or 500C version 6.5.8 that ships with Windows 95.
	
	WORKAROUND
	==========
	
	Use one of the following methods to workaround the problem:
	
	Method 1: Use a Different Printer Driver
	----------------------------------------
	
	Use a different printer driver if possible. This problem is specific to the HP
	DeskJet driver for the 500 and 500C printers.
	
	Method 2: Correct the Indent
	----------------------------
	
	Correct the indent by following these steps:
	
	1. Create the sheet of labels or the mail merge main document.
	
	2. On the Edit menu, click Select All.
	
	3. On the Format menu, click Paragraph.
	
	4. In the Indentation Left box, type ".07" (without the quotation marks).
	
	5. In the Indentation Right box, type ".07" (without the quotation marks).
	
	6. Click OK.
	
	The indents should be corrected, and you should be able to type more text in the
	label.
	
	NOTE: If you work with the same sheet of labels all the time, you may want to
	create a label document, correct it using the steps above, and then save it as a
	template. From there, you can create your new sheets of labels using the new
	template and avoid having to correct the indents for the new sheets of labels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word version 97.
	
	MORE INFORMATION
	================
	
	When you are using the DeskJet 500 or 500C printer driver, the label feature
	creates a sheet of labels with a .57 inch left and right indent on the text.
	This reduces the amount of text you can type on one line of the label (the label
	can accommodate much more text than you are allowed to type).
	
	The normal indent that is applied when you use other printer drivers is .07
	inches.
	
	Additional query words: 97 gaps cutoff wrong size fit too big small
	
	======================================================================
	Keywords          : kbualink97 word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
