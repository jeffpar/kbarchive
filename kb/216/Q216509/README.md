---
layout: page
title: "Q216509: XCLN: Can't Open Schedule: The Schedule File Could Not Be Opened"
permalink: kb/216/Q216509/
---

## Q216509: XCLN: Can't Open Schedule: The Schedule File Could Not Be Opened

	Article: Q216509
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user who has permission to open another user's schedule may periodically get
	an error message similar to the following:
	
	  The schedule file could not be opened. The file could not be found.
	
	If user permissions are removed and re-added, the problem temporarily goes away.
	
	CAUSE
	=====
	
	The schedule file may be corrupted.
	
	WORKAROUND
	==========
	
	1. Follow the steps in the following Microsoft Knowledge Base article to export
	  Schedule+ Data Clear information from the server:
	
	  Q150612 Deleting the Schedule+ Data From the Exchange Server
	
	2. Reimport the .sc2 file to the server.
	
	3. Re-add permissions of the owner to the user who was previously receiving the
	  error message.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule750
	Version           : WINDOWS:7.5
	Issue type        : kbprb
	
	=============================================================================
	
