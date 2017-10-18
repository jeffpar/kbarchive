---
layout: page
title: "Q186441: Schedule on Server Can Be Locked by User with Read-Only Access"
permalink: kb/186/Q186441/
---

## Q186441: Schedule on Server Can Be Locked by User with Read-Only Access

	Article: Q186441
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Schedule+, you may get the following error when attempting to
	modify your own schedule:
	
	  The new item could not be inserted. The schedule is being used by someone
	  else. Try again later.
	
	CAUSE
	=====
	
	Someone with access permissions to your Schedule file is in the process of
	receiving data from your file on the server. This activity places a record-
	level lock on your schedule file while the data is downloading.
	
	WORKAROUND
	==========
	
	Ensure that users who have permissions to your schedule do not connect over slow
	access links, such as telephone lines, or ask that they open your schedule only
	when necessary rather than keeping it open all the time.
	
	MORE INFORMATION
	================
	
	When others have your schedule open but are not actively using it, the server
	can still initiate the download when new data is available. This ties up your
	schedule file even if other users have read-only permissions.
	
	This problem is more likely to occur with a large schedule accessed by several
	users over slow telephone lines.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q147512 Schedule+ Locks Schedule File on Server
	
	Additional query words: S+
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	
	=============================================================================
	
