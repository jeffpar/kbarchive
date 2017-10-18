---
layout: page
title: "Q323146: SMS: Status Messages Are Not Processed"
permalink: kb/323/Q323146/
---

## Q323146: SMS: Status Messages Are Not Processed

	Article: Q323146
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new Status Filter rule in the Systems Management Server (SMS)
	Administrator console, no new status messages may be processed or summarized at
	the site. This may occur no matter how you configured the rule, or where you put
	the rule in the list of Status Filter rules. When this problem occurs, the
	following entry may be recorded in the Statmgr.log file when the
	SMS_STATUS_MANAGER component starts:
	
	  ERROR: The component item for SMS_STATUS_MANAGER in the master site control
	  file does not contain property list items for a status filter named
	  "SMS_STATUS_MANAGER", or those property lists are corrupt or badly formatted.
	
	Additionally, the following log entry may be recorded many times:
	
	  Sleeping for 60 seconds...
	  A new version of the master site control file is not available yet.
	
	CAUSE
	=====
	
	This problem may occur if there are leading or trailing spaces in the name of
	the Status Filter rule. Note that the name of a Status Filter rule can contain
	up to 1,024 characters, but only the first 250 characters appear in the SMS
	Administrator console.
	
	WORKAROUND
	==========
	
	To avoid this issue, make sure that Status Filter rule names do not contain
	leading or trailing spaces. If a Status Filter rule name contains a leading or
	trailing space, you must delete the rule and then re-create it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms statmgr
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
