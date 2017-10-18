---
layout: page
title: "Q121131: PC MAPI: MAPI_NEW_SESSION Fails to Log in a New Session"
permalink: kb/121/Q121131/
---

## Q121131: PC MAPI: MAPI_NEW_SESSION Fails to Log in a New Session

	Article: Q121131
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 68 of the Microsoft Mail for PC Networks "Technical Reference" (and page 65
	of the version 3.0 "Technical Reference") states that there is a
	MAPI_NEW_SESSION flag that can be set for the MAPILogon function. The "Technical
	Reference" states that MAPI_NEW_SESSION can be used if the MAPI application
	desires a Mail session other than the session that is currently established.
	
	Microsoft Mail does not allow more than one session to be established
	concurrently. If a different session is passed to the MAPILogon function,
	MAPILogon will attempt to log in with the current session (Mail client) and a
	MAPI_E_TOO_MANY_SESSIONS return code error will result.
	
	RESOLUTION
	==========
	
	To establish a second session, the first session must be released by using the
	MAPILogoff function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.20 Technical Reference for Microsoft
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
