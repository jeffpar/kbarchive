---
layout: page
title: "Q173059: Security Events Are Not Logged During Audit"
permalink: kb/173/Q173059/
---

## Q173059: Security Events Are Not Logged During Audit

	Article: Q173059
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When audit policies are set to log User and Group Management events, some Event
	IDs are not recorded in the event log when the event to which they refer occurs.
	
	CAUSE
	=====
	
	The following events should be recorded when auditing User and Group Management
	events:
	
	- Event ID 625: User Account Type Change
	  (Indicates that a user account's type has been changed)
	
	- Event ID 626: User Account Enabled
	  (Indicates that a user account has been enabled)
	
	- Event ID 628: User Account password set
	  (Indicates that a user account's password has been set)
	
	- Event ID 629: User Account Disabled
	  (Indicates that a user account has been disabled)
	
	- Event ID 640: General Account Database Change
	  (Indicates that a change has been made to the Security Account Manager [SAM]
	  database)
	
	All of these events are logged as Event ID 642: User Account Changed, and the
	record indicates that a change has been made to a User Account.
	
	
	RESOLUTION
	==========
	
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
	
	
	Additional query words: secevent sec audit lo gged logging
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
