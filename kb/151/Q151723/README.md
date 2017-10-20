---
layout: page
title: "Q151723: How to Re-create Default Icons Deleted from Desktop"
permalink: /kb/151/Q151723/
---

## Q151723: How to Re-create Default Icons Deleted from Desktop

{% raw %}

	Article: Q151723
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the default icons are deleted from a Windows NT desktop, they can be
	recreated with the Registry.
	
	MORE INFORMATION
	================
	
	When a desktop icon is deleted, the registry entry for that icon is also deleted
	in one section of the Registry (details below). However, the icon information is
	maintained elsewhere in the Registry (details below) and this information can be
	copied back to the original location to restore the icons.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	1. Use Regedit.exe to search the HKEY_CLASSES_ROOT\CLSID portion of the registry
	  for the string associated with the icon you want to recreate.
	
	2. Right-click on the 32-character number and choose Rename. With the ID number
	  highlighted, press CTRL+INSERT to copy the text to the Clipboard.
	
	3. Locate Hkey_local_machine\software\microsoft\windows\currentversion
	  \explorer\desktop\namespace in the registry and choose Edit\Add Key.
	
	4. Press SHIFT+INSERT to paste in the 32-character identifier.
	
	5. In the right-hand pane of REGEDIT, double-click on the default icon and type
	  the title to be associated with the desktop icon in the Value data field.
	
	6. Log off to make the changes take effect.
	
	This procedure works for these desktop icons:
	
	  Icon name               Key value
	  --------------------------------------------------------------
	  Inbox                   {00020D76-0000-0000-C000-000000000046}
	  Recycle Bin             {645FF040-5081-101B-9F08-00AA002F954E}
	  The Internet            {FBF23B42-E3F0-101B-8488-00AA003E56F8}
	  The Microsoft Network   {00028B00-0000-0000-C000-000000000046}
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
