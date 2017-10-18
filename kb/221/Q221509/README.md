---
layout: page
title: "Q221509: How to Set Default Autocreated Printer with Terminal Server"
permalink: kb/221/Q221509/
---

## Q221509: How to Set Default Autocreated Printer with Terminal Server

	Article: Q221509
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	NOTE: This article only applies to Windows Terminal Server with Citrix Metaframe applied.
	
	SYMPTOMS
	========
	
	Some workstation local print drivers pose problems for Windows NT Server,
	Terminal Server Edition. If the drivers have not been properly tested on
	Terminal Server, they can cause lockup problems on the server or even blue
	screen error messages.
	
	CAUSE
	=====
	
	The user usually has the ability to install local printers on his or her
	workstation. When the user connects to a Terminal Server session, the local
	printer is autocreated in the Terminal Server session. In very large companies,
	it is hard to control what printers and print drivers the user is loading on his
	or her local workstation.
	
	As an example, the HP4000 print driver has caused problems on some Terminal
	Server installations. The print queue can stop responding (hang) and the jobs
	not print. The HP LaserJet 4 print driver has been shown to be very stable in
	this environment, and can be used as a substitute for the HP4000 print driver.
	To ensure that the HP LaserJet 4 driver is used ,if your user tries to load the
	HP4000 print driver or any other incompatible driver on his or her local
	workstation, there is a work around to set the default printer driver used on
	the Terminal Server.
	
	RESOLUTION
	==========
	
	There is a file on the Terminal server that can be modified to make the
	disparate printer driver names appear to be equal, and this will set a default
	print driver that works properly on the Terminal server.
	
	To make this modification, follow these steps:
	
	1. You need to know ahead of time the exact name of the print driver in question
	  that can potentially be loaded on the client workstation. You can find this
	  out by loading the print driver on a test workstation in local mode, not a
	  Terminal Server session, and then doing the following:
	
	  a. Click Start, click Settings, and then click Printers.
	
	  b. Select the printer that has proven to be a problem and right-click it.
	
	  c. Select Properties and then click the Details tab.
	
	  d. Write down the name of the printer driver. On computers running Windows 95
	     and Windows 98, the driver is listed in the "Print using the following
	     driver" box. On computers running Windows NT, the "Driver" box is on the
	     General tab. The print driver name can vary on the workstation, depending
	     on the operating system. Make sure you have the right driver name for the
	     client workstation that is being used.
	
	     For example, if you see "HP LaserJet 4000 Series PCL 5e", write this name
	     down, paying attention to all punctuation and case sensitivity.
	
	2. On the Terminal Server computer, click Start, click Settings, and then click
	  Printers.
	
	3. Double-click the Add Printer icon, select My Computer, and then click Next.
	
	4. In the Available Ports list box, select LPT1, and then click Next.
	
	5. In the left pane, select the Manufacturer of the printer you have installed
	  on your workstation. In the right pane, scroll to the model of the printer
	  you want the Terminal Server to load as the default driver.
	
	  For example, "HP LaserJet 4". This is the server printer driver name that you
	  want to use as the default printer. Write this name down.
	
	6. Open the Wtsuprn.txt file. This file is located in the %SystemRoot%\System32
	  folder. The file is as follows:
	
	==========================================================================
	; WTSUPRN.TXT 
	;
	; this is a template for wtsuprn.inf -- rename this file to wtsuprn.inf
	;
	; this file provides a mapping for client printers which have a name
	; different from the server printer.  this file is necessary since many
	; printers for Win95 are different from their WinNT equivalent.
	;
	; Note: the driver for the server printer must be installed.  See the
	; WinFrame Concepts and Planning Guide.
	;
	[Identification]
	        OptionType = PRINTER
	[ClientPrinters]
	;
	;     Client Name                                  Server Name
	;          |                                            |
	;          |                                            |
	;         \|/                                          \|/ 
	;"HP LaserJet 4/4M"                          = "HP LaserJet 4"
	;"HP LaserJet 4P/4MP"                        = "HP LaserJet 4P"
	;"HP LaserJet 4 Plus/4M Plus"                = "HP LaserJet 4 Plus"
	;"HP LaserJet 4Si/4Si MX"                    = "HP LaserJet 4Si"
	;"HP LaserJet 4V/4MV"                        = "HP LaserJet 4V"
	;"HP LaserJet 5/5M - Enhanced"               = "HP LaserJet 5"
	;"HP LaserJet 5/5M - Standard"               = "HP LaserJet 5"
	;"HP LaserJet 5/5M PostScript"               = "HP LaserJet 5"
	;"HP LaserJet 5L (PCL)"                      = "HP LaserJet 5L"
	;"HP LaserJet 5P/5MP (HP)"                   = "HP LaserJet 5P"
	==========================================================================
	
	  Use this exact format to enter the previous information that you gathered from
	  the workstation and the server. Leave out the semicolon (;), this is to
	  remark the line out.
	
	  Make sure you type the right driver under the proper column. Client name would
	  be the workstation; server name is the Terminal Server.
	
	  For example:
	
	"HP LaserJet 4000 Series PCL 5e"	     = "HP LaserJet 4"
	
	7. Save this file with a .inf extension and then close the Wtsuprn.txt file.
	  From now on, if you have to add any other printers, add them to the
	  Wtsuprn.inf file.
	
	8. Log off of the Terminal Server computer and log back on. Log on to your
	  client workstation to a Terminal Server session and you should now see your
	  printer autocreated in the Terminal Server session printers folder and be
	  able to print back to your local printer.
	
	Installing a New, Non-Native print driver.
	------------------------------------------
	
	When you need to install a new print driver to your workstation, you will also
	have to install a print driver to the Terminal Server computer. Install the
	printer on the server as a local printer. Upon completion of the printer
	installation, delete the printer icon from the printer folder. The printer
	driver will be installed on the server an when you connect the workstation to
	the Terminal Server, the new printer will be autocreated. If the printer driver
	names are different for the workstation (client) and the server, follow the same
	procedure as above to make them equal.
	
	MORE INFORMATION
	================
	
	This will work for your printing needs. The only drawback is that some of the
	functionality of the replaced printer driver on the server may not work on the
	newer printer. If you have concerns about this, contact the manufacturer of the
	printer.
	
	REFERENCES
	==========
	
	For additional information with regards to Citrix Autocreate features, please
	visit their Solutions Knowledge Base web site at:
	
	Steps Required to Ensure that Client Printers Autocreate Within ICA Sessions;
	Document ID -- CTX681954
	
	http://knowledgebase.citrix.com/cgi-bin/webcgi.exe?New,KB=CitrixKB
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
