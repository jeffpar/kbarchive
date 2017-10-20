---
layout: page
title: "Q96880: Damaged CVFs and Third-Party Repair Software"
permalink: /kb/096/Q96880/
---

## Q96880: Damaged CVFs and Third-Party Repair Software

{% raw %}

	Article: Q96880
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The later versions of most third-party disk repair programs, such as Norton Disk
	Doctor, should work properly with DoubleSpace-compressed drives. However,
	CHKDSK.EXE (which calls DBLSPACE/CHKDSK on DoubleSpace drives) is aware of more
	details about the internal workings of a compressed volume file (CVF) and can
	diagnose and repair problems other software may not find.
	
	WARNING: Before you run any third-party disk repair program on your MS-DOS 6.0
	system, you should verify that the program is compatible with MS-DOS 6.0 and
	with DoubleSpace-compressed drives.
	
	
	MORE INFORMATION
	================
	
	In general, third-party utility software works correctly with DoubleSpace
	drives. For example, Norton Disk Doctor (NDD.EXE) performs its functions exactly
	as it should. However, there are problems that may occur in a DoubleSpace drive
	that most third-party software cannot to detect; these problems can are best
	corrected by running CHKDSK.EXE.
	
	Additional query words: 6.00 double space 3rdparty third party
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
