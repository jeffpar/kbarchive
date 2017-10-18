---
layout: page
title: "Q136637: Default Printer Form Lost Connecting 3.51 Client to 3.5 Server"
permalink: kb/136/Q136637/
---

## Q136637: Default Printer Form Lost Connecting 3.51 Client to 3.5 Server

	Article: Q136637
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Connect To option in Print Manager to connect from a Windows NT
	3.51 Workstation to a Windows NT 3.5 server, you lose your default form
	settings. Applications such as Notepad or Write do not keep default form
	settings and have to be set manually for every print job.
	
	A Windows NT 3.51 Workstation connecting to a Windows NT 3.51 Server does not
	have this problem.
	
	
	WORKAROUND
	==========
	
	Use one of the following procedures to work around the problem:
	
	- Upgrade the print server to Windows NT 3.51.
	
	  -or-
	
	- Create a local printer that is redirected to the Windows NT 3.5 print server
	  by:
	
	  1. Choose Create Printer from the Printer menu in Print Manager to create a
	     printer locally.
	
	  2. Copy the drivers to the local hard drive.
	
	  3. Choose Properties from the Printer menu.
	
	  4. Choose Other... from the Print To list box.
	
	  5. Select Local Port in the Print Destinations dialog box.
	
	  6. Choose the OK button.
	
	  7. Enter "\\<server_name>\<printer_name>".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: printmon fixed size dimension
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
