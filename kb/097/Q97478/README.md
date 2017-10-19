---
layout: page
title: "Q97478: Font Assistant Does Not Print Sample Page with HP LaserJet 4"
permalink: /kb/097/Q97478/
---

## Q97478: Font Assistant Does Not Print Sample Page with HP LaserJet 4

	Article: Q97478
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft TrueType Font Pack II 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the printer driver for the Hewlett-Packard (HP) LaserJet 4 printer,
	you cannot print sample font pages from the Font Assistant. When you try to
	print a sample page for a font from the Font Assistant, the page contains the
	following information:
	
	- The header, which contains font-specific information (such as the font name,
	  copyright information, file size, and version).
	
	- The body of the page, which contains five lines of sample text displaying the
	  point sizes 18, 24, 36, 48, and 60.
	
	If you use the LaserJet 4 printer driver version 31.01.03, the text in the header
	is garbled and the sample lines are truncated, except for the 60- point font
	sample, which prints correctly.
	
	If you use the LaserJet 4 printer driver version 31.01.08, only the 60- point
	font sample prints. All other sample page text is missing.
	
	When the font list is printed using the Font Assistant and the LaserJet 4 driver
	version 31.v1.08, the following characters may print as a blank space:
	
	  m w k h M W K H
	
	WORKAROUND
	==========
	
	To work around this problem, use the HP LaserJet III printer driver. This is the
	only workaround available at this time.
	
	MORE INFORMATION
	================
	
	The HP LaserJet 4 driver version 31.v1.35 causes similar problems with Microsoft
	Word versions 2.0 and 6.0 for Windows and Microsoft Publisher.
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 3.10 win31 ttf true type true-type fontpack II hp4 lj4 ljIV hewlett packard laser jet IV typeface winword
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbTTFont kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11; :
	
	=============================================================================
	
