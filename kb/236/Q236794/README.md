---
layout: page
title: "Q236794: &quot;STOP 0xA&quot; in Ntoskrnl.exe Caused by Race Condition in Tcpip.sys"
permalink: /kb/236/Q236794/
---

## Q236794: &quot;STOP 0xA&quot; in Ntoskrnl.exe Caused by Race Condition in Tcpip.sys

{% raw %}

	Article: Q236794
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "STOP 0x0000000A" error message with the following parameters
	on a blue screen: f1c2cf0f 00000002 00000001 80146940.
	
	CAUSE
	=====
	
	This error message occurs because of a "race" condition between FindTCB and
	TCBTimeout for LastTCB in the Tcpip.sys driver
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Server, Terminal Server Edition, Service Pack 5.
	
	
	Additional query words: wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
