---
layout: page
title: "Q130703: PC MAPI: MAPILogon Can Only Be Called Once from an Application"
permalink: /kb/130/Q130703/
---

## Q130703: PC MAPI: MAPILogon Can Only Be Called Once from an Application

	Article: Q130703
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MAPILogon is a function available with the Simple Messaging Application Program
	Interface (MAPI), included with Microsoft Mail for PC Networks. MAPILogon is
	used to validate and create (or increment) the session handle associated with
	any Microsoft Mail, Microsoft Schedule+, Microsoft Electronic Forms, or Simple
	MAPI application.
	
	MORE INFORMATION
	================
	
	MAPILogon, once successfully returned, cannot be called again from the same
	thread of execution, for example, to force the download of new messages during a
	session. This means that an application making a call to MAPILogon, will not be
	able to successfully call it again from the same application. If you attempt to
	make a second call to MAPILogon, you will get the following error:
	
	  Error 8, MAPI_E_TOO_MANY_SESSIONS
	
	Before you make a second call to MAPILogon, the caller must first call MAPILogout
	to release the session handle being held by the application.
	
	Additional query words: 3.20 MAPILogon
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
