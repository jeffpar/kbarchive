---
layout: page
title: "Q263095: SMS: Error Message When Removing Many Machine History Records"
permalink: kb/263/Q263095/
---

## Q263095: SMS: Error Message When Removing Many Machine History Records

	Article: Q263095
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbServer kbsms120 kbsms120bug kbsmsAdmin kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Delete Special command to delete many machine history records,
	you may receive the following error message:
	
	  There has been an error. Couldn't complete the specified action.
	
	CAUSE
	=====
	
	Systems Management Server (SMS) uses synchronous query execution. This problem
	can occur if the process times out before Microsoft SQL Server can finish the
	query. This time-out can occur if the database contains many records, either
	because of large hierarchies or because periodic database cleanup has not been
	performed.
	
	WORKAROUND
	==========
	
	To work around this problem and delete a lot of data, use the Delete Special
	command on small ranges of machine history records. For example, to delete all
	machine history records that are older than 30 days:
	
	1. Use the Delete Special command to delete all machine history records that are
	  older than 360 days.
	
	2. Use the Delete Special command to delete all machine history records that are
	  older than 330 days.
	
	3. Use the Delete Special command to delete all machine history records that are
	  older than 300 days.
	
	4. Continue to use the Delete Special command to delete groups of machine
	  history records and reduce the date criterion of the group by 30 days each
	  time, until you reach the interval that you want (in this case, all machine
	  history records that are older than 30 days).
	
	NOTE: Each time that you use the Delete Special command, you must use the Delete
	Unused/Common Specific Records command afterward (on the Tools menu, click
	Delete Unused Common/Specific Records) to run SMS Database Manager
	(Dbclean.exe).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: prodsms There has been an error. Couldn t complete the specified action. large chunks small remove
	
	======================================================================
	Keywords          : kberrmsg kbServer kbsms120 kbsms120bug kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
