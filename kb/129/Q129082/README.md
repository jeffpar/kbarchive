---
layout: page
title: "Q129082: Cannot Access Shared or Password-Protected Resource"
permalink: /kb/129/Q129082/
---

## Q129082: Cannot Access Shared or Password-Protected Resource

	Article: Q129082
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a shared or password-protected resource on a computer
	running an international version of Windows 95 (such as German) from a computer
	running the U.S. version of Windows 95, you may receive one of the following
	error messages, even though you have entered the correct share name or
	password:
	
	  \\<computername>\<sharedresourcename>
	  The network name cannot be found.
	
	  The password is incorrect. Try again.
	
	CAUSE
	=====
	
	The password or the share name on the computer running the international version
	of Windows 95 may contain one or more of the following extended ASCII characters
	(the decimal value of these characters is listed):
	
	  131, 133, 136, 137, 138, 139, 140, 141, 147, 149, 150, 141, 152,
	  161, 162, or 163
	
	These characters can cause problems for computers running the U.S. version of
	Windows 95.
	
	WORKAROUND
	==========
	
	Change the password or share name on the computer running the international
	version of Windows 95 so that it does not contain any of the extended ASCII
	characters listed above.
	
	MORE INFORMATION
	================
	
	Shared Folders
	--------------
	
	Using one or more of the extended ASCII characters listed above in the share name
	of a shared folder on a computer running an international version of Windows 95
	causes the folder to be inaccessible by a computer running the U.S. version of
	Windows 95.
	
	When it is connecting to a shared folder, Windows 95 converts the characters in
	the share name to upper case. The characters listed above do not have uppercase
	equivalents on a computer running the U.S. version of Windows 95, so the share
	name does not match after Windows 95 converts the name.
	
	
	Password Validation
	-------------------
	
	Using one or more of the extended ASCII characters listed above in a password
	string for a shared resource on a computer running an international version of
	Windows 95 causes that resource to be inaccessible by a computer running the
	U.S. version of Windows 95.
	
	Shared resource passwords are not case sensitive in Windows 95. When a password
	is entered, Windows 95 converts the password to upper case and then encrypts the
	password and compares it to the original password. The extended ASCII characters
	listed above do not have uppercase equivalents on a computer running the U.S.
	version of Windows 95, so the password does not match after it is converted to
	upper case.
	
	NOTE: If the two computers are running the same national version of Windows 95,
	the passwords do match.
	
	For further information, see:
	
	  Q266807 NetHood: Unable to Access Network Share With Euro Character
	
	
	Additional query words:
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbWin95
	Version           : :
	
	=============================================================================
	
