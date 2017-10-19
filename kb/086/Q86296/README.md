---
layout: page
title: "Q86296: PRINTERS.WRI: Microsoft Windows &amp; MS-DOS 5 Upgrade"
permalink: /kb/086/Q86296/
---

## Q86296: PRINTERS.WRI: Microsoft Windows &amp; MS-DOS 5 Upgrade

	Article: Q86296
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 Upgrade
	PRINTERS.WRI file.
	
	MORE INFORMATION
	================
	
	MICROSOFT WINDOWS 3.1 & MS-DOS 5 UPGRADE
	
	PRINTERS.WRI
	---------------------------------------------------------------------
	This online document contains information not available in the
	Microsoft Windows User's Guide or in online Help for printers. Some of
	the topics in this document are specific to particular printer models
	or printer types, such as PostScript or PCL printers, whereas others
	are more general, such as instructions on how to print extended
	characters.
	
	For additional information that does not pertain to printing, see
	"Other Online Documents" at the end of this document.
	
	Using Write to View This Document
	---------------------------------
	
	If you enlarge the Write window to its maximum size, this document
	will be easier to read. To do so, click the Maximize button in the
	upper-right corner of the window. Or open the Control menu in the
	upper-left corner of the Write window (press ALT+SPACEBAR), and then
	choose the Maximize command.
	
	To move through the document, press PAGE UP or PAGE DOWN or click the
	arrows at the top and bottom of the scroll bar along the right side of
	the Write window.
	
	To print the document, choose the Print command from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose the Open command from the File
	menu, and then select a file.
	
	Contents
	--------
	
	This document contains the following topics about printing:
	
	1.0  Printing Extended or International Characters
	2.0  Upgrading Windows Version 3.0 Laser-Printer Drivers
	3.0  Configuring Your Printer's DIP-Switch Settings
	    3.1   Canon Bubble-Jet BJ-10e and BJ-130e
	    3.2   Epson 9-Pin and 24-Pin Printers Supported by Windows
	          Version 3.1
	    3.3   Fujitsu 9-Pin and 24-Pin Printers Supported by Windows
	          Version 3.1
	4.0   Notes About PostScript Printers and Cartridges
	4.1   Installing a PostScript Printer
	4.2   Installing Support for Additional PostScript Printers
	4.3   Printing a PostScript Print File in UNIX
	4.4   Printing TrueType Fonts in Place of Other Fonts on a PostScript
	     Printer
	4.5   Controlling TrueType Font Downloading on PostScript Printers
	4.6   Setting the Timeout for PostScript Printers
	4.7   Rotating EPS Files When Printing in Landscape Mode
	4.8   Using Phoenix PostScript-Compatible Printers or Cartridges
	5.0   Notes About Hewlett-Packard, Canon, and PCL Printers and
	     Plotters
	5.1   Configuring Memory on PCL Printers
	5.2   Simulating Bold Type on PCL Printers
	5.3   Printing from PageMaker Version 3.x to a PCL Printer
	5.4   Using the Hewlett-Packard LaserJet IIIsi in PostScript Mode
	5.5   Using Intellifont for Windows Version 1.0 with Hewlett-Packard
	     LaserJet III Printers
	5.6   Using the Hewlett-Packard DeskJet 500 Printer Driver
	5.7   Printing Envelopes in Word for Windows Version 2.0 on a
	     Hewlett-Packard DeskJet 500 Printer
	5.8   Printing Windows Version 3.0 Documents on Hewlett-Packard
	     LaserJet III Printers
	5.9   Printing TrueType Fonts on Canon Series II and III Laser
	     Printers
	5.10  Printing Graphics on a Canon Bubble-Jet BJ-10e or BJ-130e
	5.11  Adjusting Hewlett-Packard Plotter Margins
	6.0   Notes About Additional Printers and Font Packages
	6.1   Feeding Paper on Fujitsu Dot-Matrix Printers
	6.2   Printing to an IBM Personal Pageprinter, Using the EPT Port
	6.3   Printing to an IBM Proprinter X24 or XL24, Epson MX-80, or
	     Okidata 24-Pin Printer
	6.4   Using Fonts with the Epson LQ-510, LQ-850, and LQ-1050 Printers
	6.5   Printing TrueType Fonts on Kyocera F-Series Printers
	6.6   Changing Printer Settings When Using Bitstream Facelift Version
	     1.0
	6.7   Using the Cut-Sheet Feeder on the NEC Pinwriter P7 Printer
	7.0  Other Online Documents
	
	--------------------------------------------------------------------
	
	1.0  Printing Extended or International Characters
	
	In addition to the 128 standard ASCII characters you can type using
	your keyboard, you can use extended or international characters by
	using the Windows Character Map application. For more information
	about Character Map, see Chapter 12, "Additional Accessories," in the
	Microsoft Windows User's Guide.
	
	When Windows prints a file, each character you typed while using your
	application is translated from the Windows character to the
	appropriate character on your printer. If your printer supports the
	same character, it prints. Otherwise, some other character, such as a
	period or other filler character, prints instead. Check your printer
	manual and experiment with your printer to determine which extended
	characters are supported.
	
	Note: This limitation applies only to the printer's hardware fonts.
	Fonts provided by Windows do print the extended characters.
	
	2.0  Upgrading Windows Version 3.0 Laser-Printer Drivers
	
	If you are upgrading to Windows version 3.1 and have a laser printer
	installed, you should upgrade your printer driver to version 3.1.
	Earlier versions of laser-printer drivers do not support TrueType
	fonts. If you have not yet upgraded your laser-printer driver, you can
	do so by using the Printers option in Control Panel or the Printer
	Setup command in Print Manager. For more information, see Chapter 6,
	"Print Manager," in the Microsoft Windows User's Guide.
	
	3.0  Configuring Your Printer's DIP-Switch Settings
	
	The following printer models require certain DIP-switch settings in
	order to work properly in Windows version 3.1. Make sure you configure
	your printer's DIP-switch settings before you install your printer.
	
	3.1  Canon Bubble-Jet BJ-10e and BJ-130e
	
	All DIP switches should be set to the factory-default position. For
	the BJ-10e model, this is the OFF position.
	
	3.2  Epson 9-Pin and 24-Pin Printers Supported by Windows
	Version 3.1
	
	The following DIP-switch settings are required for all Epson 9-pin and
	24-pin printers:
	
	  Auto LineFeed: OFF
	  Skip Over Perf: OFF
	
	3.3  Fujitsu 9-Pin and 24-Pin Printers Supported by Windows Version
	    3.1
	
	The following DIP-switch settings are required for all Fujitsu 9-pin
	and 24-pin printers:
	
	  Color:    AUTOSEL
	  LF Code:  LF Only\177
	  CR Code:  CR Only
	  Emulate:  DPL24/DPL24C
	
	4.0  Notes About PostScript Printers and Cartridges
	
	This section contains information specific to PostScript printers.
	
	4.1  Installing a PostScript Printer
	
	When installing a PostScript printer, make sure you select the name of
	your printer model (not PostScript Printer) from the List Of Printers
	box in the Printers dialog box. If you select PostScript Printer, you
	may encounter problems when printing. However, if you are using Finale
	(manufactured by CODA), this is not the case.
	
	4.2  Installing Support for Additional PostScript Printers
	
	If you are using a PostScript printer that is not listed in the List
	Of Printers box in the Printers dialog box, you need to install a
	Windows PostScript Definition (WPD) file for the printer. To do this,
	use the Printers option in Control Panel or the Printer Setup command
	in Print Manager and select Install Unlisted Or Updated Printer in the
	List Of Printers box.
	
	Windows version 3.1 requires an OEMSETUP.INF file to install the WPD
	file. Insert the Windows and MS-DOS disk that contains this file into
	drive A, and then follow the instructions for setting up a printer.
	For more information about installing a printer, see Chapter 6, "Print
	Manager," in the Microsoft Windows User's Guide. If you have a WPD
	file created for Windows version 3.0, you do not need an OEMSETUP.INF
	file.
	
	4.3  Printing a PostScript Print File in UNIX
	
	The PostScript printer driver inserts a CTRL+D key combination at the
	beginning of every print job to reset the printer. Because UNIX
	systems recognize CTRL+D as an end-of-file character, any print files
	you create by using the PostScript printer driver do not print in
	UNIX. You can correct this problem by removing the CTRL+D key
	combination from the print job. To do this, add the following setting
	to the [ModelName,Port] section in the WIN.INI file (where ModelName
	is the name of your PostScript printer model):
	
	  CtrlD=0
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.4  Printing TrueType Fonts in Place of Other Fonts on a PostScript
	    Printer
	
	In most cases, the PostScript printer driver can evaluate the fonts in
	your document and determine whether to use the Windows TrueType fonts,
	the fonts built into your printer, or downloaded soft fonts.
	
	In some cases, the printer driver can use either the Windows TrueType
	fonts or the printer fonts, as in the following examples:
	
	- You are using a True Image printer that includes built-in TrueType
	 fonts that have the same name as the Windows TrueType fonts, such as
	 Times New Roman.
	
	- You want to print a document in Windows version 3.1 that was created
	 by using Windows version 3.0, and the document contains a font that
	 is no longer supported, such as Tms Rmn. In this case, the closest
	 matching printer font is Times, and the closest matching Windows
	 font is Times New Roman, and both are acceptable for printing.
	
	If the driver can use either the Windows TrueType fonts or the printer
	fonts, it uses the printer fonts by default. If you want the driver to
	use the Windows TrueType fonts instead, add the following setting to
	the [ModelName,Port] section in the WIN.INI file (where ModelName is
	the name of your PostScript printer model):
	
	  ttfavor=<1>
	
	To use the printer fonts again, set this value to 0.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.5  Controlling TrueType Font Downloading on PostScript Printers
	
	When setting printer options for a PostScript printer, you can specify
	that TrueType fonts be downloaded as Adobe Type 1 fonts. You do this
	by using the Send To Printer As option in the Advanced Options dialog
	box for the PostScript printer driver. This setting causes smaller
	TrueType fonts to be printed as bitmaps and larger TrueType fonts to
	be printed as outline fonts.
	
	By using the MinOutlineEppem setting in the WIN.INI file, you can
	specify (in the number of points per em) exactly when TrueType fonts
	should be printed as bitmaps and when they should be printed as
	outline fonts. To do this, add the following setting to the
	[ModelName,Port] section in the WIN.INI file (where ModelName is the
	name of your PostScript printer model):
	
	  minoutlineeppem=<number>
	
	The default value for number of points per em is 101. Fonts whose
	points per em are fewer than the number you specify are downloaded as
	bitmaps. Fonts whose points per em are greater are downloaded as
	outline fonts. To conserve printer memory, decrease the value. To
	produce high-quality printed fonts at larger point sizes, increase the
	value. Increasing the value also speeds up printing time but requires
	more memory.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.6  Setting the Timeout for PostScript Printers
	
	Some PostScript printers require a high timeout value in order to
	print complex documents. If you selected the Print PostScript Error
	Information check box in the Advanced Options dialog box when you
	configured your printer and your printer is printing timeout messages,
	try increasing the printer's timeout value. To specify the timeout
	value for your printer, add the following setting to the
	[ModelName,Port] section in the WIN.INI file (where ModelName is the
	name of your PostScript printer model):
	
	  timeout=<number-of-seconds>
	
	For example, if you want to set the printer timeout to 10 minutes on
	an Apple LaserWriter IINT connected to LPT1, you would add the
	following setting to the [Apple LaserWriter IINT,LPT1] section of the
	WIN.INI file:
	
	  timeout=600
	
	Note: The timeout setting and the Timeouts options in the Printer
	Connect dialog box are unrelated. The timeout setting specifies the
	timeout value for your printer, whereas the Timeouts options in the
	Printer Connect dialog box specify the timeouts for Windows.
	
	For more information about configuring your printer and setting
	Timeouts options for Windows, see Chapter 6, "Print Manager," in the
	Microsoft Windows User's Guide. For more information about editing the
	WIN.INI file, see the WININI.WRI online document.
	
	4.7  Rotating EPS Files When Printing in Landscape Mode
	
	If the placement or orientation of imported images (such as EPS files)
	is incorrect when printing in landscape mode from an application that
	supports imported files, try adding the following setting to the
	[ModelName,Port] section of the WIN.INI file (where ModelName is the
	name of your PostScript printer model):
	
	  LandScapeOrient=270
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.8  Using Pheonix PostScript-Compatible Printers or Cartridges
	
	If you are using a Phoenix-compatible PostScript printer or cartridge
	you may encounter problems when printing TrueType fonts. For example,
	random characters may print in your documents. To correct this
	problem, select Bitmap (Type 3) for the Send To Printer As option in
	the Advanced Options dialog box for the PostScript printer driver. For
	more information about setting printing options, see Chapter 6, "Print
	Manager," in the Microsoft Windows User's Guide.
	
	5.0  Notes About Hewlett-Packard, Canon, and PCL Printers and Plotters
	
	This section contains information specific to printing on Hewlett-
	Packard, Canon, and PCL printers and plotters.
	
	5.1  Configuring Memory on PCL Printers
	
	If you are using a PCL printer, you may want to configure printer
	memory to reserve a portion of it for permanently downloaded fonts or
	macros. To do this, you can add two settings to the [HPPCL,Ports]
	section of your WIN.INI file:
	
	- MemReserve=<kilobytes> specifies the amount of total printer memory
	 that is reserved. For example, if you are using permanently
	 downloaded soft fonts that occupy 300K of memory, you can add
	 MemReserve=300 to your WIN.INI file. You do not need to add this
	 setting if you use the Font Installer program provided with Windows
	 to download your fonts. In this case, the printer driver can
	 automatically detect how much memory is taken up by the fonts.
	
	- ResetPrinter=<0, 1, 2> specifies when the driver should reset
	 printer memory. If the value is 0, the driver resets printer memory
	 when the amount of memory available for printing (the total amount
	 less the value for MemReserve) is low. If the value is 1, the driver
	 resets printer memory after printing each page. If the value is 2,
	 the driver never resets printer memory. In most cases, a value of 0
	 works, providing that the value for MemReserve is accurate. If you
	 are printing a large document that contains complex graphics, you
	 may want to specify a value of 1.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.2  Simulating Bold Type on PCL Printers
	
	The Windows version 3.1 PCL driver no longer simulates bold for a font
	that does not include a bold font style. For example, if you use a
	cartridge or soft font in your application that includes only a
	regular font style and then format text as bold, the text prints in
	the regular font style on a PCL printer.
	
	5.3  Printing from PageMaker Versions 3.x to a PCL Printer
	
	Aldus PageMaker version 3.x expects a text band to be sent if you are
	printing to a PCL printer. If you are using a 3.x version of
	PageMaker, you need to add the following line to the [HPPCL,Port]
	section of your WIN.INI file in order to print successfully:
	
	  ForceTextBand=1
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.4  Using the Hewlett-Packard LaserJet IIIsi in PostScript Mode
	
	If you are using a LaserJet IIIsi printer in PostScript mode, make
	sure the PRT PS ERRS option on your printer panel's menu is turned off
	(this is the factory-default setting), unless you are writing
	PostScript programs and need error information for debugging. If this
	option is on, your print jobs pause and a message appears on your
	printer's panel each time a PostScript error is encountered. In most
	cases, your documents still print, but the printing process is
	interrupted.
	
	5.5  Using Intellifont for Windows Version 1.0 with Hewlett-
	Packard LaserJet III Printers
	
	If you install Intellifont for Windows version 1.0 after setting up
	Windows version 3.1, you must reinstall the LaserJet III printer
	driver by using the Printers option in Control Panel or the Printer
	Setup command in Print Manager. The installation program for
	Intellifont for Windows installs an earlier version of the LaserJet
	III printer driver. This driver does not work correctly with Windows
	version 3.1.
	
	5.6  Using the Hewlett-Packard DeskJet 500 Printer Driver
	
	If you are using the HP DeskJet 500 printer driver provided by
	Hewlett-Packard with the HP DeskJet 500 printer, you need to adjust
	the resolution setting to print at 300 dpi. To do this, first try
	adjusting the resolution setting in the printer setup dialog box by
	using the Printers option in Control Panel or the Printer Setup
	command in Print Manager. If this doesn't work, add the following line
	to the [DJ500,Port] section of your WIN.INI file:
	
	  prtresfac=0
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.7  Printing Envelopes in Word for Windows Version 2.0  on a Hewlett-
	    Packard DeskJet 500 Printer
	
	If you are using the DeskJet 500 printer driver provided with Windows,
	you may encounter difficulties when using Word for Windows version 2.0
	to print envelopes on a Hewlett-Packard DeskJet 500 printer. To
	correct the problem, do the following:
	
	1.  In Word for Windows, choose the Options command from the Tools
	   menu.
	
	2.  In the Category list, select the Win.ini button.
	
	3.  In the Option box, type hpdskjet
	
	4.  In the Setting box, type +1
	
	5.  Choose the Close button.
	
	You can also add the following line to the [Microsoft Word 2.0]
	section of your WIN.INI file:
	
	  hpdskjet=+1
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.8  Printing Windows Version 3.0 Documents on Hewlett-Packard
	    LaserJet III Printers
	
	If you are using a LaserJet III printer and find that the documents
	you created when using Windows version 3.0 are printing differently
	when you are using Windows version 3.1, change the Resolution option
	to 75 dpi in the printer setup dialog box, and then try printing
	again.
	
	5.9  Printing TrueType Fonts on Canon Series II and III Laser Printers
	
	The Canon series II and III laser printers do not support incremental
	downloading of TrueType fonts. To print TrueType fonts by using one of
	these printers, you must select the Enable TrueType Fonts check box in
	the printer setup dialog box for the printer. This option supports the
	printing of TrueType fonts on these printers by printing them as
	graphics. This check box is selected by default when a Canon series II
	or III printer is installed.
	
	If the Enable TrueType Fonts check box is not selected, TrueType fonts
	cannot be printed on these printers and are not available in your
	Windows applications; only printer and plotter fonts are available.
	For more information about setting printer options, see Chapter 6,
	"Print Manager," in the Microsoft Windows User's Guide.
	
	5.10  Printing Graphics on a Canon Bubble-Jet BJ-10e or BJ-130e
	
	If you are printing in 360x360 dpi graphics mode and part of the
	graphics images in your documents are missing, make sure the DIP
	switch to control graphics image density is set to HIGH.
	
	5.11  Adjusting Hewlett-Packard Plotter Margins
	
	If you are using one of the plotters in the following list, you can
	probably correct margin problems by experimenting with the margin
	settings in your application and by turning on the Expand switch on
	your plotter:
	
	  - HP 7580 A,B (hardware switch on back panel, pin #9)
	  - HP 7585 A,B (hardware switch on back panel, pin #9)
	  - HP DraftPro DXL, EXL (hardware switch on back panel, pin #9)
	  - DraftMaster I, II (front panel selection)
	
	Turning on the Expand switch increases the plotting area by setting
	the outer margins to the area under the grid wheels. However, this
	might decrease plot quality.
	
	6.0  Notes About Additional Printers and Font Packages
	
	This section contains information specific to font packages and
	printing on dot-matrix, 24-pin, Epson, and IBM printers.
	
	6.1  Feeding Paper on Fujitsu Dot-Matrix Printers
	
	The manual-feed option is not supported on Fujitsu dot-matrix
	printers. All paper is automatically fed to the printer from the
	roller.
	
	6.2  Printing to an IBM Personal Pageprinter, Using the EPT Port
	
	For best results, use the IBM Personal Pageprinter Adapter Program
	version 1.3.1 or later.
	
	If you are running Windows in 386 enhanced mode and want to print to
	an IBM Personal Pageprinter assigned to the EPT port, you must set the
	LPT1 device contention to never issue a warning. Standard mode does
	not require special settings. For more information about setting
	device-contention options, see Chapter 14, "Optimizing Windows," in
	the Microsoft Windows User's Guide.
	
	6.3  Printing to an IBM Proprinter X24 or XL24, Epson MX-80, or
	    Okidata 24-Pin Printer
	
	Because Windows Print Manager sometimes interrupts the flow of data
	while printing, you might notice erratic output if you are using an
	IBM Proprinter X24 or XL24, an Epson MX-80, or an Okidata 24-pin dot-
	matrix printer when Print Manager is active. These printers cannot
	accommodate interruptions in data flow. To solve this problem, try
	deactivating Print Manager.
	
	If you still have problems after deactivating Print Manager, you can
	print to a file and then send that file to your printer. To do so,
	follow these steps:
	
	1.  Using the Printer Setup command in Print Manager or the Printers
	   option in Control Panel, connect to the port named FILE.
	
	2.  Choose the Print command in your Windows application.
	
	3.  Copy the print file to the port your printer is connected to.
	
	For more information about activating and deactivating Print Manager
	and about printing to a file, see Chapter 6, "Print Manager," in the
	Microsoft Windows User's Guide. For more information about printing to
	a file, see your MS-DOS documentation.
	
	Note: This problem should not occur when printing on an IBM Proprinter
	X24e or XL24e.
	
	6.4  Using Fonts with the Epson LQ-510, LQ-850, and LQ-1050 Printers
	
	The Epson LQ-510, LQ-850, and LQ-1050 printer drivers support the full
	set of fonts found on the latest versions of these models. Earlier
	versions of these printer models only support the Roman and Sans Serif
	fonts.
	
	6.5  Printing TrueType Fonts on Kyocera F-Series Printers\177
	
	To print TrueType Fonts on Kyocera F-Series printers, you must select
	the Print TrueType As Graphics check box in the Options dialog box
	when configuring your printer. Otherwise, TrueType fonts do not print
	correctly. For more information about configuring printers, see
	Chapter 6, "Print Manager," in the Microsoft Windows User's Guide.
	
	6.6  Changing Printer Settings When Using Bitstream Facelift Version
	    1.0
	
	With some applications, you can change the settings for your printer
	on a per-page basis. If you are using the Facelift version 1.0 soft-
	font package from Bitstream, you cannot use this feature when printing
	multiple-page documents.
	
	6.7  Using the Cut-Sheet Feeder on the NEC Pinwriter P7 Printer
	
	The Paper Source option, Cut Sheet Feeder, does not work properly with
	the NEC Pinwriter P7 printer. To use the cut-sheet feeder as the paper
	source, you must specify a left margin of about three inches for your
	document so that text prints correctly on the page.
	
	7.0  Other Online Documents
	
	The following table describes other online documents that contain
	important information about Windows version 3.1 that is not included
	in the Microsoft Windows User's Guide or in online Help.
	
	Document        Contains
	--------        --------
	APPS.HLP        Information about updating some older Windows
	               applications for use with Windows version 3.1. You can
	               view this file by starting Windows Help from any
	               application, and then using the Open command on the
	               File menu to open the file. For more information about
	               using Help, see Chapter 1, "Windows Basics," in the
	               Microsoft Windows User's Guide.
	
	SETUP.TXT       Information about problems that may occur when you are
	               setting up Windows.
	
	README.WRI      Information about using Windows with the Multimedia
	               Extensions version 1.0, specific display-adapter and
	               system configurations, and non-Windows applications,
	               and information that was unavailable when the
	               Microsoft Windows User's Guide was printed.
	
	NETWORKS.WRI    Information about running Windows with specific
	               network configurations.
	
	SYSINI.WRI      Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI      Information about the settings in the WIN.INI file.
	
	Additional query words: 3.1 3.10 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
