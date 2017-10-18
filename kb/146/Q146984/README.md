---
layout: page
title: "Q146984: XCLN: Minimized Msg Finder Windows Not Restored to Position"
permalink: kb/146/Q146984/
---

## Q146984: XCLN: Minimized Msg Finder Windows Not Restored to Position

	Article: Q146984
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Message Finder in the Microsoft Exchange client, you can
	minimize the Find window so that when Microsoft Exchange is started the next
	time, the Find window will be created. However, it is possible that the Find
	window may not be restored in the same position it was in when you minimized it.
	
	CAUSE
	=====
	
	This is by product design. The Find window maintains its minimized position as
	long as it does not conflict with any existing minimized windows. If there is a
	conflict (checked each time a Find window is minimized), it takes the next
	position, just like an application would, and the old position is lost forever.
	
	Additional query words: 4.00 shrink
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
