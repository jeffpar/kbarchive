---
layout: page
title: "Q306315: Deleted Aged Status Messages Can Leave Orphaned Database Entries"
permalink: /kb/306/Q306315/
---

## Q306315: Deleted Aged Status Messages Can Leave Orphaned Database Entries

{% raw %}

	Article: Q306315
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Systems Management Server (SMS) 2.0 site stores a large number of status
	messages that meet the "delete aged status message" criteria, the act of
	deleting those status messages may leave orphaned status message insertion
	strings and attributes in the SMS database.
	
	CAUSE
	=====
	
	The SMS database monitor is the process that is responsible for the deletion of
	aged status messages from the database. During the deletion process, if more
	than 1,000 status messages meet the deletion criteria (see the "Additional
	Information" section in this article for more information about this), the first
	1,000 status messages are deleted, but may orphan related insertion strings and
	attributes that are related to the status messages. These are located in two
	Microsoft SQL Server database tables that can eventually consume a lot of
	database space.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	
	The Delete Aged Status Messages task (available by opening Site Settings, opening
	Database Maintenance, and then clicking Tasks) is enabled by default to delete
	aged status messages daily (between 12:00 A.M. and 5:00 A.M.). When it is run by
	the SMS database monitor, the routine to delete aged status messages deletes up
	to 1,000 aged status messages if their expiration time is met. If more than
	1,000 aged status messages exist, only the first 1,000 are deleted in that
	batch. This is an effort by the SMS database monitor not to delete all expired
	status messages in one operation because doing so could result in an attempt to
	delete tens, if not hundreds of thousands, of status messages at one time in
	large hierarchies. That would have a negative impact on SQL Server performance
	and transaction log usage during this time.
	
	The default age for SMS status messages to be stored in the database is
	determined by Status filter rules. The following two default Status filter rules
	are applied by default:
	
	- Write audit messages to the site database and keep them for 180 days
	
	- Write all other messages to the site database and keep them for 30 days
	
	To determine if an SMS primary site is exhibiting the symptoms that are described
	in this article, run the following SQL queries against the SMS database by using
	ISQL/W:
	
	- If the following query returns a non-zero value, there are orphaned records
	  in the StatusMessageInsStrs table:
	
	  Select Count(*) From StatusMessageInsStrs Where RecordID Not In (Select
	  RecordID From StatusMessages)
	
	- If the following query returns a non zero-value, there are orphaned records
	  in the StatusMessageAttributes table:
	
	  Select Count(*) From StatusMessageAttributes Where RecordID Not In (Select
	  RecordID from StatusMessages)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
