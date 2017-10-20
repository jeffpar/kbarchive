---
layout: page
title: "Q117650: PC Win: MOVEUSER.EXE Causes Invalid MMF After Password Reset"
permalink: /kb/117/Q117650/
---

## Q117650: PC Win: MOVEUSER.EXE Causes Invalid MMF After Password Reset

{% raw %}

	Article: Q117650
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail for Windows, a user can encounter the following
	error message when trying to log into the Windows client after having been moved
	to another postoffice with the MOVEUSER.EXE utility:
	
	  This account is not a valid user of this message file.
	  Please sign in as the correct user."
	
	CAUSE
	=====
	
	This error can indicate that an ADMIN.EXE password recover has been executed on
	the user's mail message file (MMF) before moving the user with MOVEUSER.EXE.
	
	Either the user's ID or password must be consistent with the postoffice records
	before the Windows client can access the user's mailbox. When MOVEUSER moves a
	user to a new postoffice it changes the user's mailbox ID number. If the
	password is reset, the Windows client cannot recognize the password already
	embedded in the MMF because it was never synchronized with the postoffice
	ACCESS2.GLB file upon logging into the Windows client. Without a match, the
	Windows client cannot validate the current password, so it invalidates the MMF.
	
	RESOLUTION
	==========
	
	If the mail administrator wishes to reset the password for the user who is being
	moved, the following steps should be explicitly followed:
	
	1. On the originating postoffice, use the mail administrator program (ADMIN.EXE)
	  to reset the user's password . This is done by selecting Local-Admin,
	  Recover.
	
	2. Login to the user's account to synchronize the local password with the
	  postoffice password.
	
	3. Run MOVEUSER.EXE and move the user to the destination postoffice.
	
	4. Now you may successfully login to the user's account on the destination
	  postoffice.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
