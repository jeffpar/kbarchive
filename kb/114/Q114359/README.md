---
layout: page
title: "Q114359: Problems Installing MS-DOS 6.21 Upgrade over Novell DOS 7"
permalink: /kb/114/Q114359/
---

## Q114359: Problems Installing MS-DOS 6.21 Upgrade over Novell DOS 7

{% raw %}

	Article: Q114359
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to upgrade from Novell DOS 7 to MS-DOS 6.21 and you have
	compressed your C drive, you receive the following error message
	
	  There is not enough free space on drive C to install MS-DOS. You cannot
	  install MS-DOS unless your computer has at least 4,200,000 bytes of free disk
	  space on drive C. Exit Setup, and move or delete unneeded files from the
	  drive. For more information about freeing disk space, see 'Diagnosing and
	  Solving Problems.'
	
	CAUSE
	=====
	
	MS-DOS 6.21 Setup was not tested with Novell DOS 7 and is not designed to be
	installed over Novell DOS 7. If you have Novell DOS 7 installed and your C drive
	is compressed, you cannot run MS-DOS 6.21 Setup.
	
	WORKAROUND
	==========
	
	To work around this problem, uninstall your Novell DOS 7 compression and then
	install MS-DOS 6.21.
	
	Additional query words: netware 7.0 removed
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	

{% endraw %}
