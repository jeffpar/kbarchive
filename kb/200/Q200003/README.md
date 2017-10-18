---
layout: page
title: "Q200003: XFOR: Messages Sit in MS Mail Connector Queue and Event ID 2028"
permalink: kb/200/Q200003/
---

## Q200003: XFOR: Messages Sit in MS Mail Connector Queue and Event ID 2028

	Article: Q200003
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages may accumulate in the message transfer agent (MTA) queue (the Microsoft
	Mail Connector queue), and message flow from Exchange Server to the Microsoft
	Mail postoffices may stop. In addition, the following error message may be
	displayed in the application event log in the Windows NT Event Viewer:
	
	  Event ID 2028
	  Source MTA
	
	  A fatal internal MTA error occurred. Contact Microsoft Product Support
	  Services.
	
	  Unable to encode the message tracking event. Event node = Vvt07, Error code =
	  Mandatory node cannot be omitted [BASE XFER-IN 25 88](16)
	
	Mail flow worked previously. This problem may occur after a Microsoft Mail server
	has stopped responding.
	
	RESOLUTION
	==========
	
	To correct this problem, perform the following steps:
	
	1. Search for any error message in the application event log that includes the
	  phrase, "Object at fault."
	
	2. Using File Manager, delete the corresponding .dat file in the MDBData
	  directory. For example, if you find the phrase "Object at fault 0600009B" in
	  the application event log, delete the file Mtadata\DB00009B.dat.
	
	3. At a command prompt, type:
	
	  exchsrvr\bin\ mtacheck /v /f <log file name>.log
	
	  This may also delete more DBxxxxx.dat files.
	
	4. Restart the services; all the services start successfully.
	
	5. Check the Micorosoft Mail Connector queue; all the messages are gone.
	
	MORE INFORMATION
	================
	
	
	For additional information about when to use Mtacheck, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q148284 XCON: When and How to use the Mtacheck Utility
	
	For additional information about the command line syntax of Mtacheck, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q149017 XCON: MTACheck Event IDs and Command Line Syntax
	
	Additional query words: PCMAIL
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
