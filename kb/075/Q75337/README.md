---
layout: page
title: "Q75337: INFO: Program Manager Restrictions Settings"
permalink: /kb/075/Q75337/
---

## Q75337: INFO: Program Manager Restrictions Settings

{% raw %}

	Article: Q75337
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 10-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows version 3.1, a new section will be added to the PROGMAN.INI
	initialization file to allow system and network administrators to restrict the
	functionality of the Program Manager to make it better suited to handle shared
	files.
	
	There are five new options available to prevent a user from modifying his group's
	configuration or from running untrusted software. These options appear in the
	section labeled [Restrictions]. This article details each of the options below.
	
	MORE INFORMATION
	================
	
	[Restrictions]
	
	  NoRun=[0/1]
	
	     When the NoRun switch is set to 1, the Run command on the <B>File</B>
	     menu is disabled. The default value of this option is 0 (allow
	     File Run).
	
	  [Restrictions]
	  NoClose=[0/1]
	
	     When the <B>NoClose</B> option is set to 1, this option prevents the
	     user from exiting the Program Manager, through the <B>File</B> menu,
	     the <B>System</B> menu, the <B>ALT+F4</B> accelerator or the             TaskManager. The default value of this option is 0 (allow exit).
	
	  [Restrictions]
	  NoSaveSettings=[0/1]
	
	     When the <B>NoSaveSettings</B> option is set to 1, this option             prevents the user from saving the main window position and the load       order of the groups. It also disables the "Save Settings on Exit"
	     command on the <B>Options</B> menu. The default value of this option       is 0 (allow the user to save settings).
	
	  [Restrictions]
	  NoFileMenu=[0/1]
	
	     When the <B>NoFileMenu</B> option is set to 1, this option disables        the <B>File</B> menu entirely. All commands on this menu are disabled       as well. The default value of this option is 0 (the <B>File</B> menu       is enabled).
	
	  [Restrictions]
	  EditLevel=<value>
	
	     This <B>EditLevel</B> option controls the extend to which a user can
	     modify read/write groups (shared, read-only groups may never be
	     modified). The following values are recognized:
	
	        0 Allow any change (default)
	        1 User cannot create, delete, or rename groups
	        2 Value 1 restrictions; also, user cannot create or delete
	          items
	        3 Value 2 restrictions; also, user cannot change item command
	          lines
	        4 Value 3 restrictions; also, user cannot change any item
	          property
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
