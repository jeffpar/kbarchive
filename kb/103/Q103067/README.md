---
layout: page
title: "Q103067: Error Messages When Using MSUAM and Apple UAM"
permalink: /kb/103/Q103067/
---

## Q103067: Error Messages When Using MSUAM and Apple UAM

	Article: Q103067
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Macintosh user logs on to a Windows NT Advanced Server running Services
	for Macintosh, any error messages displayed will be different depending on which
	user authentication module (UAM) is used. If the Apple UAM is used, then
	regardless of what the error is, the following error message appears:
	
	  Sorry, your password is incorrect. Please reenter it.
	
	A more informative error message is displayed only when using the Microsoft UAM
	(MSUAM). These errors and their messages are documented later in this document.
	
	The only exception to the above is when the user's password has expired and must
	be changed. In this case, the Apple UAM displays the following message:
	
	  Your password must be changed. Please set a new password.
	
	The MSUAM displays the following message:
	
	  Your password has expired on this server. (Then the user will be presented
	  with the Change Password dialog box.)
	
	MORE INFORMATION
	================
	
	The following error messages are displayed only if the Macintosh user used the
	MSUAM when trying to log on to a Windows NT Advanced Server Running SFM.
	
	  You are not allowed to log on to this server at this time. Try again later.
	
	This message indicates that the user's profile does not allow the user to login
	at that time, or that day. This is set in the User Manager: User Properties:
	Hours dialog box.
	
	  You do not have permission to log on to this server from this workstation.
	
	This messages indicates that the user's profile restricts which computers they
	may log on to. This is set in the User Manager: User Properties: Logon From
	dialog box.
	
	  Sorry; your user name is unknown or your password is incorrect. Logon failed.
	
	This message indicates one of several things. The account may have expired; the
	expiration date of an account may be set in the User Manager: User Properties:
	Account Information dialog box. Or the account's name or password has not been
	entered correctly on either the Macintosh or the Windows NT Advanced Server.
	
	  Your account is currently disabled on this server.
	
	This error message indicates that the user's account has been set to Account
	Disabled in the User Manager: User Properties dialog box.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
