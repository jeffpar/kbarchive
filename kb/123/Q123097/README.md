---
layout: page
title: "Q123097: Shared Network Printer Driver Is Installed"
permalink: kb/123/Q123097/
---

## Q123097: Shared Network Printer Driver Is Installed

	Article: Q123097
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
	
	In Windows 95, when you use Point and Print or the Add Printer Wizard to install
	a network printer, the printer driver that the network printer is using is
	installed. For example:
	
	A Windows 95 computer is sharing a Hewlett-Packard LaserJet IIISi printer that is
	capable of printing PCL or PostScript. If this printer is installed on the
	server as a PostScript printer, the PostScript driver is installed across the
	network. If this printer is installed on the server as a PCL printer, the PCL
	driver is installed across the network.
	
	CAUSE
	=====
	
	Windows 95 is designed to install the printer driver that the server is using.
	
	WORKAROUND
	==========
	
	NOTE: These steps describe how to print using PostScript to a network printer
	that is using the PCL driver. These steps can also be used for a shared
	PostScript printer that you want to print to in PCL.
	
	If you prefer to use the PostScript printer driver on a network printer that is
	being shared as PCL, use one of the methods below.
	
	Method 1: If you haven't yet installed the printer, use the following steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon.
	
	3. Follow the Add Printer Wizard instructions to install the PostScript printer
	  of your choice as a local printer.
	
	4. Click the PostScript printer icon with the right (secondary) mouse button,
	  then click Properties.
	
	5. Click the Details tab and type the network path in the Print to: box.
	
	6. Click OK.
	
	Method 2: If you have already installed the printer, use the following steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Click the PCL printer icon with the right (secondary) mouse button, then
	  click Properties.
	
	3. Click the Details tab, click New beside the Driver option, then click Yes
	  when you are asked to continue.
	
	4. Click the manufacturer, then double-click the appropriate printer model. For
	  example, to install the HP IIISi PostScript driver, click HP, then
	  double-click HP LaserJet IIISi PostScript.
	
	5. Click OK.
	
	Method 3: Install the PostScript and PCL printer driver on the server computer
	with two different share names. For example: Install the HP LaserJet IIISi
	printer and share it as \\<server>\IIISi. Install the HP LaserJet IIISi
	PostScript printer and share it as \\<server>\IIISiPS. Everyone who
	attaches to this share to print now has a choice of PostScript or PCL.
	
	Additional query words: laser jet
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
