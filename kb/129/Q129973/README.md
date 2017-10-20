---
layout: page
title: "Q129973: MS-DOS-Based Program's Setup Causes Blue-Screen Error Message"
permalink: /kb/129/Q129973/
---

## Q129973: MS-DOS-Based Program's Setup Causes Blue-Screen Error Message

{% raw %}

	Article: Q129973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS-based program's Setup, you may receive the following
	error message on a blue screen after you change disks:
	
	  Error reading disk in drive <x>: Please insert disk with serial number
	  <n> in drive <x> Press ENTER for OK or ESC to cancel.
	
	CAUSE
	=====
	
	Windows 95 supports an "Accessed" date stamp that stores the last time a file
	was opened. The error message stated above can occur when a Setup program opens
	a file on a floppy disk but does not close it when you change disks.
	
	
	RESOLUTION
	==========
	
	You may be able to work around this problem by using one of the following
	methods:
	
	- Insert the program's Disk 1 and press ENTER.
	
	- If you write-protect the first disk before you run Setup, Windows 95 may not
	  try to write the Accessed date stamp. Note, however, that some programs
	  require write access to Disk 1 for Setup to run correctly.
	
	
	If you continue to have problems with the application, please contact the
	application's manufacturer about a possible workaround or update.
	
	
	MORE INFORMATION
	================
	
	The following applications have been reported to exhibit this behavior:
	
	- Calendar Creator Plus 5.0 for MS-DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
