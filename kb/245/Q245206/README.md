---
layout: page
title: "Q245206: Cannot Delete a Partition from a Broken Mirror Set."
permalink: kb/245/Q245206/
---

## Q245206: Cannot Delete a Partition from a Broken Mirror Set.

	Article: Q245206
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete a partition from a broken mirror set on a computer
	running Microsoft Windows NT Server 4.0, you may receive the following error
	message:
	
	  The drive cannot be locked for exclusive use. Please check to see if some
	  applications are currently accessing the drive. If so, close them and try
	  again.
	
	Deleting the paging file does not resolve this issue.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To work around this behavior:
	
	1. In Disk Administrator, click the partition you are trying to delete.
	
	2. On the Tools menu, click Assign Drive Letter.
	
	3. Click "Do not assign a drive letter", and then click OK.
	
	4. Delete the partition.
	
	5. Add the deleted partition back to the mirror set.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
