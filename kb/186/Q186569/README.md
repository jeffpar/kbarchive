---
layout: page
title: "Q186569: Security Configuration in Terminal Server"
permalink: /kb/186/Q186569/
---

## Q186569: Security Configuration in Terminal Server

{% raw %}

	Article: Q186569
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Terminal Server Administration tool, Security
	Configuration. This tool is a modified version of the C2 Security Configuration
	tool in the Windows NT Server 4.0 Resource Kit in the SUPPORT\SECTOOL folder.
	
	MORE INFORMATION
	================
	
	This utility will check for and set C2 security levels in the file system and
	the registry according to a set of .inf files containing the settings for each
	level. Administrators can use this tool plus the Application Security tool,
	normal NTFS security through Explorer, auditing, creating system backups,
	creating firewalls, and so on to enhance system security.
	
	By default, the security setting is set to low. The registry and file permissions
	that will be set for each security level are detailed in a series of .inf files
	in the %SystemRoot%\system32 folder: C2reglow.inf, C2regmed.inf, C2reghi.inf,
	C2ntglow.inf, C2ntfmed.inf, and C2ntfhi.inf.
	
	Low Security
	------------
	
	Minimal security. This is probably a good setting for intranets, where users are
	known and authorized to access the Terminal Server. Low security allows write
	access to much of the registry and the file system. It does protect executable
	files, and it restricts users from performing administrative tasks. The
	advantages of low security are that very few applications will have trouble
	accessing resources and system maintenance is easier.
	
	Medium Security
	---------------
	
	Medium security is meant for Terminal Servers that users external to the intranet
	or Internet users might access. It denies almost all write access to the file
	system and the registry. Only the user's home directory and temporary
	directories have write access. Directories with write access do not have Execute
	access. This prevents users from copying executable programs to a directory and
	running them. The registry only grants a user write access for the individual
	user's registry sections. Users cannot change any common registry entries. Users
	can access all user-level Terminal Server tools.
	
	High Security
	-------------
	
	This security restricts users to only a small, well-defined list of applications.
	The primary goal of this level is to completely protect the registry and the
	file system from attack by malicious users. Users can execute only explicitly
	enabled applications.
	
	The C2 Configuration screen shows areas of the system that should be secured and
	their current state. By clicking an entry, you can get more information and the
	option to set the proper security.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
