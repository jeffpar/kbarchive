---
layout: page
title: "Q105132: Do Not Uninstall After Changing Your Partitioning"
permalink: kb/105/Q105132/
---

## Q105132: Do Not Uninstall After Changing Your Partitioning

	Article: Q105132
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS Uninstall does not check the partition table before
	uninstalling. Since Uninstall rewrites the partition table (using BPB0.DAT), you
	may experience data loss if you have changed your partitioning.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, 6.0,
	6.2, 6.21, and 6.22. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.20 fdisk windows nt ntfs os/2 os2 repartition
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
