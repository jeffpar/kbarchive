---
layout: page
title: "Q243300: Err Msg: Remote Tools Security Rights to Run Remote Tools on..."
permalink: /kb/243/Q243300/
---

## Q243300: Err Msg: Remote Tools Security Rights to Run Remote Tools on...

{% raw %}

	Article: Q243300
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug kbsmsProvider
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have appropriate Systems Management Server (SMS) security rights and
	try to remotely control an SMS client, you may be unable to do so, and you may
	receive the following error message:
	
	  Remote Tools
	  Security rights to run remote tools on this client have been denied.
	
	Note that this problem may also occur when you run the Remote.exe command from a
	command prompt.
	
	
	Also, you may receive the following error message (or one that is similar to it)
	in the Smsprov.log file:
	
	  *
	  *
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspStatusMessage.cpp(420) : User
	  "DOMAIN\user" is unknown to SMS security and does not have permissions to log
	  status messages.
	  *
	  *
	
	CAUSE
	=====
	
	This problem can occur when SQL is configured to use a case-sensitive sort order
	and the logged-on user name that the MMC retrieves from the workstation does not
	match the case of the user name in the Systems Management Server Administrator
	Console under Site Database\Security Rights.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
