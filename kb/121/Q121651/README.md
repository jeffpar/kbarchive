---
layout: page
title: "Q121651: Extra Page(s) Printing After Print Job on a Novell Network"
permalink: kb/121/Q121651/
---

## Q121651: Extra Page(s) Printing After Print Job on a Novell Network

	Article: Q121651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Novell NetWare printer, one or both of the following
	problems occur:
	
	- An extra page prints at the end of every print job.
	
	- A page with UserID information (a banner) prints before the print job.
	
	WORKAROUND
	==========
	
	To correct these problems, choose one of the methods below.
	
	- Change the printer settings from within Windows using the following steps:
	
	  1. Open Control Panel and then choose the Printers icon.
	
	  2. Choose the Connect button, then choose the Network button.
	
	  3. Select the LPTx printer, then choose the Options button.
	
	  4. Make sure the following printer options are NOT selected:
	
	  Notify
	  Form Feed
	  Enable Tabs
	  Enable Timeout
	  Enable Banner
	
	  5. Choose the OK button.
	
	  6. (Optional) To maintain these settings every time Windows is started,
	     select the Permanent option in the Network Printer Connections box.
	
	     NOTE: If you select the Permanent option, the printer port selected is
	     updated to reflect the selected options every time you start Windows.
	
	  -or-
	
	- Change the printer settings before starting Windows with the steps below.
	
	  At the MS-DOS command prompt, type the following
	
	  capture l=1 nb na ti=0 nff nt l=x
	
	  where x is 1, 2, or 3 for LPT1, LPT2, or LPT3.
	
	  NB = No Banner
	  NA = No Autoendcap
	  TI = 0 (disable time-out--a time-out of 60 is usually enough)
	  NFF = No Form Feed (ejects a blank sheet after every print job)
	  NT = No Tab expansion (expands tabs, garbles graphics)
	
	  -or-
	
	- These changes can be made globally for all users on a server by editing the
	  System Login Script. The System Login Script is changed by running the Novell
	  NetWare SYSCON utility.
	
	MORE INFORMATION
	================
	
	For additional information about the Capture command, the SYSCON utility, or
	other Novell NetWare printer settings, refer to your Novell NetWare manuals or
	your system administrator.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q63357 Debugging NetWare Printing Problems in Windows
	
	
	Additional query words: 3.10 extra sheet net
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
