---
layout: page
title: "Q108077: WFWG Err Msg: Error 59: An Unexpected Network Error..."
permalink: /kb/108/Q108077/
---

## Q108077: WFWG Err Msg: Error 59: An Unexpected Network Error...

	Article: Q108077
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows for Workgroups 3.11 in conjunction with a Windows
	NT Advanced Server or Microsoft LAN Manager domain controller, attempts to
	change a user's domain password may fail and generate the following error
	message:
	
	  Error 59: An unexpected network error has occurred.
	
	CAUSE
	=====
	
	A domain password change request can be denied because of one or more of the
	following reasons:
	
	- The new password is one character in length.
	
	- The new password is shorter than the domain controller requires.
	
	- The new password is on the history list that the domain controller maintains.
	
	RESOLUTION
	==========
	
	A user can change his or her password from within Windows by using the Change
	Domain Password dialog box or by using the NET PASSWORD command at an MS-DOS
	command prompt. To do this:
	
	- From Control Panel, choose the Network icon, Startup, and then Set Password.
	  Type the old and new passwords and choose OK.
	
	  -or-
	
	- At the MS-DOS command prompt, use the following command:
	
	  net password \\<computer> /domain:<name> <user>
	  <oldpassword> <newpassword>
	
	  where <computer> specifies your Windows NT or LAN Manager server,
	  <name> specifies the Windows NT or LAN Manager domain on which you want
	  to change your password, <user> specifies your Windows NT or LAN
	  Manager user name, and <oldpassword> and <newpassword> specify
	  your old and new passwords.
	
	  For more information on the above command, type the following at the MS-DOS
	  command prompt:
	
	  net password /?
	
	MORE INFORMATION
	================
	
	Most domain controllers can be preset to require a specified length and type of
	password. Also, they can be configured to keep a history of the last "x" number
	of passwords for a given user. Normally, the user is not allowed to use any of
	the passwords on the history list. With Microsoft Windows NT and Microsoft LAN
	Manager 2.2 domain controllers, if the new password does not satisfy these
	requirements, the aforementioned error is displayed.
	
	Additional query words: 3.11 error message err msg ntas ntlan lan man
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
