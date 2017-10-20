---
layout: page
title: "Q166299: How to Remove Dial-Up Networking from My Computer"
permalink: /kb/166/Q166299/
---

## Q166299: How to Remove Dial-Up Networking from My Computer

{% raw %}

	Article: Q166299
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	There is no user interface provided in Windows NT to remove the Dial-Up
	Networking link from the My Computer folder on the desktop. To remove this link,
	modify the registry, as described below.
	
	MORE INFORMATION
	================
	
	The registry modification steps to remove the Dial-Up Networking icon from the
	My Computer folder on the Desktop are as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Close the My Computer folder, if it is open.
	
	2. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer
	  \MyComputer\NameSpace
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click Save Key from the Registry menu, and specify a path and file name for
	  the backup copy (that is, NameSpace.Key) to save a copy of the NameSpace key
	  above.
	
	  If you encounter any complications, such as deleting the wrong subkey and so
	  forth in the following editing step, you can simply select the NameSpace key
	  and click Restore from the Registry menu (selecting the NameSpace.Key file
	  and clicking Open to restore the NameSpace key to its original state).
	
	4. Select the below CLSID subkey of the NameSpace key and verify that its only
	  value is Dial-Up Networking.
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer
	  \MyComputer\NameSpace\{a4d92740-67cd-11cf-96f2-00aa00a11dd9}
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	5. With the CLSID key noted in step 5 above selected, click Delete from the Edit
	  menu, and then click Yes to confirm the deletion.
	
	6. Close Registry Editor.
	
	7. Open the My Computer folder and verify that the Dial-Up Networking link is no
	  longer present.
	
	NOTE: You may have to log off for these changes to take effect.
	
	
	Additional query words: prodnt link shortcut dun manually
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
