---
layout: page
title: "Q154445: A Different OS was Detected...While Upgrading SMS Clients"
permalink: /kb/154/Q154445/
---

## Q154445: A Different OS was Detected...While Upgrading SMS Clients

{% raw %}

	Article: Q154445
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully upgrade the client files from Windows for Workgroups to Windows
	95, use the appropriate Package Definition Files (PDF) when you attempt to send
	a upgrade package.
	
	If you perform a non-PDF upgrade, run UPGRADE.BAT or change your logon script to
	call UPGRADE.BAT.
	
	MORE INFORMATION
	================
	
	The PDF shipped with Systems Management Server 1.1 and 1.2 allows you to
	properly upgrade the operating systems by changing the "OS=" line in the SMS.INI
	file and the client files in the \MS\SMS directory. If you do not use the PDF,
	the client files are not upgraded and the following error message appears:
	
	  A different OS was detected than that under which Systems Management Server
	  was installed.
	
	However, if you run UPGRADE.BAT, your SMS client files will be successfully
	upgraded.
	
	Additional query words: prodsms win95
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
