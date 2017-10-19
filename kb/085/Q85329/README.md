---
layout: page
title: "Q85329: BUG: GlobalPageLock() Moves Memory Fixed by GlobalFix()"
permalink: /kb/085/Q85329/
---

## Q85329: BUG: GlobalPageLock() Moves Memory Fixed by GlobalFix()

	Article: Q85329
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application calls the GlobalPageLock() function specifying the handle to
	a block of memory that has been fixed in place by the GlobalFix() function, the
	address of the memory block can change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate this problem:
	
	1. Allocate a block of movable memory using the GlobalAlloc() function.
	
	2. Fix the address of the memory block using the GlobalFix() function.
	
	3. Increment the memory block's page-lock count using the GlobalPageLock()
	  function.
	
	The address of the memory block should not change between step 2 and step 3
	above.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
