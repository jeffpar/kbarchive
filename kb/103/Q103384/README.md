---
layout: page
title: "Q103384: PC WRmt: Mail Remote for Windows Doesn't Accept Incoming Calls"
permalink: /kb/103/Q103384/
---

## Q103384: PC WRmt: Mail Remote for Windows Doesn't Accept Incoming Calls

	Article: Q103384
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Remote for Windows provides no way to accept
	incoming calls from the External Mail program. Windows Remote users can only be
	set up as Request and not as Call/Request.
	
	Versions of the Mail Remote client earlier than version 3.2 support the use of
	the Listen program. The Listen program is a terminate-and-stay-resident (TSR)
	program that allows the user's machine to interrogate the phone line for
	incoming mail from the External Mail program while the user operates other
	programs on his or her machine. In this case, the Mail administrator would set
	up the user to be a Call/Request user (this procedure is explained in Chapter 10
	of the Microsoft Mail version 3.2 "Administrator's Guide").
	
	In the Mail Remote for Windows client, the Listen program is no longer supported
	because of the nature of the interaction between Windows and most TSR programs.
	The user therefore cannot be set up as a Call/Request user because there is no
	way for Mail Remote for Windows to receive the calls.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
