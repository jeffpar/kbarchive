---
layout: page
title: "Q94640: NetDDE Passwords Must Be Uppercase when Using NDDEShareAdd"
permalink: kb/094/Q94640/
---

## Q94640: NetDDE Passwords Must Be Uppercase when Using NDDEShareAdd

	Article: Q94640
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you receive an invalid password error when accessing a shared ClipBook page
	on another machine, the password may not have been entered from the user
	interface provided in ClipBook. The standard user interface automatically
	converts all entries to uppercase characters, and the programmable interface
	NDDEShareAdd does not. If the password was not entered in uppercase characters,
	the passwords, though identical in all other respects, do not match.
	
	MORE INFORMATION
	================
	
	All passwords must be in uppercase characters before calling NDDEShareAdd. The
	application program interface (API) does not change the password characters to
	uppercase automatically. The API encrypts the passwords in lowercase characters.
	On the server, the password characters entered in the password dialog box are
	automatically changed to uppercase. The encrypted versions of both passwords are
	compared as binary, and if different strings are encrypted, the comparison
	fails.
	
	Tests that use a user interface to have the user enter the password always work
	because that user interface changes the password characters to uppercase before
	calling NDDEShareAdd.
	
	NOTE: Only applications with mixed-case strings in their data or resources
	exhibit this problem.
	
	NDDEShareAdd is a NetDDE command. This only affects users that have created their
	own NetDDE applications, are using a third-party NetDDE application, or are
	accessing the NetDDE interface by using an applications DDE interface.
	
	Additional query words: 3.10 ndde access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
