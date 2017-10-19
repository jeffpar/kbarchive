---
layout: page
title: "Q48901: Mac Wkst: Err Msg: &quot;Unknown Name&quot; or &quot;Incorrect Password&quot;"
permalink: /kb/048/Q48901/
---

## Q48901: Mac Wkst: Err Msg: &quot;Unknown Name&quot; or &quot;Incorrect Password&quot;

	Article: Q48901
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail, the error message "Unknown name" or "Incorrect Password" is
	displayed during the automatic sign-in if one of the following is true:
	
	- The Network Manager or the user changed the name or password. In this case,
	  the automatic sign-in routines still have the old name or password recorded.
	  For Mail to enter the new name or password, the user must update the
	  name/password information in the Mail Sign-In Preferences window.
	
	- The user switched servers during the previous session. To connect to the
	  correct server, cancel the auto sign-in and reselect the server you are
	  trying to connect to.
	
	MORE INFORMATION
	================
	
	If a user uses the automatic sign-in feature of Mail, choosing a different
	server during the same session overwrites the server name and network zone
	recorded in the auto sign-in routines.
	
	For example, a user has two accounts on two different servers: on SERVER-A, the
	account name is "Joe Doe"; on SERVER-B, the account name is "Mr Doe".
	
	The user automatically signs in on SERVER-A (as Joe Doe). He checks his mailbox
	and then decides to sign in on SERVER-B (as Mr Doe). If he restarts the
	Macintosh now, the Mail auto sign-in procedure will display the error message
	"Unknown name." The name used in the auto sign-in is still "Joe Doe"; however,
	the server is now SERVER-B, which is the last server the user was connected to.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
