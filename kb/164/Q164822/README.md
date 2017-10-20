---
layout: page
title: "Q164822: SMS: Administrator Program Cannot Find Add-in Tool"
permalink: /kb/164/Q164822/
---

## Q164822: SMS: Administrator Program Cannot Find Add-in Tool

{% raw %}

	Article: Q164822
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin kbsmsUtil smsadmin smsutilkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Register Add-ins utility to add a menu option to the Tools menu
	of the Systems Management Server Administrator program, the application may fail
	to run. If the working directory (the location of the application's executable
	file) specified for the application is not part of the local PATH variable for
	the system, the application fails to run, and you receive the following error:
	
	  Microsoft SMS Administrator
	
	  Can't launch the specified tool.
	  Command line: <your application>
	  Working Directory:<None>
	  Error: The system cannot find the file specified.
	
	CAUSE
	=====
	
	The Systems Management Server Administrator program does not use the defined
	WorkingDir value in the registry. Therefore, if the directory is not specified
	in the system PATH variable, the application is not found.
	
	WORKAROUND
	==========
	
	To work around this problem, add the directory where the application is located
	to the system PATH variable. You can do this through the System Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms add in tool toolbar
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin kbsmsUtil smsadmin smsutil kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
