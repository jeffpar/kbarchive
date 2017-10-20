---
layout: page
title: "Q250265: Kernel32.dll Error Running AT Schedule Commands With Cmd.exe"
permalink: /kb/250/Q250265/
---

## Q250265: Kernel32.dll Error Running AT Schedule Commands With Cmd.exe

{% raw %}

	Article: Q250265
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the the AT Scheduler from a command prompt or a batch
	file, you may receive the following error message:
	
	  Initialization of dynamic link library c:\winnt\system32\KERNEL32.dll
	  failed.
	
	  Process is terminating abnormally
	
	CAUSE
	=====
	
	This behavior can occur when the Schedule service is configured to log on
	through a service account, and you change the account password in User Manager
	for Domains but not in the Schedule service in Control Panel.
	
	RESOLUTION
	==========
	
	To resolve this behavior, change the password of the service account for the
	Schedule service in Control Panel to match the password specified for the
	account in User Manager for Domains. Follow these steps:
	
	1. In Control Panel, double-click Services.
	
	2. Select Schedule, and then click Startup.
	
	3. Change the password in the Password and Confirm Password boxes to exactly
	  match the password specified for the account in User Manager For Domains, and
	  click OK.
	
	4. Click Close to close the Services dialog box.
	
	MORE INFORMATION
	================
	
	If the service account belongs to another domain, add the service account to the
	Administrators local group in your domain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
