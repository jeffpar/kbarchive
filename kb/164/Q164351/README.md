---
layout: page
title: "Q164351: Command Prompt's Treatment of Long File Extensions"
permalink: /kb/164/Q164351/
---

## Q164351: Command Prompt's Treatment of Long File Extensions

{% raw %}

	Article: Q164351
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if a problem occurs. For information about how to do this, view the "Restoring the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you perform file management using wildcards from the command prompt, files
	with long extensions may be unexpectedly displayed, copied, or deleted.
	
	CAUSE
	=====
	
	By default, Windows NT 4.0 mimics the Windows 95 behavior of truncating long
	file extensions under certain operations from the command line. File management
	operations directed at a 3 digit extension may also include files with an
	extension containing more than 3 digits where the first 3 digits match the
	operation argument.
	
	This behavior only affects file management commands such as dir, del, move, and
	copy that are executed at a command prompt. File management operations performed
	by Find, File Manager, or Windows NT Explorer do not perform in this manner.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To control this behavior, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem
	
	2. Edit the following value:
	
	  Win95TruncatedExtensions : REG_DWORD : 0/1 [Default=1]
	
	The following is an example showing the behavior with each setting on a directory
	containing the two files:
	
	  - htm
	  - html
	
	Default behavior of Win95TruncatedExtensions set to 1:
	
	  DEL *.htm - Deletes both 1.htm and 2.html.
	  DEL *.html - Deletes 2.html.
	
	Modified behavior of Win95TruncatedExtensions set to 0.
	
	  DEL *.htm - Deletes 1.htm
	  DEL *.html - Deletes 2.html
	
	3. For the changes to take effect, restart your computer.
	
	Additional query words: remove fat ntfs subdir
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
