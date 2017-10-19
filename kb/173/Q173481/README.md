---
layout: page
title: "Q173481: XADM: PerfWiz Reports Multiple Errors when Moving Files"
permalink: /kb/173/Q173481/
---

## Q173481: XADM: PerfWiz Reports Multiple Errors when Moving Files

	Article: Q173481
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you run the Microsoft Exchange Performance Optimizer (PerfWiz) and attempt
	to move databases to a drive that does not have adequate disk space, PerfWiz
	will generate an error for every database database that it attempts to move. The
	following error will be displayed:
	
	  A file or group of files could not be moved to the destination disk X:
	  because it is full - [800FF329]
	
	and this will be followed by error messages similar to the following, one for
	each database that it attempts to move:
	
	  The destination directory X:\exchsrvr\ did not exist and could not be
	  created - [800FF333]
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	Part of the functionality of PerfWiz is to analyze the disk subsystem on the
	Microsoft Exchange Server. During this process, you can intervene and select the
	drives that the Databases will be moved to. Part of the functionality of PerfWiz
	is to verify that on each of the hard disk drivess that are selected, there is
	adequate disk space before it moves the databases files. If PerWiz detects
	inadequate disk space, it will generate one error per database being moved. This
	functionality may appear to be excessive, but it is designed to cover the cases
	where these databases are being moved to different drives and, therefore, all
	drives need to be checked separately.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
