---
layout: page
title: "Q101603: PC WRmt: Reason for Multiple Passwords"
permalink: /kb/101/Q101603/
---

## Q101603: PC WRmt: Reason for Multiple Passwords

{% raw %}

	Article: Q101603
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Remote for Windows has more than one password for
	each user. These passwords have different functions and may not necessarily be
	the same word.
	
	There is no function within Mail Remote for Windows to keep the passwords the
	same. This is due to different password requirements for different mail systems
	you might be accessing with Mail Remote for Windows.
	
	There is more help about password management in the online (MSRMT.HLP) and
	offline (RMTPSS.HLP) Help files that are included with Mail Remote for Windows.
	
	NOTE: The first password you are prompted for when you launch Mail Remote for
	Windows is usually the password for accessing your mail message store (the .MMF
	file, MSMAIL.MMF, by default). However, this is totally dependent upon the
	current driver for Mail Remote for Windows. You can change drivers for Mail
	Remote for Windows by running the Microsoft Mail System Selector.
	
	Generally, there are two passwords associated with each driver. The first
	password is for access to your local .MMF message file. There is usually another
	password for accessing the remote mail host. There might also be secondary
	passwords for some mail systems, such as AT&T EasyLink.
	
	For example, if you have the Mail Remote driver loaded, when you start Mail
	Remote for Windows, you are prompted for a Login password. This provides access
	to your local MSMAIL.MMF file. You can change this when Mail Remote for Windows
	is running by choosing Change Password from the Mail menu.
	
	When you dial in to your postoffice for messages, there is a dial-in access
	password assigned to your postoffice by your mail administrator. To change this
	password, choose Communications from the Mail menu, then choose Dialin
	Password.
	
	NOTE: Do not change host-access passwords until you have confirmed the new
	password with your mail system administrator. You will not be able to send or
	receive mail from that host system unless you are using the correct password.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
