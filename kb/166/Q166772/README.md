---
layout: page
title: "Q166772: S3 Video Performance Improved in Windows NT 4.0"
permalink: /kb/166/Q166772/
---

## Q166772: S3 Video Performance Improved in Windows NT 4.0

{% raw %}

	Article: Q166772
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Response times on S3 video-based systems are not optimal. Also, periodically
	because of the refresh rate, the mouse does not respond as you expect if mouse
	move events are requested in quick succession.
	
	CAUSE
	=====
	
	For each mouse cursor movement, Windows NT is waiting for a V-refresh. However,
	on the current S3 video chipsets, this is no longer required.
	
	RESOLUTION
	==========
	
	To resolve this problem, please install the latest Windows NT Service Pack. This
	problem is fixed in Windows NT 4.0 Service Pack 3.0 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server and Windows NT
	Workstation version 4.0. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT version 4.0. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: S3 video mouse erratic
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
