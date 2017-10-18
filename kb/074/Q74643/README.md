---
layout: page
title: "Q74643: Copying Soft Font Information from the NullPort in Windows"
permalink: kb/074/Q74643/
---

## Q74643: Copying Soft Font Information from the NullPort in Windows

	Article: Q74643
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If downloadable soft fonts for the HP LaserJet II and LaserJet II families of
	printers have been installed for the printer driver configured for the Windows
	nullport (typically designated as None), you cannot normally use the
	Hewlett-Packard (HP) Softfont Installer dialog box to copy the soft font entries
	to another port designation.
	
	MORE INFORMATION
	================
	
	The HP Softfont Installer provides the option to copy soft font information only
	between ports that are listed in the [ports] section of the WIN.INI file. The
	nullport is not listed in this section.
	
	If the font files are not from HP, you cannot use the Softfont Installer to
	simply reinstall the fonts into the appropriate section of the WIN.INI file. The
	HP Softfont Installer is designed to only create the correct PFM (printer font
	metrics) files for HP Softfonts, and the PFM files created may not be compatible
	with third-party downloadable fonts for the printers.
	
	The following is an alternative that will work regardless of the source of the
	font files.
	
	If you have some soft font entries in the section of the WIN.INI file with the
	following heading
	
	  [HPPCL,LPT1]
	
	and you want to copy the font entries that were installed in the WIN.INI section
	with the following heading
	
	  [HPPCL,None]
	
	you cannot simply copy the font information from one section into the other
	section because the number of soft fonts for that section will change and the
	soft font numbering will have to change to reflect the change. This may mean
	manually renumbering more than 200 lines in the WIN.INI file without making any
	typographical errors.
	
	Recommended Procedure
	---------------------
	
	1. With a text editor (NOTEPAD.EXE for example), edit the [ports] section of the
	  WIN.INI file so that one of the lines in that section is:
	
	  None=
	
	  Simply replace one of the existing lines in the [ports] section that you are
	  not currently using. Save the changes to the file and close it.
	
	2. Open the Control Panel, select Printers, highlight the printer to which you
	  want to copy the soft fonts, choose Configure, and then choose Setup.
	
	3. Choose the Fonts button in the Printer Setup dialog box to bring up the HP
	  Softfont Installer.
	
	4. Choose the Copy Between Ports button and select the None port (this is
	  possible because we have previously modified the [ports] section of the
	  WIN.INI file). The soft font install program will scan for soft fonts and
	  then list them on the right-hand side of the Softfont Installer dialog box.
	
	5. Select all of the fonts that are listed on the right-hand side of the dialog
	  box by positioning the cursor on one of the font names listed and then
	  choosing the name while pressing CTRL+SHIFT.
	
	6. With all the fonts selected, choose the Move button. This will move all of
	  the font entries to the correct printer driver section of the WIN.INI file.
	
	7. Exit the Control Panel in the normal fashion.
	
	8. Edit the WIN.INI file again, removing the None= line from the [ports]
	  section.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
