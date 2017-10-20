---
layout: page
title: "Q185918: SMS: &quot;SNMP.exe Entry Point Not Found&quot; Error Message"
permalink: /kb/185/Q185918/
---

## Q185918: SMS: &quot;SNMP.exe Entry Point Not Found&quot; Error Message

{% raw %}

	Article: Q185918
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Event to Trap Translator (in Systems Management Server) uses the
	Windows NT Simple Network Management Protocol (SNMP) agent to facilitate the
	task of forwarding Windows NT Events by means of SNMP to a Systems Management
	Server Site Server or other SNMP Management Console.
	
	If you add the SNMP service after applying Windows NT 4.0 Service Pack 3, you may
	receive the following error:
	
	  SNMP.EXE Entry Point Not Found
	  The procedure entry point SnmpSvcGetEnterpriseOID could not be
	  located in the dynamic link library snmpapi.dll
	
	To eliminate the error, reapply Microsoft Windows NT 4.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
