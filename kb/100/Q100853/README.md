---
layout: page
title: "Q100853: IO.SYS &amp; MSDOS.SYS File Sizes Don't Change After Uninstalling"
permalink: /kb/100/Q100853/
---

## Q100853: IO.SYS &amp; MSDOS.SYS File Sizes Don't Change After Uninstalling

{% raw %}

	Article: Q100853
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove MS-DOS 6 Upgrade using the Uninstall disk you created during
	installation, IO.SYS and MSDOS.SYS still have the MS-DOS 6 file sizes (the
	original date and time are correct).
	
	CAUSE
	=====
	
	This situation occurs because Uninstall overwrites the MS-DOS 6 IO.SYS and
	MSDOS.SYS files with the previous versions of IO.SYS and MSDOS.SYS but does not
	delete the MS-DOS 6 files first (nor does it truncate the files after
	overwriting them).
	
	MORE INFORMATION
	================
	
	Although this problem occurs with other versions of MS-DOS, the following table
	only shows the files sizes before and after installation and uninstall with
	MS-DOS 5.0 and MS-DOS 6.0.
	
	                                               MS-DOS 5 after
	  File           MS-DOS 5        MS-DOS 6     Unstalling MS-DOS 6
	  ---------------------------------------------------------------
	
	  IO.SYS           33430          40470              40470
	  MSDOS.SYS        37394          38138              38138
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
