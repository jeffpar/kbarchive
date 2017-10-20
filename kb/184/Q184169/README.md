---
layout: page
title: "Q184169: SMS: SMSEXEC Dr. Watson Error During Package Distribution"
permalink: /kb/184/Q184169/
---

## Q184169: SMS: SMSEXEC Dr. Watson Error During Package Distribution

{% raw %}

	Article: Q184169
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Systems Management Server Executive service (Smsexec.exe) a Dr.
	Watson occurs on the primary site server during a package distribution, if a
	NetWare logon and/or distribution server has insufficient disk space to receive
	the package.
	
	The Systems Management Server site server Event Log will log Event ID 109:
	
	     Component = SMS_Despooler
	     Operation = Install
	     Object = Package
	     Error Code = 1
	     Note: Failed to install package. There isn't sufficient disk space
	     available on that server. Disk space available on that server is Y
	     megabytes, space required is Z megabytes.
	
	WORKAROUND
	==========
	
	To prevent the error from occurring, you must make sufficient space available on
	each target NetWare server. Sufficient disk space is required for the package to
	be successfully distributed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
