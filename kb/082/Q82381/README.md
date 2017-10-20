---
layout: page
title: "Q82381: Program Shell Has Problems After Loading SMARTDrive"
permalink: /kb/082/Q82381/
---

## Q82381: Program Shell Has Problems After Loading SMARTDrive

{% raw %}

	Article: Q82381
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you load SMARTDrive (SMARTDRV.EXE) from within a shell program such as
	Program Manager, SMARTDrive may not be able to detect the shell and you may be
	unable to properly exit the shell program.
	
	
	RESOLUTION
	==========
	
	You should not load SMARTDrive from within a shell program, such as Program
	Manager. SMARTDRV.EXE has the ability to detect some shells, such as a Windows
	MS-DOS virtual machine or the MS-DOS Shell, but there are many more that have
	problems if SMARTDrive is loaded in them. Therefore, always load SMARTDrive
	before running any shell programs.
	
	MORE INFORMATION
	================
	
	SMARTDrive (SMARTDRV.EXE) version 4.0 is included with Microsoft Windows version
	3.1. SMARTDrive (SMARTDRV.EXE) version 4.1 is included with MS-DOS version 6.0.
	
	KBCategory: kbother winenv
	KBSubcategory: win31 winmem winshell
	
	Additional query words: smart drive 3.10 3.1 6.00 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
