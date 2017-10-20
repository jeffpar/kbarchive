---
layout: page
title: "Q150830: More Than One Export Server May Cause Replication To Fail"
permalink: /kb/150/Q150830/
---

## Q150830: More Than One Export Server May Cause Replication To Fail

{% raw %}

	Article: Q150830
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up replication, import directories remain empty. Directories that
	were replicating properly cease to do so.
	
	CAUSE
	=====
	
	There may be another server that is configured to replicate its export
	directories that contain no data; therefore, good data previously imported from
	the export server has now been overwritten with blank directories.
	
	RESOLUTION
	==========
	
	Verify that only one server is configured to export data to specific directories
	on the import servers.
	
	Additional query words: prodnt replication
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	

{% endraw %}
