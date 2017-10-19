---
layout: page
title: "Q90482: Password Cache Not Used with UNC File Access"
permalink: /kb/090/Q90482/
---

## Q90482: Password Cache Not Used with UNC File Access

	Article: Q90482
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups allows files to be accessed by using a Universal Naming
	Connection (UNC). When you access a file using this method, the Windows for
	Workgroups password cache file is not used.
	
	For example:
	
	1. You connected to \\SERVER\SHARE, and provided a password. The password is
	  stored in your password cache file.
	
	2. You reconnect to \\SERVER\SHARE and the password is provided by the password
	  cache file. You are not prompted to enter a password.
	
	3. In the Microsoft Write File Open dialog box, you open the file README.TXT on
	  that server by typing
	
	  \\server\share\readme.txt
	
	  where "server" is your server, and "share" is your share.
	
	  This causes Windows for Workgroups to prompt you for a password even though it
	  is in the password cache file.
	
	MORE INFORMATION
	================
	
	This behavior is caused by Windows use of MS-DOS file management. Due to the
	nonreentrant nature of MS-DOS, Windows for Workgroups is unable to open the
	password cache file because it is in the process of opening the file specified
	in the UNC.
	
	Additional query words: 3.10 name naming 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
