---
layout: page
title: "Q135965: More Disk Space Used After DriveSpace 3 Compression"
permalink: /kb/135/Q135965/
---

## Q135965: More Disk Space Used After DriveSpace 3 Compression

{% raw %}

	Article: Q135965
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you compress a drive with DriveSpace 3, the drive's properties may
	indicate that the amount of space used on the drive has increased, even though
	no new files were added.
	
	CAUSE
	=====
	
	When you compress a drive with DriveSpace 3, a larger cluster size is used on
	the drive, and small files appear to use up more space than on a drive with
	smaller clusters. However, DriveSpace 3 uses an efficient allocation method that
	actually frees up wasted space within clusters.
	
	MORE INFORMATION
	================
	
	DriveSpace 3 uses 32K clusters. Most host drives less than 1 gigabyte in size
	use clusters smaller than 32K.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
