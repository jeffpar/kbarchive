---
layout: page
title: "Q143367: Writer: Incomplete Border Printout On Ink-Jet Printers"
permalink: /kb/143/Q143367/
---

## Q143367: Writer: Incomplete Border Printout On Ink-Jet Printers

	Article: Q143367
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,1.1b,1.1c,95
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 1.1b, 1.1c 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Creative Writer in Windows 95 to an ink-jet-style printer,
	such as a Canon BubbleJet, Epson Stylus, or a Hewlett-Packard DeskJet printer,
	borders do not print completely.
	
	You may experience behavior similar to the following:
	
	- The Hearts and Flowers borders print with 2.5 inches of the complete image at
	  the top right and bottom right of the page.
	
	- The Pawprints border prints everywhere except the 2.5 inches on the top right
	  and bottom right of the page.
	
	- The Snowflakes prints two snowflakes at the top right and two snowflakes at
	  the bottom right of the page.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Double-click your printer icon.
	
	3. On the Printer menu, click Properties.
	
	4. On the Details tab, click Spool Settings.
	
	5. Click the arrow to the right of Spool Settings Format: EMF.
	
	6. Select RAW.
	
	7. Click OK to close the Spool Settings window.
	
	8. Click OK to close the Properties window.
	
	9. Close the Printers window.
	
	Borders should now print successfully from Creative Writer.
	
	MORE INFORMATION
	================
	
	If the borders are printing all around the page, but look cut off on the edges,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q132373 Writer: Adjust Margins to Fix Truncated Borders
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 1.10a 1.10b 1.10c mskids artist maggie max writer hp bj bjc 500 540 550 560 600 600e 660 4000 color dog tracks bubble jet ink paw puppy win win95 660c cw mczee
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbWin95search kbZNotKeyword3 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbCreativeWriter110b kbCreativeWriter110c
	Version           : WINDOWS:1.0,1.1,1.1a,1.1b,1.1c,95
	Issue type        : kbhowto
	
	=============================================================================
	
