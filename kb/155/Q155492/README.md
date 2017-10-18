---
layout: page
title: "Q155492: XADM: Optimizer Stops if Free Disk Space Is Low"
permalink: kb/155/Q155492/
---

## Q155492: XADM: Optimizer Stops if Free Disk Space Is Low

	Article: Q155492
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Microsoft Exchange Optimizer, it will stop
	responding if the disk space is too low. Microsoft Exchange itself will shut
	down if the free disk space drops below 10 MB.
	
	Scenario:
	
	The Windows NT operating system is on drive C. The Microsoft Exchange Server is
	on drive D with 10 GB of free disk space.
	
	The Microsoft Exchange Server log files have been optimized to reside on drive E,
	which initially had 10 GB of free disk space. Free disk space on drive E drops
	to 4 MB. The issue is how to move the log files from drive E to drive D. The
	correct way is to use the Optimizer, but Optimizer stops responding because of
	the lack of disk space on drive E.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. On drive D, create a hold directory for the MDBDATA or DSADATA log files on
	  drive E. From drive E , move 30 to 40 MB of log files to a hold directory on
	  drive D. This releases enough disk space to run the Optimizer.
	
	2. Run Optimizer and relocate the log files to drive D, but do NOT start the
	  services when you click the Finish button in Optimizer. Instead, select the
	  "Do not start these services" check box.
	
	3. Copy the log files that were previously copied to the hold directory on drive
	  D to the appropriate Microsoft Exchange directory, that is, MDBDATA or
	  DSADATA on drive D.
	
	4. Start the services.
	
	MORE INFORMATION
	================
	
	Using the Microsoft Exchange Optimizer to relocate the Microsoft Exchange Server
	data files ensures all the appropriate files are moved and the correct Microsoft
	Exchange Server entries are recorded in the NT Windows registry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
