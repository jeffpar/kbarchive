---
layout: page
title: "Q223053: SMS: Installation Does Not Finish If Spaces Exist in Folder Name"
permalink: /kb/223/Q223053/
---

## Q223053: SMS: Installation Does Not Finish If Spaces Exist in Folder Name

{% raw %}

	Article: Q223053
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Systems Management Server (SMS) 2.0 in an installation
	folder that has spaces in its name (for example, C:\Program Files), SMS is not
	installed correctly. However, the SMS Setup Wizard indicates that the
	installation is complete. If you try to start the SMS Administrator console, the
	following error message is displayed:
	
	  Cannot find Mfc42u.dll in the existing path.
	
	The only SMS service that runs is the SMS_SITE_COMPONENT_MANAGER service.
	
	If you reboot the site server, the server does not complete the reboot cycle, and
	stops with the following error message displayed:
	
	  STOP: C000021a {Fatal System Error} The Windows Logon Process Failed to start
	  normally.
	
	WORKAROUND
	==========
	
	Install SMS in the default folder, or select a folder that does not contain
	spaces in its name.
	
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
