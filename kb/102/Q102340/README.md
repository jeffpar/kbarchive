---
layout: page
title: "Q102340: Mac Bkup: Destination Volume Must Be Mounted"
permalink: /kb/102/Q102340/
---

## Q102340: Mac Bkup: Destination Volume Must Be Mounted

{% raw %}

	Article: Q102340
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
	
	The MSMailBackup Control Panel device is included with versions 3.0 and 3.1 of
	Microsoft Mail for AppleTalk Networks. When you use the MSMailBackup device to
	back up the server data file, the backup may fail with the following error
	message:
	
	  The attempt to backup your Microsoft Mail Datafile failed.
	  Further, a status message explaining this could not be sent.
	
	CAUSE
	=====
	
	This error message is displayed when the backup software is unable to locate the
	destination volume. One of the following problems may be the cause:
	
	- The destination location is corrupt.
	
	- The destination location is temporarily unavailable.
	
	- The destination location has not been configured to automatically mount at
	  startup time. This problem is especially common when you are attempting to
	  back up to an AppleShare volume.
	
	RESOLUTION
	==========
	
	Ensure the destination volume is available and mounted on the desktop at startup
	time. If the destination is an AppleShare server, the user must enable the
	auto-login feature and have the password automatically provided by the system.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
