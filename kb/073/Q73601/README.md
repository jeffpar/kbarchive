---
layout: page
title: "Q73601: Using Uninstall on an OS/2 System"
permalink: /kb/073/Q73601/
---

## Q73601: Using Uninstall on an OS/2 System

{% raw %}

	Article: Q73601
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run the Microsoft MS-DOS 5 Upgrade Uninstall program on systems that
	have MS OS/2 version 1.0, or IBM and MS OS/2 1.1 and later versions. However, if
	you install MS-DOS 5.0 over IBM OS/2 1.0, you cannot run the Uninstall program.
	
	You can work around this by renaming the IBM OS/2 1.0 system files IBMBIO.COM and
	IBMDOS.COM, so that Setup does not confuse them with DOS system files.
	
	If you run the Uninstall program on a system that had OS/2 on it before the
	upgrade, running CHKDSK may show some lost extended attributes. This happens
	whenever a file that had extended attributes under OS/2 was altered under DOS
	before you ran the Uninstall program.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
