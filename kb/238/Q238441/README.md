---
layout: page
title: "Q238441: Remove Personalized Settings for New Users After Installing IE5"
permalink: /kb/238/Q238441/
---

## Q238441: Remove Personalized Settings for New Users After Installing IE5

{% raw %}

	Article: Q238441
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When a user first logs on to a computer running Windows NT and Microsoft
	Internet Explorer 5 is installed, Internet Explorer 5 creates personalized
	settings for that user. These are settings for Microsoft Outlook Express,
	Windows Address Book, Internet Connection Wizard, and so forth.
	
	The personalized settings routine runs for a new user, even though the default
	user profile may be customized and the settings do not need to be changed.
	
	There are two ways that a new User.dat file can be updated with Internet Explorer
	settings: if the Windows Desktop Update component is installed, Explorer.exe and
	Shdocvw.dll perform this task; if not, Loadwc.exe will do it. Loadwc.exe and
	Explorer.exe are always in memory. When a new user profile is created, one of
	these components will compare the data in the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ActiveSetup\InstalledComponents
	
	  HKEY_CURRENT_USER\Software\Microsoft\ActiveSetup\InstalledComponents
	
	If the data matches, no action is taken. If it does not match, the two hives are
	synchronized.
	
	A variable named StubPath is specified for most component keys in the
	aforementioned section of HKEY_LOCAL_MACHINE. The data in that variable provides
	instructions about what that setting in the new user profile should be. It
	points to a program file or .inf files. For program files, it commonly contains
	instructions, such as values and APIs. For .inf files, it points to a specific
	section containing the data to be added to the User hive.
	
	For each key that is not a match in both the User and Machine hives, the key is
	created in User (if it does not exist), and the StubPath is run to set its
	variable. This results in the User keys being updated with the correct data.
	
	Hive synchronization occurs in only one of the following scenarios:
	
	- When a new user profile is created after Internet Explorer has been
	  installed.
	
	- The first time a user logs on after Internet Explorer has been installed on a
	  computer that already has multiple profiles.
	
	- When any user installs a newer version of one of the components.
	
	- When a user on a multiple-user system uninstalls Internet Explorer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To prevent the personalized settings from being created:
	
	1. Start Registry Editor (Regedit).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  Software\Microsoft\Active Setup\Installed Components
	
	3. On the Edit menu, click Find. Type in "STUBPATH" (without quotes), and then
	  click Find Next.
	
	4. Delete the string value named StubPath. Be sure to delete the StubPath value
	  located in the Installed Components section of the registry only.
	
	5. Continue this procedure until all values named StubPath are deleted from the
	  Installed Components section of the registry.
	
	6. Close the Registry Editor.
	
	Care should be taken to leave the Installed Components registry key and all of
	the other values underneath Installed Components. Deleting the Installed
	Components registry key may lead to problems with other programs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
