---
layout: page
title: "Q136823: Clicking &quot;?&quot; Button During Sign In May Cause Lost Connection"
permalink: kb/136/Q136823/
---

## Q136823: Clicking &quot;?&quot; Button During Sign In May Cause Lost Connection

	Article: Q136823
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click the "?" button in the upper-right corner of The Microsoft Network
	Sign In screen during sign in, the connection may be dropped. When this occurs,
	if you try to open the Sign In screen again, it may not open.
	
	RESOLUTION
	==========
	
	To open the Sign In screen again, follow these steps:
	
	1. Press the CTRL+ALT+DEL key combination. Click the last instance of Explorer
	  in the list of programs, and then click End Task. Wait a few seconds for
	  confirmation, and then click End Task again.
	
	2. Press the CTRL+ALT+DEL key combination. Click Moscp in the list, and then
	  click End Task.
	
	3. Press the CTRL+ALT+DEL key combination. Click Guide in the list, and then
	  click End Task.
	
	4. If you receive the following message, click Close:
	
	  GUIDE caused an invalid page fault in module KERNEL32.DLL at
	  0137:bff78068
	
	After you follow the above steps, you should be able to open the Sign In screen
	again.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN250 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	
	=============================================================================
	
