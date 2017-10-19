---
layout: page
title: "Q295920: WD97: Word Prints More Copies than Value Displayed in Print Box"
permalink: /kb/295/Q295920/
---

## Q295920: WD97: Word Prints More Copies than Value Displayed in Print Box

	Article: Q295920
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to print a single copy of a Microsoft Word document after you
	print multiple copies, Word may print the same number of copies as you indicated
	for the previous print job, even though the value in the "Number of copies" box
	is 1.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- You have background printing in Word turned off.
	
	  -and-
	
	- The Hewlett-Packard (HP) IIID Postscript Plus version 3.79 printer driver is
	  installed on your computer.
	
	  -and-
	
	- You attempt to print to one of the following printers:
	
	  Lexmark Optra S 1650
	  Lexmark Optra N
	  Lexmark Optra R
	  Lexmark Optra R+
	  HP LaserJet 8500N
	
	RESOLUTION
	==========
	
	To resolve this issue, turn on background printing. To do this, follow these
	steps:
	
	1. On the Tools menu, click Options.
	
	2. In the Options dialog box, click to select the "Background printing" check
	  box under Printing Options, and then click OK.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
