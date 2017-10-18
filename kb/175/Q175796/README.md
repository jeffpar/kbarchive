---
layout: page
title: "Q175796: HP LaserJet 5Si MX May Repeatedly Print the First Page"
permalink: kb/175/Q175796/
---

## Q175796: HP LaserJet 5Si MX May Repeatedly Print the First Page

	Article: Q175796
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Hewlett-Packard (HP) LaserJet 5Si MX printer, the printer
	may repeatedly print the first page.
	
	CAUSE
	=====
	
	This behavior can occur when you install Windows NT 4.0 Service Pack 3 on a
	computer with the HP LaserJet 5Si MX printer driver installed. Service Pack 3
	overwrites the Hp5simui.dll and Hp5sim.dll printer driver files.
	
	RESOLUTION
	==========
	
	To resolve the issue, uninstall the printer driver, rename the Hp5simui.dll and
	Hp5sim.dll files, and then download and install the Nt4hp2.exe file. To do so,
	follow these steps:
	
	Uninstall the Driver
	--------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Printers.
	
	3. Click the HP LaserJet 5Si MX printer, and then click Delete on the File menu.
	
	4. Click Yes.
	
	5. On the File menu, click Close.
	
	Rename and Reinstall the Printer Driver
	---------------------------------------
	
	1. Rename the Hp5simui.dll and Hp5sim.dll files located in the following folder,
	  where <drive> is the drive on which the Windows NT folder is located,
	  and <windows> is the name of the folder in which Windows NT is
	  installed:
	
	  <drive>:\<windows>\system32\spool\drivers\w32x86\2
	
	  For example:
	
	  c:\winnt\system32\spool\drivers\w32x86\2
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming" (without quotation marks), and then double-click
	  the "Renaming files" topic.
	
	  NOTE: If the printer is administered by a Windows NT server, the files on the
	  server should also be replaced.
	
	2. The following file is available for download from the Microsoft Download
	  Center:
	
	  DownloadDownload Nt4hp2.exe now
	
	  For additional information about how to download Microsoft Support files,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	  Microsoft used the most current virus detection software available on the date
	  of posting to scan this file for viruses. Once posted, the file is housed on
	  secure servers that prevent any unauthorized changes to the file.
	
	  For information about obtaining updated printer drivers for Windows NT, see
	  the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID : Q161361
	  TITLE : How to Obtain Updated Printer Drivers for Windows NT
	
	MORE INFORMATION
	================
	
	For information about other issues with the HP LaserJet 5Si printer, see the
	following articles in the Microsoft Knowledge Base:
	
	ARTICLE-ID : Q174592
	TITLE : Err Msg: This Printer Cannot Be Installed Now...
	
	ARTICLE-ID : Q148169
	TITLE : HP LaserJet 5Si Printer Property Changes Affect All Programs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
