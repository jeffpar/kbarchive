---
layout: page
title: "Q193526: W3SVC Counters Fail after a Successful Install"
permalink: /kb/193/Q193526/
---

## Q193526: W3SVC Counters Fail after a Successful Install

	Article: Q193526
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although Microsoft Internet Information Server 4.0 appears to be installed
	correctly and the registry appears to be configured correctly to load
	W3ctrs.dll, the Web Service counter does not appear in performance monitor. This
	occurs whether you are running perfmon locally on the system or monitoring it
	remotely.
	
	The counters appear on the computer when everything is initially installed, but
	within a few hours of activity, they do not appear. From that time on, they do
	not appear even after restarting the computer and attempting to reload the
	counter DLL.
	
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
	
	Additional query words: perfmon, counters, administration, remote, w3svc, analysis
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
