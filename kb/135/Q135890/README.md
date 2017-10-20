---
layout: page
title: "Q135890: Windows 95 CD-ROM Printers.txt File"
permalink: /kb/135/Q135890/
---

## Q135890: Windows 95 CD-ROM Printers.txt File

{% raw %}

	Article: Q135890
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Printers.txt file from
	the Windows 95 CD-ROM. Setup copies this file to the Windows folder.
	
	MORE INFORMATION
	================
	
	    -------------------------------------------------------------
	             Microsoft Windows 95 README for Printers
	                            August 1995
	    -------------------------------------------------------------
	
	            (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	------------------------
	HOW TO USE THIS DOCUMENT
	------------------------
	
	To view Printers.txt on screen in Notepad, maximize the Notepad
	window.
	
	To print Printers.txt, open it in Notepad or another word processor,
	and then use the Print command on the File menu.
	
	--------
	CONTENTS
	
	PRINTING OVER A NETWORK
	TRUETYPE FONT AVAILABILITY FOR PRINTING
	CANON COLOR BULLET-JET SUPPORT
	FARGO PRIMERA AND PRIMERA PRO SUPPORT
	HEWLETT-PACKARD DESKJET SUPPORT
	HEWLETT-PACKARD LASERJET PRINTER SUPPORT
	LEXMARK PRINTER SUPPORT
	QMS JETSCRIPT BOARDS
	LASERMASTER PRINTER SUPPORT
	NEC SILENTWRITER SUPERSCRIPT 610 SUPPORT
	--------
	
	NOTE: In general, the printer drivers provided with Windows 95 are
	preferable to Windows 3.1 drivers for any given printer. However, you
	might want to consult the printer manufacturer to determine the best
	printing solution for your printer.
	
	PRINTING OVER A NETWORK
	=======================
	
	By default, Windows 95 uses the network path as the port designation
	for network printers. This is slightly different from Windows 3.1, and
	some programs might have problems. A network path (also known as a UNC
	name) is typically in this format:
	    \\server\printqueue
	
	However, network paths tend to be longer than their Windows 3.1
	equivalents, and this results in problems for some programs. If you
	experience problems, you can revert to the Windows 3.1 method of
	addressing network resources. For more information, look up
	"capturing, printer ports" in the Windows Help Index.
	
	Some programs may also experience difficulties if the network path
	contains a space character. This can be resolved as described above,
	or you can change the network path so it does not contain spaces. See
	your network administrator for help with changing the network path
	name.
	
	Problems Printing to PostScript Printers Over a NetWare Network
	----------------------------------------------------------------
	If you have difficulties printing to a PostScript printer over a
	network, it may be because banner pages are incorrectly configured on
	the NetWare server. Unless banner pages are correctly configured on
	the NetWare server, they will cause errors and nothing will print. To
	solve this problem, you can either disable banner pages by removing
	the check mark from the Banner Pages box in Capture printer
	properties, or contact your network administrator to correctly
	configure banner pages on the NetWare server for a PostScript printer.
	
	Unwanted Banner Pages on a NetWare Network from MS-DOS Programs
	---------------------------------------------------------------
	If you are still receiving unwanted banner pages when printing from
	MS-DOS programs after checking the Banner Page setting as described
	above, you'll need to change the port designation for the printer from
	the network path (UNC) name, to the Captured port. To do this:
	
	1. On the Details tab of printer properties, click the down-arrow on
	  the box that shows the \\Server\Printqueue name, and look for an
	  entry that shows LPTx:, where LPTx: is the LPT port you have
	  captured.
	2. Select LPTx: (\\Server\Printqueue), and then click Apply.
	3. Click the Capture tab, and then disable the banner page setting as
	  described above.
	
	TRUETYPE FONT AVAILABILITY FOR PRINTING
	=======================================
	
	TrueType fonts are not usually available when printing in lower
	resolutions (75-150 dpi) on inkjet printers. This does not apply to
	laser and dot-matrix printers. TrueType fonts are also not available
	when using the Generic/Text Only printer driver.
	
	CANON COLOR BUBBLE-JET SUPPORT
	==============================
	
	You may notice some printing differences in the Windows 95 drivers
	for the Canon Color Bubble-Jet (BJC) printers if you upgrade from
	Windows 3.1. The Canon BJC-70, BJC-600, BJC-600e, BJC-800, and BJC-
	4000 drivers from Windows 3.1 are automatically upgraded to Windows 95
	drivers as part of the Windows 95 installation because the Windows 3.1
	versions do not work under Windows 95. Please contact your local Canon
	representative company (or refer to the information in the "Where to
	Find More Help" section of your printer's manual) for information
	about updated driver availability for optimal support of these
	devices.
	
	FARGO PRIMERA AND PRIMERA PRO SUPPORT
	=====================================
	
	Some older versions of the Fargo Primera and Primera Pro printer
	drivers do not operate correctly under Windows 95. The Fargo Primera
	requires version 4.3 or later, and the Primera Pro requires version
	2.7 or later. To obtain either of these drivers, contact Fargo's BBS
	or their technical support at the numbers listed in the printer
	documentation.
	
	HEWLETT-PACKARD DESKJET PRINTER SUPPORT
	=======================================
	
	Versions 6.1 and earlier of the Hewlett-Packard DeskJet printer
	drivers will not function under Windows 95, and it is not possible to
	install them. If you are using them with Windows 3.1, they will be
	upgraded to version 6.5 with Windows 95. See the following section if
	you are using a DeskJet 600 or 800 series model.
	
	Hewlett-Packard DeskJet 600, 660C, and 850C Printer Support
	-----------------------------------------------------------
	To optimally use your DeskJet 600, 660C, or 850C, determine if your
	DeskJet printer includes a printer driver that is compatible with
	Windows 95. (To determine if your printer driver is compatible with
	with Windows 95, refer to the disk label.)
	
	Case 1: If you have a printer driver that is compatible with Windows
	95.
	
	If you already have Windows 95 installed and are installing a new
	DeskJet 600 or 800 series printer, Windows 95 automatically identifies
	your printer and installs the printer driver. When you see the prompt
	asking for the OEM-provided disk, click OK, and then insert the HP
	DeskJet Printer disk #1 that came with your printer into the
	appropriate floppy disk driver.  Follow the steps displayed on your
	screen.
	
	If Windows 95 does not automatically detect your HP DeskJet printer,
	follow the steps listed on the label of the HP DeskJet Printer Driver
	disk #1 that came with your printer.
	
	If you are upgrading from Windows 3.1 to Windows 95 and already have
	your DeskJet installed with a Windows 95 compatible printer driver
	(version 7.0 or greater), you do not need to do anything else.
	
	Case 2: If you do not have a Windows 95 compatible printer driver (you
	have a Windows 3.1-only printer driver).
	
	To obtain a Windows 95 compatible printer driver for your DeskJet
	printer, contact the HP Driver Distribution Center referenced in your
	HP DeskJet Printer Users Manual.  Until you obtain your Windows 95
	printer driver, follow the instructions below to enable printing under
	Windows 95.
	
	1. Click Start, point to Settings, and then click Printers.
	2. Click the Add Printer icon, and then follow the instructions on
	  your screen.
	3. When you are asked to select the printer manufacturer and model
	  number, select "HP DeskJet 550C Printer" for a 660C or 850C
	  printer; or the "HP DeskJet 540" if you have a DeskJet 600.
	4. Click Next, and then follow the steps displayed on the screen.
	
	HEWLETT-PACKARD LASERJET PRINTER SUPPORT
	========================================
	
	If you have upgraded from Microsoft Windows 3.1 to Microsoft
	Windows 95, you can disregard the following instructions; all of the
	optimized software is installed on your computer during the Windows 95
	installation.
	
	If you are adding a LaserJet 4 printer, a Color LaserJet, or a
	LaserJet 5P/5MP to your Windows 95 system, you can get optimized
	printing performance by following the steps in the relevant section
	below. HP LaserJet printer and HP-provided printer driver issues
	should be directed to Hewlett-Packard. Please consult Hewlett-
	Packard's Driver Distribution or Customer Support centers listed in
	the documentation accompanying your printer for more information.
	
	HP LaserJet 4 Printer - PCL Support
	-----------------------------------
	Recommended software: Windows 95 printer driver & HP TrueType Screen
	Fonts.
	
	HP offers the LaserJet 4 printer user HP TrueType Screen fonts to
	match your internal printer fonts. To obtain these fonts, contact your
	Hewlett-Packard Driver Distribution center.
	
	HP LaserJet 4Si, 4L, 4P, 4 Plus, and 4V  Printers - PCL Support
	---------------------------------------------------------------
	Recommended software: Windows 95 printer driver & HP TrueType Screen
	Fonts.
	
	NOTE: You will need the HP TrueType screen fonts to match your
	internal printer fonts. Locate the disks that came with your HP
	LaserJet printer, and then follow the steps below. If you cannot find
	your software disks, contact your Hewlett-Packard Driver Distribution
	Center.
	
	1. Insert Disk 1 of the HP LaserJet Printing System disk set into the
	  appropriate floppy disk drive.
	2. Click Start, and then click Run.
	3. In the Run dialog box, type "A:\Setup"
	4. Click "Custom" installation, and then click the appropriate HP
	  LaserJet printer.
	5. Click HP TrueType Screen fonts. Deselect the Printer Driver,
	  Status Window, and the Travel Guide. Click OK, and then follow the
	  steps displayed on the screen.
	
	HP LaserJet 5P Printer - PCL Support
	------------------------------------
	Recommended software: Windows 95 printer driver & HP TrueType Screen
	Fonts.
	
	NOTE: HP plans to update the LaserJet 5P software for enhanced
	Windows 95 support. Contact your HP Driver Distribution for
	information, or contact your authorized HP dealer.
	
	NOTE: You will need the HP TrueType screen fonts to match your
	internal printer fonts. Locate the disks that came with your HP
	LaserJet printer, and then follow the steps below. If you cannot find
	your software disks, contact your Hewlett-Packard Driver Distribution
	center.
	
	1. Insert Disk 1 of the HP 5P LaserJet Printing System disk set into
	  the appropriate floppy disk drive.
	2. Click Start, and then click Run.
	3. Type "A:\Setup."
	4. Select "Typical" installation, and then follow the steps displayed
	  on screen.
	
	HP Color LaserJet Printer - PCL Support
	---------------------------------------
	Recommended software: HP Color LaserJet driver & HP TrueType Screen
	Fonts.
	
	NOTE: Locate the disks that shipped with your HP Color LaserJet
	printer, and then follow the steps below. If you cannot find your
	software disks, contact your Hewlett-Packard Driver Distribution
	Center.
	
	1. Insert Disk 1 of the HP Color LaserJet Printing System disk set
	  (Windows 3.1 PCL Printing System) into the appropriate floppy disk
	  drive.
	2. Click Start, and then click Run.
	3. Type "A:\Setup."
	4. Select "Express" installation, and then follow the steps displayed
	  on the screen.
	
	NOTE: To take advantage of Image Color Matching support in Windows 95,
	you need to install the HP Color LaserJet driver shipped with Windows
	95.
	
	HP LaserJet 4M to 5MP printers - PostScript Support
	---------------------------------------------------
	Recommended software: Windows 95 PostScript printer driver.
	
	NOTE: Do not use the PostScript printer driver supplied with your HP
	printer.
	
	HP Color LaserJet Printer - PostScript Support
	Recommended software: HP Color LaserJet PostScript printer driver.
	
	NOTE: Locate the disks that shipped with your HP Color LaserJet
	printer, and then follow the steps below. If you cannot find the
	disks, contact your Hewlett-Packard Driver Distribution center.
	
	1. Insert the HP Color LaserJet Printer disk, Windows 3.1 PostScript
	  2.1.1., into the appropriate floppy disk drive.
	2. Click Start, point to Settings, and then click Printers.
	3. Click the Add Printer icon, and then follow the instructions using
	  the HP Color LaserJet PostScript driver disk.
	4. Click the Have Driver Disk button. If you are prompted to replace
	  or update the driver, click Yes.
	
	HP LaserJet Troubleshooting
	---------------------------
	Printer Status Conflicts: You can potentially have a conflict between
	the Microsoft printer status reporting program and the HP Status
	Window. Here are the symptoms: During printing, the Microsoft status
	program gives you printing status information. At other times, if a
	printer error or other condition occurs (the printer runs out of
	paper, paper jam, the parallel cable is disconnected, the printer
	cover is open, etc.), the HP Status Window gives you a message.
	
	If you have installed the HP Status Window, uninstall it by following
	these steps:
	
	1. Click Start, and then click Programs.
	2. Click the HP LaserJet folder.
	3. Double-click the Deinstall HP Status Window icon.
	4. Click Yes to restart Windows.
	
	"Error 21 -- print overrun"
	If this occurs on your LaserJet printers, turn on "Page Protection"
	if the option is available in the Device Options tab of the  printer
	properties. On LaserJet 3 printers, you will need to set it directly
	on the printer's front panel. If the Page Protection option is not
	available, and you are using a LaserJet 4 printer, try changing the
	printer driver to Raster mode instead of vector mode in the Graphics
	tab of the printer properties and/or reduce the complexity of the
	page.
	
	LEXMARK PRINTER SUPPORT
	=======================
	
	You may experience difficulties in using the bidirectional support
	with some Lexmark 40x9 LaserPrinter printers under Windows 95. To
	enable bidirectional support, follow the instructions below:
	
	1. Verify you have a file named LEX01.386 in your Windows\System
	  folder.
	2. Under the [386Enh] section of System.ini in your Windows
	  folder, add these lines:
	
	       device=lex01.386
	       WPSLPT#=1
	
	  where # = 1, 2 or 3, corresponding with LPT1, LPT2, or LPT3
	  respectively.
	  (Example: For LPT2, the line would read WPSLPT2=1)
	3. Save the changes and restart your computer.
	
	QMS JETSCRIPT BOARDS
	====================
	
	To print with QMS JetScript boards under Windows 95, it is necessary
	to create a port called LPTx.DOS (where LPTx is LPT1, LPT2, or LPT3
	based on how the JetScript board is configured). To do this, follow
	the steps below. These steps assume you have a printer driver already
	installed. If you do not have a printer driver installed, click the
	Add Printer icon in the Printers folder, and then follow the on-screen
	instructions.
	
	1. In the Printers folder, use your right mouse button to click the
	  printer icon for the QMS JetScript, and then click Properties.
	2. Click the Details tab, and then click the Add Port button.
	3. Click Other, and then click Local Port in the list box.
	4. Click OK, and then enter the name of the port you want to add (for
	  example, LPT1.DOS).
	5. Click OK, and then click OK again to close the Printer Properties
	  dialog box.
	  The printer should be ready to use.
	
	LASERMASTER PRINTER SUPPORT
	===========================
	The Windows 3.1 printer driver for LaserMaster products will not
	function under Windows 95. For information about obtaining drivers
	that are compatible with Windows 95, contact LaserMaster Technical
	Support at the phone number listed in the documentation that came with
	your printer.
	
	NEC SILENTWRITER SUPERSCRIPT 610
	================================
	The Windows 3.1 printer driver for NEC SilentWriter SuperScript
	products will not function under Windows 95. For information about
	obtaining drivers that are compatible with Windows 95, contact NEC
	Technical Support at the phone number listed in the documentation that
	came with your printer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
