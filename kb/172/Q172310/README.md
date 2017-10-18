---
layout: page
title: "Q172310: WD97: Bookman Font Fails to Print Bold on PS Printers"
permalink: kb/172/Q172310/
---

## Q172310: WD97: Bookman Font Fails to Print Bold on PS Printers

	Article: Q172310
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,95,97; winnt:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows 95, version 7.0 
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows NT, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you format text with the Bookman Old Style font, make it bold, and then print
	it to a postscript printer, the bold text will print as non-bold text.
	
	
	CAUSE
	=====
	
	The Bookman Old Style font has a normal weight of 300 and a bold weight of 600
	(instead of the usual 400 and 700). When Microsoft Word asks for a 600 weight
	Bookman Old Style font from the Postscript driver, it doesn't "think" that Word
	wants bold, and instead uses the 400 weight Bookman Old Style font.
	
	WORKAROUND
	==========
	
	Configure the printer to download the Bookman Old Style font as a bitmap font.
	To do so, follow these steps:
	
	1. On the Windows taskbar, click Start, point to Settings, and then click
	  Printers.
	
	2. Right-click the printer you want to print to, and click Properties.
	
	3. Click the Fonts tab.
	
	4. Click to select Always Use Truetype Fonts.
	
	5. Click the Send Fonts As button.
	
	6. Click to select Bitmap from the "Send Truetype fonts as" list.
	
	The bold Bookman Old Style text will now print correctly.
	
	NOTE: This problem does not occur with PCL (non-postscript) printers or when
	printing to a postscript printer under Microsoft Windows NT.
	
	Additional query words: hp laserjet IIISi III
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbZNotKeyword3 kbWord700 kbWord600NT
	Version           : WINDOWS:7.0,95,97; winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
