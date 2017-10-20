---
layout: page
title: "Q135203: Not Enough Disk Space to Restore Backed Up Files"
permalink: /kb/135/Q135203/
---

## Q135203: Not Enough Disk Space to Restore Backed Up Files

{% raw %}

	Article: Q135203
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are restoring files with Backup, you may receive the following error
	message:
	
	  There is not enough disk space to continue this operation. Delete one or more
	  files on the disk, and then try again.
	
	The files that are restored before you receive the error message are intact.
	
	CAUSE
	=====
	
	The backup contains more files than will fit on the hard disk. This situation
	may occur if you back up a compressed drive and then restore the files to an
	uncompressed drive.
	
	RESOLUTION
	==========
	
	Since you cannot restore and compress files simultaneously, restore and then
	compress the files in an alternating series of partial operations.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
