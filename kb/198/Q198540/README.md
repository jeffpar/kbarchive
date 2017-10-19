---
layout: page
title: "Q198540: Terminal Server Users Receive Event Log Error 1000 Logging On"
permalink: /kb/198/Q198540/
---

## Q198540: Terminal Server Users Receive Event Log Error 1000 Logging On

	Article: Q198540
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a large number of users are simultaneously logging on to a Windows NT
	Terminal Server computer and a group policy is in use, some of the users may
	receive an error 1000 in the application event log. The source of the error will
	be Userenv and it contains text similar to the following:
	
	  RegLoadKey failed with error 5 for
	  C:\windows\profiles\<username>\prf1.tmp
	
	CAUSE
	=====
	
	This error only occurs the first time the user logs on or if the user's policy
	file has been recently altered. It is caused when several users attempt to load
	their profile into the registry at the same time, and one or more of them fails
	to access the registry key because another user currently has it open.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT Server 4.0,
	Terminal Server Edition. This problem was first corrected in Windows NT Server
	4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
