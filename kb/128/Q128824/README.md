---
layout: page
title: "Q128824: PC Win: User Information Moved with MOVEUSER"
permalink: /kb/128/Q128824/
---

## Q128824: PC Win: User Information Moved with MOVEUSER

	Article: Q128824
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MOVEUSER utility included with versions 3.2 and 3.2a of Microsoft Mail for
	Windows is used to move users between postoffices or delete users from
	postoffices. To move users directly between postoffices, the postoffices must be
	connected by a direct MS-DOS drive. MOVEUSER copies the user's mail information
	to the new postoffice; it does not remove the user from the original
	postoffice.
	
	MOVEUSER can also be used to move users from Microsoft Windows for Workgroups
	version 3.x postoffices as well as Microsoft Mail 2.1 and 3.0 postoffices.
	
	MORE INFORMATION
	================
	
	When you move a user, the following information is transferred:
	
	- User information: mailbox name, user name, and password.
	
	- All of the user's messages stored on the server. The status (read or unread)
	  and message and attachment contents are preserved.
	
	- Private folders stored on the server.
	
	- For Windows and Presentation Manager clients, the user's mail message file
	  (.MMF) and calendar file (.CAL).
	
	- User preferences.
	
	The following information is not transferred:
	
	- Group or shared folders owned by the user.
	
	- Private folders stored on the user's local hard disk.
	
	- The user's personal address list (PAL).
	
	- Template information.
	
	For additional information, please see version 3.2 of Microsoft Mail for PC
	Networks "Administrator's Guide," pages 335-336.
	
	Additional query words: 3.20 3.20a move
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
