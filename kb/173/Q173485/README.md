---
layout: page
title: "Q173485: Drive Not Displayed in My Computer After Adding New Hard Disk"
permalink: /kb/173/Q173485/
---

## Q173485: Drive Not Displayed in My Computer After Adding New Hard Disk

{% raw %}

	Article: Q173485
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbui win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server 
	- Microsoft Windows NT Workstation 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you add a new hard disk, either the new hard disk or a preexisting drive
	(such as a CD-ROM drive) may no longer be listed in My Computer. The drive
	remains accessible from a command prompt.
	
	CAUSE
	=====
	
	When you create a compressed hard disk volume, the compressed volume receives
	the drive letter of the original drive (for example, drive C), and the original
	uncompressed (or host) drive is relocated to a higher drive letter (for example,
	drive E).
	
	When the compressed volume is created, Explorer.exe is instructed to not show the
	host drive in My Computer (in this example, drive E.)
	
	When you add a new hard disk, it receives a drive letter assignment (for example,
	drive D), causing all subsequent drive letters to shift by one. For example, if
	a CD-ROM was drive D, it is relocated to drive E.
	
	When Explorer.exe follows its instructions not to show drive E, it inadvertently
	hides the CD-ROM drive instead of the actual host drive (which has now moved to
	drive F).
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To work around this issue delete the "NoDrives" value in the following registry
	key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ 
	     Policies\Explorer
	
	After you make this change, log off and then back on to the computer.
	
	This instructs Explorer.exe to show all drives.
	
	Additional query words: 4.00 missing
	
	======================================================================
	Keywords          : kbui win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
