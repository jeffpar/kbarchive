---
layout: page
title: "Q185414: XCLN: Err Msg: There was a problem opening MSTRE schedule..."
permalink: kb/185/Q185414/
---

## Q185414: XCLN: Err Msg: There was a problem opening MSTRE schedule...

	Article: Q185414
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open "Other's Appointment Book", the client returns one of the
	following two error messages:
	
	  The schedule file could not be opened. An unknown error occurred.
	
	  -OR-
	
	  There was a problem opening MSTRE schedule locator.
	
	CAUSE
	=====
	
	When operating the Schedule+ client from Windows NT, the user's Windows NT
	session already has a connection to the server in which the mailbox resides. The
	original session was initiated with a different Windows NT account than the one
	that Schedule+ is attempting to use.
	
	WORKAROUND
	==========
	
	To work around this problem, disconnect the previous Windows NT sessions from
	the Windows NT resource when opening the "Other's Appointment Book".
	
	STATUS
	======
	
	Microsoft has confirmed this to be by design for Windows NT versions 3.51 and
	4.0.
	
	
	A supported feature is now available for Microsoft Schedule+, but has not been
	fully regression-tested and should be applied only to systems having a specific
	need for it. Unless you are severely impacted by the lack of this feature,
	Microsoft recommends that you wait for the next Service Pack that contains this
	feature. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbinfo
	
	=============================================================================
	
