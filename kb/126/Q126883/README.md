---
layout: page
title: "Q126883: Changing Windows and NT Domain Passwords Causes Error Messages"
permalink: kb/126/Q126883/
---

## Q126883: Changing Windows and NT Domain Passwords Causes Error Messages

	Article: Q126883
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change your Windows password to match your Windows NT Domain
	password when you are changing your Windows NT Domain password, you receive one
	of the following error messages:
	
	  Unable to change the password for Windows NT because of the following error:
	  Access has been denied. For more information, contact your system
	  administrator.
	
	  Unable to change the password for Windows NT because of the following error:
	  This password cannot be used now.
	
	The Windows password is changed, but the Windows NT Domain password is not
	changed.
	
	CAUSE
	=====
	
	In the case of the first error message, the Windows 95 password is changed to
	match the Windows NT Domain password. Windows NT will be asked to change your
	Domain password to an identical password. This should not affect usability. You
	should ignore the error message and continue.
	
	In the case of the second error message, you are trying to use a password that is
	ineligible because it has previously been used as a Windows NT Domain password
	and the conditions set by the Network Administrator restricting the re-use of
	this password have not expired. Ignore the error message to continue changing
	the Windows 95 password or choose a valid password to also change the Windows NT
	Domain password.
	
	MORE INFORMATION
	================
	
	To change your password, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Passwords icon.
	
	3. Click the Change Windows Password button.
	
	4. Click the Windows NT check box to select it.
	
	5. Click the OK button.
	
	6. Type your old and new passwords in the Change Windows Password dialog box and
	  then click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
