---
layout: page
title: "Q125255: PC Win: How Users Are Validated Against MMF Files"
permalink: /kb/125/Q125255/
---

## Q125255: PC Win: How Users Are Validated Against MMF Files

{% raw %}

	Article: Q125255
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0, 3.0b, 3.2, and 3.2a of Microsoft Mail for Windows, users logged
	on to the mail system are validated for access to the postoffice, as well as to
	their message file (.MMF). Changes recorded in a user's account on a postoffice
	will not be propagated into the .MMF until the next time the user logs into
	Mail.
	
	MORE INFORMATION
	================
	
	When you log into the postoffice, the mailbox name and password are used as the
	credentials to validate you with the postoffice. If the information does not
	match the values stored on the postoffice, the following error will be
	returned:
	
	  The mailbox name or password is incorrect.
	
	Once you have been validated by the postoffice, the Mail client then uses the
	your Hex ID value, retrieved from the access files in conjunction with the
	password, to validate you against the MMF.
	
	If both your Hex ID and password match, the your .MMF is opened and you log in
	normally.
	
	If either one of the two values does not match, the errant value will be updated
	to match the record the postoffice contains for this value. Two common examples
	of this are resetting the password and moving an account to a different
	postoffice with MoveUser.
	
	In the case of a password reset, the password stored in the access files is
	changed by the Administrator. Then, when you log into the Windows client for the
	first time after the reset, the password field in the MMF will be different from
	the password in the access files. The Mail client will then update the MMF's
	password field to match that of the postoffice.
	
	In the case of MoveUser, your account is created on the new postoffice with a new
	Hex ID. When you log into the Windows client on the new postoffice the first
	time, the password will match, but the Hex ID will not. The Mail client will
	then update the Hex ID within the MMF.
	
	If neither the Hex ID nor the password matches, the Mail client will return the
	following error:
	
	  This account is not a valid user of this message file.
	
	This can happen when an Administrator resets a user's password and moves that
	user with MoveUser without allowing the user to sign on between the reset and
	move. Since the MMF will have the old Hex ID and password, the user will get the
	above error message.
	
	Additional query words: 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
