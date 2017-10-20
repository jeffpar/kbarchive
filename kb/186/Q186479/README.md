---
layout: page
title: "Q186479: Terminal Server Commands: MIGRATE"
permalink: /kb/186/Q186479/
---

## Q186479: Terminal Server Commands: MIGRATE

{% raw %}

	Article: Q186479
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIGRATE migrates selected Windows 3.1 .ini file settings.
	
	Syntax
	------
	
	migrate [/ini] [/group] [/regdata] [/?] [path]
	
	Parameters
	----------
	
	path
	
	The path name of the directory containing the files you want to migrate. If this
	parameter is not specified, the current directory is used.
	
	/ini
	
	Migrates selected Windows 3.1 .ini file settings, including:
	
	- File associations.
	
	- Settings for Windows-based applications.
	
	- Desktop configuration settings, except for screen savers.
	
	/group
	
	Allows migrating program groups that do not exist on the Terminal Server.
	
	/regdata
	
	Allows migrating Windows 3.1 registry data (REG.DAT), including the OLE
	database.
	
	/? (help)
	
	Displays the syntax for the command and information about the command's options.
	
	MIGRATE -- Additional Notes
	---------------------------
	
	The migrate command can be used to migrate selected Windows 3.1 settings to a
	Terminal Server. If the Terminal Server was installed into an existing Windows
	3.1 directory, migration of these settings probably occurred when you first
	logged on. This command can also be used to manually migrate settings from other
	.ini or Program Group files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
