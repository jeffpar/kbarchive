---
layout: page
title: "Q94753: WinLogin: /U:USERNAME Does Not Recognize Spaces"
permalink: /kb/094/Q94753/
---

## Q94753: WinLogin: /U:USERNAME Does Not Recognize Spaces

	Article: Q94753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinLogin does not recognize a space in a user's login name when using the
	"/U:USERNAME" command switch to start WinLogin. Some networks support a user
	name that contains a space (example: Banyan Vines). If the user name contains a
	space, you cannot use the /U:USERNAME" command switch.
	
	MORE INFORMATION
	================
	
	The "/U:USERNAME" option specifies a name of the user logging on, and if the
	name matches that of the last user logged on, the user's backup files are used
	to start Windows. This decreases the time needed to start Windows because
	WinLogin does not have to build the configuration files; instead, it uses the
	backup .INI files stored in the Windows directory.
	
	On a Banyan Vines network, it's possible to have a space in a user's login name.
	It is also possible, when setting up the WinLogin database file, to also add a
	space for the user name. When WinLogin is started, it looks at who is logged in
	and loads that user's files. However, if the /U:USERNAME switch is used with a
	name that contains a space (example JOHN <SPACE.> SMITH) it will not work
	properly.
	
	In the example above, WinLogin will try to find the user "JOHN"; it will not find
	"JOHN" and will prompt you with the following choices before entering Windows:
	
	- Use the last user's settings
	
	  -or-
	
	- Use the default user's settings
	
	  -or-
	
	- Exit
	
	Additional query words: 1.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
