---
layout: page
title: "Q247852: SMS: SQL Monitor Service Does Not Create Notification Files"
permalink: /kb/247/Q247852/
---

## Q247852: SMS: SQL Monitor Service Does Not Create Notification Files

	Article: Q247852
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain configuration changes that you specify in the Systems Management Server
	(SMS) Administrator console may take longer to become effective than you expect.
	For example, when you create a new collection, the collection members may not
	show up immediately as you expect.
	
	When this behavior occurs, the Smsdbmon.log file records the following
	information and stops logging:
	
	  CTriggerManager::RouteFiles - waiting on named pipe...
	  $$<SMS_SQL_MONITOR>
	  <Thu Oct 21 15:12:43.046 1999 Eastern Daylight Time><thread=282
	  (0x11A)>
	
	CAUSE
	=====
	
	This behavior can occur if the SMS extended stored procedure on the SQL server
	does not connect to the SQL Monitor service.
	
	WORKAROUND
	==========
	
	Make sure that the SMS_SQL_MONITOR service is running and that the MSSQLServer
	service runs under the system account or with an account that has administrative
	rights on the SQL server.
	
	MORE INFORMATION
	================
	
	The Trigger Manager thread of the SMS SQL Monitor service component is
	responsible for notifying other SMS components of database changes. This service
	allows for an almost instantaneous response to create, update, or delete
	requests, or to any of a number of other SMS processes such as collection
	updates. To inform Trigger Manager of specific database events, the
	xp_SMS_NOTIFICATION SMS extended stored procedure is run by SQL triggers
	installed by SMS. This extended stored procedure connects to the named pipe that
	Trigger Manager created. If it cannot connect to the named pipe, SQL Monitor is
	not informed of database changes and does not create notification files for the
	various SMS threads.
	
	The SMS extended stored procedure runs in the context of the MSSQLServer service.
	If the service does not have administrative rights on the SQL server,
	xp_SMS_NOTIFICATION does not connect to the named pipe.
	
	Additional query words: prodsms smsxp.dll smsxp70.dll
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
