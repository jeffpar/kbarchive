---
layout: page
title: "Q275612: SMS: Modifying [Tokens] Section of Smsbkup.ctl May Delete Files"
permalink: kb/275/Q275612/
---

## Q275612: SMS: Modifying [Tokens] Section of Smsbkup.ctl May Delete Files

	Article: Q275612
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, you are able to back up your site server. When
	the SMS Backup service (SMS_BACKUP) runs, it reads the SMS Backup control file,
	Smsbkup.ctl, which is located in the SMS\Inboxes\Smsbkup.box directory. You can
	configure the SMS Backup control file to change the behavior of SMS_BACKUP.
	
	If you make additions to the [Tokens] section, such as adding comments, you can
	cause the standard backup variables to either not be set, or to be set
	incorrectly. This can cause the unexpected deletion of files when you run the
	rmdir command at the beginning of the backup.
	
	Note: Microsoft recommends that you do not modify the [Tokens] section of the
	Smsbkup.ctl file, and that you test any modifications to the Smsbkup.ctl file
	before releasing it to the production environment.
	
	The following example demonstrates how a simple modification can cause a backup
	to remove all files from the SMS drive because it is unable to set the
	BACKUP_DESTINATION variable:
	
	  [Tokens]
	  # Set Variables:
	
	  BACKUP_DESTINATION=BACKUP_DEST_DIR\SITE_CODE
	
	  SITE_SERVER_DEST=BACKUP_DESTINATION\SiteServer
	
	  METERING_SERVER_DEST=BACKUP_DESTINATION\MeteringServer
	
	  SITE_DB_SERVER_DEST=BACKUP_DESTINATION\SiteDBServer
	
	  METERING_DB_SERVER_DEST=BACKUP_DESTINATION\MeteringDBServer
	
	  PROVIDER_SERVER_DEST=BACKUP_DESTINATION\ProviderServer
	
	If the [Tokens] section was modified as shown above, the BACKUP_DESTINATION
	variable would not be set correctly, even though BACKUP_DEST_DIR and SITE_CODE
	are set correctly in this instance.
	
	Use of a comment prior to setting the BACKUP_DESTINATION variable without a
	carriage return (/) between it and the setting of the variable, prevents the
	variable from being set correctly. This is only true if the backup destination
	variable is indented by use of the TAB key. If the variable is not indented, the
	comment does not cause any difficulties.
	
	Microsoft therefore recommends that you do not modify the [Tokens] section of the
	Smsbkup.ctl file.
	
	MORE INFORMATION
	================
	
	The Smsbkup.ctl file, which is in ASCII format, controls the behavior of the SMS
	Backup service by use of the following sections:
	
	  [Tokens]
	  Defines variables used within the SMS Backup control file.
	
	  [Stop]
	  Stops SMS services and other processes before the SMS Backup tasks are
	  performed.
	
	  [Tasks]
	  Specifies tasks that run during the SMS Backup service, such as the backing up
	  of databases, files, registry keys, and the running of system commands.
	
	  [Start]
	  Starts SMS services and other processes after the SMS Backup tasks have been
	  performed.
	
	Note: Comments lines, which are lines preceded by a number sign (#) (with the
	exception of #stop and #start lines), are ignored.
	
	Example:
	
	  # This is a comment.
	
	You can troubleshoot the variable setting aspect of the SMS Backup control file
	by:
	
	1. Commenting the rmdir command line so that the file removal does not occur.
	
	2. Adding lines equivalent to the following in the [Tasks] section:
	
	  [Tasks]
	  cmd `echo BACKUP_DESTINATION` %SystemDrive%\Backdest.txt
	  cmd `echo BACKUP_DESTINATION` %SystemDrive%\Backdir.txt
	  cmd `echo SITE_CODE` %SystemDrive%\Sitecode.txt
	
	Doing this causes each variable to be written to the Smsbkup.log file, as well as
	to a text file in the root of the system drive. You can then review both the
	text files and the log file to determine if the variables are being set
	correctly.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
