---
layout: page
title: "Q119412: Mac Srv: Problems with Backup and Startup Manager"
permalink: /kb/119/Q119412/
---

## Q119412: Mac Srv: Problems with Backup and Startup Manager

{% raw %}

	Article: Q119412
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 3.x of Microsoft Mail for AppleTalk Networks Backup Utility
	to backup the Microsoft Mail Data File, the following error may be presented
	when the machine reboots:
	
	  The last time you started up, the INIT named "AppleShareX" crashed the
	  startup process. For your convenience, it has been turned off, but be aware
	  that any INIT that loaded before it could also have caused the problem."
	
	This error will remain on the screen until the OK button is clicked; thus, it
	will keep the Mail Server from loading.
	
	CAUSE
	=====
	
	The above error can be received if the Macintosh that is running MS Mail Backup
	also has Now Utilities' Startup Manager installed. Startup Manager has a feature
	to disable crashing extensions, which presents the above error when certain
	events occur.
	
	RESOLUTION
	==========
	
	In order to keep the above error message from appearing, Startup Manager's
	disable crashing extensions feature must be disabled. To do so:
	
	1. Open the Startup Manager control panel.
	
	2. Click the Prefs button.
	
	3. Deselect the "Disable Crashing Extensions" checkbox.
	
	MORE INFORMATION
	================
	
	The MS Mail Backup Utility is not crashing the system. The AppleShareX file is
	used to keep Mail related software from loading while the backup occurs. Startup
	Manager flags the disabling of this software by AppleShareX as a crashing
	problem and presents the error. To use MS Mail Backup with Startup Manager, this
	feature must be disabled.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
