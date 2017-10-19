---
layout: page
title: "Q98536: PC WSPlus: Network Connection Broken in Mail"
permalink: /kb/098/Q98536/
---

## Q98536: PC WSPlus: Network Connection Broken in Mail

	Article: Q98536
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Choosing to work offline in version 1.0 or 1.0a of Microsoft Schedule+ for
	Windows also forces versions 3.0 and 3.2 of Microsoft Mail for PC Networks to
	work offline.
	
	When you send mail messages to other users, the mail message remains in the
	Outbox and is not sent. Mail also displays a broken network connection icon in
	the lower-right corner of the mail screen.
	
	CAUSE
	=====
	
	This problem occurs if you select Work Offline from the File menu in Schedule+
	and if your Mail message file (MMF) is stored locally.
	
	RESOLUTION
	==========
	
	- Move the .MMF file to the server. Schedule+ detects whether or not a user's
	  .MMF file is on the server or stored locally. If the file is stored on the
	  server, Mail will not be allowed to work offline.
	
	- Work offline only when necessary. From the File menu, choose Work Online.
	  This forces any changes made in the local calendar file to be uploaded to the
	  server, thus forcing Mail to work online.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
