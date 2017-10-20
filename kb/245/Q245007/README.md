---
layout: page
title: "Q245007: STOP 0xA or 0x1E Error Message on Windows NT-Based Computer"
permalink: /kb/245/Q245007/
---

## Q245007: STOP 0xA or 0x1E Error Message on Windows NT-Based Computer

{% raw %}

	Article: Q245007
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Microsoft Windows NT 4.0-based computer, you may receive a
	STOP 0x0000000A or 0x0000001E error message.
	
	CAUSE
	=====
	
	This behavior can occur if the Pagefile.sys file is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, first note the size of your paging files, set the paging
	file size to zero, run Chkdsk, and then restore the original values:
	
	1. In Control Panel, double-click System.
	
	2. Click the Performance tab, and then click Change.
	
	3. For each drive that contains a paging file, click the drive, note the size of
	  the file, and then type a zero in the Initial Size and Maximum Size boxes.
	
	4. Click Set, and then click Close.
	
	5. In the System Settings Change box, click No.
	
	6. For each drive that contains a paging file, type the following command at a
	  command prompt, and then press ENTER
	
	  chkdsk drive: /f /r
	
	  where drive is the letter of the drive that contains a paging file.
	
	  NOTE: If you have more than one paging file, run Chkdsk on non-system
	  partitions first because you must restart the computer after you run Chkdsk
	  on the system partition.
	
	7. After all relevant drives are checked, restart the computer.
	
	8. Reset the size of each paging file to its original values.
	
	9. Restart the computer again.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99768 Optimizing Your Paging File (PAGEFILE.SYS)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
