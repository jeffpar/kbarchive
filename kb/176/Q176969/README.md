---
layout: page
title: "Q176969: SMS: Audit Fails with &quot;Cannot read SMS.INI&quot; Error Message"
permalink: /kb/176/Q176969/
---

## Q176969: SMS: Audit Fails with &quot;Cannot read SMS.INI&quot; Error Message

	Article: Q176969
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Software Audit may fail with the error message:
	
	  Cannot read SMS.INI
	
	CAUSE
	=====
	
	Entries in the Sms.ini file are normally checked and re-created during a
	hardware and software inventory cycle, which is performed every seven days by
	default. If entries are removed or missing, audit may fail. The following are
	examples of entries that may be missing:
	
	  Entries from [Local]
	
	  SystemRole
	  SystemType
	
	  -or-
	
	  Entry from [LogonHistory]
	
	  LastLoggedOnUser.
	
	WORKAROUND
	==========
	
	To run the Audit successfully, replace the missing entries after the inventory
	cycle is complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms pcm audit inv32cli systemrole systemtype
	
	======================================================================
	Keywords          : kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
