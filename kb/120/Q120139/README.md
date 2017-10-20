---
layout: page
title: "Q120139: Cannot Interactively Boot Windows 95 with Hardcard Drives"
permalink: /kb/120/Q120139/
---

## Q120139: Cannot Interactively Boot Windows 95 with Hardcard Drives

{% raw %}

	Article: Q120139
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
	
	After you press the F8 key at the "Starting Windows" message or choose Previous
	Operating System from the Windows Startup menu, Windows 95 still loads.
	
	CAUSE
	=====
	
	If a hard disk drive requires that device drivers (such as a hardcard driver)
	load from the CONFIG.SYS file, an interactive boot is not possible. Such devices
	are read-only until their drivers are loaded.
	
	WORKAROUND
	==========
	
	To work around this situation, use a system disk from the previous operating
	system and boot from the floppy disk drive.
	
	MORE INFORMATION
	================
	
	Most hardcards must load drivers from the CONFIG.SYS file to provide read and
	write capabilities. If these device drivers do not load, you can only read
	information from the hard disk. Without the ability to write information to the
	hard disk, Windows 95 cannot rename the CONFIG.DOS, AUTOEXEC.DOS, IO.DOS, and
	MSDOS.DOS files to boot to MS-DOS. (Other operating systems may use different
	filenames.) This forces Windows 95 to boot using the Windows 95 IO.SYS file.
	Because the file-rename process occurs before the CONFIG.SYS file is read, the
	device drivers are not yet loaded; therefore, the files cannot be renamed.
	
	Additional query words: plusdrv.sys atdoshc2.sys atdosxl.sys plus quantum development hard card
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
