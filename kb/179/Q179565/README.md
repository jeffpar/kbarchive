---
layout: page
title: "Q179565: SMS: Unable To Generate Traps For Dr. Watson Events"
permalink: kb/179/Q179565/
---

## Q179565: SMS: Unable To Generate Traps For Dr. Watson Events

	Article: Q179565
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server SNMP Trap Translator to monitor Dr.
	Watson traps, the Windows NT Application Event Log may fill up with error
	message 3006 events. This causes the Windows NT Application Event Log to fill up
	and overwrite older data.
	
	CAUSE
	=====
	
	An application on the server stops responding, which causes a Dr. Watson message
	to be written to the event log. The data portion of this Dr. Watson Event Log
	message is very large. The SNMP Event Log Extension Agent (SNMPELEA) tries to
	read the message to determine whether the message is something that it should be
	trapping on. Because SNMPELEA does not provide a buffer large enough to hold the
	Dr. Watson Event Log message, it generates an error 3006.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms crash crashes hang hangs SNMP SNMPELEA
	
	======================================================================
	Keywords          : kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
