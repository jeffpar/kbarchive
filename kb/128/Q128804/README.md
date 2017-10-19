---
layout: page
title: "Q128804: XGA/1 or XGA/2 Video Adapter Cannot Play Full-Screen .AVI File"
permalink: /kb/128/Q128804/
---

## Q128804: XGA/1 or XGA/2 Video Adapter Cannot Play Full-Screen .AVI File

	Article: Q128804
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 you do not see the Windows 95 logo screen, and you
	cannot play full-screen .AVI files.
	
	CAUSE
	=====
	
	The XGA/1 or XGA/2 video adapter that you are using does not support mode-X
	video. The Windows logo screen and full-screen .AVI files are displayed using
	mode X.
	
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact the manufacturer of your video
	adapter.
	
	MORE INFORMATION
	================
	
	With mode-13h video, the addressing of pixels is done in a linear fashion. That
	is, when you are accessing video memory with mode 13h, increasing a given
	address by one byte results in the address of the next pixel in sequence. While
	this type of addressing can be very effective for less complex tasks, it is not
	as useful for more complex graphics applications.
	
	In particular, you can address only one video page using mode 13h. As a result,
	you can access only about 64K of video memory, which is not practical when you
	are programming for modern display adapters that typically have 256K or more of
	memory installed. To avoid this problem and other problems associated with mode
	13h, programmers often use mode X instead. Mode X involves direct programming of
	the VGA registers, which allows for greater flexibility and the ability to
	address more memory.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
