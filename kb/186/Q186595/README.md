---
layout: page
title: "Q186595: How to Increase Security on Recycle Bin Properties"
permalink: /kb/186/Q186595/
---

## Q186595: How to Increase Security on Recycle Bin Properties

{% raw %}

	Article: Q186595
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	By default, everyone has the right to open and set properties on the Recycle
	Bin. If an administrator wants to remove this right, he or she can make the
	following change in the Terminal Server's registry with REGEDT32.
	
	NOTE: NEVER use Regedit.exe to modify the registry. Microsoft provides Regedit
	because it has registry-searching capabilities that Regedt32 does not have.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Run Regedt32.exe
	
	2. Under HKEY_Local_Machine\Software\Microsoft\Windows\ CurrentVersion\Explorer,
	  locate the key called BitBucket.
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	1. Highlight this key and select Security on the Registry Editor menu.
	
	2. Select Permissions and change permissions for the group Everyone from Special
	  Access to Read. Changes are dynamic.
	
	After making the change, simply exit from Registry Editor. Users will now be
	unable to modify the Recycle Bin properties.
	
	NOTE: The Bitbucket Key is not created by default. If the bitbucket key does not
	appear in the above registry location, follow these steps:
	
	1. Right-click the Recycle Bin and select Properties.
	
	2. When the properties dialog box is open, select OK to exit.
	
	The bitbucket key should now be created.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
