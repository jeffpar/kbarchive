---
layout: page
title: "Q199238: SMS: Objects Converted During SMS 1.2 Upgrade to SMS 2.0"
permalink: /kb/199/Q199238/
---

## Q199238: SMS: Objects Converted During SMS 1.2 Upgrade to SMS 2.0

{% raw %}

	Article: Q199238
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles indicates which objects are converted and which objects are not
	converted during the upgrade from Systems Management Server version 1.2 to
	Systems Management Server version 2.0.
	
	MORE INFORMATION
	================
	
	Not Converted
	-------------
	
	The following items are not converted:
	
	- Alerts
	
	- Collected Files
	
	- Job Status
	
	- Jobs
	
	- Package Definition Files
	
	- Pending MIF Files
	
	- Queries
	
	- Remote Control Permitted Viewers List
	
	- Site Groups
	
	- SMS Events
	
	- SMS login scripts
	
	- SMS Security Manager settings
	
	- SNA Senders
	
	- Software Inventory
	
	Converted
	---------
	
	The following items are converted:
	
	- Custom architecture data
	
	- Hardware Inventory
	
	- Machine Groups
	
	- Packages
	
	- Programs
	
	- Remote Control Video Driver List
	
	- Senders other than SNA
	
	- SQL Server views and the clients
	
	- Unique SMSID
	
	- Windows NT Event to SNMP trap client configuration
	
	For more information please refer to the Systems Management Server version 2.0
	Administrator's Guide, Chapter 5, "Upgrading from Systems Management Server 1.2
	to Systems Management Server 2.0."
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
