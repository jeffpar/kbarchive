---
layout: page
title: "Q198771: How to Lock Down Windows NT and Internet Explorer 4.01 Desktop"
permalink: /kb/198/Q198771/
---

## Q198771: How to Lock Down Windows NT and Internet Explorer 4.01 Desktop

{% raw %}

	Article: Q198771
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.01,4.01 Service Pack 1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT security makes it possible to lock down a desktop so a given user has
	access to only one or a few specific programs. On a public kiosk computer, it is
	often important that user access be restricted. This article explains the steps
	that need to be taken to implement this.
	
	1. Create a text file named Lockout.reg. You can cut and paste the following
	  text:
	
	  REGEDIT4
	
	  [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies]
	
	  [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]
	  "NoDriveTypeAutoRun"=dword:00000095
	  "NoFind"=dword:00000001
	  "NoFolderOptions"=dword:00000001
	  "NoFavoritesMenu"=dword:00000001
	  "NoRecentDocsMenu"=dword:00000001
	  "NoSetActiveDesktop"=dword:00000001
	  "NoDesktop"=dword:00000001
	  "NoSetFolders"=dword:00000001
	  "NoSetTaskbar"=dword:00000001
	  "NoSaveSettings"=dword:00000001
	  "NoClose"=dword:00000001
	  "NoNetHood"=dword:00000001
	  "NoRun"=dword:00000001
	  "NoDrives"=dword:00000000
	  "NoTrayContextMenu"=dword:00000001
	  "NoViewContextMenu"=dword:00000001
	
	  [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System]
	  "DisableLockWorkstation"=dword:00000001
	  "DisableTaskMgr"=dword:00000001
	  "DisableChangePassword"=dword:00000001
	
	2. Determine what drives you want the user to be able to access, and then change
	  the value of the "NoDrives" line accordingly. For example:
	
	  To give access to only drive C -> "NoDrives"=dword:fbffff03
	  To give access to drives C and D -> "NoDrives"=dword:f3ffff03
	  To give access to drives A to F -> "NoDrives"=dword:c0ffff03
	
	3. Determine if you want a compact disc to start automatically when you place it
	  in the CD-ROM drive. If you do not want this to happen, change the
	  "NoDriveTypeAutoRun" to:
	
	  "NoDriveTypeAutoRun"=dword:b5000000
	
	4. Determine if you want to enable the user to log off or to shut down the
	  computer. You can disable these by adding one or both of these two lines:
	
	  "NoClose"=dword:00000001
	  "NoLogoff"=dword:00000001
	
	5. Create a new user with User Manager. Set up the menu structure that you want
	  the user to see. This can be done by adding and removing short cuts from the
	  <Windows NT>\Profiles\%USERNAME% and the <Windows
	  NT>\Profiles\All Users folders. For example:
	
	  C:\WINNT\Profiles\NewUser and C:\WINNT\Profiles\All Users.
	
	6. Log on as the new user and set up the environment (screen savers, background,
	  and so on).
	
	7. Find the file you created in the steps above and double-click it.
	
	8. Log back on as the user. You will notice that the desktop is empty and the
	  start menu only has the shortcuts that you configured in step 4. As stated in
	  article Q182439 "How to Disable Start\Help," it is impossible to remove the
	  help item from the start menu. You can disable this by creating a text file
	  named Windows.hlp and copying it over the existing file in the <Windows
	  NT>\System32 folder.
	
	MORE INFORMATION
	================
	
	Here is a description of the items discussed above:
	
	Item                Description 
	----                -----------
	NoDriveTypeAutoRun  Prevents CD-ROM drive from running automatically. 
	NoFind              Removes Find command from Start menu. 
	NoFolderOptions     Removes the Folder Options menu item from the Settings 
	                    menu. 
	NoFavoritesMenu     Removes the Favorites folder from the Start menu. 
	NoRecentDocsMenu    Removes the Documents command from the Start menu. 
	NoSetActiveDesktop  Remove the Active Desktop item from the Settings menu. 
	NoDesktop           Hide all items on desktop. 
	NoSetFolders        Remove folders from Settings/Start menu. 
	NoSetTaskbar        Remove Taskbar from Settings/Start menu. 
	NoSaveSettings      Does not save settings at exit.  
	NoClose             Disables Shut Down command. 
	NoNetHood           Hides Network Neighborhood. 
	NoRun               Removes Run command from Start menu  
	NoDrives            Hides drives in My Computer.  
	NoTrayContextMenu   Removes context menus for tray including the Start  
	                    button, tab control, and clock. 
	NoViewContextMenu   Removes the context menu when you right-click the  
	                    desktop, or when you right-click Explorer in the 
	                    results pane.
	
	NOTE: NoRecentDocsMenu and NoRecentDocsHistory requires Active Desktop to be
	installed; otherwise they do not work.
	
	For additional information about determining the NoDrives availibility mentioned
	above, please see the following article in the Microsoft Knowledge Base:
	
	  Q158457 Defining Local and Remote Drive Visibility Under WinNT 4.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE401WinNT400 kbIE401WinNT400SP1
	Version           : :4.0,4.01,4.01 Service Pack 1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
