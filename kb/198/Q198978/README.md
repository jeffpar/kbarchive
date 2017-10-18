---
layout: page
title: "Q198978: SMS: Trap Receiver Not in SMS 2.0"
permalink: kb/198/Q198978/
---

## Q198978: SMS: Trap Receiver Not in SMS 2.0

	Article: Q198978
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSNMP kbsms200
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The trap receiver thread and functionality is not provided in Systems Management
	Server version 2.0. You can still convert events to traps using the Systems
	Management Server Event to Trap Translator, but you cannot send the traps to a
	Systems Management Server 2.0 site server to store in the Systems Management
	Server 2.0 database.
	
	NOTE: You can continue to send traps to a Systems Management Server 1.2 primary
	site server for storage in the Systems Management Server 1.2 database, and you
	can still send traps to a third-party network management station.
	
	Additional query words: prodsms smssnmp
	
	======================================================================
	Keywords          : kbSNMP kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
