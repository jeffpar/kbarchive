---
layout: page
title: "Q147589: Location of .Vue File Can Be Customized"
permalink: kb/147/Q147589/
---

## Q147589: Location of .Vue File Can Be Customized

	Article: Q147589
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 
	Operating System(s): WINDOWS
	Keyword(s): XCLN
	Last Modified: 08-MAR-2000
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows NT, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The personal options (click Options on the Tools menu) are saved in a file named
	<username>.vue. For Microsoft Windows version 3.x and Microsoft Windows
	95, the file is stored in the WINDOWS directory, and for Microsoft Windows NT,
	this file is stored in the WINNT35 directory, by default.
	
	Users and administrators concerned about the security of the WINNT35 directory
	have the ability to modify the registry and specify a different location for the
	.vue file.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	The following value can be added to
	
	HKEY_CURRENT_USER
	Software
	 Microsoft
	  Schedule+
	   Application:
	    OptionsFilePath=<drive>:\<path>\<filename>.vue
	
	For example, assume that Joe Smith has a user name of JSmith and his home
	directory is mapped to the H: drive. Therefore, the following value could be
	entered:
	
	  OptionsFilePath=H:\jsmith\user.vue
	
	As long as he has Change permissions for this directory, the preferences file can
	be accessed and modified.
	
	Additional query words: 7.00 registry .vue Schedule plus Citrix Winframe read write
	
	======================================================================
	Keywords          : XCLN 
	Platform          : WINDOWS
	
	=============================================================================
	
