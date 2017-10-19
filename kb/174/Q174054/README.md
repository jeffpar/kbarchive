---
layout: page
title: "Q174054: MSN Error Message: Task Cannot Be Completed at This Time"
permalink: /kb/174/Q174054/
---

## Q174054: MSN Error Message: Task Cannot Be Completed at This Time

	Article: Q174054
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Task cannot be completed at this time.
	
	CAUSE
	=====
	
	You may not have enough available memory to connect to MSN.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click File System.
	
	4. On the Hard Disk tab, move the Read-Ahead Optimization slider to the 8
	  kilobyte position.
	
	5. Click OK, and then click Close. When you are prompted to restart the
	  computer, click Yes.
	
	6. Attempt to connect to MSN again.
	
	Method 2
	--------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let me specify my own virtual memory settings," and then verify that
	  the Hard Disk box shows at least 30 megabytes (MB) free.
	
	5. If the Hard Disk box shows less than 30 MB free, you need to increase the
	  amount of free hard disk space. Use the following steps:
	  a. In the Hard Disk box, click a hard disk that shows at least 30 MB free. If
	     you have only one hard disk, or you do not have a hard disk with at least
	     30 MB free, increase the amount of free space on your hard disk (or any
	     hard disk in your computer), and then click that hard disk in the Hard
	     Disk box.
	
	  b. Click OK, and then click Close. When you are prompted to restart the
	     computer, click Yes.
	
	6. Attempt to connect to MSN again.
	
	Method 3
	--------
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. Type "mem" (without quotation marks), and then press ENTER.
	
	3. Note the largest executable program size, type "exit" (without quotation
	  marks), and then press ENTER.
	
	4. If the largest executable program size is less than 570K (583,680 bytes), you
	  need to increase the amount of available conventional memory. For information
	  about how to increase conventional memory, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q134399 How to Increase Conventional Memory for MS-DOS-Based Programs
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
