---
layout: page
title: "Q150856: Microsoft Backup May Not Restore Files or Folders"
permalink: /kb/150/Q150856/
---

## Q150856: Microsoft Backup May Not Restore Files or Folders

{% raw %}

	Article: Q150856
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restore files using Microsoft Backup, you may receive the following
	error message:
	
	  Microsoft Backup:
	  Errors occurred during this operation. Do you want to view them now?
	
	Clicking Yes opens the Error.log file. The Error.log file contains the following
	entry:
	
	  An attempt to restore a file failed because the disk file is the same date or
	  newer than the file being restored.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the original file or folder to Test, perform the
	restore operation again, and then rename the original file or folder back to its
	original name.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
