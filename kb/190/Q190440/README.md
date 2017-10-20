---
layout: page
title: "Q190440: XADM: Service Specific Error 4294966746 Starting Store"
permalink: /kb/190/Q190440/
---

## Q190440: XADM: Service Specific Error 4294966746 Starting Store

{% raw %}

	Article: Q190440
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server information store, the service may
	stop with a service-specific error 4294966746.
	
	The application event log has the following entries:
	
	  Event ID: 108
	  Source: ESE97
	  Type: Information
	  Category: Logging/Recovery
	  Description:
	  MSExchangeIS ((232) ) The database engine is initiating recovery steps.
	
	  Event ID: 132
	  Source: ESE97
	  Type: Warning
	  Category: Logging/Recovery
	  Description:
	  MSExchangeIS ((357) ) Unable to read header of database
	  E:\exchsrvr\MDBDATA\PRIV.EDB. Error -1811. Database may have been moved.
	  Recovery will continue with the database in the new location.
	
	  Event ID: 132
	  Source: ESE97
	  Type: Warning
	  Category: Logging/Recovery
	  Description:
	  MSExchangeIS ((232) ) Unable to read header of database
	  E:\exchsrvr\MDBDATA\PUB.EDB. Error -1811. Database may have been moved.
	  Recovery will continue with the database in the new location.
	
	CAUSE
	=====
	
	The database files are not in the location specified in the transaction log
	files. The transaction log files have the location of the corresponding database
	files hard-coded in them. If the database files are not found in this location,
	the above error message is generated.
	
	
	WORKAROUND
	==========
	
	To recover from this error, follow the steps below:
	
	1. On each drive, under the EXCHSRVR\MDBDATA directory, create a directory
	  called BACKUP.
	
	2. On each drive, move all files from the EXCHSRVR\MDBDATA directory to the
	  BACKUP directory.
	
	  The MDBDATA directories should now be empty.
	
	3. Start the information store.
	
	4. Using the Exchange Administrator program, move the location of the
	  information store database files to the location specified in the above event
	  log entries. Record the location of the log files and the Private and Public
	  database files.
	
	  NOTE: You can also use the Performance Optimizer to move the files, but this
	  method takes longer.
	
	5. Stop the information store service.
	
	6. Move out the files in the MDBDATA directories on each drive.
	
	7. Move the backed-up files (in the MDBDATA\BACKUP directories) to the
	  directories noted in Step 4.
	
	8. Start the information store service.
	
	9. If the service returns an error 1011, run ISINTEG -patch.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
