---
layout: page
title: "Q246320: System Administration of User Accounts with Interix"
permalink: /kb/246/Q246320/
---

## Q246320: System Administration of User Accounts with Interix

	Article: Q246320
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes system administration of user accounts with Interix.
	
	MORE INFORMATION
	================
	
	The user database on a Microsoft Windows NT-based computer is quite different
	from what an administrator might be used to. For example, there is no file such
	as /Etc/Passwd or /Etc/Groups to edit. Instead, all entries (users and groups)
	are handled in the user database. In the $Interix_ROOT/Usr/Examples/Admin
	directory, there are several scripts to help add, delete, and modify user
	accounts: useradd, userdel, and usermod.
	
	To use these scripts, you must be logged on to the primary domain server. For
	instance, if computer A is the domain server for computer D and B (its client),
	you must log on to computer A, either by using telnet from computer B or by
	physically going to computer A. The scripts will not work if you are logged on
	to computer B, even if you are logged on to B as DEV+Administrator.
	
	For additional information about adding, deleting, and modifying users, see the
	following Interix Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0006.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
