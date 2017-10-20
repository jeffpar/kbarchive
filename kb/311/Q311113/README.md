---
layout: page
title: "Q311113: IIS Lockdown Wizard Undo Doesn't Restore Uninstalled Services"
permalink: /kb/311/Q311113/
---

## Q311113: IIS Lockdown Wizard Undo Doesn't Restore Uninstalled Services

{% raw %}

	Article: Q311113
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Internet Information Services (IIS) Lockdown Wizard, administrators can
	choose the option to uninstall unused services. This configuration option cannot
	be undone by using the undo operation in the IIS Lockdown Wizard.
	
	CAUSE
	=====
	
	When you run the IIS Lockdown Wizard, it creates a log file named Oblt-log.log
	that records the security configuration changes that are made. There is an
	option available in the wizard that you can select to uninstall the services
	that are not in use. The Oblt-log.log file, which is used when you use the
	wizard to undo a previous configuration, does not record that the services have
	been uninstalled. As a result, the undo feature does not restore any previously
	uninstalled services.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q310725 HOWTO: Run the IIS Lockdown Wizard Unattended
	
	
	Additional query words: iis lockdown oblt-log.log uninstall services
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
