---
layout: page
title: "Q237547: Backed-Up Files Not Listed When Viewing Catalog for Restore"
permalink: /kb/237/Q237547/
---

## Q237547: Backed-Up Files Not Listed When Viewing Catalog for Restore

{% raw %}

	Article: Q237547
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows NT Backup to view a catalog of backed-up files, some
	files that you backed up may not be listed.
	
	CAUSE
	=====
	
	When Backup reads the catalog, the Restore window may not be able to display all
	of the files because of limitations in the program. The files are on the backup
	tape, even though they may not appear in the Restore window.
	
	WORKAROUND
	==========
	
	When you restore, the files are restored correctly, even though they were not
	displayed in the Restore window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Windows 2000.
	
	
	
	
	Additional query words: ntbackup.exe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
