---
layout: page
title: "Q136597: Drives May Appear to Be Missing When Using DriveSpace"
permalink: /kb/136/Q136597/
---

## Q136597: Drives May Appear to Be Missing When Using DriveSpace

{% raw %}

	Article: Q136597
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	After you perform a DriveSpace operation (such as compressing an existing drive)
	or make a change to your computer's hardware configuration (such as adding a new
	hard disk), one or more of the drives may no longer be available.
	
	CAUSE
	=====
	
	The drives that are no longer available have been hidden by DriveSpace.
	
	RESOLUTION
	==========
	
	To make the drives available again, use one of the following methods:
	
	- If the hidden drive is a host drive for a DriveSpace compressed drive, you
	  may be able to make the drive available using DriveSpace. To do so, follow
	  these steps:
	
	  1. Click the Start button, point to Programs, point to Accessories, point to
	     System Tools, and then click DriveSpace.
	
	  2. Click the compressed drive for which the hidden drive is a host drive, and
	     the click Properties on the Drive menu.
	
	  3. Click the Hide Host Drive check box to clear it.
	
	  4. Click OK.
	
	- If the hidden drive is not a host drive for a DriveSpace compressed drive,
	  you must modify the value for the "NoDrives" DWORD in the following registry
	  key to make the drive available:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies
	     \Explorer
	
	  To make all the drives available, change the value for NoDrives to 00. If you
	  want to hide specific drives, you can do so using DriveSpace.
	
	  For information about how to edit the registry, view the Changing Keys And
	  Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
