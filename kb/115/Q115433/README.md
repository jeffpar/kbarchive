---
layout: page
title: "Q115433: Mace Utilities Sector Editor Can Corrupt DriveSpace Drive"
permalink: /kb/115/Q115433/
---

## Q115433: Mace Utilities Sector Editor Can Corrupt DriveSpace Drive

{% raw %}

	Article: Q115433
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mace Utilities Sector Editor corrupts an MS-DOS 6.22 DriveSpace compressed
	volume file (CVF).
	
	CAUSE
	=====
	
	This problem occurs if you respond "Yes" to the message that the "In Memory"
	copy of the file allocation table (FAT) should be written to the disk.
	
	WORKAROUND
	==========
	
	To avoid this problem and prevent possible CVF corruption, use MS-DOS 6.22
	ScanDisk to analyze your DriveSpace-compressed drives.
	
	MORE INFORMATION
	================
	
	The Mace Utilities Sector Editor is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: drvspace crosslinks lost clusters cross link linked files corruption data loss
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
