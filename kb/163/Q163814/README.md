---
layout: page
title: "Q163814: Directory Replication Errors 3208 and 3216 on an NTFS Partition"
permalink: /kb/163/Q163814/
---

## Q163814: Directory Replication Errors 3208 and 3216 on an NTFS Partition

{% raw %}

	Article: Q163814
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up a computer running Windows NT Server to export to itself using the
	Directory Replicator service on an NTFS partition, you receive the following
	errors:
	
	  Event 3208 "The replication service could not update directory tmptree.rp$
	  from source on %3 due to error 183"
	
	  Event 3216 "The system error 5 occurred"
	
	However, if you replicate to a FAT partition, the errors do not occur.
	
	CAUSE
	=====
	
	The errors may result from corruption in the NTFS permissions assigned to the
	export files.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Stop replication and copy the export files from the NTFS partition to a FAT
	  partition.
	
	2. Delete the export files on the NTFS partition.
	
	3. Replace those files with the files you copied to the FAT partition.
	
	NOTE: Copying the files from an NTFS partition to a FAT partition removes the
	NTFS-specific attributes. You will also need to delete the Tmptree.rp$ directory
	created in the import directory.
	
	After this procedure is complete, replication should proceed normally.
	
	Additional query words: replicater
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
