---
layout: page
title: "Q293866: &quot;Access Denied&quot; Err Msg If Windows 9x Prints to Network Printer"
permalink: /kb/293/Q293866/
---

## Q293866: &quot;Access Denied&quot; Err Msg If Windows 9x Prints to Network Printer

{% raw %}

	Article: Q293866
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a client computer that is running either Microsoft Windows 95,
	Microsoft Windows 98, or Microsoft Windows 98 Second Edition to print to a
	network printer that is installed as part of a Microsoft cluster or standalone
	server, you may receive the following error message:
	
	  The test page fails to print. Would you like to view the print trouble
	  shooter for assistance. Access is denied.
	
	CAUSE
	=====
	
	This problem may occur if the McAfee Anti-Virus monitoring software is set to
	perform a real-time scan of files on either the client that is running Windows
	95, Windows 98, or Windows 98 Second Edition or on the server that is running
	Windows NT Server 4.0.
	
	McAfee Anti-Virus scans the spooled files while the print job is being processed.
	Windows cannot close the files because McAfee Anti-Virus has the files open.
	These files are left in the Systemroot\System32\Spool\Printers folder. The
	spooled .shd and .spl files remain in the folder after the print job is
	displayed as completed.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the methods that are described in this
	section.
	
	You Receive the Error Message on the Print Server 
	-------------------------------------------------
	
	If you receive the error message on the print server that is running Windows NT
	Server 4.0:
	
	1. Delete the corrupted files in the Spool folder:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services, click Spooler, and then click Stop.
	
	  c. When you receive the following message, click Yes:
	
	  Are you sure you want to stop the spooler service?
	
	  d. Click Start, point to Programs, and then click Windows NT Explorer.
	
	  e. Expand the Winnt folder, expand the System32 folder, and then expand the
	     Spool folder.
	
	  f. Click the Printers folder, click all of the files that are listed in the
	     right pane, and then click Delete.
	
	  g. When you receive the following message, click Yes:
	
	  Are you sure you want to send these x items to the Recycle Bin?
	
	  h. Repeat steps A and B to restart the Spooler service, and then click Start.
	
	2. Configure the printer that is having the problem to start printing after the
	  last page is spooled:
	
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Right-click the printer that is having the problem, and then click
	     Properties.
	
	  c. Click the Scheduling tab, and then click "Spool print documents so program
	     finishes printing faster".
	
	  d. Click "Start printing after last page is spooled", and then click OK.
	
	3. Configure the printer that is having the problem to print directly to the
	  printer:
	
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Right-click the printer that is having the problem, and then click
	     Properties.
	
	  c. Click the Scheduling tab, click "Print directly to printer", and then
	     click OK.
	
	4. Upgrade the McAfee Anti-Virus program to version 4.5 or later.
	
	5. Verify that the Spool folder has the correct permissions.
	
	For additional information about the correct permissions for the Spool folder,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q137503 Default Windows Spool Directory and Permissions
	
	You Receive the Error Message on the Client 
	-------------------------------------------
	
	If you receive the error message on the client that is running either Windows 95,
	Windows 98, or Windows 98 Second Edition:
	
	1. Delete the corrupted files in the Spool folder:
	
	  a. Click Start, point to Programs, and then click Windows Explorer.
	
	  b. Expand the Windows folder, expand the Spool folder, and then click the
	     Printers folder.
	
	  c. Click all of the files that are listed in the right pane, and then click
	     Delete.
	
	  d. When you receive the following message, click Yes:
	
	  Are you sure you want to send these x items to the Recycle Bin?
	
	2. Configure the printer that is having the problem to start printing after last
	  page is spooled:
	
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Right-click the printer that is having the problem, and then click
	     Properties.
	
	  c. Click the Details tab, click Spool Settings, and then click "Spool print
	     documents so program finishes printing faster".
	
	  d. Click "Start printing after last page is spooled", and then click OK.
	
	3. Configure the printer that is having the problem to print directly to the
	  printer:
	
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Right-click the printer that is having the problem, and then click
	     Properties.
	
	  c. Click the Details tab, click Spool Settings, click "Print directly to
	     printer", and then click OK.
	
	4. Upgrade the McAfee Anti-Virus program to version 4.5 or later.
	
	MORE INFORMATION
	================
	
	If you are using a debugging program to debug the Spooler service, the following
	data may be logged in the debug log:
	
	  LSPL:SplGetPrinter Failure with ERROR_INSUFFICIENT_BUFFER cbBuf is 0 and
	  pcbNeeded is 78.
	
	REFERENCES
	==========
	
	For additional information about related printing problems, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q180892 Err Msg: Error Writing to LPT1: Access Denied
	
	  Q142370 Printing to HP Laserjet Printer Results in Event 2004
	
	  Q179156 Updated TCP/IP Printing Options for Windows NT 4.0 SP3 and Later
	
	  Q188878 Printing to Local Port May Fail with Access Denied Error
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: ZERO byte SPL file
	
	======================================================================
	Keywords          : kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
