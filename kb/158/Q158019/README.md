---
layout: page
title: "Q158019: SMS: Quick Windows Viewer Unavailable on RC French WinNT Client"
permalink: /kb/158/Q158019/
---

## Q158019: SMS: Quick Windows Viewer Unavailable on RC French WinNT Client

{% raw %}

	Article: Q158019
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quick Windows Viewer remains unavailable when you try to remotely control a
	computer running Windows NT 4.0 (Build 1381, U.S. or French version) that is
	both configured with the French Regional Settings and located in a domain other
	than the one containing the computer running Systems Management Server 1.2 (U.S.
	or French version).
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- Either the Windows NT 4.0 client or the computer running Systems Management
	  Server on Windows NT 4.0 are configured with the French regional settings.
	
	- These two computers are located in different domains, without a trust
	  relationship.
	
	- These two computers attempt to use the same user account with a different
	  password.
	
	WORKAROUND
	==========
	
	To work around this problem, do any of the following:
	
	- Use the same user account and password.
	
	- Use the trust relationship (for example, DOMAIN2 trusts DOMAIN1) and include
	  the DOMAIN1\MFST user account to the local administrator's group of DOMAIN2.
	
	- Use the English regional settings.
	
	
	Additional query words: SP1
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP1
	Version           : :1.2,1.2 SP1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
