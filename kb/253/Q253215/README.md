---
layout: page
title: "Q253215: STOP 0x00000050 Error Message in Windows Terminal Server"
permalink: /kb/253/Q253215/
---

## Q253215: STOP 0x00000050 Error Message in Windows Terminal Server

{% raw %}

	Article: Q253215
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool kbWinNT4sp6fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Terminal Server on your Windows NT 4.0-based computer, you
	may receive a stop 0x00000050 error message on a blue screen. Also, the bug
	check information displayed may look similar to the following:
	
	BugCheckCode . . . . .0x00000050
	BugCheckParameter1 . .0xfffffffb
	BugCheckParameter2 . .0x00000000
	BugCheckParameter3 . .0x00000000
	BugCheckParameter4 . .0x00000000
	
	ExceptionCode. . . . .0x80000003
	ExceptionFlags . . . .0x00000001
	ExceptionAddress . . .0x801325ec
	
	CAUSE
	=====
	
	Many applications can cause this program to stop responding. One known cause is
	if you have Microsoft Outlook 97 or Microsoft Outlook 98 installed, and a large
	number of appointment reminders in your calendar.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool kbWinNT4sp6fix kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
