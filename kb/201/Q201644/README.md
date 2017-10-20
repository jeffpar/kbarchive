---
layout: page
title: "Q201644: SMS: SMSTrace Fails To Open SMSPROV.LOG and BOOTSTRAP.LOG"
permalink: /kb/201/Q201644/
---

## Q201644: SMS: SMSTrace Fails To Open SMSPROV.LOG and BOOTSTRAP.LOG

{% raw %}

	Article: Q201644
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 kbsms200bug kbsmsUtil
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMSTRACE reports the following error when opening the SMSPROV.LOG or
	BOOTSTRAP.LOG:
	
	  "Failed to open document"
	
	CAUSE
	=====
	
	The format of the SMSPROV.LOG and BOOTSTRAP.LOG is not compatible with the
	SMSTRACE utility.
	
	WORKAROUND
	==========
	
	To view the logs, use either TRACER.EXE or NOTEPAD.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms smsstat
	
	======================================================================
	Keywords          : kberrmsg kbsms200 kbsms200bug kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
