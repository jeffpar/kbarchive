---
layout: page
title: "Q271600: XCON: In Certain Conditions MTA Erroneously Deletes Data Files"
permalink: kb/271/Q271600/
---

## Q271600: XCON: In Certain Conditions MTA Erroneously Deletes Data Files

	Article: Q271600
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, the Exchange Server message transfer agent (MTA)
	may delete files that are greater than Db007fff.dat files.
	
	This occurs when the total count of the number of .dat files in the Mtadata
	folder is greater than 32,767, or when .dat files that are greater than
	Db007fff.dat reference the X.400 application programming interface (XAPI) queues
	(Internet Mail Service, Microsoft Exchange Connector for Lotus cc:Mail [CCMC],
	MS Mail, or Exchange Development Kit [EDK] Connector) or the Work queue (Site
	Connector).
	
	This issue only occurs if the MTA is not shut down properly, or if the Mtacheck
	utility is run manually against a database that was not shut down properly. If
	the MTA is not shut down properly, when the MTA starts, it runs the database
	recovery code and erroneously deletes files greater than Db007fff.dat files.
	
	If the Mtacheck utility is run against a database that was not shut down
	properly, Mtacheck deletes files that are greater than Db007fff.dat file, and
	when the MTA starts, it logs the following events in the Event Viewer
	application event log:
	
	- Event ID: 2171
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	
	  Description:
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 423. Database error code: ODXOINIU - Object does
	  not exist. Object at fault: [DB######.DAT]. Attribute identifier: 86. Value
	  number: 1. Referenced object: 00000000 (00000000 => N/A). Referenced
	  object error 0. [DB Server DISP:ROUTER 8 26] (14)
	
	- Event ID: 2175
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	
	  Description:
	  An MTA database server error was encountered while an attribute length. Called
	  from MTA. Procedure: 429. Database error code: ODXOINIU - Object does not
	  exist. Object at fault: [DB######.DAT]. Attribute identifier: 11. Value
	  number: 1. Referenced object: 00000000 (00000000 => N/A). Referenced
	  object error 0. [DB Server DISP:ROUTER 8 72] (14)
	
	- Event ID: 2188
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	
	  Description:
	  An MTA database server error was encountered while deleting an object. Called
	  from MTA. Procedure 118. Database error code: ODXOINIU - Object does not
	  exist. Object at fault:[DB######.DAT]. [DB Server DISP:ROUTER 8 9]1 118
	  ODXOINIU - Object does not exist 06008C86 DB Server DISP:ROUTER 8] (14)
	
	Note that the object at fault in the preceding events does not exist. the object
	refers to database file that is greater than Db007fff.dat file.
	
	This issue does not occur with X.400 connectors.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: db007fff.dat
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
