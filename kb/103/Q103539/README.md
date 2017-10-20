---
layout: page
title: "Q103539: Running FASTOPEN and CHKDSK Removes File Attributes on CVF"
permalink: /kb/103/Q103539/
---

## Q103539: Running FASTOPEN and CHKDSK Removes File Attributes on CVF

{% raw %}

	Article: Q103539
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you run FASTOPEN and then CHKDSK on a DoubleSpace-compressed drive, the file
	attributes on the corresponding compressed volume file (CVF) on the host drive
	are cleared. For example, if your compressed drive is C, your host drive is H,
	and you run FASTOPEN C: and then CHKDSK C:, the system, hidden, and read-only
	attributes on H:\DBLSPACE.000 are all removed.
	
	WORKAROUND
	==========
	
	To work around this problem, restart your computer to have DoubleSpace reset the
	file attributes.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
