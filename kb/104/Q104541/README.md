---
layout: page
title: "Q104541: PC Tools SI Doesn't See Automounted DoubleSpace Floppy Disk"
permalink: /kb/104/Q104541/
---

## Q104541: PC Tools SI Doesn't See Automounted DoubleSpace Floppy Disk

{% raw %}

	Article: Q104541
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The PC Tools SI utility does not display information for an automatically mounted
	DoubleSpace-compressed floppy disk.
	
	When PC Tools SI reads the floppy disk, it is mounted, but the Automount code
	confuses the application.
	
	
	RESOLUTION
	==========
	
	To work around this problem, run PC Tools SI twice or mount the floppy disk
	before you run PC Tools SI.
	
	MORE INFORMATION
	================
	
	PC Tools SI is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
