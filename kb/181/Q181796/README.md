---
layout: page
title: "Q181796: XADM: Error -528 When Starting the Information Store"
permalink: /kb/181/Q181796/
---

## Q181796: XADM: Error -528 When Starting the Information Store

{% raw %}

	Article: Q181796
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you try to start the Microsoft Exchange Information Store service, the
	following error occurs:
	
	  The Microsoft Exchange Information Store service returned service
	  specific error 4294966768.
	
	The Windows NT Application Log contains the following entries:
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Error -528 initializing the Microsoft Exchange Server Information Store
	  database.
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store service.
	  Error -528.
	
	CAUSE
	=====
	
	Error -528 corresponds to JET_errMissingLogFile. The above error is received
	when the Edb.log and Edb.chk files are missing from the Exchsrvr\Mdbdata
	directory and there are other .log files in this directory.
	
	WORKAROUND
	==========
	
	To recover from this error, move out all .log files from the Exchsrvr\Mdbdata
	directory and restart the Information Store service.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
