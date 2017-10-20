---
layout: page
title: "Q274285: XCON: Error Message Occurs When Starting MTA"
permalink: /kb/274/Q274285/
---

## Q274285: XCON: Error Message Occurs When Starting MTA

{% raw %}

	Article: Q274285
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Message Transfer Agent (MTA), you may
	receive the following error message:
	
	  Could not start the Microsoft Exchange Message Transfer Agent service on
	  \\<Servername>.
	
	  Error 2140: An internal Windows NT error occurred
	
	The following events may be reported in the application event log:
	
	  Event ID: 3080
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	  Description:
	  A fatal MTA database server error was encountered. [XAPI OPERATOR 41 26] (16)
	
	  Event ID: 2171
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	  Description:
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 423. Database error code: ODXOINIU - Object does
	  not exist. Object at fault: [DB######.DAT]. Attribute identifier: 86. Value
	  number: 1. Referenced object: 00000000 (00000000 => N/A). Referenced
	  object error 0. [DB Server DISP:ROUTER 23 26] (14)
	
	  Event ID:2155
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	  Description:
	  An MTA database server error was encountered. Failed to read attribute
	  information (AAT) for object 01000068. Database server error code: 2127. [DB
	  Server OPERATOR 22 29] (14)
	
	  Event ID:2127
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Operating System
	  Description:
	  An MTA database server error was encountered. Error accessing object attribute
	  (AAT) on a Read/Write operation. Filename:
	  e:\exchsrvr\mtadata\.\DB000068.DAT. File operation: 0. Operating system
	  error: 2127. Referenced object: OPEN (00000000 => N/A). Referenced object
	  error 00000000. [0 DB Server OPERATOR 22] (14)
	
	CAUSE
	=====
	
	This issue can occur if one or more .dat files from the \Exchsrvr\MTAData (MTA
	Database) directory are missing when you attempt to start the MTA.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the missing .dat files if they have been removed,
	and then run the Mtacheck utility.
	
	For additional information about the Mtacheck utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q163326 XCON: How and Why to Run Mtacheck
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
