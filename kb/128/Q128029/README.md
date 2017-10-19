---
layout: page
title: "Q128029: Vector Fonts Not Available After Installing Plotter"
permalink: /kb/128/Q128029/
---

## Q128029: Vector Fonts Not Available After Installing Plotter

	Article: Q128029
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a plotter driver that is included with Windows 95, the
	following font may not be available to use with that plotter:
	
	  Modern
	
	In addition, the font file is not listed as being available in the Add Fonts
	dialog box.
	
	CAUSE
	=====
	
	When you install a plotter driver, Windows 95 may not copy the necessary font
	file for this vector font to the hard disk.
	
	RESOLUTION
	==========
	
	To install this font manually, follow these steps:
	
	1. Click the Start button, point to Programs, then click MS-DOS Prompt.
	
	2. Insert the CD-ROM containing the Windows 95 .CAB files or the floppy disk
	  containing the appropriate .CAB file.
	
	3. Move to the Windows\Fonts folder by typing
	
	  " cd\<windows>\fonts " (without the quotation marks)
	
	  where <windows> is the directory in which Windows 95 is installed.
	
	4. Type the following command
	
	  " extract <drive>:win95_05.cab <fontname>.fon " (without the
	  quotation marks)
	
	  where <drive> is the drive containing the .CAB file, <n> is the
	  number of the .CAB file containing the font, and <fontname> is the name
	  of the font (Modern).
	
	  NOTE: If you have the Windows 95 DMF floppy disks, Modern.fon is in the
	  Win95_06.cab file. If you have the Windows 95 CD-ROM, Modern.fon is in the
	  Win95_05.cab file. If you have the Windows 95 non-DMF floppy disks,
	  Modern.fon is in the Win95_08.cab file.
	
	5. Click the Start button, point to Settings, then click Control Panel.
	
	6. Double-click the Fonts folder.
	
	7. On the File menu, click Install New Font.
	
	8. Click the font you want to install and then click OK.
	
	MORE INFORMATION
	================
	
	Some of these fonts may already be installed or be available to install from the
	hard disk, but not have been loaded when you installed the plotter driver.
	Windows 95 retains these fonts if you install Windows 95 over a previous version
	of Microsoft Windows that has these fonts installed.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
