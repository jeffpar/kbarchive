---
layout: page
title: "Q158009: WD97: Error Message: An Error Occurred While Importing This File"
permalink: /kb/158/Q158009/
---

## Q158009: WD97: Error Message: An Error Occurred While Importing This File

	Article: Q158009
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to insert a Clip Art file or a graphic file in Word, the file is
	not inserted, and you receive the following error message:
	
	  Microsoft Word: An error occurred while importing this file. <filename>
	
	CAUSE
	=====
	
	When you try to insert a graphic or Clip Art picture into Word 97, a graphic
	filter must be available in order for Word to convert the graphic or Clip Art
	picture. If Word does not recognize the graphic type, Word presents the Convert
	File dialog box.
	
	If the filter for the graphic that you are inserting is not present on this list,
	the filter is not installed. Follow the steps in the "Resolution" section of
	this article to install the graphic filter.
	
	If the graphic filter is listed in the Convert File dialog box, and you select it
	and click OK, and the graphic still is not inserted, the filter or the graphic
	may be damaged.
	
	RESOLUTION
	==========
	
	1. Quit Word and/or Office.
	
	2. On the Start menu, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Install/Uninstall tab.
	
	5. In the list of installed software, select either Microsoft Word 97 or
	  Microsoft Office 97. Then click Add/Remove. The Setup program starts.
	
	6. On the Setup screen, click Add/Remove.
	
	7. On the Maintenance screen, under Options, select the Converters and Filters
	  check box. (Do not clear the check box if it already is selected.) Then click
	  Change Option.
	
	8. In the Converters and Filters dialog box, select the Graphic Filters check
	  box. (Do not clear the check box if it is selected already.) Then click
	  Change Option.
	
	9. On the Graphic filters screen, select each of the graphic filters that you
	  want to install. Then click OK.
	
	10. Click OK to return to Setup Maintenance. Then click Continue and complete
	  the Setup process.
	
	MORE INFORMATION
	================
	
	Installed during Typical Setup          NOT installed during Typical Setup
	--------------------------------------  ----------------------------------
	Tag Image File Format Import (TIFF)     Truevision Targa Import
	Encapsulated Postscript Import (EPS)    AutoCAD DXF Import
	Windows Bitmap Import (BMP)             Micrografx Designer/Draw Import
	Enhanced Metafile Import (EMS)          CorelDRAW Import
	WordPerfect Graphics (WPG)              Computer Graphics Metafile Import
	Kodak Photo CD                          PC Paintbrush PCX Import
	Macintosh PICT
	Windows Metafile (WMF)
	Graphics Interchange Format (GIF)
	JPEG File Interchange Format (JPG)
	Portable Network Graphics Format (PNG)
	
	There are five graphic filters that are built into Word 97. These filters are
	embedded into the Winword.exe file and are independent of the filters that are
	installed through the Setup program:
	
	- Enhanced Metafile Import (EMS)
	
	- Windows Bitmap Import (BMP)
	
	- Windows Metafile Import (WMF)
	
	- JPEG File Interchange Format Import (JPG)
	
	- Portable Network Graphics (PNG)
	
	These four graphic filters are installable through the Setup program for
	compatibility with the rest of the Microsoft Office Suite. In other Words, these
	filters are installed so that graphics can be imported into the other Office
	programs, such as Excel.
	
	For more information about which components are installed during each type of
	Setup, please refer to Word Help:
	
	1. On the Help menu, click Contents and Index.
	
	2. On the "Help Topics: Microsoft Word" screen, select the Contents tab.
	
	3. Double-click the "Installing and Removing Word" book.
	
	4. Double-click the "Install or remove individual components" topic.
	
	5. In the Help window, under step 5, click the arrow for the line that states:
	  "For the location of components in Setup..."
	
	Additional query words: 8.0 word8 word97 available present missing
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
