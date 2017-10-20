---
layout: page
title: "Q260335: SMS: SQL Provider May Fail to Install on Remote SQL Server"
permalink: /kb/260/Q260335/
---

## Q260335: SMS: SQL Provider May Fail to Install on Remote SQL Server

{% raw %}

	Article: Q260335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Systems Management Server version 2.0 on a server and use a
	remote server as the SQL Server computer, the Systems Management Server setup
	fails.
	
	CAUSE
	=====
	
	If NetWare's Client Redirector version 4.7 or earlier is installed, and a drive
	is mapped to a NetWare share/volume, the provider on the SQL Server computer
	fails to connect back to Systems Management Server.
	
	WORKAROUND
	==========
	
	Remove any mapped drives to NetWare shares and/or volumes, and then attempt to
	install Systems Management Server.
	
	MORE INFORMATION
	================
	
	You may find error 487 (Attempt to Access Invalid Address) located on the root
	of the drive in the Systems Management Server Setup.log file where Systems
	Management Server is being installed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
