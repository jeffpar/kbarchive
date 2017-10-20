---
layout: page
title: "Q196229: SMS: How to Delete Inventory History Accumulated Over Time"
permalink: /kb/196/Q196229/
---

## Q196229: SMS: How to Delete Inventory History Accumulated Over Time

{% raw %}

	Article: Q196229
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbsmsAdmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Over time, your SMS database may grow larger and larger because client inventory
	history is retained. You may not want to keep all this history information, and
	this article explains how to reduce the amount of information retained by
	deleting history records that are older than a date you specify.
	
	MORE INFORMATION
	================
	
	Before removing old unneeded history records from the SMS database, you should
	check to see what the oldest history in the database is. To do this, you can
	either check the date stamp of the SMS directory, or you can run the following
	SQL statement:
	
	  select min(timekey) from machinedatahistorytable
	
	Then, after you know the appropriate date, you can perform the following steps:
	
	1. Open the Systems Management Server Administrator program and then open the
	  Sites window.
	
	2. On the Edit menu, click Delete Special.
	
	3. Select Machine History Records, and then specify your date criteria (for
	  example, dated before <date> or older than <xxx> days). This way,
	  you can either use a specific cut-off date to determine which records to
	  delete, or specify that records that are older than a certain number of days
	  are to be deleted.
	
	  NOTE: It is a good idea to start by only deleting 20 to 100 days and then
	  increase this number based on performance monitoring.
	
	4. Run the Systems Management Server Database Manager (Dbclean.exe). To start
	  Database Manager, on the Tools menu, click Delete Unused Common/Specific
	  Records.
	
	For more information, see the SMS Database Maintenance white paper, located at
	the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/sms/
	
	Additional query words: prodsms admin
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
