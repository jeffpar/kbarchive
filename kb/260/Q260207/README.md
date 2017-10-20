---
layout: page
title: "Q260207: Partitions Mounted to an NTFS Folder Are Not Indexed"
permalink: /kb/260/Q260207/
---

## Q260207: Partitions Mounted to an NTFS Folder Are Not Indexed

{% raw %}

	Article: Q260207
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbIIS kbiis500
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Windows 2000 you can choose to mount a partition to a folder on an existing
	Windows NT file system (NTFS) drive. If you then choose to index this folder, or
	any subfolders, with indexing services, you will notice that none of the files
	located on this mounted drive are returned as the result of a search.
	
	CAUSE
	=====
	
	Indexing services do not work with partitions mounted to folders.
	
	WORKAROUND
	==========
	
	To work around this limit, place any data that you require to be indexed on a
	partition mounted to a drive letter, not a folder.
	
	STATUS
	======
	
	This is by design.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbIIS kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
