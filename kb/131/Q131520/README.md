---
layout: page
title: "Q131520: Err Msg &quot;The Mailbox Name or Password Is Incorrect&quot; in Mail"
permalink: kb/131/Q131520/
---

## Q131520: Err Msg &quot;The Mailbox Name or Password Is Incorrect&quot; in Mail

	Article: Q131520
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you clear the Remember Password check box in the Microsoft Mail logon
	dialog box in Windows for Workgroups and then change your Microsoft Mail
	password, the next time you log on you receive the following error message:
	
	  The mailbox name or password is incorrect.
	
	Note that this description assumes that you have previously selected the Remember
	Password check box and then logged on to Microsoft Mail.
	
	CAUSE
	=====
	
	When you start Microsoft Mail, it looks for a cached password. If Microsoft Mail
	finds a cached password, it tries to use that password.
	
	Clearing the Remember Password check box does not remove a previously cached
	password, but prevents your new password from being cached. In the situation
	described in the "Symptoms" section, the last cached password is different from
	your current password, but is used when you try to log in.
	
	RESOLUTION
	==========
	
	To work around this error, use either of the following methods:
	
	- Remove or rename the <username>.PWL file in the Windows directory, then
	  restart Microsoft Mail and enter your new password. If you want the new
	  password cached, select the Remember Password check box.
	
	  NOTE: This method removes all cached passwords.
	
	  NOTE: If you are using a personal certificate, you should export it before
	  renaming your .pwl file. If you do not do so, it may be unavailable when you
	  send e-mail. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	- Use the password list editor (PWLEDIT.EXE) available on the Utilities disk
	  included with the Windows for Workgroups 3.11 Resource Kit to delete the
	  cached password.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
