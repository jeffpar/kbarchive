---
layout: page
title: "Q185349: Problems Remotely Accessing W3 or FTP Perfmon Counters"
permalink: kb/185/Q185349/
---

## Q185349: Problems Remotely Accessing W3 or FTP Perfmon Counters

	Article: Q185349
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Accessing W3 and FTP Performance Monitor counters remotely through Performance
	Monitor or PerfMon APIs may cause the following problems:
	
	- W3 and FTP counters stop showing any activity.
	
	- W3 and FTP objects do not show up in Performance Monitor when you try to add
	  them.
	
	- The computer being monitored may generate a blue screen.
	
	These problems occur intermittently when you are creating and deleting remote W3
	and FTP counters.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: sp hot fix qfe www world wide web akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
