---
layout: page
title: "Q142604: SMS Removes Shareable Attribute on NetWare Files"
permalink: /kb/142/Q142604/
---

## Q142604: SMS Removes Shareable Attribute on NetWare Files

{% raw %}

	Article: Q142604
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Package files from NetWare source directories marked as Shareable are no longer
	marked Shareable when distributed back to NetWare servers.
	
	CAUSE
	=====
	
	If a source directory is created on a NetWare server for a package that will be
	distributed to NetWare clients and all the files are flagged as Shareable,
	Systems Management Server will remove the Shareable attribute when it is
	distributed back to the NetWare server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms novell shared apps sms netware despooler
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
