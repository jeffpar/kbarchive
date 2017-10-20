---
layout: page
title: "Q142782: XADM: Error -509 Starting Directory, IS, or Dirsync Services"
permalink: /kb/142/Q142782/
---

## Q142782: XADM: Error -509 Starting Directory, IS, or Dirsync Services

{% raw %}

	Article: Q142782
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server version 4.0 Directory service,
	Information Store service, or the Directory Synchronization service, the service
	does not start. The Windows NT Event Log indicates that the service in question
	returned an error code of -509.
	
	CAUSE
	=====
	
	This error is returned by the Exchange Server database engine when it encounters
	a problem replaying log files on startup. Possible reasons for the error are as
	follows:
	
	- Missing Transaction Log Files.
	  When each service starts, it looks for its transaction log files to replay any
	  missing transactions. These log files are by default in the DSADATA, MDBDATA,
	  and DXADATA directories for the Directory, Information Store, and Directory
	  Synchronization services respectively. The location of the log files for each
	  service is configurable through the Exchange Server Performance Wizard.
	
	  While replaying the transactions, if a transaction log file is missing, the
	  above error is returned. For example, suppose the DSADATA directory contains
	  the following transaction log files: EDB.LOG, EDB00001.LOG, EDB00002.LOG,
	  EDB00004.LOG, and EDB00005.LOG. It is missing the EDB00003.LOG file. When the
	  Directory Service starts replaying these logs, it will start with EDB.LOG,
	  then go to EDB00005.LOG and then EDB00004.LOG. When it finds the log file
	  EDB00003.LOG is missing it will abort because it cannot proceed to file
	  EDB00002.LOG without processing EDB00003.LOG.
	
	- One or more logs are inaccessible. The log files are marked as read-only, are
	  hidden, or the Exchange Server service account does not have the necessary
	  access rights.
	
	- Not enough free disk space on the drive containing the databases.
	
	RESOLUTION
	==========
	
	1. When a log file is missing follow the below procedure:
	
	  a. Move all log files created before the missing file out of the log
	     directory (that is, log files with numerically lower names). In the above
	     example, files EDB00002.LOG and EDB00001.LOG should be removed from the
	     directory.
	
	  b. Move the EDBCHK.LOG file out of the log directory.
	
	  c. Restart the services.
	
	2. One or more Log files is inaccessible.
	
	  Check the file permissions and attributes. Make sure that none of the log
	  files is hidden or read-only. The Exchange Service account should have full
	  access to the log files.
	
	3. Lack of free disk space on the drive containing the Exchange databases.
	
	  Free up disk space by deleting files and/or directories.
	
	Additional query words: exserver
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
