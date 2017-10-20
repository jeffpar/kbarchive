---
layout: page
title: "Q38390: Mac DOS: Notifier Should Not Be Started from a MS-DOS Shell"
permalink: /kb/038/Q38390/
---

## Q38390: Mac DOS: Notifier Should Not Be Started from a MS-DOS Shell

{% raw %}

	Article: Q38390
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some applications allow you to exit to a MS-DOS shell without quitting the
	program. In these cases, do not attempt to start the Notifier for version 1.37,
	2.0, and 3.0 of Microsoft Mail for AppleTalk Networks, MS-DOS workstation. The
	Notifier is designed to be executed from the original command level only.
	
	MORE INFORMATION
	================
	
	For example, if a user tries to start the Notifier within Microsoft Chart using
	the Run command, the Notifier will be installed, the machine will beep, and the
	message "Program stayed resident. Press any key to quit Chart" will appear. The
	system will then lock up, and must be rebooted by the user.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200
	Version           : WINDOWS:1.37,2.0,3.0
	
	=============================================================================
	

{% endraw %}
