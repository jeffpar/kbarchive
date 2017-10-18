---
layout: page
title: "Q220937: Installed Third-Party Printer Drivers Not Displayed in Wizard"
permalink: kb/220/Q220937/
---

## Q220937: Installed Third-Party Printer Drivers Not Displayed in Wizard

	Article: Q220937
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a third-party printer driver is installed on Terminal Server, it does not
	appear in the list of available printer drivers when adding additional printers
	based on that driver. Because of this problem, you must click Have Disk, and
	specify the location of the third-party printer driver each time you add a
	printer using that driver.
	
	CAUSE
	=====
	
	When the printer driver is added, the system tries to write the OEMx.inf file to
	the currently logged on user's root drive folder (typically W:\Windows\Inf). If
	the W:\Windows\Inf folder exists, the file will be created there. If the folder
	does not exist, the file will not be created.
	
	In either case, because the file is not copied to the correct location
	(%SystemRoot%\Inf), when the list of available printers is viewed in Add Printer
	Wizard, the installed third-party printer driver will not be displayed.
	
	RESOLUTION
	==========
	
	To work around the problem when installing new printers, perform the following
	steps:
	
	1. Put the system into Install mode by typing "change user /install" (without
	  the quotation marks) at a command prompt.
	
	2. Create a printer using the third-party printer driver, or update a currently
	  installed printer driver with the third-party printer driver.
	
	3. Put the system back into Execute mode by typing "change user /execute"
	  (without the quotation marks) at a command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words: 3rd print lexmark hp wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
