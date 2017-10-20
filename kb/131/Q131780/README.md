---
layout: page
title: "Q131780: Using the /E Option With CACLS.EXE"
permalink: /kb/131/Q131780/
---

## Q131780: Using the /E Option With CACLS.EXE

{% raw %}

	Article: Q131780
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	To change user permissions on a Windows NT file system (NTFS) directory or
	file, you must use the /E option in addition to /R (revoke), /G (grant),
	and /P (change) when using CACLS.EXE. If you already have permissions set
	for multiple users on a directory or file and do not use the /E option, all
	user permissions are removed except for the user and permission specified
	on the command line.
	
	The following syntax should be used when modifying user permissions:
	
	  CACLS <filename or directory> /E /R <username>
	  CACLS <filename or directory> /E /G <username>:<permission>
	  CACLS <filename or directory> /E /P <username>:<permission>
	
	where <permission> is R (Read), C (Change - write), or F (Full control).
	
	Type the following at the command line for information on other options:
	
	  CACLS /?
	
	NOTE: The /E option modifies the directory or file ACL instead of replacing
	the ACL with new users and permissions.
	
	
	Additional query words: prodnt ace
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
