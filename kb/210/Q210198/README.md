---
layout: page
title: "Q210198: SMS: Triggers Not Being Generated in Specified Inboxes"
permalink: /kb/210/Q210198/
---

## Q210198: SMS: Triggers Not Being Generated in Specified Inboxes

	Article: Q210198
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbServer kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Trigger Manager thread of the Microsoft Systems Management Server (SMS) SQL
	Monitor service is responsible for notifying other SMS components of database
	changes. This service allows an almost instantaneous response to the creation,
	update, or deletion of, or the request for, numerous SMS processes such as
	collection updates.
	
	To inform the Trigger Manager of specific database events, SMS Executive thread
	components add keys to a specific location in the site server?s registry. Each
	trigger responds to an insert, update, or deletion on a specific database table
	and writes to the inbox of the component specified in the registry. The absence
	of these triggers can prevent SMS thread components from acting on proposed
	changes.
	
	If triggers are not generated in the expected inboxes, check the following to
	identify the problem area:
	
	- If the site server computer and SQL Server computer are different computers,
	  verify network connectivity between the two. Also, examine the SMS SQL
	  Monitor status messages or the SMSdbmon.log file to verify that SMS SQL
	  Monitor has read the triggers from the registry and installed them to the
	  appropriate tables in the SMS site database.
	
	- Examine the SMSdbmon.log file to verify that the following conditions are
	  true:
	
	   - SMS SQL Monitor has access to the specified inboxes at the site server
	     where it must write the key file for the trigger.
	
	   - The key file (for example, *.adc or *.udc) was written to
	     SMS\Inboxes\<component>.box (for example, SMS\Inboxes\Colleval.box).
	
	- If the trigger file was written, verify from the appropriate component log
	  file that the component has read the key file and taken the required action.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
