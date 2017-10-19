---
layout: page
title: "Q157426: XCLN: &quot;All Your Access Permissions Could Not Be Reset...&quot; Err"
permalink: /kb/157/Q157426/
---

## Q157426: XCLN: &quot;All Your Access Permissions Could Not Be Reset...&quot; Err

	Article: Q157426
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0a
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-SEP-1999
	
	7.00a
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to set Access Permissions on your schedule file, the user may
	receive the following informational error message:
	
	  All your access permissions could not be reset on the server. Those that were
	  not set have been removed from your shared schedule file. Choose Set Access
	  Permissions from the Tools menu to see which permissions could not be set.
	
	CAUSE
	=====
	
	The user is trying to add users for Access Permissions from the personal address
	book (PAB).
	
	RESOLUTION
	==========
	
	Remove the users added using the PAB, and select subsequent users from the
	global address list (GAL).
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	The server-based calendar file (.SCD) cannot recognize the entries stored in the
	local PAB.
	
	Additional query words: 7.00a
	
	======================================================================
	Keywords          : win95 
	Technology        : kbScheduleSearch kbSchedule700a
	Version           : WINDOWS:7.0a
	
	=============================================================================
	
