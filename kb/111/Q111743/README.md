---
layout: page
title: "Q111743: PRINTERS.WRI from Windows for Workgroups 3.11 (Part 1)"
permalink: /kb/111/Q111743/
---

## Q111743: PRINTERS.WRI from Windows for Workgroups 3.11 (Part 1)

	Article: Q111743
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 PRINTERS.WRI.
	
	MORE INFORMATION
	================
	
	Additional Notes About Printing in Microsoft Windows for Workgroups
	Version 3.11
	____________________________________________________________
	
	This document contains information not available in the printed
	documentation or in online Help for printers. Some of the topics in
	this document are specific to particular printer models or printer
	types, such as PostScript or PCL printers, and some are more general,
	such as instructions on how to print extended characters.
	
	For additional information about Microsoft Windows for Workgroups
	that does not pertain to printing, see "Other Online Documents" at
	the end of this document.
	
	Using Write to View This Document
	
	To make this document easier to read, you can enlarge the Write
	window to its maximum size. To do so, click the Maximize button in
	the upper-right corner of the window. Or open the Control menu in the
	upper-left corner of the Write window (press ALT+SPACEBAR), and then
	choose the Maximize command.
	
	To move through the document, press PAGE UP or PAGE DOWN. Or click
	the arrows at the top and bottom of the scroll bar along the right
	side of the Write window.
	
	To print the document, choose Print from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose Open from the File menu.
	
	Contents
	
	This document contains the following topics about printing:
	
	1.0  Printing from MS-DOS?based Applications
	1.1  Printing Conflicts Between Remote and Local MS-DOS?based Applications
	1.3  Spooling Print Jobs from MS-DOS?based Applications
	
	2.0  Printing Extended or International Characters
	
	3.0  Configuring Your Printer's DIP-Switch Settings
	3.1  Canon Bubble-Jet BJ-10e and BJ-130e
	3.2  Epson 9-Pin and 24-Pin Printers Supported by Windows for Workgroups
	3.3  Fujitsu 9-Pin and 24-Pin Printers Supported by Windows for Workgroups
	
	4.0  Notes About PostScript Printers and Cartridges
	4.1  Installing a PostScript Printer
	4.2  Installing Support for Additional PostScript Printers
	4.3  Printing a PostScript Print File in UNIX
	4.4  Printing TrueType Fonts in Place of Other Fonts on a PostScript
	    Printer
	
	4.5  Controlling TrueType Font Downloading on PostScript Printers
	4.6  Setting the Timeout for PostScript Printers
	4.7  Rotating EPS Files When Printing in Landscape Mode
	4.8  Troubleshooting Postscript Printers Using TESTPS.TXT
	
	5.0  Notes About Hewlett-Packard, Canon, and PCL Printers and Plotters
	5.1  Configuring Memory on PCL Printers
	5.2  Simulating Bold Type on PCL Printers
	5.3  Printing from PageMaker Version 3.x to a PCL Printer
	5.4  Using the Hewlett-Packard LaserJet IIIsi in PostScript Mode
	5.5  Using Intellifont for Windows Version 1.0 with Hewlett-Packard
	    LaserJet III Printers
	5.6  Upgrading HP LaserJet Series III Printer Drivers
	5.7  Using the Hewlett-Packard DeskJet 500 Printer Driver
	5.8  Printing Envelopes in Word for Windows Version 2.0 on a
	    Hewlett-Packard DeskJet 500 Printer
	5.9  Printing TrueType Fonts on Canon Series II and III Laser Printers
	5.10  Printing Graphics on a Canon Bubble-Jet BJ-10e or BJ-130e
	5.11  Adjusting Hewlett-Packard Plotter Margins
	5.12  Adding Distinct DocI/Comp Pub I and Brilliant Pres I/Comp
	     Pub II Font Cartridges
	5.13  Using the Hewlett-Packard HP-GL/2
	
	6.0  Notes About Additional Printers and Font Packages
	6.1  Feeding Paper on Fujitsu Dot-Matrix Printers
	6.2  Printing to an IBM Personal Pageprinter, Using the      EPT Port
	6.3  Printing to an IBM Proprinter X24 or XL24, Epson MX-80, or
	    Okidata 24-Pin Printer
	6.4  Using Fonts with the Epson LQ-510, LQ-850, and LQ-1050 Printers
	6.5  Printing TrueType Fonts on Kyocera F-Series Printers
	6.6  Changing Printer Settings When Using Bitstream Facelift Version 1.0
	6.7  Using the Cut-Sheet Feeder on the NEC Pinwriter P7 Printer
	6.8  Using Separator Pages
	
	7.0  Troubleshooting
	7.1  Troubleshooting Garbled Output
	
	8.0  Other Online Documents
	
	Microsoft and MS-DOS are registered trademarks and Windows is a
	trademark of Microsoft Corporation.
	
	SuperStor is a trademark of AddStor, Inc.
	Bitstream is a registered trademark and FaceLift is a trademark of
	Bitstream, Inc.
	PC Tools is a trademark of Central Point Software, Inc.
	COMPAQ DESKPRO 386/20 is a registered trademark of Compaq Computer
	Corporation.
	Sound Blaster is a trademark of Creative Technology Ltd.
	Hewlett-Packard is a registered trademark of Hewlett-Packard Company.
	PS/2 and XGA are registered trademarks of International Business
	Machines Corporation.
	Toshiba is a registered trademark of Kabushiki Kaisha Toshiba.
	Logitech  is a trademark of Logitech, Inc.
	NEC is a registered trademark of NEC Corporation.
	Norton Utilities is a registered trademark of Peter Norton Computing
	Hardcard is a trademark of Plus Development Corporation.
	386MAX is a registered trademark of Qualitas, Inc.
	Qemm is a trademark of Quarterdeck Office Systems.
	SCSI is a registered trademark of Security Control Systems, Inc.
	Epson is a registered trademark of Seiko Epson Corporation, Inc.
	Tandy is a registered trademark of Tandy Corporation.
	WordPerfect is a registered trademark of WordPerfect Corporation.
	Wyse is a registered trademark of Wyse Technology.
	Zenith is a registered trademark of Zenith Electronics Corporation.
	
	1.0  Printing from MS-DOS?based Applications
	
	1.1 Print Conflicts Between Remote and Local MS-DOS?based Applications
	
	In Windows for Workgroups, Print Manager manages all local and remote
	print jobs, except for those from local MS-DOS?based applications. A
	conflict arises if a remote client sends a print job at the same time
	an MS-DOS?based application is printing. Since Print Manager does not
	control local MS-DOS?generated print jobs and MS-DOS?based programs
	usually do not close printer ports when their print jobs are
	complete, the redirector must use the MS-DOS?based application's idle
	time to determine when to print the remote print job. The time the
	redirector waits is specified in the [Network] section of the
	SYSTEM.INI file in the PRINTBUFTIME= statement. By default, this
	value is set to 45 seconds.
	
	If the above situation occurs, you are warned that a potential device
	conflict exists and if you continue, the printed output may be
	incorrect or garbled. The local (print server) print job goes
	directly to the port, breaking up and potentially interrupting the
	remote print job.
	
	If you have a shared printer on your machine, do not override a
	device conflict warning. You may be able to work around this problem
	by setting PRINTBUFTIME= to a lower value (such as 10 seconds).
	
	1.2 Spooling Print Jobs from MS-DOS?based Applications
	
	This section contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft. If the procedures
	described in this section do not enable print spooling to work
	properly on your computer, contact the manufacturer of the
	third-party product for more information or use a supported
	configuration.
	
	Windows for Workgroups cannot spool local print jobs sent to the
	printer by MS-DOS?based applications. The following paragraphs
	outline a workaround for this situation. This workaround may also
	alleviate device contention errors.
	
	To spool print jobs from MS-DOS?based applications, you must print
	from one computer to another (using a dummy port) and then redirect
	the job back to the first computer. The print job is then put in the
	print queue. This may eliminate any device conflicts when you try to
	print to the local printer.
	
	Note: This works only if the application has the ability to choose
	the LPT2 port over the LPT1 port.
	
	In the following example, Computer One has a shared local printer on
	LPT1 that is being accessed by Computer Two over the network.
	
	1.  Install a printer driver for the port LPT1.DOS on Computer Two
	and share it.
	
	2.  From Computer One, connect to the share on Computer Two using LPT2.
	
	3.  Print from an MS-DOS?based application to LPT2. Your print job
	may be effectively spooled.
	
	2.0  Printing Extended or International Characters
	
	In addition to the 128 standard ASCII characters you can type by
	using your keyboard, you can use extended or international characters
	by using the Character Map application. For more information, see
	Help for Character Map.
	
	When Windows prints a file, each character you typed while using your
	application is translated from the Windows character to the
	appropriate character on your printer. If your printer supports the
	same character, the character prints. Otherwise, some other
	character, such as a period or other filler character, prints
	instead. Check your printer manual and experiment with your printer
	to determine which extended characters are supported.
	
	Note: This limitation applies only to the printer's hardware fonts.
	Fonts provided by Windows for Workgroups do print the extended
	characters.
	
	3.0  Configuring Your Printer's DIP-Switch Settings
	
	The following printer models require certain DIP-switch settings in
	order to work properly in Windows for Workgroups. Make sure you
	configure your printer's DIP-switch settings before you install your
	printer.
	
	3.1  Canon Bubble-Jet BJ-10e and BJ-130e
	
	All DIP switches should be set to the factory-default position. For
	the BJ-10e and BJ-130e models, this is the OFF position.
	
	3.2  Epson 9-Pin and 24-Pin Printers Supported by Windows for Workgroups
	
	The following DIP-switch settings are required for all Epson 9-pin
	and 24-pin printers:
	
	Auto LineFeed: OFF
	Skip Over Perf: OFF
	
	3.3  Fujitsu 9-Pin and 24-Pin Printers Supported by Windows for Workgroups
	
	The following DIP-switch settings are required for all Fujitsu 9-pin
	and 24-pin printers:
	
	Color:  AUTOSEL
	LF Code:  LF Only
	CR Code:  CR Only
	Emulate:  DPL24/DPL24C
	
	4.0  Notes About PostScript Printers and Cartridges
	
	This section contains information specific to PostScript printers.
	
	4.1  Installing a PostScript Printer
	
	When you install a PostScript printer, make sure you select the name
	of your printer model (not PostScript Printer) from the List Of
	Printers box in the Printers dialog box. If you select PostScript
	Printer, you may encounter problems when printing. However, if you
	are using Finale (manufactured by CODA), this is not the case.
	
	4.2  Installing Support for Additional PostScript Printers
	
	If you are using a PostScript printer that is not listed in the List
	Of Printers box in the Printers dialog box, you need to install a
	Windows PostScript Definition (WPD) file for the printer. To do this,
	use the Printers option in Control Panel or the Printer Setup command
	in Print Manager, and select Install Unlisted Or Updated Printer in
	the List Of Printers box.
	
	Windows for Workgroups requires an OEMSETUP.INF file to install the
	WPD file. Insert the vendor-provided disk that contains this file in
	drive A, and then follow the instructions for setting up a printer.
	For more information about installing a printer, see Help for Print
	Manager.
	
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
	
	In most cases, the PostScript printer driver can evaluate the fonts
	in your document and determine whether to use the Windows TrueType
	fonts, the fonts built into your printer, or downloaded soft fonts.
	
	In some cases, the printer driver can use either the Windows TrueType
	fonts or the printer fonts, as in the following examples:
	
	<B7> You are using a True Image printer that includes built-in TrueType
	fonts that have the same name as the Windows TrueType fonts, such as
	Times New Roman.
	
	<B7> You want to print a document in Windows for Workgroups version 3.11
	that was created by using Windows version 3.0, and the document
	contains a font that is no longer supported, such as Tms Rmn. In this
	case, the closest matching printer font is Times, and the closest
	matching Windows font is Times New Roman; both are acceptable for
	printing.
	
	If the driver can use either the Windows TrueType fonts or the
	printer fonts, it uses the printer fonts by default. If you want the
	driver to use the Windows TrueType fonts instead, add the following
	setting to the [ModelName,Port] section in the WIN.INI file (where
	ModelName is the name of your PostScript printer model):
	
	ttfavor=1
	
	To use the printer fonts again, set this value to 0.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.5  Controlling TrueType Font Downloading on PostScript Printers
	
	When you are setting printer options for a PostScript printer, you
	can specify that TrueType fonts be downloaded as Adobe Type 1 fonts.
	To do this, use the Send To Printer As option in the Advanced Options
	dialog box for the PostScript printer driver. This setting causes
	smaller TrueType fonts to be printed as bitmaps and larger TrueType
	fonts to be printed as outline fonts.
	
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
	produce high-quality printed fonts at larger point sizes, increase
	the value. Increasing the value also speeds up printing time but
	requires more memory.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.6  Setting the Timeout for PostScript Printers
	
	Some PostScript printers require a high timeout value in order to
	print complex documents. If you selected the Print PostScript Error
	Information check box in the Advanced Options dialog box when you
	configured your printer and your printer is printing timeout
	messages, try increasing the printer's timeout value. To specify the
	timeout value for your printer, add the following setting to the
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
	Timeouts options for Windows, see Help for Print Manager or Control
	Panel. For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	4.7  Rotating EPS Files When Printing in Landscape Mode
	
	If the placement or orientation of imported images (such as EPS
	files) is incorrect when you are printing in landscape mode from an
	application that supports imported files, try adding the following
	setting to the [ModelName,Port] section of the WIN.INI file (where
	ModelName is the name of your PostScript printer model):
	
	LandScapeOrient=270
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	KBCategory: kbref kbsound
	KBSubcategory:
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
