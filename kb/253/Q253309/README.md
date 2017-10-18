---
layout: page
title: "Q253309: XADM: Directory Service Stops with Internal Error -1811"
permalink: kb/253/Q253309/
---

## Q253309: XADM: Directory Service Stops with Internal Error -1811

	Article: Q253309
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you cannot restart the directory service on Microsoft Exchange Server 5.0
	after it stops for no apparent reason, you may receive an error message citing
	internal error -1811, with ID: 203017d.
	
	The application log of Event Viewer may display the following events:
	
	  Event ID: 1166
	  Source: MSExchangeDS
	  Type: Information
	  Category: Internal Processing
	  Error -1811 has occurred. JET_errFileNotFound. Internal ID 203017d. Contact
	  Microsoft Technical Support for assistance.
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description: The Microsoft Exchange Server database, EDB, could not be
	  initialized and returned error -1811. Unrecoverable error. The directory
	  can't continue.
	
	CAUSE
	=====
	
	This behavior can occur when the directory service cannot find the directory
	databases it requires to start, or when the directory (Dir.edb) is damaged.
	
	RESOLUTION
	==========
	
	To resolve this behavior, change the paths for the directory logs and databases
	if the paths are incorrect. If this does not resolve the behavior, restore the
	directory from tape backup.
	
	1. On the server properties page dialog box, click the Database Paths tab and
	  verify that the paths for directory logs and databases are correct.
	
	2. If the paths for logs and databases are incorrect, run Performance Optimizer
	  (Perfwiz.exe) to change to the recommended paths:
	
	  a. To start Performance Optimizer, click Start on the taskbar, point to
	     Programs, point to Microsoft Exchange, and then click Microsoft Exchange
	     Optimizer.
	
	  b. The initial page of Performance Optimizer indicates that it stops all
	     Exchange Server services. To accept, click Next. If you do not want
	     Performance Optimizer to stop the Exchange Server services, click Cancel
	     to quit Performance Optimizer.
	
	  c. Follow the directions provided by Performance Optimizer until you reach
	     the page that lists the data placement options. Accept the suggested
	     changes by clicking Next, or manually enter the paths and then click Next.
	
	  d. Confirm that the Move Files Automatically check box is selected by
	     default, and then click Next. If you do not want Performance Optimizer to
	     move your files at this time, click to clear the check box, and then click
	     Next.
	
	  e. Continue to click Next until you complete the program, and then click
	     Finish to restart all Exchange Server services. If you select the Do not
	     restart these services check box, Performance Optimizer will not restart
	     any Exchange Server services.
	
	3. If the directory service does not start, restore the directory from a tape
	  backup. If you do not have a valid backup or a copy of the original Dir.edb
	  file, you must perform full disaster recovery by removing and reinstalling
	  Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	For additional information on Performance Optimizer, please see the Microsoft
	Knowledge Base white paper titled "Understanding the Microsoft Exchange Server
	Performance Optimizer." You can find this paper at the following Microsoft Web
	site:
	
	  http://support.microsoft.com/support/Exchange/Content/Whitepapers/PerfOpt.asp?
	
	For additional information on restoring a damaged directory, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q184186 XADM: Recovering Exchange from a Corrupted Directory
	
	  Q177635 XADM: How to Set Up a Disaster Recovery Server for Dir.edb
	
	  Q183266 XADM: How to Restore an Offline Backup of the Directory Service and
	  Information Store
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
