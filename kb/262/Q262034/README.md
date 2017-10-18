---
layout: page
title: "Q262034: SMS: How to Manage the Deletion of Aged Status Messages"
permalink: kb/262/Q262034/
---

## Q262034: SMS: How to Manage the Deletion of Aged Status Messages

	Article: Q262034
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbMMC kbServer kbsms kbsms200 kbAudit kbStatSum
	Last Modified: 13-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to provide an in-depth look at how aged status
	messages are handled and how to manage them.
	
	MORE INFORMATION
	================
	
	Scheduling the Delete Aged Status Messages maintenance task is exposed within
	the Systems Management Server (SMS) 2.0 Administrator console. Navigate to:
	
	  Site Settings/Database Maintenance/Tasks/Delete Aged Status Messages
	
	Each day the task is enabled, it can only start during the particular window of
	time defined in the property page. The defaults for Delete Aged Status Messages
	are:
	
	- The task is enabled.
	
	- It runs every day.
	
	- It starts between 12:00am and 5:00am.
	
	Also listed under Site Settings within the SMS Administrator console is Status
	Filter Rules. For each Status Filter Rule, the Actions tab has an option labeled
	"Write to the SMS database". When this option is checked, it configures the
	"Keep messages for:" box to a default of 7 days. This means that after 7 days,
	the messages that this particular rule caused to be written into the database
	will be deleted the next time that the SMS SQL Monitor runs.
	
	When you run a default site configuration, this creates two of the status filter
	rules that affect how long status messages are kept in the database. These two
	rules are:
	
	- Write audit messages to the site database and keep them for 180 days.
	
	- Write all other messages to the site database and keep them for 30 days.
	
	When a status message is written into the StatusMessages table in the site
	database, the date after which it can be deleted is written into the DeleteTime
	field in its record.
	
	This is a very critical point because it means that even if the period in which
	status messages are kept is modified in the status filter rule, this change does
	not affect any messages already in the database. It only affects new messages
	that the modified rule causes to be written into the database.
	
	When a status message record is written into the StatusMessages table in the
	database, records might also be written into the StatusMessageAttributes table
	or the StatusMessageInsStrs table.
	
	Depending on the actual status messages being written into the database, the
	StatusMessageInsStrs table might have more or less rows than the StatusMessages
	table. However, the StatusMessageAttributes table will be much smaller than the
	StatusMessages table.
	
	When a record is deleted from the StatusMessages table, a trigger will delete
	related records from the StatusMessageAttributes and StatusMessageInsStrs
	tables. If unsupported procedures were conducted on the database, there might be
	orphaned records in the StatusMessageAttributes and StatusMessageInsStrs tables
	that will not be cleaned out as aged messages are deleted from the
	StatusMessages table.
	
	When the SMS SQL Monitor service starts, in relationship to managing aged status
	messages, it checks the site control file for scheduling changes. The service
	then checks \SMS\bin\i386\Sqlmon.dat for the time it last ran that task. The
	particular task will run if:
	
	- The task is enabled.
	
	- The task is within the configured start window.
	
	- The task has not yet run in the current window.
	
	If it has already run that task within the current window, it will skip the task
	until the next window occurs.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbMMC kbServer kbsms kbsms200 kbAudit kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
