---
layout: page
title: "Q215503: Turkish Windows 95 OSR2 Restarts with Turkish NetMeeting 2.1"
permalink: /kb/215/Q215503/
---

## Q215503: Turkish Windows 95 OSR2 Restarts with Turkish NetMeeting 2.1

{% raw %}

	Article: Q215503
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.1,95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft NetMeeting version 2.1 for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you create a new user profile in Turkish Windows 95 OEM Service Release 2
	(OSR2) using the User Profiles tool in Control Panel, the computer may reboot
	the first time the new user logs on. After this, the new user can log on with no
	problem.
	
	CAUSE
	=====
	
	This behavior can occur if Turkish NetMeeting 2.1 is installed. NetMeeting
	writes localized Turkish key names into the default user profile. This can cause
	the problems when the user's profile is saved.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: Using this workaround disables sound notifications for NetMeeting events.
	
	Use Registry Editor to delete the following registry key and its subkeys:
	
	HKEY_USERS\.Default\AppEvents\Schemes\Apps\Conf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Turkish NetMeeting version 2.1.
	
	Additional query words: restart
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbNMeetSearch kbOPKSearch kbNMeet210Win95 kbNMeetWin95Search
	Version           : WINDOWS:2.1,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
