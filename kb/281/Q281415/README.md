---
layout: page
title: "Q281415: Systems Management Server Performance Monitor Objects Missing"
permalink: /kb/281/Q281415/
---

## Q281415: Systems Management Server Performance Monitor Objects Missing

{% raw %}

	Article: Q281415
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbConfig kbServer kbsms200 kbsms200bug kbsmsUtil kbsms200preSP3
	Last Modified: 06-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 Performance Monitor objects may be missing
	after you perform one of the following tasks:
	
	- A site reset
	
	- You apply SMS 2.0 Service Pack 2 (SP2)
	
	- You change SQL or SMS account passwords with the Administrator tool
	
	
	The missing performance objects may include SMS Discovery Data Manager, SMS
	Inventory Data Loader, and SMS Software Inventory Processor. The remaining
	objects are listed but may provide inaccurate data.
	
	
	CAUSE
	=====
	
	As SMS performance objects are reinstalled, some objects' indices change.
	Programs that cache performance object indices cannot view performance objects
	until the cache is refreshed with the new indices.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Stop the following SMS services on the site server:
	
	  SMS_SITE_COMPONENT_MANAGER
	  SMS_EXECUTIVE
	  SMS_SQL_MONITOR
	  SMS_NT_LOGON_DISCOVERY_AGENT
	  Windows Management
	  SMS_LICENSE_SERVER
	
	2. Stop any local or remote Performance Monitor tools that are accessing
	  performance data on the site server. When all performance objects are
	  released, the full eight SMS performance objects will be displayed.
	
	3. Restart the SMS services by starting the SMS_SITE_COMPONENT_MANAGER service.
	  This restarts all services automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbServer kbsms200 kbsms200bug kbsmsUtil kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
