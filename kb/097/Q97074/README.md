---
layout: page
title: "Q97074: PC WRmt: Changing the AT&amp;T Driver User Sign In ID or Password"
permalink: /kb/097/Q97074/
---

## Q97074: PC WRmt: Changing the AT&amp;T Driver User Sign In ID or Password

	Article: Q97074
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Remote version 3.2 for Windows permanently associates the
	AT&T User ID you use when you first sign in with the message file it
	creates. Mail creates the <Windows_directory>\MS_ATT.MMF file (by default,
	C:\WINDOWS\MS_ATT.MMF).
	
	To change your user ID and the password associated with it, you must perform the
	following seven steps to create a new AT&T message file.
	
	1. Exit and sign out from Mail Remote for Windows.
	
	2. Use Notepad to open the MSMAIL.INI file in your Windows directory (by
	  default, C:\WINDOWS).
	
	3. Delete any entries in the [ATTTransport] section that begin as follows:
	
	  Password=
	  SecondaryPassword=
	
	4. Edit the MMFStoreName= variable in the [ATTDefaults] section to specify the
	  name of the new message file.
	
	5. Save the changes and close Notepad.
	
	6. Start Mail Remote for Windows. Enter your new User ID and Password.
	
	7. When mail displays the Open Message File dialog box, choose New.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
