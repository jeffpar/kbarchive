---
layout: page
title: "Q235785: SMS: SMS Backup Schedule Is Updated Only Once a Day"
permalink: kb/235/Q235785/
---

## Q235785: SMS: SMS Backup Schedule Is Updated Only Once a Day

	Article: Q235785
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbConfig kbServer kbsms200 kbsms200bug kbsmsUtil
	Last Modified: 01-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The schedule for the Backup SMS Site Server task can be changed at any time;
	however, the process that reads the schedule and performs all changes operates
	only once each day. Therefore, any changes made to the backup schedule can
	require as long as 24 hours to take effect.
	
	WORKAROUND
	==========
	
	To immediately start the Backup SMS Site Server task in Microsoft Systems
	Management Server (SMS) 2.0 Service Pack 1, manually start the SMS_SITE_BACKUP
	service. Doing so forces the process to cycle through the instructions in the
	SMSbkup.ctl file. The service then automatically shuts down. The SMSbkup.ctl
	file can be found in the SMS\inboxes\smsbkup.box folder.
	
	In both SMS 2.0 and SMS 2.0 Service Pack 1, to force SMSdbmon to reread the
	backup schedule and, if appropriate, start an immediate backup, follow these
	steps:
	
	1. In Notepad, open the following file:
	
	  \Sms\Bin\I386\Sqlmon.dat
	
	2. Locate the following string:
	
	  Backup SMS Site Server
	
	3. Change the date located directly after the backup string to a date more than
	  one week old.
	
	4. In the Service Manager, stop and restart the SMS_SQL_MONITOR (SMSdbmon)
	  service.
	
	Regardless of how the backup schedule is configured, this process forces SMSdbmon
	to read the schedule and run the backup process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	Please refer to the SMS Administrator's Guide for additional information on how
	to stop and start SMS components, including the Backup service
	(SMS_SITE_BACKUP).
	
	Additional query words: prodsms recovery
	
	======================================================================
	Keywords          : kbConfig kbServer kbsms200 kbsms200bug kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
