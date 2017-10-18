---
layout: page
title: "Q190233: Terminal Licensing Failed with the Specific Error 3221487623"
permalink: kb/190/Q190233/
---

## Q190233: Terminal Licensing Failed with the Specific Error 3221487623

	Article: Q190233
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
	
	Terminal Server licensing fails to start with the following errors:
	
	  Source: Service Control Manager Event ID: 7024 The Terminal Server Licensing
	  service terminated with service-specific error 3221487623.
	
	  Source: TermServLicensing Event ID: 7 Can't connect to database.
	
	CAUSE
	=====
	
	The Terminal Server Licensing service is unable to access hydra.mdb. The file is
	missing or has become corrupt.
	
	RESOLUTION
	==========
	
	Use one of the following steps to resolve this problem:
	
	1. Using Windows NT Explorer, go to the directory where Windows Terminal server
	  was installed. Click System32 and then click Lserver. (the default location
	  is \WTSRV\system32\lserver) Rename hydra.mdb to Hydra.old
	
	2. From the Windows NT Terminal Server CD-ROM, expand hydra.md_ to hydra.mdb
	  into the lserver directory. For example: Expand E:\i386\hydra.md_
	  c:\WTSRV\system32\lserver\hydra.mdb Where "E:" is the CD-ROM drive letter.
	
	3. Start the Terminal Server Licensing service
	
	-or-
	
	Check the following in Control Panel:
	
	1. Click Control Panel and then select ODBC.
	
	2. Click on the System DSN tab.
	
	3. Ensure the Name is "Hydra License". It should be exactly as it is in quotes.
	  Driver should be Microsoft Access Drive (*.mdb). Verify that the driver
	  points to the right database file. License server setup will set this to
	  %systemroot%\system32\lserver\hydra.mdb.
	
	If the name and driver are different, please change to the above.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: license
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
