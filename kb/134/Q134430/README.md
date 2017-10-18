---
layout: page
title: "Q134430: Mac Bkup: Mail Backup Notification Message Can Be Disabled"
permalink: kb/134/Q134430/
---

## Q134430: Mac Bkup: Mail Backup Notification Message Can Be Disabled

	Article: Q134430
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the MSMailBackup Control Panel used by Microsoft Mail for AppleTalk
	Networks restarts the mail server to backup the server's mail data file, a
	notification message can be sent to a user upon completion. If the administrator
	wants to disable the notification, he or she can leave the Sent Status To: field
	empty.
	
	When the backup process is complete, the following dialog will be presented:
	
	  Your Microsoft Mail Datafile was backed up successfully.
	  However, a status message explaining this could not be sent.
	
	When you select the OK button to clear the dialog box, the startup process will
	continue.
	
	MORE INFORMATION
	================
	
	The startup process will have the appearance of being halted until you select
	the OK button. However, the System processes are actually running. The Finder's
	user interface is suspended until the OK button is selected, and the Mail
	service is not interrupted.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN31xSearch
	Version           : WINDOWS:3.1x
	
	=============================================================================
	
