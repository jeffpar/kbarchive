---
layout: page
title: "Q210364: SMS: SMS Executive Service Stops if SMS Database Transaction Log"
permalink: /kb/210/Q210364/
---

## Q210364: SMS: SMS Executive Service Stops if SMS Database Transaction Log

{% raw %}

	Article: Q210364
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Microsoft Systems Management Server (SMS) version 2.0 database
	transaction log becomes full, the SMS Executive service will stop. If this
	happens, it is possible that the Site Systems Status will not be updated due to
	the database being unwritable. This will cause the information about the
	transaction log space available to be wrong (the information is in the SMS
	Administrator under SMS Status\Site Status\Site System Status\).
	
	MORE INFORMATION
	================
	
	The SMS Service Manager can be used to query the status of the SMS Executive. If
	logging is enabled for the SMS Executive service, the Smsexec.log will reflect
	that the service stopped.
	
	Information on the proper sizing of the SMS Database transaction log and tuning
	SQL Server for SMS 2.0 can be found in Chapter 6 of the SMS Administrator's
	Guide.
	
	Additional query words: prodsms smssql
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
