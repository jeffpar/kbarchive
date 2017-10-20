---
layout: page
title: "Q161920: SMS: Program Group Control Fails to Set Up Localized Office 95"
permalink: /kb/161/Q161920/
---

## Q161920: SMS: Program Group Control Fails to Set Up Localized Office 95

{% raw %}

	Article: Q161920
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgckbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A localized version of Microsoft Office 95 fails to install with Systems
	Management Server Program Group Control (PGC). The shared installation screen
	appears for about two seconds, then fails with an error stating that the
	application has not been correctly configured.
	
	CAUSE
	=====
	
	The Systems Management Server utility that processes Microsoft Office 95 Setup
	runs Setup.exe for its command line. U.S. and German versions work correctly,
	but other localized versions fail because different command lines are used, such
	as Install.exe (Norwegian use), or Asenna.exe (Finnish).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms smsacm32
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
