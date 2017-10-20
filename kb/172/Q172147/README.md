---
layout: page
title: "Q172147: Add Printer Wizard Hangs When Searching for Remote Printers"
permalink: /kb/172/Q172147/
---

## Q172147: Add Printer Wizard Hangs When Searching for Remote Printers

{% raw %}

	Article: Q172147
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse for printers using the Add Printer Wizard and
	selecting Network Printer Server and choosing Next, the Connect to Printer
	dialog box may stop responding (hang). The status displays "Working..." but
	control never returns to the user.
	
	CAUSE
	=====
	
	The above symptom may occur for one of the following reasons:
	
	- Creation of null printer shares on the print server
	
	  NullSessionShares can be added for Downlevel print clients who may not have
	  an account or because of a conflicting account. For more information on
	  NullSessionShares, please see the following Microsoft Knowledge Base
	  article:
	
	  Q121853 Downlevel Print Jobs Not Redirected Correctly
	
	- Domain names containing a comma (,) in the first character position.
	
	
	RESOLUTION
	==========
	
	Winspool.drv has been redesigned to take these queues into account when browsing
	the domain for printers.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: spooler lock locks freeze freezes hung hangs
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
