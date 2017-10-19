---
layout: page
title: "Q68348: Changing Display Colors on Toshiba Laptops Using VCHAD.EXE"
permalink: /kb/068/Q68348/
---

## Q68348: Changing Display Colors on Toshiba Laptops Using VCHAD.EXE

	Article: Q68348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Toshiba provides a video display enhancement program (VCHAD.EXE), which provides
	brightness and contrast control for the Toshiba laptop gas plasma displays.
	
	To change the plasma display colors, you'll need to copy special files to your
	WINDOWS directory, modify the Windows desktop colors, and create a special batch
	file for starting Windows. The procedures are outlined in this article.
	
	MORE INFORMATION
	================
	
	Copying the Files
	-----------------
	
	1. Copy VCHAD.EXE into your WINDOWS directory. The VCHAD program should be on
	  the Toshiba Diagnostics and Supplemental disk you received with the MS-DOS
	  disks for your Toshiba. If not, request it from Toshiba by calling (800)
	  999-4273.
	
	2. Copy TOSHWIN.VCD from Windows 3.00 Disk 2 to your WINDOWS directory.
	
	Modify the Windows Desktop Colors
	---------------------------------
	
	1. Start Windows and from Control Panel, select the Color icon.
	
	2. Open the Color Scheme drop-down list box and select Fluorescent.
	
	3. Select the Color Palette button.
	
	4. Make the following color changes to Screen Elements:
	
	     Screen Element                Color
	     --------------                -----
	
	     Window Background             Fifth column, fifth color
	     Window Text                   Bottom right color (white)
	     Application Workspace         Eight column, second color
	
	  See Chapter 5, "Control Panel," in the "Microsoft Windows User's Guide" for
	  more information on changing desktop colors.
	
	5. Choose the Save Scheme button and choose OK to save your changes.
	
	6. Choose OK to close Control Panel.
	
	Creating the Batch File
	-----------------------
	
	1. Using Windows Notepad or another text editor, create the following batch file
	  and save it in your WINDOWS directory as WINPLSMA.BAT:
	
	        VCHAD /R:TOSHWIN.VCD
	        WIN
	        VCHAD /C:1
	
	2. Exit Windows and start it again using WINPLSMA.BAT.
	
	For more information, contact Toshiba Technical Support.
	
	The Toshiba products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.00 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
