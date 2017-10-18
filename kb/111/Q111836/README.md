---
layout: page
title: "Q111836: WD97: Printing Envelopes from Word on the HP DeskJet 500C"
permalink: kb/111/Q111836/
---

## Q111836: WD97: Printing Envelopes from Word on the HP DeskJet 500C

	Article: Q111836
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbenvelope word97 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to print letter-size and other size envelopes from
	Word for Windows on the Hewlett-Packard (HP) DeskJet 500 and 500C printer. There
	is a troubleshooting section at the end of the article.
	
	The information in this article assumes you have version 3.1 or later of the HP
	DeskJet printer driver (Deskjetc.drv).
	
	For information about obtaining updated HP printer drivers, contact HP. For
	information about how to contact HP, query in the Knowledge Base for one of the
	following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	MORE INFORMATION
	================
	
	Printing Standard Letter-Size Envelopes (COM 10)
	------------------------------------------------
	
	Size 10 (COM 10) envelopes print correctly from Word on the HP DeskJet 500C using
	the default settings in the printer driver and in the Tools Envelopes and Labels
	dialog box. Use the following instructions to print Size 10 envelopes on the
	DeskJet 500C:
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. If necessary, type the Delivery Address and Return Address information.
	
	3. Click Options.
	
	4. Select the Printing Options tab.
	
	5. If it is available, click the Reset button. (If the button is unavailable,
	  you are already using the default printer driver settings.)
	
	6. Select the Envelope Options tab.
	
	7. From the Envelope Size list, select Size 10, and then click OK.
	
	8. Insert the envelope into the manual feed slot as shown in the diagram on the
	  manual feed tray on your printer. Insert the envelope until it presses
	  against the feed rollers. Do not preload the envelope using the Load button
	  on the printer.
	
	9. In the Envelopes and Labels dialog box, click Print. The printer pulls the
	  envelope from the manual feed tray and prints correctly.
	
	Printing Custom Envelope Sizes
	------------------------------
	
	Custom envelope sizes are not supported by the DeskJet 500 and 500C printers or
	drivers, so they do not print correctly. The HP DeskJet 500 and 500C only
	support COM 10 size envelopes.
	
	NOTE: You cannot work around this limitation by formatting a 8.5-by-11 inch
	document with large margins and printing on an envelope. This does not work
	because the printer detects when you feed non-letter-size paper. If you use this
	method, the printer ejects the blank envelope or it prints a portion of the
	address on the envelope and the remainder on a page pulled from the letter
	tray.
	
	Troubleshooting Tips
	--------------------
	
	If the text on the envelope is printed incorrectly, use the following steps to
	troubleshoot the problem:
	
	1. You may be running a video driver that conflicts with the DeskJet. Switch to
	  the standard VGA video driver supplied with Windows to resolve this problem.
	
	2. Third-party font packages sometimes cause unexpected printing results. To
	  rule out this cause, disable the font package and print the envelope again.
	
	3. To ensure that no Word macros are running that might modify your printer or
	  font settings, quit Word and restart it with the /A switch. (This switch runs
	  Word with no add-in programs.)
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 6.00 6.00a hpdj hpdj500c dj500c dj500 6.00c hewlett packard tshoot troubleshoot
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbenvelope word97 kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
