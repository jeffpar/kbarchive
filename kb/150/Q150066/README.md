---
layout: page
title: "Q150066: Simultaneous PGC Config. and Login Script Execution Errors"
permalink: /kb/150/Q150066/
---

## Q150066: Simultaneous PGC Config. and Login Script Execution Errors

{% raw %}

	Article: Q150066
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a 16-bit Windows client, after you run a shared application and log off
	(without exiting Windows), when you log on again, Program Group Control will
	attempt to configure the shared applications. If you are using Smsls.bat in or
	as your login script, you may be executing the SMS login script at the same time
	PGC is configuring the shared applications. As a result you may get one or more
	of the following errors:
	
	  Sharing Violation on Drive C: Abort, Retry, Fail
	
	  Could not open the application database. Your configuration will not be
	  updated this time
	
	  Failed to find Domain Controller. Cannot determine which groups the user
	  belongs to. Please contact your administrator.
	
	  There is a network error
	
	PGC will fail to configure the shared applications and will not create the
	program groups.
	
	CAUSE
	=====
	
	Which error occurs seems to depend on how much of the login script has executed
	when PGC starts its configuration. PGC waits 1 second after it detects that a
	user has logged on before beginning its configuration.
	
	WORKAROUND
	==========
	
	Manually run PGC after the login script has completed. If PGC is executed
	manually immediately after the script has completed, it will succeed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms logout logon system smsls.scr smsls.cmd appctrl appctl16
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
