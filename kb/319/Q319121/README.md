---
layout: page
title: "Q319121: Cannot Remove MSN Explorer User Tile(s) In Windows XP--Deleted T"
permalink: /kb/319/Q319121/
---

## Q319121: Cannot Remove MSN Explorer User Tile(s) In Windows XP--Deleted T

	Article: Q319121
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	- The Microsoft Network Version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You sign in to MSN Explorer and attempt to remove user tile(s). After removing
	the user tile(s), you sign out of MSN Explorer and the user tile(s) still
	appears on the MSN Explorer Welcome screen.
	
	CAUSE
	=====
	
	You set up .NET Passport to automatically sign in to your Passport when you
	start Windows XP. You must disable the automatic .NET Passport logon feature in
	Windows XP to resolve this issue.
	
	RESOLUTION
	==========
	
	To disable the automatic .NET Passport logon feature in Windows XP
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click User Accounts icon.
	  Note: If more than one Windows XP user is listed, click the icon for the
	  Windows XP user who created the MSN Explorer user tile you want to remove.
	
	3. Click the Manage my Network Passwords link.
	
	4. Select the .NET Passport profile in the list displayed, then click the Remove
	  button.
	  A box appears stating "The selected logon information will be deleted".
	
	5. Click OK.
	
	6. Quit Stored User Name and Passwords, User Accounts, and Control Panel.
	  You should now be able to remove your user tile by signing in to MSN Explorer,
	  clicking Help and Settings, clicking Accounts, then clicking Remove User.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSN700
	Version           : :6.1
	Issue type        : kbhowto
	
	=============================================================================
	
