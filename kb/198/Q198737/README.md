---
layout: page
title: "Q198737: SMS: Changes Irreversible When Logging Components to One File"
permalink: /kb/198/Q198737/
---

## Q198737: SMS: Changes Irreversible When Logging Components to One File

	Article: Q198737
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbStatSum
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging is enabled for multiple Systems Management Server 2.0 components,
	and set to use one log file, you cannot reset the components to log in separate
	log files.
	
	To allow multiple components to log to one file, open Service Manager and select
	the Components object. The components will be listed in the right pane. Select
	multiple components and click Logging. Click to select the Logging enabled check
	box, click the "Use same file for all selected components" check box, type the
	log file name, and then click OK. Logging is now enabled for the selected
	components and only uses the log file that you specified.
	
	After logging is enabled in this manner, you cannot reset the selected components
	to log in individual log files. You can clear the "Use same file for all
	selected components" check box, but the change is not saved and logging
	continues to use the log file specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms smsstat
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
