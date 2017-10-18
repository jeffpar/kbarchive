---
layout: page
title: "Q247788: XADM: Internet Mail Service and Info. Store Hang w. Antivirus"
permalink: kb/247/Q247788/
---

## Q247788: XADM: Internet Mail Service and Info. Store Hang w. Antivirus

	Article: Q247788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service and the information store service may stop responding
	(hang). The application event log may list the following events:
	
	  Event ID: 1111
	  Source: MSExchangeIS
	  Type: Error
	  Category: None
	  Description: An error occurred while writing to the database log file.
	  Attempting to stop the Microsoft Exchange Information Store.
	
	  Event ID: 125
	  Source: ESE97
	  Type: Error
	  Description: MSExchangeIS ((82)) Unable to create the log. The drive may be
	  read-only or out of disk space. Error -1032.
	
	  Event ID: 145
	  Source: ESE97
	  Type: Error
	  Category: General
	  Description: MSExchangeIS ((82)) The database engine could not access the file
	  called path\EDBTEMP.LOG.
	
	CAUSE
	=====
	
	This behavior can occur if an antivirus program is installed on the Exchange
	Server computer and is set to scan the folders that contain the Exchange Server
	databases and log files.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the antivirus software so that is does not
	perform scheduled or real-time scans on files and folders that are specific to
	Exchange Server.
	
	MORE INFORMATION
	================
	
	For additional information about recommendations for antivirus programs on
	Exchange Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q245822 XGEN: Recommendations for Troubleshooting an Exchange Server Computer
	  with Antivirus Installed
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
