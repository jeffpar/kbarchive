---
layout: page
title: "Q113909: NTBACKUP Creates Additional Backup Set Description File"
permalink: /kb/113/Q113909/
---

## Q113909: NTBACKUP Creates Additional Backup Set Description File

{% raw %}

	Article: Q113909
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you update Windows NT to Service Pack 2 and back up a network drive from the
	MS-DOS command prompt, the Windows NT Backup program (NTBACKUP) creates a second
	backup set description file. For example, if from drive C you run
	
	  NTBACKUP BACKUP H: /R /D "Backup" /L "C:\Backup.log"
	
	where H is the logical network drive, two backup set description files are
	created: one for drive H and one for drive C. The file for drive C contains no
	information.
	
	CAUSE
	=====
	
	The filename for BACKUP.LOG (specified for the network drive on drive C) is
	incorrectly parsed.
	
	WORKAROUND
	==========
	
	To create only one backup set for the logical network drive, remove this
	parameter from the command:
	
	  /L "C:\Backup.log"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt ntas
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
