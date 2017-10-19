---
layout: page
title: "Q130096: PC Win: Err Msg: This Account Is Not a Valid User of this..."
permalink: /kb/130/Q130096/
---

## Q130096: PC Win: Err Msg: This Account Is Not a Valid User of this...

	Article: Q130096
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, 3.2, and 3.2a of Microsoft Mail for Windows, under
	certain conditions, you may receive the following error message when you log
	into the postoffice:
	
	  This account is not a valid user of this message file
	
	CAUSE
	=====
	
	The criteria contained in the Mail Message File (MMF) does not match your
	information on the postoffice. When this message is seen, it indicates that you
	are being properly validated by the postoffice, and the information returned
	from the postoffice does not match what is in the MMF.
	
	RESOLUTION
	==========
	
	1. Move the original .MMF to a new location.
	
	2. Log in, and create a new .MMF.
	
	3. From the File menu, choose Import. Point to the original .MMF that you moved.
	  It will then ask you for the .MMF password, at which point you type in the
	  original password to unlock the .MMF file. You can then import the old
	  information into the new MMF.
	
	4. Use the MS-DOS client to log into the postoffice, and change the user's
	  password to the old password (the .MMFs password).
	
	5. Log in to Mail using the Windows client. The password can now be changed from
	  the Windows client without problems.
	
	MORE INFORMATION
	================
	
	For additional information, if the account in question was recently moved using
	the MOVEUSER utility, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q117650 PC Win: MOVEUSER.EXE Causes Invalid MMF After Password Reset
	
	Additional query words: 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
