---
layout: page
title: "Q265887: SMS 1.2 Remote Control Agent May Not Start with NIC Teaming"
permalink: /kb/265/Q265887/
---

## Q265887: SMS 1.2 Remote Control Agent May Not Start with NIC Teaming

{% raw %}

	Article: Q265887
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbClient _IK964 kbHelpDesk kbRemoteProg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) 1.2 Remote Control Agent service
	(Wuser32.exe) may not start on Microsoft Windows NT-based clients and may
	generate the following error messages if the Compaq NIC Teaming feature is
	enabled:
	
	  Remote Control Agent: Failed to initialize the network.
	
	  Could not start the SMS Remote Control Agent service on \\<Servername>
	  Error 2186: The service is not responding to the control function.
	
	  Could not start the SMS Remote Control Agent service on \\<Servername>
	  Error 2140: An internal Windows NT error occurred.
	
	  Event ID 7022: SMS Remote Control Server Agent hung on starting
	
	CAUSE
	=====
	
	This behavior can occur if LANA number 000 on the NetBIOS interface is bound to
	one of the network adapters that is included in the NIC team (instead of being
	bound to the NIC teaming software).
	
	WORKAROUND
	==========
	
	LANA number 000 on the NetBIOS interface must be bound to the teaming software,
	not to an individual network adapter.
	
	The NetBIOS configuration for Windows NT 4.0 should be similar to the following
	sample configuration:
	
	  LANA number   Network route
	  ----------------------------------------
	  000           NetBT -> CPQANC -> CPQANC3
	  001           NetBT -> N100 -> N1001
	  002           NetBT -> N100 -> N1002
	
	Note that the teaming software is bound to LANA 000.
	
	To view or modify this configuration, right-click Network Neighborhood on the
	desktop, click Properties, click the Services tab, click NetBIOS Interface, and
	then click Properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	This problem does not occur in Systems Management Server version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient _IK964 kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
