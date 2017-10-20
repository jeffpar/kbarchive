---
layout: page
title: "Q90554: DoubleSpace Drives Not Viewable under Windows NT"
permalink: /kb/090/Q90554/
---

## Q90554: DoubleSpace Drives Not Viewable under Windows NT

{% raw %}

	Article: Q90554
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; winnt:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	When using MS-DOS DoubleSpace with Windows NT configured for Dual Boot, you
	cannot see your compressed files or run your MS-DOS-based programs when running
	MS-DOS Prompt under Windows NT.
	
	CAUSE
	=====
	
	To accomplish disk compression, DoubleSpace uses a device driver (loaded at
	system startup) to intercept disk reads and writes from the command line and
	MS-DOS-based applications. When you run MS-DOS Prompt under Windows NT, the
	DoubleSpace device driver is not loaded.
	
	Additional query words: 6.0 6.20 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; winnt:3.1
	
	=============================================================================
	

{% endraw %}
