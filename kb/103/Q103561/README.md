---
layout: page
title: "Q103561: Clean Start: DblSpace Maintenance Program Runs in Setup Mode"
permalink: /kb/103/Q103561/
---

## Q103561: Clean Start: DblSpace Maintenance Program Runs in Setup Mode

{% raw %}

	Article: Q103561
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you bypass loading DoubleSpace by pressing CTRL+F5 or CTRL+F8 at the
	"Starting MS-DOS..." prompt, the DBLSPACE.BIN file is not loaded.
	
	If you run DBLSPACE.EXE on any uncompressed drive, it operates as if you never
	installed DoubleSpace and therefore enters DoubleSpace Setup. Although this
	doesn't cause any harm or data loss, it can be confusing.
	
	To run the DoubleSpace maintenance program (DBLSPACE.EXE) and change your
	DoubleSpace configuration, restart your computer and then run the DoubleSpace
	maintenance program.
	
	NOTE: This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and
	filenames.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
