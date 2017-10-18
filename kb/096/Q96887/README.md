---
layout: page
title: "Q96887: PC WRmt: Changing the User-Information Data Files"
permalink: kb/096/Q96887/
---

## Q96887: PC WRmt: Changing the User-Information Data Files

	Article: Q96887
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are four methods to change the data files that Microsoft Mail Remote
	version 3.2 uses, as follows:
	
	- Select Options from the Mail menu, then choose the Server button
	
	- Copy new user data files before starting Mail Remote for Windows
	
	- Delete specific user data files before starting Mail Remote for Windows
	
	- Reinstall Mail Remote for Windows
	
	MORE INFORMATION
	================
	
	To change the user data files without running Mail (the second option above),
	copy the contents of your remote user data disk to the
	<Windows_directory>\MSMAIL\MSRMT\USERINFO directory (by default,
	C:\WINDOWS\MSMAIL\MSRMT\USERINFO). A file in this directory instructs Mail
	Remote for Windows to use the new files to identify your login and mail access.
	Mail prompts for login access according to the user identification in the new
	files.
	
	Mail Remote for Windows prompts each user for a data disk at start up if you
	remove the following user data files from the disk:
	
	- Delete all .GLB files from the <Windows_directory>\MSMAIL\MSRMT\GLB
	  directory
	
	- Delete all files from the <Windows_directory>\MSMAIL\MSRMT\MBG
	  directory
	
	- Delete all files from the <Windows_directory>\MSMAIL\MSRMT\KEY
	  directory
	
	Each time you start Mail Remote for Windows, it prompts for new data files.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
