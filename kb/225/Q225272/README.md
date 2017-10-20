---
layout: page
title: "Q225272: Client Programs Are Not Installed on Windows 95 Client"
permalink: /kb/225/Q225272/
---

## Q225272: Client Programs Are Not Installed on Windows 95 Client

{% raw %}

	Article: Q225272
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of a German Windows 95 client in a Small Business Server
	(SBS) network, the client computer may restart automatically before finishing
	the Client Application Setup Wizard. After the restart, the wizard restarts and
	may display the following error message.
	
	  Setup cannot be continued, since there is not enough disk space on the drive.
	  Please verify the list of the components which can be installed.
	
	NOTE: This behavior occurs only on German localized versions of Windows 95. It
	does not occur with Microsoft Windows 98 or Microsoft Windows NT Workstation
	clients.
	
	CAUSE
	=====
	
	This behavior can occur if the wizard does not indicate which programs had been
	installed before the restart. Therefore, the wizard tries to install all of the
	client programs again. If there is not enough disk space to install all the
	programs, the wizard cannot continue.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use the Add Software To The Computer Wizard from
	the SBS console and clear the check boxes for all the client programs. When you
	log on to the client again, the wizard starts and then shuts down, preventing it
	from running at the next restart. You can then install any necessary programs
	from the console if there is enough disk space on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the German-language version of
	Windows 95.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ450
	Version           : WINDOWS:95; winnt:4.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
