---
layout: page
title: "Q140985: BUG: Service Pack 3 Causes Updated Epson Stylus to Fail"
permalink: /kb/140/Q140985/
---

## Q140985: BUG: Service Pack 3 Causes Updated Epson Stylus to Fail

	Article: Q140985
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbDriver
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can experience heap corruption when using Windows NT 3.51 Service Pack 3 and
	the updated Epson Stylus driver that supports 720 DPI printing. Typically the
	system will slow down and eventually lock up during print operations.
	
	CAUSE
	=====
	
	The cause of the problem is related to Service Pack 3 installing an earlier
	version of the following files:
	
	RASDD.DLL
	RASDDUI.CNT
	RASDDUI.DLL
	
	RESOLUTION
	==========
	
	Steps to Resolve Problem
	------------------------
	
	1. Download the updated Epson Stylus drivers from the following locations:
	
	  FTP:
	
	  Bussys\winnt\winnt-public\drivers\3.51\Epson\<Platform>
	
	2. Remove the existing Printer. (From Printmanager, select the Epson Stylus
	  driver and choose "Remove Printer" from the Printer Menu.)
	
	3. Expand the newly downloaded files into a separate directory, and do the
	  following:
	
	  a. In Control Panel, choose the Print Manager icon. The Print Manager opens.
	     From the Printer menu, choose Create Printer. The Create Printer dialog
	     box appears.
	
	  b. Expand the Driver drop-down list by clicking its down arrow. Scroll to the
	     bottom of the list and select Other. The Install Driver dialog box will
	     appear.
	
	  c. Either insert the disk you made during the downloading procedure, or type
	     the path of the directory where you downloaded the driver. Then choose the
	     OK button. A Select Driver dialog box appears, listing one or more
	     printers.
	
	  d. In the Printer Driver list, select the printer you want, and choose the OK
	     button. Windows NT copies the needed file(s) and returns you to the Create
	     Printer dialog box.
	
	  e. Fill in the rest of the information fields, and choose OK.
	
	  f. For instructions on how to configure your printer, see the section for the
	     Print Manager in the "Microsoft Windows NT System Guide."
	
	Alternative Procedure
	---------------------
	
	1. Remove the Printer from PrintManager. Locate the following Directory in
	  FileManager:
	
	  <NTDIR>\system32\spool\drivers\<Platform Specific>\1
	
	2. Rename the following files to *.OLD
	
	  RASDD.DLL
	  RASDDUI.DLL
	
	3. Run PrintManager again and re-install the Epson Stylus driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Epsom hang slow lock freeze driver print
	
	======================================================================
	Keywords          : kbDriver 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
