---
layout: page
title: "Q134861: Description of and Troubleshooting the Marlett TrueType Font"
permalink: kb/134/Q134861/
---

## Q134861: Description of and Troubleshooting the Marlett TrueType Font

	Article: Q134861
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Marlett.ttf file is a TrueType font file installed in the Fonts folder. The
	file's Hidden attribute is set and the file is not visible in Windows Explorer.
	
	MORE INFORMATION
	================
	
	The Marlett TrueType font is used for displaying scroll bar arrows, Maximize and
	Minimize buttons, option buttons, check boxes, and other controls in Windows 95.
	The font is explicitly loaded by the GDI at startup. Windows 95 performance is
	enhanced by using a TrueType font instead of bitmaps for controls.
	
	The Marlett.ttf file is located in the Fonts folder with other TrueType fonts.
	The file is hidden, but the font is visible in programs' Font menus.
	
	If the Marlett.ttf file is damaged or missing, numbers or garbled characters
	appear in place of controls.
	
	If you need to replace the Marlett.ttf file, extract it to the Windows\Fonts
	folder. Set the file's Hidden and System attributes.
	
	The Marlett.ttf file is located in the Win95_06.cab cabinet file on disk 6 if you
	are using Windows 95 disks, or in the Win95_05.cab cabinet file if you are using
	the Windows 95 CD-ROM. After you extract the file to the Windows\Fonts folder,
	set its attributes by typing the following line at a command prompt:
	
	  " attrib +s +h c:\windows\fonts\marlett.ttf " (without the quotation marks)
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	If after replacing the Marlett.ttf file numbers or garbled characters still
	appear in place of controls, try deleting the Ttfcache file in the Windows
	folder. This file is rebuilt automatically when you restart the computer.
	Problems with the Marlett.ttf file can also be caused by exceeding, or
	approaching, the approximate limitation of 1000 fonts.
	
	If this does not work, verify that the Hidden attribute is set for the
	Marlett.ttf font file. To do so, follow these steps.
	
	1. In My Computer or Windows Explorer, right-click the Marlett.ttf file in the
	  Windows\Fonts folder, and then click Properties.
	
	2. Click the Hidden check box to select it, and then click OK.
	
	For additional information about the font limits in Windows 95, see the following
	article in the Microsoft Knowledge Base:
	
	  Q131943 TrueType Font Limits in Windows 95
	
	
	Additional query words: close minimize maximize checkbox
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
