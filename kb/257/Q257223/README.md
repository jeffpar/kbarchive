---
layout: page
title: "Q257223: SMS: SMS Clients Do Not Release Netware Licenses"
permalink: /kb/257/Q257223/
---

## Q257223: SMS: SMS Clients Do Not Release Netware Licenses

{% raw %}

	Article: Q257223
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbSecurity kbsms200 kbsms200bug kbOSNovell
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) clients may use NetWare licenses and not release
	them. In this situation, the advanced power management (APM) component
	establishes this connection and the Network Abstraction Layer (NAL) cannot
	release the connection properly. You can use the SMSCCMBootAcct account for this
	connection.
	
	CAUSE
	=====
	
	If an NAL process opens a connection to the computer with a network resource,
	APM may use the existing connection. When NAL is finished with the connection,
	it drops the arbiter counters in the registry:
	
	  HKLM\Software\Microsoft\NAL\Client\COnnections\SMSCCMBootAcct\Deviceless
	
	This subkey may be named "Resource1." This key should contain three values:
	
	- The NAL path to the resource
	- The persistence count
	- The reference count
	
	When this happens, the connection is supposed to be released and the resource key
	deleted, however, because APM is using this connection, NAL cannot release it.
	The connection is left behind and may be sitting in an idle state for several
	hours or longer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbClient kbSecurity kbsms200 kbsms200bug kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
