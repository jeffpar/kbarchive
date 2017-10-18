---
layout: page
title: "Q248627: Roaming Profiles May Not Be Deleted from Terminal Server"
permalink: kb/248/Q248627/
---

## Q248627: Roaming Profiles May Not Be Deleted from Terminal Server

	Article: Q248627
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user logs off a Terminal Server that has the "Delete cached copies of
	roaming profiles" policy enabled, the local profile folder may not be deleted.
	When this occurs, an additional folder may be created on the Terminal Server,
	causing the amount of disk space used by the roaming profiles to increase.
	
	Note that this behavior is also recorded in the Userenv.log file.
	
	CAUSE
	=====
	
	This behavior can occur if users are using the Novell client for NetWare version
	4.6 with Novell NetWare Client Service Pack 1 or Service Pack 2 to connect to a
	Terminal Server that has the "Delete cached copies of roaming profiles" policy
	enabled. The Novell client writes data to the Winnt\Profiles\<User name>
	folder after the local cache profile is deleted.
	
	RESOLUTION
	==========
	
	To work around this behavior, assign the following permissions to the
	Winnt\Profiles folder:
	
	- Administrators: Full Control
	- System: Full Control
	- Creator Owner: Full Control
	- Users: Read
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The issue described in this article may cause multiple folders to be created in
	the Winnt\Profiles folder for a user. The extra folders are typically named with
	the user name followed by a three-digit number. For example:
	
	- Winnt\Profiles\<User name>\Desktop
	- Winnt\Profiles\<User name>.000\Desktop
	- Winnt\Profiles\<User name>.001\Desktop
	
	For additional information about this behavior, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q154120 Debugging User Profiles and System Policies in Windows NT 4.0
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: deleteroamingcache client32
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
