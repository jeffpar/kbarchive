---
layout: page
title: "Q225520: SMS Installer Uses Short-Date Format from Regional Settings"
permalink: /kb/225/Q225520/
---

## Q225520: SMS Installer Uses Short-Date Format from Regional Settings

{% raw %}

	Article: Q225520
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 smsinst
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server Installer supports obtaining the current system date
	and time by using the "Get System Information" script item. You can configure
	the "Get System Information" script item to populate a variable with a string
	representing the current system date and time. The string that is stored in the
	target variable is formatted to conform to the short-date format as it is
	specified in the Regional Settings too in Control Panel.
	
	On Microsoft Windows NT-based computers, the user's default short-date format can
	be different from the system locale's short-date format. Because Systems
	Management Server Installer uses the system locale (not the user locale), the
	string may not match the user's currently configured short-date format.
	
	MORE INFORMATION
	================
	
	Users with administrative privileges on Windows NT-based computers can change
	the system default locale in the Regional Settings tool in Control Panel. To
	change the locale listed in the Regional Settings tool to the system default
	locale, click to select the "Set as system default locale" check box before you
	quit the Regional Settings tool in Control Panel.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
