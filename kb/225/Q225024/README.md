---
layout: page
title: "Q225024: PING -T Stops Timing Out After 50 Days"
permalink: /kb/225/Q225024/
---

## Q225024: PING -T Stops Timing Out After 50 Days

{% raw %}

	Article: Q225024
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "PING -T" command stops functioning after running continuously for 49.7
	days.
	
	CAUSE
	=====
	
	This behavior occurs because the ICMPTIMER value does not roll over correctly
	from 0xffffffff to 0x00000000.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: hang SP5
	
	======================================================================
	Keywords          : kbtool kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
