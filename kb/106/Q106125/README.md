---
layout: page
title: "Q106125: DBLSPACE /UNCOMPRESS Does Not Remove DBLSPACE.SYS Entry"
permalink: /kb/106/Q106125/
---

## Q106125: DBLSPACE /UNCOMPRESS Does Not Remove DBLSPACE.SYS Entry

{% raw %}

	Article: Q106125
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you use the DBLSPACE /UNCOMPRESS command to uncompress the last mounted
	compressed drive, DoubleSpace may not remove the DBLSPACE.SYS line from the
	CONFIG.SYS file.
	
	CAUSE
	=====
	
	This problem occurs when any portion of the DBLSPACE.SYS line contains one or
	more lowercase letters. For example, the following line would not be removed
	because of the lowercase letter e:
	
	  DeVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE
	
	WORKAROUND
	==========
	
	To work around this problem, edit the CONFIG.SYS file and manually remove the
	DBLSPACE.SYS line.
	
	MORE INFORMATION
	================
	
	The DBLSPACE.SYS line contains lowercase characters only if it has been modified
	by a user. If this line remains in the CONFIG.SYS file, DoubleSpace does not
	generate an error message or alert the user of any problems when you boot.
	Although it is present in the CONFIG.SYS file, the DoubleSpace driver does not
	load into memory because DBLSPACE.BIN has been removed from the root directory
	of the boot drive.
	
	
	Additional query words: 6.20 Dblspace Uncompress sys
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
