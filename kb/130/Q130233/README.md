---
layout: page
title: "Q130233: How to Install or Remove a Font in Windows 95/98"
permalink: /kb/130/Q130233/
---

## Q130233: How to Install or Remove a Font in Windows 95/98

{% raw %}

	Article: Q130233
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to add and remove fonts in Microsoft Windows 95/98.
	
	MORE INFORMATION
	================
	
	To Reinstall the Standard Fonts Included With Windows 95/98
	-----------------------------------------------------------
	
	The following fonts are included with Windows 95 and should be installed on every
	computer:
	
	- Courier New (TrueType, including Bold, Italic, and Bold Italic variations)
	
	- Arial (TrueType, including Bold, Italic, and Bold Italic variations)
	
	- Times New Roman (TrueType, including Bold, Italic, and Bold Italic
	  variations)
	
	- Symbol (TrueType)
	
	- Wingdings (TrueType)
	
	- MS Serif
	
	- MS Sans Serif
	
	If any of the standard fonts that are included with Windows 95/98 are missing,
	you can re-run Windows 95 Setup. Setup will replace missing or changed files.
	Chances are, if these standard fonts are missing, other Windows 95/98 files are
	missing also, and Setup will correct these problems.
	
	For more information on running Windows 95/98 Setup, see your Windows 95/98
	documentation.
	
	
	Adding New Fonts
	----------------
	
	Windows supports TrueType fonts or fonts specially designed for Windows. These
	are available commercially on floppy disk or on compact disc (CD- ROM). Some
	programs also include special fonts, which are normally installed as part of the
	program installation. In addition, printers often come with TrueType or special
	Windows fonts. Follow the directions that come with these packages to install
	these fonts.
	
	To manually install or re-install a font from a disk, follow these instructions:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Fonts folder.
	
	3. On the File menu, click Install New Font.
	
	  The Add Fonts dialog box appears.
	
	4. Under drives, change to the drive where the fonts to be added are located.
	  (If you are installing fonts from a floppy disk, this is usually drive A or
	  drive B. If you are installing the fonts from a compact disc, your CD-ROM
	  drive is usually drive D.) Then, if necessary, double-click the folder
	  containing the fonts.
	
	5. Click the font you want to add. To select more than one font at a time, hold
	  down the CTRL key while you click each font.
	
	6. Make sure the Copy Fonts To Fonts Folder box is checked.
	
	  NOTE: This location, the Fonts folder in the Windows folder, is where you'll
	  find the fonts included with Windows 95/98.
	
	7. Click OK.
	
	The new fonts are now in your Font folder and Windows programs can access them.
	
	Removing Fonts
	--------------
	
	To completely remove fonts from the hard disk, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Fonts folder.
	
	3. Click the font you want to remove. To select more than one font at a time,
	  press down and hold the CTRL key while you click each font.
	
	4. On the File menu, click Delete.
	
	5. When you are asked "Are you sure you want to delete these fonts?", click Yes.
	
	To prevent a font from loading without removing it from the hard disk, move the
	font from the Fonts folder into another folder. Use this method for
	troubleshooting purposes. This will not completely uninstall the font, as font
	registry information is not deleted. However, it will prevent the font from
	loading.
	
	You can use Windows Explorer to drag the font from the Fonts folder into another
	folder. For more information on moving files, click Start, and then click Help.
	Use the Index tab in Help to find topics relating to moving by drag and drop.
	
	NOTE: The TrueType font file has a .ttf extension. Windows 3.1x and Windows for
	Workgroups 3.1x create a pointer file with an .fot extension based on the
	TrueType file. In Windows 3.1x and Windows for Workgroups 3.1x, .fot files can
	be removed from Control Panel without affecting the .ttf files. Windows 95/98
	does not create a pointer file. It uses only the .ttf file. If you delete a .ttf
	file, you can reinstall the program that originally installed the font if you
	want to use that font again.
	
	
	Additional query words: kbhowto 95 1995 true type printer driver Windows 98 install fonts
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
