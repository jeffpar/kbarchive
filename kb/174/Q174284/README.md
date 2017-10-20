---
layout: page
title: "Q174284: NET TIME Command May Set Incorrect Time"
permalink: /kb/174/Q174284/
---

## Q174284: NET TIME Command May Set Incorrect Time

{% raw %}

	Article: Q174284
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET TIME command to synchronize your computer's clock with a
	computer located in a different time zone, the time may not be set correctly on
	your computer.
	
	CAUSE
	=====
	
	The NET TIME command does not take time zone differences into account.
	
	RESOLUTION
	==========
	
	Choose one of the following resolutions:
	
	- Use a computer in the same time zone to synchronize your computer's clock.
	
	- Use the utility called NETTIME.EXE on the Windows 98 Resource kit located
	  under drive:\NetAdmin folder.
	
	MORE INFORMATION
	================
	
	The NET TIME command is an MS-DOS-based command that you can use to either view
	the time set on another computer, or to set your computer's clock to the time
	set on another computer.
	
	For more information about the NET TIME command, type the following line at a
	command prompt:
	
	  " net time /? " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
