---
layout: page
title: "Q193929: XFOR: How to Upload LDE SQL Database to Microsoft"
permalink: /kb/193/Q193929/
---

## Q193929: XFOR: How to Upload LDE SQL Database to Microsoft

	Article: Q193929
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to send the SQL database used by version 3.2 of
	LinkAge Directory Exchange (LDE) to a Microsoft support professional.
	
	MORE INFORMATION
	================
	
	There are times when it may become necessary to send a copy of the LinkAge LDE
	SQL database into Microsoft so a support professional can look at it. To save
	the SQL database with information to allow it to be reloaded for
	troubleshooting, follow these steps:
	
	1. Using the SQL Enterprise Manager, set up a disk-based backup device called
	  LDEDump. This is accomplished by opening the property tree for the LDE SQL
	  server in the SQL Enterprise Manager. Under the property tree, right-click on
	  the folder called Backup Devices. Select "New Backup Device."
	
	2. Using ISQL/w under the Query window, type:
	
	  sp_helpdb lsdxmmd
	
	  And run this by clicking Query, then Execute from the menu bar. This will
	  return the database properties for Lsdxmmd. Save the results into a .rpt file
	  called LDEDump.RPT by selecting Save As on the File menu.
	
	3. Using ISQL/w under the Query window, type:
	
	  dump database lsdxmmd to LDEDump
	
	  And run this by clicking Query, then Execute from the menu bar. This will dump
	  the contents of the Lsdxmmd database into the file defined by the backup
	  device created earlier, called LDEDump. By default, the backup device will be
	  created in the Mssql\Backup directory with a .dat file extension.
	
	4. Compress the file defined by the backup device, LDEDump, and LDEDump.rpt into
	  one ZIP file. The Microsoft support professionals will give you a name for
	  this file and tell you how to upload or mail the file to them.
	
	
	Additional query words: LinkAge LDE Dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbhowto
	
	=============================================================================
	
