---
layout: page
title: "Q174936: SMS: Event to Trap Translator Cannot Send Traps &gt; 4,096 Bytes"
permalink: /kb/174/Q174936/
---

## Q174936: SMS: Event to Trap Translator Cannot Send Traps &gt; 4,096 Bytes

	Article: Q174936
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbsms120
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNMP Trap Sender fails to send a trap when the size of the event log entry to be
	translated is greater than 4,096 bytes in total. In addition, the following
	error is logged in the Windows NT System Event Log:
	
	  Event ID: 3006
	  Source: SNMPELEA
	  Description: Error :- Error reading log event record. Handle specified is
	  1344648. Return code from Read Event Log is 122.
	
	MORE INFORMATION
	================
	
	Although the Event to Trap Translator UI allows you to specify a trap length
	greater than 4,096 bytes, this increased value is never used.
	
	For additional information about the Event ID 3006 error, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q165267 SMS: Snmpelea 3006 Events Rapidly Fill the Application Log
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
