---
layout: page
title: "Q150108: User in 15 or More Groups Can't Connect to RCMD Service"
permalink: kb/150/Q150108/
---

## Q150108: User in 15 or More Groups Can't Connect to RCMD Service

	Article: Q150108
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a user who is a member of at least 15 global groups tries to use the Remote
	Command Service with the following command:
	
	  rcmd \\<servername>
	
	the computer returns the following error:
	
	  Error - Failed to connect to \\<servername>, system not found or
	  service not active.
	
	If the command is run locally, the computer returns the following error:
	
	  Error - Remote command server failed to respond, Error = 109
	
	
	When this occurs, Remote Command Service becomes unusable for all users; when any
	user tries to connect to the service, the computer generates the earlier error
	until the service is stopped and restarted.
	
	CAUSE
	=====
	
	The application was expecting a return code of ERROR_MORE_DATA from a call to
	GetTokenInformation, not the return code ERROR_INSUFFICIENT_BUFFER.
	
	
	RESOLUTION
	==========
	
	Reduce the number of global groups that the user is a member of from 15 to 14 or
	fewer, or apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. A fix to this problem is in development, but has not been regression-
	tested and may be destabilizing in production environments. Microsoft does not
	recommend implementing this fix at this time. Contact Microsoft Product Support
	Services for more information on the availability of this fix.
	
	
	Additional query words: rcmd prompt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
