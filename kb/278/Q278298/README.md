---
layout: page
title: "Q278298: Clients Are Not Detected When Network Discovery Is Used"
permalink: /kb/278/Q278298/
---

## Q278298: Clients Are Not Detected When Network Discovery Is Used

{% raw %}

	Article: Q278298
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbDiscovery
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS), when you use Network Discovery, it populates
	the IsClient fields in the database with a <Null> value.
	
	For example, when you view an individual computer in the All Systems collection,
	the information for the computer may indicate that the value for
	SMSUniqueIdentifier is Null. However, Smscfg.ini and the system_data table
	indicate that the computer has been assigned a global universal identifier
	(GUID).
	
	Additionally, when you check the membership of collections that are based on
	client computers in the SMS site, the collection does not return any members.
	When you run a query to locate computers that are installed as SMS clients, the
	query does not return any results.
	
	When you double-click Systems Management in Control Panel in the workstation, the
	client may be displayed. However, the SMS site reports that the client does not
	exist. Therefore, installed clients cannot be managed by the SMS site.
	
	CAUSE
	=====
	
	This issue can occur because Network Discovery does not attempt to determine if
	resources that it discovers are clients of the SMS site.
	
	When Network Discovery is configured as the only discovery method in your SMS
	site, computers may install the client components. However, SMS is unaware that
	the clients are present.
	
	RESOLUTION
	==========
	
	To resolve this issue, reenable the Heartbeat Discovery option (which is enabled
	by default) and wait for the specified polling interval to pass. When the
	clients send up new discovery data, the database is updated to reflect the
	correct values.
	
	MORE INFORMATION
	================
	
	SMS provides several different ways to discover potentially manageable
	resources. Network Discovery is one of these methods, and it is used to discover
	both the computer and non-computer resources on the network.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbDiscovery 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
