---
layout: page
title: "Q190813: XADM: Information Store Fails to Start"
permalink: /kb/190/Q190813/
---

## Q190813: XADM: Information Store Fails to Start

{% raw %}

	Article: Q190813
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store does not start and the following Event IDs are logged in
	the application Log:
	
	  EventID 145
	  SOURCE: ESE97
	  TYPE: ERROR
	  CATEGORY: GENERAL
	  MSExchangeIS ((291) ) The database engine could not access the file
	  called C:\exchsrvr\MDBDATA\edb.log.
	
	  Event ID 1120
	  SOURCE: MSEXCHANGEIS
	  TYPE: ERROR
	  CATEGORY: GENERAL
	  Error 0xfffffbf8 initializing the Microsoft Exchange Server Information
	  Store database.
	
	  Event ID 5000
	  SOURCE: MSEXCHANGEIS
	  TYPE: ERROR
	  CATEGORY: GENERAL
	  Unable to initialize the Microsoft Exchange Information Store service.
	  Error 0xfffffbf8.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server computer was not shut down gracefully and/or the
	operating system experienced a device error that forced the computer to hang.
	
	WORKAROUND
	==========
	
	Restore from backup.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
