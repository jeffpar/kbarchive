---
layout: page
title: "Q184694: SMS: Events Prior to Initialization of SNMP Agent Not Translated"
permalink: /kb/184/Q184694/
---

## Q184694: SMS: Events Prior to Initialization of SNMP Agent Not Translated

{% raw %}

	Article: Q184694
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the period between the Windows NT start up and the SNMP trap service
	starting, there are no SNMP events being sent out to the SNMP receiver.
	
	CAUSE
	=====
	
	The Event to Trap Translator, SNMPELEA, was not coded to perform that task.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	  03/06/97  03:10 PM         23K    SNMPELMG.DLL (Intel)
	  03/02/98  08:06 PM        110K    SNMPELEA.DLL (Intel)
	
	  03/06/97  03:10 PM         23K    SNMPELMG.DLL (Intel)
	  03/02/98  08:05 PM        198K    SNMPELEA.DLL (Intel)
	
	Additional query words: prodsms SNMP
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
