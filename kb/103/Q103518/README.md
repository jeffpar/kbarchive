---
layout: page
title: "Q103518: DBLSPACE /UNCOMPRESS Doesn't Run ScanDisk After Interruption"
permalink: /kb/103/Q103518/
---

## Q103518: DBLSPACE /UNCOMPRESS Doesn't Run ScanDisk After Interruption

{% raw %}

	Article: Q103518
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS 6.2 DBLSPACE /UNCOMPRESS supports the same restart
	functionality that DBLSPACE /COMPRESS does. If the power is interrupted during
	data-compression or uncompression, DoubleSpace continues appropriately when the
	power is restored.
	
	However, if the power is interrupted before DoubleSpace starts uncommpressing the
	drive (during the ScanDisk phase), DoubleSpace restarts after the power is
	restored but does not run ScanDisk.
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
