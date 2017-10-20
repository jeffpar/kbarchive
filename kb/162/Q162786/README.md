---
layout: page
title: "Q162786: Undocumented CACLS: Group Permissions Capabilities"
permalink: /kb/162/Q162786/
---

## Q162786: Undocumented CACLS: Group Permissions Capabilities

{% raw %}

	Article: Q162786
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CACLS is a Windows NT command-line utility that is used to display or modify
	file or directory access control lists (ACLs). The online help files for CACLS
	do not mention that CACLS will add, modify, or delete group permissions, as well
	as user permissions, from NTFS ACLs.
	
	CACLS can be used to modify the ACLs on files or directories. This ability is
	often useful for adding or deleting a user or group permission without modifying
	other existing permissions. The GUI in File Manager or Windows NT Explorer is
	currently limited to replacing the ACLs.
	
	CACLS can also be used to change permissions for groups with names containing a
	space: when specifying such a group, it is necessary to delimit the name of the
	group with double quotes (for example, "group name").
	
	CACLS cannot be used to create "special" permissions. It is currently limited to
	the permissions No Access, Read, Change, and Full Control.
	
	The "None" permission and the "Deny" parameter in CACLS are equivalent to "No
	Access" in the GUI. The "Revoke" parameter deletes an explicit permission but
	does not prevent the use of permissions that a user might have through
	membership in other groups.
	
	For additional information on automation using CACLS, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135268
	  TITLE : How to Use CACLS.EXE in a Batch File
	
	Examples
	--------
	
	Follow these steps to change the ACLs of all files and directories on drive C to
	allow full control for the Administrators local group:
	
	1. Open a command prompt.
	
	2. Type:
	
	  cacls c:\ /t /e /g Administrators:f
	
	Follow these steps to change the ACLs of all files in the C:\Temp directory (but
	not its subdirectories), to add the read permission for the Domain Users global
	group and the Users local group, and to remove any explicit permissions for the
	Everyone group:
	
	1. Open a command prompt.
	
	2. Type:
	
	  cacls c:\temp\*.* /e /g "Domain Users":r Users:r /r Everyone
	
	MORE INFORMATION
	================
	
	CACLS: Displays or modifies access control lists (ACLs) of files or
	directories.
	
	Usage:
	
	cacls filename [/t] [/e] [/c] [/g user|group:perm] [/r user|group [...]]
	              [/p user|group:perm [...]] [/d user|group [...]]
	
	Parameters:
	
	filename Displays ACLs of specified directory, file or files.
	
	  /t Changes ACLs of specified files in the current directory and all
	     subdirectories.
	
	  /e Edit ACL instead of replacing it.
	
	  /c Continue changing ACLs, ignoring errors.
	
	  /g user|group:perm Grant specified user or group access permissions.
	     perm can be:
	
	     r Read
	     c Change (write)
	     f Full control
	
	  /r user Revoke specified user's or group's access permissions.
	
	  /p user|group:perm Replace specified user's or group's access
	     permissions. perm can be:
	
	     n None
	     r Read
	     c Change (write)
	     f Full control
	
	  /d user|group Deny specified user access.
	
	You can specify more than one file, user, or group in a command. Wildcard
	characters in file and directory names are supported.
	
	Group names containing a space need to be contained in double quotes, for example
	"group name".
	
	Additional query words: security
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
