---
layout: page
title: "Q322735: Issues with CRON When You Upgrade Interix 2.2 to SFU 3.0"
permalink: kb/322/Q322735/
---

## Q322735: Issues with CRON When You Upgrade Interix 2.2 to SFU 3.0

	Article: Q322735
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5,3.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4, 2.2.4.03, 2.2.4.08, 2.2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can upgrade to Windows Services for UNIX (SFU) 3.0 from Microsoft Interix
	2.2, but you cannot upgrade from earlier versions. You must remove earlier
	versions before you install Windows SFU 3.0. Note that Cron functionality is
	affected in several ways.
	
	MORE INFORMATION
	================
	
	SFU 3.0 uses a different method for storing passwords for the Cron service. Cron
	users must re-enter their passwords by using the "crontab -p" (without the
	quotation marks) command. Also, note that the CRONADMIN utility is not included
	in SFU 3.0.
	
	User-Specific Cron Services Not Upgraded
	----------------------------------------
	
	If you install Windows SFU 3.0 as an upgrade of Interix 2.2, user-specific Cron
	services that were created by Interix 2.2 are not modified or upgraded to work
	with Windows SFU 3.0.
	
	1. To list user-specific cron services, type "/bin/service list" (without the
	  quotation marks) at an Interix shell prompt. The names of user-specific cron
	  services are listed in this format
	
	  cron_<domain name>+<user>
	
	  where <domain name> is the name of the user's domain and <user> is
	  the user's logon name.
	
	2. After you identify these services, remove them by running the "/bin/service
	  remove <service name>" (without the quotation marks) command at an
	  Interix shell prompt for each service, where <service name> is the name
	  of the service to be removed.
	
	3. After you remove the service, the user who owned the service must reinstall
	  the user's Crontab file by running the "crontab -e" (without the quotation
	  marks) command at an Interix shell prompt.
	
	4. The user who owned the service must register the user's password by running
	  the "crontab -p" (without the quotation marks) command at an Interix shell
	  prompt. The user's Crontab file is generally located in the following folder
	  in the Interix 2.2 installation folder:
	
	  usr/lib/cron/user
	
	  The Crontab file has the same name as the user's fully qualified domain name
	  (<domain name>+<user name>).
	
	Additional query words: solar coaster solarcoaster
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbWinServiceUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224 kbInterix22403 kbInterix22408 kbInterix225 kbWinServiceUNIX300
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
