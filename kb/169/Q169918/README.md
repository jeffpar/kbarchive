---
layout: page
title: "Q169918: XCON:Event 2152 May Occur During MTA Startup"
permalink: kb/169/Q169918/
---

## Q169918: XCON:Event 2152 May Occur During MTA Startup

	Article: Q169918
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting the Microsoft Exchange Server Message Transfer Agent (MTA), the
	following error message may be displayed:
	
	  Could not start the Microsoft Exchange Message Transfer
	  Agent service on \\servername. Error 2140: An internal
	  Windows NT error occurred.
	
	Also, the following event may be logged in the Application Event Log:
	
	  Event ID: 2152
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  A fatal database error occurred, the database recovery
	  operation was not successful and manual correction will
	  be required. Details can be found in the file:
	  D:\EXCHSRVR\mtadata\.\MTACHECK.OUT\MTACHECK.LOG. Please
	  contact Microsoft Product Support Services.
	  [DB Server MAIN BASE 1 0] (16)
	
	CAUSE
	=====
	
	The MTA is attempting to perform an online MTACHECK during startup, and an
	existing Mtacheck.log file located in the \Exchsrvr\Mtadata\Mtacheck.out
	directory may be corrupt. Additionally, the MTA may fail to start if the
	Mtacheck.log file is marked as read-only. This flag should never be set by the
	MTA itself.
	
	RESOLUTION
	==========
	
	Either move or delete the Mtacheck.log file from the specified directory or
	remove the read-only attribute of the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
