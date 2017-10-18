---
layout: page
title: "Q268751: HOWTO: Create a Common Icon for Accessing Terminal Server"
permalink: kb/268/Q268751/
---

## Q268751: HOWTO: Create a Common Icon for Accessing Terminal Server

	Article: Q268751
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up an icon to enable all users to connect to
	Terminal Server using a common session.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In this scenario, multiple users need to log on to the same computer and
	connection to Terminal Server. Using the Terminal Server Client Connection
	Manager, the administrator can create a desktop icon that automatically connects
	to a Terminal Server computer.
	
	However, the icon uses the user profile information that is stored in the
	registry for the user who creates the icon. To change the configuration in the
	registry to use the user profile of a user who logs on to the computer, follow
	these steps:
	
	1. Start Registry Editor (Regedit) and locate the following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client
	
	2. Export this key to the desktop.
	
	3. Open this key in Notepad, and then edit the key by replacing
	  HKEY_CURRENT_USER with HKEY_LOCAL_MACHINE\Import.
	
	4. Save the edited key file, and then quit Registry Editor.
	
	5. Start Registry Editor (Regedt32) and click HKEY_LOCAL_MACHINE to highlight
	  it.
	
	6. Load the Ntuser.dat file from the \Winnt\Profiles\Default User folder as a
	  hive. When prompted, name the new hive Import.
	
	7. Double-click the exported registry file that you had previously edited, to
	  load it.
	
	8. Highlight the Import hive under HKEY_LOCAL_MACHINE, and then unload it.
	
	  Note: You have now modified the Default User Ntuser.dat file to include the
	  information needed for all new users to gain access to the icon.
	
	9. Copy the icon for the Terminal Server session to the desktop while you are
	  logged on as the user who created the session.
	
	10. Copy the icon from the desktop to the Winnt\Profiles\Allusers\Desktop
	  folder.
	
	  Note: All new users who log on can now connect to this session. For current
	  users to connect to this session, export the key
	  HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client from the initial
	  user who created the session. Current users must double-click the key to
	  load it, and then they can gain access to the common Terminal Server
	  session.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
