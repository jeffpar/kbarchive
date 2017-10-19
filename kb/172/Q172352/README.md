---
layout: page
title: "Q172352: Windows 95 PostScript Driver May Not Download Properly"
permalink: /kb/172/Q172352/
---

## Q172352: Windows 95 PostScript Driver May Not Download Properly

	Article: Q172352
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you download a Windows 95 PostScript driver from a server running Windows
	NT through point and print, printing options for the printer may not match what
	the printer should have.
	
	Another symptom is that 600 dpi resolution printers are only printing at 300 dpi
	resolution.
	
	Windows 95 printer driver details may show that the wrong PPD is in use. The
	wrong driver in use is Apple380.ppd.
	
	If the printer driver is loaded without the use of point and print (the printer
	driver is loaded by means of a compact disc, disks, or a share point), the
	proper PPD file is used.
	
	CAUSE
	=====
	
	When Windows 95 downloads a PostScript printer driver from the server running
	Windows NT, it parses the .spd file for the printer capabilities and creates a
	.ppd from the .spd. Under certain conditions, the parse determines that a
	default .ppd must be used instead. That default .ppd is the Apple380.ppd.
	
	Differences between the Windows NT Ntprint.inf and the Windows 95 Printer.inf
	files can also cause this symptom to occur.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods below:
	
	Method 1
	--------
	
	Load the printer driver without the use of point and print. If the driver needs
	to be distributed to many workstations, place all of the necessary files in a
	shared network directory.
	
	For more information about how to remove the Windows 95 driver from the Windows
	NT print server, please see the following Microsoft Knowledge Base article:
	
	  Q162258 How to Remove Cross-Platform Printer Drivers on Windows NT
	
	Method 2
	--------
	
	Use the following steps to install the PostScript driver on the server running
	Windows NT:
	
	1. In Explorer, navigate to the %SystemRoot%\INF folder, and then copy the
	  Ntprint.inf file to another location or name.
	
	  NOTE: The INF directory is hidden by default.
	
	2. Edit the Ntprint.inf file in Notepad and remove everything between the
	  printer name and the last quote. For example:
	
	     original line: "QMS-PS 2200 v51.0 or 52.3" = Q2200523.PPD
	     change to:     "QMS-PS 2200 "              = Q2200523.PPD
	
	3. Install the printer on the server running Windows NT 4.0 and share it with
	  Windows 95 alternate drivers.
	
	4. Connect to the printer from the Windows 95 client.
	
	After the printer is installed, right-click the printer properties and verify
	that the correct driver is associated with the printer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	During the installation of the networked printer, the Windows 95 workstation is
	provided information on the files that should be copied for the printer being
	connected to, and then the file copy takes place. Next, the Windows 95
	workstation finds the driver name installed by the host computer, in this case
	the server running Windows NT 4.0, and tries to match the driver to install.
	Because the Windows NT host driver name is in the form of <printer> <ps
	version> and Windows 95 sometimes only uses <printer>, there may not be
	an exact match and it will default to the generic postscript driver
	(Apple380.spd).
	
	Additional query words: cross platform win95 win95x point
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
