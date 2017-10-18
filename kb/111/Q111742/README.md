---
layout: page
title: "Q111742: PRINTERS.WRI from Windows for Workgroups 3.11 (Part 2)"
permalink: kb/111/Q111742/
---

## Q111742: PRINTERS.WRI from Windows for Workgroups 3.11 (Part 2)

	Article: Q111742
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 PRINTERS.WRI file.
	
	MORE INFORMATION
	================
	
	4.8  Troubleshooting PostScript Printer Problems with TESTPS.TXT
	
	Windows for Workgroups 3.11 comes with a file called TESTPS.TXT. This
	file is copied into the \WINDOWS\SYSTEM directory if you install a
	PostScript printer. TESTPS.TXT is used to test PostScript printers
	for connection and functionality problems. To use TESTPS.TXT, copy it
	to the port to which the PostScript printer is connected as follows:
	
	COPY C:\WINDOWS\SYSTEM\TESTPS.TXT LPTx
	or
	COPY C:\WINDOWS\SYSTEM\TESTPS.TXT COMx
	where x is the port number
	
	If the printer is functioning correctly, it will print a page that
	contains the following information:
	
	Max Printer VM (KB):          xxx.x
	Max Suggested VM (KB):          xxx.x
	Bit Rate:                    19.2 kilobits per second (Kbps) or less
	Data Bits:                    7
	Parity:                              None
	Stop Bits:                    1
	Flow Control:                    Hardware
	
	If the printer is not functioning or is not connected properly, no
	page is printed. If no output occurs, check the following:
	
	<B7> Is the printer plugged in? Is the power on? Try turning off the
	power and turning it back on again.
	
	<B7> Is there paper in the printer?
	
	<B7> Is the correct port being used to copy TESTPS.TXT? Try copying the
	file to other available ports.
	
	<B7> Is the printer cable functioning properly? Try a different cable.
	
	<B7> Is the LPT or serial card/port configured correctly? Check the DIP
	switches or software setup for the card.
	
	<B7> Are the settings in the Ports window of the Control Panel
	configured according to the TESTPS.TXT output? To verify this, use
	the following steps:
	
	<B7>  Open Control Panel, and then double-click the Ports icon.
	<B7>  Select the active port, and then choose the Settings button.
	<B7>  Compare the settings with the TESTPS.TXT output.
	
	5.0  Notes About Hewlett-Packard, Canon, and PCL Printers and Plotters
	
	This section contains information specific to printing on
	Hewlett-Packard, Canon, and PCL printers and plotters.
	
	5.1  Configuring Memory on PCL Printers
	
	If you are using a PCL printer, you may want to configure printer
	memory to reserve a portion of it for permanently downloaded fonts or
	macros. To do this, you can add two settings to the [HPPCL,Ports]
	section of your WIN.INI file:
	
	<B7> MemReserve=<kilobytes> specifies the amount of total printer memory
	that is reserved. For example, if you are using permanently
	downloaded soft fonts that occupy 300K of memory, you can add
	MemReserve=300 to your WIN.INI file. You do not need to add this
	setting if you use the Font Installer program provided with Windows
	for Workgroups to download your fonts. In this case, the printer
	driver can automatically detect how much memory is taken up by the
	fonts.
	
	<B7> ResetPrinter=<0, 1, 2> specifies when the driver should reset
	printer memory. If the value is 0, the driver resets printer memory
	when the amount of memory available for printing (the total amount
	less the value for MemReserve) is low. If the value is 1, the driver
	resets printer memory after printing each page. If the value is 2,
	the driver never resets printer memory. In most cases, a value of 0
	works, providing that the value for MemReserve is accurate. If you
	are printing a large document that contains complex graphics, you may
	want to specify a value of 1.
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.2  Simulating Bold Type on PCL Printers
	
	The Windows for Workgroups PCL driver no longer simulates bold for a
	font that does not include a bold font style. For example, if you use
	a cartridge or soft font in your application that includes only a
	regular font style and you format text as bold, the text prints in
	the regular font style on a PCL printer.
	
	5.3  Printing from PageMaker Version 3.x to a PCL Printer
	
	Aldus PageMaker version 3.x expects a text band to be sent if you are
	printing to a PCL printer. If you are using a 3.x version of
	PageMaker, you need to add the following line to the [HPPCL,Port]
	section of your WIN.INI file in order to print successfully:
	
	ForceTextBand=1
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.4  Using the Hewlett-Packard LaserJet IIIsi in PostScript Mode
	
	If you are using a LaserJet IIIsi printer in PostScript mode, make
	sure the PRT PS ERRS option on your printer panel's menu is turned
	off (this is the factory-default setting), unless you are writing
	PostScript programs and need error information for debugging. If this
	option is on, your print jobs pause and a message appears on your
	printer's panel each time a PostScript error is encountered. In most
	cases, your documents still print, but the printing process is
	interrupted.
	
	5.5  Using Intellifont for Windows Version 1.0 with Hewlett-Packard
	LaserJet III Printers
	
	If you install Intellifont for Windows version 1.0 after setting up
	Windows for Workgroups version 3.11, you must reinstall the LaserJet
	III printer driver by using the Printers option in Control Panel or
	the Printer Setup command in Print Manager. The installation program
	for Intellifont for Windows installs an earlier version of the
	LaserJet III printer driver. This driver does not work correctly with
	Windows for Workgroups.
	
	5.6  Upgrading HP LaserJet Series III Printer Drivers
	
	The HP LaserJet III printer driver included with Windows for
	Workgroups is named HPPCL5MS.DRV. In earlier versions of Windows,
	this driver was named HPPCL5A.DRV. If you upgrade to Windows for
	Workgroups, the Setup program updates the printer driver for the HP
	LaserJet III printer. However, some applications store the
	information about the printer-driver file with the document, and if
	you try to print a document that you created before you upgraded to
	Windows for Workgroups, you may receive a message notifying you that
	the printer driver cannot be found. If this happens, choose the
	Printer Setup command in your application to update the driver
	information stored in the document.
	
	5.7  Using the Hewlett-Packard DeskJet 500 Printer Driver
	
	If you are using the HP DeskJet 500 printer driver provided by
	Hewlett-Packard with the HP DeskJet 500 printer, you need to adjust
	the resolution setting to print at 300 dpi. To do this, first try
	adjusting the resolution setting in the printer setup dialog box by
	using the Printers option in Control Panel or the Printer Setup
	command in Print Manager. If this doesn't work, add the following
	line to the [DJ500,Port] section of your WIN.INI file:
	
	prtresfac=0
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.8  Printing Envelopes in Word for Windows Version 2.0  on a
	Hewlett-Packard DeskJet 500 Printer
	
	If you are using the DeskJet 500 printer driver provided with Windows
	for Workgroups, you may encounter difficulties when using Word for
	Windows version 2.0 to print envelopes on a Hewlett-Packard DeskJet
	500 printer.
	
	To correct the problem:
	
	1.  In Word for Windows, choose the Options command from the Tools menu.
	
	2.  In the Category list, select the Win.ini button.
	
	3.  In the Option box, type hpdskjet
	
	4.  In the Setting box, type +1
	
	5.  Choose the Close button.
	
	You can also add the following line to the [Microsoft Word 2.0]
	section of your WIN.INI file:
	
	hpdskjet=+1
	
	For more information about editing the WIN.INI file, see the
	WININI.WRI online document.
	
	5.9  Printing TrueType Fonts on Canon Series II and III Laser Printers
	
	The Canon series II and III laser printers do not support incremental
	downloading of TrueType fonts. To print TrueType fonts by using one
	of these printers, you must select the Enable TrueType Fonts check
	box in the printer setup dialog box for the printer. This option
	supports the printing of TrueType fonts on these printers by printing
	them as graphics. This check box is selected by default when a Canon
	series II or III printer is installed.
	
	If the Enable TrueType Fonts check box is not selected, TrueType
	fonts cannot be printed on these printers and are not available in
	your Windows-based applications; only printer and plotter fonts are
	available. For more information about setting printer options, see
	Help for Print Manager.
	
	5.10  Printing Graphics on a Canon Bubble-Jet BJ-10e or BJ-130e
	
	If you are printing in 360x360 dpi graphics mode and part of the
	graphics images in your documents are missing, make sure the DIP
	switch that controls graphics image density is set to HIGH.
	
	5.11  Adjusting Hewlett-Packard Plotter Margins
	
	If you are using one of the plotters in the following list, you can
	probably correct margin problems by experimenting with the margin
	settings in your application and by turning on the Expand switch on
	your plotter:
	
	<B7>  HP 7580 A,B (hardware switch on back panel, pin #9)
	<B7>  HP 7585 A,B (hardware switch on back panel, pin #9)
	<B7>  HP DraftPro DXL, EXL (hardware switch on back panel, pin #9)
	<B7>  Draftmaster I, II (front panel selection)
	
	Turning on the Expand switch increases the plotting area by setting
	the outer margins to the area under the grid wheels. However, this
	might decrease plot quality.
	
	5.12  Adding Distinct DocI/Comp Pub I and Brilliant Pres I/Comp Pub
	II Font Cartridges
	
	If you need to install these font cartridges for your LaserJet III
	printer, you can do so by using the Font Installer.
	
	To install the font cartridges:
	
	1. In Print Manager, choose Printer Setup from the Options menu.
	
	2. In the Printers dialog box, select your printer from the list of
	installed printers, and then choose the Setup button.
	
	3. In the printer driver dialog box, choose the Fonts button.
	
	4. In the Font Installer dialog box, choose the Add Fonts button.
	
	5. In the dialog box that appears, type the path for your Windows
	SYSTEM directory?for example:
	
	    c:\windows\system
	
	6. Select the name of the cartridge you want to install, and then
	choose the OK  button.
	
	5.13 Using the Hewlett-Packard HP-GL/2
	
	Support for HP-GL/2 is in the HPPCL5E driver.  Under the Options
	Dialog in the Printer Setup, an option of "Graphics Mode" is
	available.  Two options are present:  HP-GL/2 or Raster.  The first
	choice enables HP-GL/2 which will increase print performance.  The
	second choice uses raster only.  The default graphics mode is set to
	raster for the HP LaserJet 4L.  The default mode is set to HP-GL/2
	for the HP LaserJet 4/4M and 4Si/4Si MX.
	
	For the HP LaserJet 4/4M and 4Si/4Si MX, if you encounter print
	difficulties in the default Graphics Mode, it is recommended that you
	change the mode to Raster and try your print job again. Additional
	information on this topic may be found in the help files that
	accompany this driver.  Choose Help from the driver dialog screens or
	the HP font installer screens to access the HELP information.
	
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
	
	If you want to print to an IBM Personal Pageprinter assigned to the
	EPT port, you must set the LPT1 device contention to never issue a
	warning. For more information about managing device requests, see
	Help for Control Panel.
	
	6.3  Printing to an IBM Proprinter X24 or XL24, Epson MX-80, or
	Okidata 24-Pin Printer
	
	Because Print Manager sometimes interrupts the flow of data while
	printing, you might notice erratic output if you are using an IBM
	Proprinter X24 or XL24, Epson MX-80, or Okidata 24-pin dot-matrix
	printer when Print Manager is active. These printers cannot
	accommodate interruptions in data flow. To solve this problem, try
	deactivating Print Manager.
	
	If you still have problems after deactivating Print Manager, use the
	following procedure.
	
	To print to a file and then send the file to a printer:
	
	1.  Using the Printer Setup command in Print Manager or the Printers
	option in Control Panel, connect to the port named FILE.
	
	2.  Choose the Print command in your Windows application.
	
	3.  Copy the print file to the port your printer is connected to.
	
	For more information about activating and deactivating Print Manager
	and printing to a file, see Help for Print Manager. For more
	information about printing to a file, see your MS-DOS documentation.
	
	Note: This problem should not occur when you are printing on an IBM
	Proprinter X24e or XL24e.
	
	6.4  Using Fonts with the Epson LQ-510, LQ-850, and LQ-1050 Printers
	
	The Epson LQ-510, LQ-850, and LQ-1050 printer drivers support the
	full set of fonts provided with the latest versions of these printer
	models. Earlier versions of these printer models support only the
	Roman and Sans Serif fonts.
	
	6.5  Printing TrueType Fonts on Kyocera F-Series Printers
	
	To print TrueType Fonts on Kyocera F-Series printers, you must select
	the Print TrueType As Graphics check box in the Options dialog box
	when configuring your printer. Otherwise, TrueType fonts may not
	print correctly. For more information about configuring printers, see
	Help for Print Manager.
	
	6.6  Changing Printer Settings When Using Bitstream FaceLift Version 1.0
	
	With some applications, you can change the settings for your printer
	on a per- page basis. If you are using the Facelift version 1.0
	soft-font package from Bitstream, you cannot use this feature when
	you are printing multiple-page documents.
	
	6.7  Using the Cut-Sheet Feeder on the NEC Pinwriter P7 Printer
	
	The Paper Source option, Cut Sheet Feeder, does not work properly
	with the NEC Pinwriter P7 printer. To use the cut-sheet feeder as the
	paper source, you must specify a left margin of about three inches
	for your document so that text prints correctly on the page.
	
	6.8 Using Separator Pages
	
	If you are using one of the following printer models and the printer
	is a local printer (attached to your computer), do not use the
	separator-page feature in Print Manager. This feature is not
	supported in these printer models.
	
	Canon LBP-4
	Canon LBP-8 II
	Canon LBP-8 III
	IBM Laser Printer 4019
	Olivetti DM 109
	Olivetti DM 309
	
	7.0 Troubleshooting
	
	7.1 Troubleshooting Garbled Output
	
	If you get garbled output on a printer, it may be due to one of the
	following problems:
	
	1. Your network adapter and LPT1 port may have a conflicting IObase
	address, such as 370. You need to change the IObase address of the
	network adapter.
	
	2. If you are using a NetWare server and PRINTCON.DAT is set up for
	text mode or is not in the SYS directory for your Novell network
	installation, Windows for Workgroups version 3.11 will not print
	TrueType fonts correctly. One of the functions of PRINTCON.DAT is to
	set up the default data stream type. Without a PRINTCON.DAT file, the
	default is a "TEXT" data stream.
	
	To correct this problem, use the Novell PRINTCON utility to generate
	a PRINTCON.DAT file with a default data stream of "BITSTREAM". Once
	this is done, TrueType fonts should print normally.
	
	8.0  Other Online Documents
	
	The following table describes other online documents that contain
	important information about Windows for Workgroups that is not
	included in the Microsoft Windows for Workgroups User's Guide or in
	Help.
	
	Document               Contains
	____________________________________________________________
	
	SETUP.TXT     Information about problems that may occur when you
	set up Windows for Workgroups.
	
	MAIL.WRI     Information about the MSMAIL.INI file
	    and other Mail administration information.
	
	README.WRI     Information about using Windows for Workgroups with
	the Multimedia Extensions version 1.0, specific display-adapter and
	system configurations, and MS-DOS?based applications, and information
	that was unavailable when the documentation was printed.
	
	NETWORKS.WRI     Information about running Windows for Workgroups with
	specific network configurations.
	
	SYSINI.WRI     Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI     Information about the settings in the WIN.INI file.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
