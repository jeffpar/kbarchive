---
layout: page
title: "Q216159: Dr Watson Starting TS License Service with Error 3221487623"
permalink: /kb/216/Q216159/
---

## Q216159: Dr Watson Starting TS License Service with Error 3221487623

	Article: Q216159
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In the Event Log, you observe that Terminal Server licensing fails to start with
	the following errors:
	
	  Source: Service Control Manager
	  Event ID: 7024
	  The Terminal Server Licensing service terminated with service-specific error
	  3221487623.
	
	  Source: TermServLicensing
	  Event ID: 7
	  Can't connect to database.
	
	CAUSE
	=====
	
	There are three probable causes for this issue:
	
	- Incorrect versions of ODBC components.
	- Incorrect ODBC System DSN entries.
	- Corrupted Hydra MDB.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to check several items in the ODBC Data Source
	Administrator.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Check the ODBC versions: note that the version of ODBC that shipped with
	  Windows Terminal Server is older than the version that is in MDAC 2.0, but
	  carries a newer date. The minimum version supported on Terminal Server can be
	  any of the following:
	
	   - From the default Terminal Server version 3.51.102900, dated 5/31/98.
	   - From MDAC2.0 version 3.51.171300, dated 5/14/98.
	   - From later versions.
	
	  If any of the components are NOT the same version or ANY of the 32-bit
	  components are not the same version, the entire ODBC must be completely
	  reinstalled.
	
	  For additional information about installing ODBC, please see the following
	  article(s) in the Microsoft Knowledge Base:
	
	  Q216149 How to Install ODBC or MDAC on Terminal Server
	
	2. Check the following entries in the System DSN for Hydra License by opening
	  the Configure box. The correct entry is "Hydra License" with no trailing
	  spaces or carriage returns. Ensure that the database entry points to the
	  correct location of the Hydra.mdb. System Database is none. Open Set Advanced
	  Options and check the Default Authorization for the entry "sa" (lowercase,
	  short for system authority).
	
	  If any of this information is different, the best thing is NOT to modify this
	  entry but to create a new entry. Start from the System DSN panel and click
	  ADD. Select the driver for Microsoft Access, click finish, and then enter all
	  of the information outlined above.
	
	3. To resolve a corrupted Hydra MDB, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q190233 Terminal Licensing Failed with the Specific Error 322148762
	
	4. Change the entries for the ODBC driver and DBQ:
	
	  a. Locate the following keys in the registry:
	
	  HKLM\Software\ODBC\ODBC.ini\Hydra License\DBQ
	  HKLM\Software\ODBC\ODBC.ini\Hydra License\Driver
	
	  b. Change the drive letters in each entry.
	
	  c. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
