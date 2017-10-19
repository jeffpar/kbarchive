---
layout: page
title: "Q156629: SMS: SNMP Site Property Changes Are Not Saved"
permalink: /kb/156/Q156629/
---

## Q156629: SMS: SNMP Site Property Changes Are Not Saved

	Article: Q156629
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan kbsmsAdmin smsadmin smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change the Enterprise section of the SNMP Trap Filter Properties from
	"NT Event Source" to "OID", changes made to the SNMP Site Properties are
	discarded. However, making the opposite change (changing the Enterprise section
	from "OID" to "NT Event Source") works fine; the changes are saved in this case.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Click Site Properties, then SNMP Traps, and then click Proposed Properties.
	
	2. Select the entry you want to change from "NT Event Source" to "OID."
	
	3. Click Delete.
	
	4. Re-create the entry, using the "OID" option instead of "NT Event Source."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSCMan kbsmsAdmin smsadmin smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
