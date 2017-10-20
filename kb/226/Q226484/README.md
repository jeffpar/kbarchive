---
layout: page
title: "Q226484: Interface Table Contains WAN Interfaces Marked as LAN"
permalink: /kb/226/Q226484/
---

## Q226484: Interface Table Contains WAN Interfaces Marked as LAN

{% raw %}

	Article: Q226484
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95,98; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT and Windows 95/98, the Interface Type table contains WAN
	interfaces marked as LAN.
	
	CAUSE
	=====
	
	This behavior occurs because the RASARP/WANARP module adds the wrong value for
	the interface type in the IF_TABLE. It marks the WAN interface as LAN.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
