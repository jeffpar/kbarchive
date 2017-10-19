---
layout: page
title: "Q102807: Removing a User from a Windows for Workgroups Machine"
permalink: /kb/102/Q102807/
---

## Q102807: Removing a User from a Windows for Workgroups Machine

	Article: Q102807
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have more than one user or logon name on a machine running Windows for
	Workgroups version 3.1 and you want to remove a user name, you can do so by
	modifying the SYSTEM.INI file and removing the user's password list (.PWL) file
	from the Windows directory.
	
	MORE INFORMATION
	================
	
	Use the following procedure to remove a user name:
	
	1. Edit the SYSTEM.INI file using an ASCII text editor (such as the MS-DOS
	  EDIT.COM). This can be done by typing the following at the MS-DOS command
	  prompt:
	
	  edit c:\windows\system.ini
	
	2. In the [PASSWORD LISTS] section, delete the line that pertains to the user
	  name you want to remove, making note of the file to which that line makes
	  reference.
	
	3. Delete the file referenced in the SYSTEM.INI from the proper directory. This
	  is the user's password list file.
	
	The user name should no longer appear for that machine.
	
	Additional query words: 3.10 workgroup groups login
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
