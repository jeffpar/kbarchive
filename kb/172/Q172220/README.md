---
layout: page
title: "Q172220: Query Screen Fails to Redraw Field Names Correctly"
permalink: /kb/172/Q172220/
---

## Q172220: Query Screen Fails to Redraw Field Names Correctly

{% raw %}

	Article: Q172220
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a new field into a Microsoft Query table, the field name does
	not redraw properly. This problem occurs in both Windows 95 and Windows NT 4.0.
	
	When you use ALT+TAB to move to another application or minimize and restore the
	Query window, Query redraws the field name correctly.
	
	CAUSE
	=====
	
	This a problem in a newer version of Comctl32.dll that shipped with Internet
	Explorer 3.0. The problem does not occur with the older version of Comctl32.dll
	dated July 1995.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: repaint redraws msquery fields column drop down drop-down box
	
	======================================================================
	Keywords          : kbdisplay kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
