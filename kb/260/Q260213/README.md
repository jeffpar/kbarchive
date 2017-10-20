---
layout: page
title: "Q260213: SMS: Bindery Logon Server Manager Causes Logon Problems"
permalink: /kb/260/Q260213/
---

## Q260213: SMS: Bindery Logon Server Manager Causes Logon Problems

{% raw %}

	Article: Q260213
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 24-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) Bindery Logon Server Manager causes logon
	problems if there are mapped drives in the system path. Bindery logon server
	runs the LoadLibrary function looking for a Novell NetWare redirector at the
	start of every update cycle. This occurs if bindery support is installed on the
	site, regardless of whether the Bindery logon point is created.
	
	If there is a network resource in the system path to which the SMSService account
	does not access rights, the system may experience poor performance and a
	possible SMSService account lockout on the remote system.
	
	CAUSE
	=====
	
	SMS Bindery Logon Server Manager tries to load the Microsoft NetWare
	dynamic-link libraries (DLLs) and the Novell NetWare DLLs by using the
	LoadLibrary function.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the appropriate method:
	
	- Load the Novell NetWare DLLs only from the local computer (the %SystemRoot%
	  folder or the %SystemRoot%\System32 folder). Do not use the default behavior
	  of the LoadLibrary function. The network abstraction layer (NAL) may search
	  the network drive for network DLLs. This may lead to increased network
	  traffic. To work around this behavior, remove network drives from the path.
	
	- If the Novell NetWare DLLs do not work, load only the Microsoft NetWare DLLs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
