---
layout: page
title: "Q269405: SMS: Secondary Site Wizard Corrupts Files on Primary Site Server"
permalink: /kb/269/Q269405/
---

## Q269405: SMS: Secondary Site Wizard Corrupts Files on Primary Site Server

{% raw %}

	Article: Q269405
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server, when you use the SMS Administrator Console
	Secondary Site Wizard to create a secondary site, and you type the NetBIOS name
	of the primary site server as the name of the secondary site server, several
	services or files from the primary site server may removed, copied over, or
	corrupted.
	
	CAUSE
	=====
	
	This behavior can occur because the Secondary Site Wizard does not check to
	ensure that the secondary site server name you entered is not an existing
	primary site server.
	
	WORKAROUND
	==========
	
	To work around this behavior, verify that the secondary site server name you
	provide the wizard is not the name of an existing primary site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
