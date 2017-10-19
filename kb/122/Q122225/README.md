---
layout: page
title: "Q122225: Sub-directory and File Permissions Not Set on Macintosh Volume"
permalink: /kb/122/Q122225/
---

## Q122225: Sub-directory and File Permissions Not Set on Macintosh Volume

	Article: Q122225
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Microsoft Systems Management Server creates a Macintosh volume (SMS_SHR for
	example), it does not create file-level permissions for any sub-directories.
	This results in Macintosh systems having write privileges for the
	LOGON.SRV\MAC.BIN and other sub-directories.
	
	CAUSE
	=====
	
	The SMS_MAINTENANCE_MANAGER service does not set the Macintosh file permissions
	on the ..\LOGON.SRV directory on servers where Windows NT Services for Macintosh
	have been installed. Macintosh directory permissions (which are similar but not
	the same as Windows NT file and directory permissions) default to write access
	on ..\LOGON.SRV and its sub- directories. This creates a security leak, since
	some user could replace executable files in the ".BIN" directories.
	
	WORKAROUND
	==========
	
	Once the Macintosh volume is created by the SMS_SITE_CONFIG_MANAGER service, the
	SMS_MAINTENANCE_MANANGER service ignores permissions if it updates these
	directories during the normal maintenance cycle. This allows the Systems
	Management Server administrator to configure the sub-directory and file
	permissions manually to deny Macintosh users write privileges.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms sfm prodsms 1.00 1.10
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
