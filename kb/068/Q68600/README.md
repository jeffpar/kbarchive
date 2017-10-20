---
layout: page
title: "Q68600: Mac Bkup: MSMailBackup CDEV Not Creating Backup Mail Data File"
permalink: /kb/068/Q68600/
---

## Q68600: Mac Bkup: MSMailBackup CDEV Not Creating Backup Mail Data File

{% raw %}

	Article: Q68600
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail, if the MSMailBackup CDEV (Control Panel device) does not load
	at start-up, no backup of the Microsoft Mail data file will be created and no
	mail messages will be sent regarding the success of the backup.
	
	To check if MSMailBackup is being loaded, restart the Apple Macintosh. If the
	MSMailBackup start-up icon is not shown while the Macintosh is restarting, or if
	it appears crossed out with an "X", MSMailBackup was unable to load
	successfully.
	
	Known situations that prevent MSMailBackup from loading are as follows:
	
	- MSMailBackup is not located in the System Folder.
	
	- The "Microsoft Mail Server" file is not located in the System Folder.
	
	- The Microsoft Mail server name has been changed. (For example, a space may
	  have been placed before the name.)
	
	MORE INFORMATION
	================
	
	The MSMailBackup utility looks in the System Folder for a file named "Microsoft
	Mail Server". If it doesn't find this file, MSMailBackup crosses out its icon at
	start-up time.
	
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
