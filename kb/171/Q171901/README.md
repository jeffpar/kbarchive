---
layout: page
title: "Q171901: SMS: SNMP Filter Event Source Values Cannot Be Removed"
permalink: kb/171/Q171901/
---

## Q171901: SMS: SNMP Filter Event Source Values Cannot Be Removed

	Article: Q171901
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying the SNMP Trap Filter Properties, if a value is entered in the NT
	Event Source field, it cannot be removed. If you attempt to delete the entry,
	the value reappears when you reopen the properties. This behavior also occurs if
	a value is placed in the OID field. The new OID value appears in the NT Event
	Source Field.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the trap filter and then re-create it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
