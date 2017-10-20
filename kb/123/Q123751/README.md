---
layout: page
title: "Q123751: DriveSpace Utility Creates DoubleSpace CVFs in Windows 95"
permalink: /kb/123/Q123751/
---

## Q123751: DriveSpace Utility Creates DoubleSpace CVFs in Windows 95

{% raw %}

	Article: Q123751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 can mount, read from, and write to both MS-DOS 6.0 and 6.2
	DoubleSpace (MRCI1) and MS-DOS 6.22 DriveSpace (MRCI2) drives in protected mode
	and real mode. The DriveSpace utility in Windows 95 can mount, unmount, resize,
	format, delete, change estimated compression ratio, uncompress, show properties
	of, and so on, for both DoubleSpace and DriveSpace drives.
	
	When the DriveSpace utility creates a new drive (either by compressing an
	existing drive, or by creating a new, empty compressed drive), it creates it in
	DoubleSpace format (MRCI1). The reason for this is that during beta testing,
	Microsoft determined DoubleSpace is more commonly used on systems not running
	Windows 95. This does not, in any way, suggest you should use DoubleSpace in
	place of DriveSpace. The code for each has been tuned in Windows 95 to make them
	substantially faster than the compression in MS-DOS 6.x.
	
	Additional query words: dxxspace bin vxd
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
