---
layout: page
title: "Q155562: Cannot Enter Virus Scan Time in Symantec Norton NT Tools"
permalink: /kb/155/Q155562/
---

## Q155562: Cannot Enter Virus Scan Time in Symantec Norton NT Tools

{% raw %}

	Article: Q155562
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to set a time for a weekly virus scan in the Norton Control
	Center, you are unable to enter the time in the correct format. The program
	requires the time to be entered in the format "hh:mm AM/PM" (for example, "12:00
	AM"), but you are unable to enter anything but numbers.
	
	CAUSE
	=====
	
	This edit control is mistakenly marked with the ES_NUMBER style, which means
	that only digits can be entered.
	
	RESOLUTION
	==========
	
	You can schedule virus scans by copying a time from a program such as Notepad
	and pasting it in the edit box. You can also set the scheduled time by clicking
	Scheduler on the Tools menu in the Norton AntiVirus Scanner. Contact Symantec
	for more information.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
