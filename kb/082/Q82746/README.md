---
layout: page
title: "Q82746: General Information About Print Manager and Windows 3.1"
permalink: /kb/082/Q82746/
---

## Q82746: General Information About Print Manager and Windows 3.1

{% raw %}

	Article: Q82746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains information about printing from the Microsoft Windows
	version 3.1 with Print Manager. This article provides an overview of the flow of
	data through Windows during printing and instructions for using the Print
	Manager, the Fast Printing Direct to Port option, and the Print Network Jobs
	Directly option.
	
	MORE INFORMATION
	================
	
	Print Manager Disabled
	----------------------
	
	The simplest printing setup in Windows 3.1 is with the Print Manager disabled. In
	this situation, only one application can print at a time. Print Manager is not
	running, so there is little memory overhead (Print Manager can take up to 50K of
	memory). Disabling Print Manager should improve performance if you frequently
	run out of memory. Printing without the Print Manager also requires less disk
	space for temporary files.
	
	The general order of printing is as follows:
	
	1. The application makes a Windows function call to create the output.
	
	2. Windows translates those calls into printer driver function calls.
	
	3. The device driver converts the drawing function calls into printer specific
	  draw commands. In the case of dot-matrix printers and non-PostScript laser
	  printers, a bitmap containing the graphics is generated.
	
	4. GDI.EXE outputs the printer commands to the port or network server.
	
	Print Manager Enabled
	---------------------
	
	With Print Manager enabled, the conditions are similar; however, there are a few
	significant differences.
	
	1. Instead of writing the printer commands (the output of the printer driver) to
	  the port or network spooler, GDI writes the output to temporary files. The
	  temporary files are sent to the port by Print Manager.
	
	2. Print Manager does not try to write the files to the port until the
	  application and the driver have finished producing all the files needed to
	  print the entire job. (This is called "spooling.")
	
	3. Print Manager allows more than one application to spool and therefore print
	  at one time. This is possible because several applications can create
	  temporary files (that is, "spool") simultaneously. Print Manager then prints
	  them in order.
	
	4. Print Manager provides informative error messages when things go
	  unexpectedly.
	
	The advantage in allowing a print job to finish spooling before trying to print
	it is that the application allows you to continue with the task you were doing
	sooner; Print Manager takes care of actually sending the document to the
	printer.
	
	The negative effect of spooling is that disk space is required for each spooled
	file.(These files are stored in the temporary directory.) Therefore, you may run
	out of disk space while printing. If this problem occurs, spooling stops
	temporarily and Print Manager attempts to free disk space by writing the first
	few pages of the document to the printer. The application is suspended until
	enough disk space has been freed to allow spooling to finish.
	
	Windows 3.0 handles printing differently than Windows 3.1; Windows 3.0 tries to
	both spool files and print them at the same time. The result is that the
	application is suspended for a longer period of time. The Windows 3.1 approach
	takes exactly the same time to print the document as Windows 3.0, but the
	application allows you to continue working on other tasks sooner.
	
	Sending Printer Commands to Ports
	---------------------------------
	
	Whether Print Manager is enabled or disabled, Windows has several methods for
	sending printer commands to a printer port. GDI or Print Manager determines how
	to print the file by examining the configuration of the port. If the port is
	connected to a network printer, the network driver creates a print job on the
	network spooler. GDI or Print Manager then uses MS-DOS to write data to the
	network spooler.
	
	If the port is recognized by the Windows COMM (communications) driver and the
	Fast Printing Direct To Port option is turned on, GDI or Print Manager uses the
	COMM driver to send the printer data to the printer. The COMM driver supports
	COM and LPT ports whose addresses are found in the ROM BIOS data area (the eight
	words starting at 40:0).
	
	If the port is not accepted by the network driver or the COMM driver (for
	example, when printing to a file or to a character device driver that is not a
	COM or LPT port), GDI and Print Manager uses MS-DOS to open and write functions
	to output the print data.
	
	Fast Printing Direct to Port
	----------------------------
	
	Enabling this option (accessed by choosing "Printer Setup" and then
	"Connections") causes Windows to print using the Windows COMM driver whenever
	appropriate. The COMM driver supports faster printing than MS- DOS by writing
	directly to the COM or LPT port hardware but bypassing the normal MS-DOS output
	code path. If special print terminate-and- stay-resident programs (TSRs) are
	being used or you are experiencing problems printing over a network, disabling
	this option may correct these problems.
	
	Note: This is exactly the same as printing to LPT1.OS2 in Windows 3.0, but this
	setting is for ALL ports. This option is active by default.
	
	Print Network Files Direct
	--------------------------
	
	Enabling this option under Network Settings stops Print Manager from spooling
	network jobs on the local hard drive and allows local jobs to be spooled as
	normal. If the server supports spooling of print jobs (almost all do) then
	enabling this option saves disk space when printing to a network printer without
	affecting the print speed or the time the application is suspended. This option
	is active by default.
	
	Disable this option, if any of the following conditions exist:
	
	- It is known that the server doesn't support spooling.
	
	- Printing slows down with this option enabled.
	
	- You get network errors with this enabled.
	
	Handshaking and Error Checking
	------------------------------
	
	The Windows COMM driver supports both hardware and software handshaking on serial
	ports and all standard control signals on parallel ports. When using the COMM
	driver (printing Direct to Port is active) with a parallel port, Windows also
	resets the printer between documents. The errors supported by parallel ports are
	"printer offline," "printer out of paper," "general error," and "printer not
	ready," which is actually a time-out condition on the printer busy signal. There
	is no standard for returning printer errors on serial ports; however, "printer
	not ready" time-outs result if handshaking is used and the printer does not
	accept data.
	
	
	Additional query words: 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
