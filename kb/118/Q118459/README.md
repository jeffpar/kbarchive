---
layout: page
title: "Q118459: CONN: Dir-Sync and Connection Can Cause Misdirected Mail"
permalink: kb/118/Q118459/
---

## Q118459: CONN: Dir-Sync and Connection Can Cause Misdirected Mail

	Article: Q118459
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail messages sent through the Mail Connection Gateway from AppleTalk Mail to PC
	Mail are delivered to the incorrect user.
	
	CAUSE
	=====
	
	If the Mail Connection name (either PC Mail or a PC Mail gateway user) is added
	to the AppleTalk Mail user's Personal list or group and directory
	synchronization (Dir-Sync) removes that name from the system, it does not remove
	the name from the personal address list. Mail later sent to this no-
	longer-current user is returned as undeliverable.
	
	As Dir-Sync continues to make Address list additions, this personal address list
	entry may be assigned to a different user. Mail sent to this entry and
	successfully delivered goes to someone other than the intended user.
	
	WORKAROUND
	==========
	
	Address mail from the All list, which is always up to date. Consider any entry
	for a Mail Connection user in the personal address list to be unreliable unless
	Details can successfully and correctly resolve the name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of the Mail
	Connection Gateway. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: misaddress wrong
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
