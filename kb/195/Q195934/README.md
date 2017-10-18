---
layout: page
title: "Q195934: Incorrect Permissions Applied to Terminal Server Home Folders"
permalink: kb/195/Q195934/
---

## Q195934: Incorrect Permissions Applied to Terminal Server Home Folders

	Article: Q195934
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect default permissions are assigned when creating a unique Terminal
	Server home directory for multiple users using the following form:
	
	  \\server\share\%username%
	
	CAUSE
	=====
	
	User Manager (Musrmgr.exe) is the default account manager for all member servers
	and workstations at installation time. User Manager for Domains (Usrmgr.exe) is
	the default for all domain controllers at installation time. Usrmgr.exe is
	copied to all member servers and workstations when they join a domain to give
	administrators the same capability from any Windows NT system. Both versions
	allow the administrator to select multiple objects (users or groups) at one time
	and make various property changes that apply to those selected.
	
	When running Windows Terminal Server, the Profile configuration dialog box in
	both versions of the utility allows the administrator to configure the home
	directory for Terminal Server users. When specifying the path, the variable
	%USERNAME% can be used to indicate the user name currently being processed. This
	is useful when selecting multiple users and each user must have his or her own
	home directory. If multiple users are selected and %USERNAME% is used, the
	default permissions assigned are incorrect when running Musrmgr.exe and the
	local path is selected or when running Usrmgr.exe and a remote path is
	selected.
	
	The default permissions are applied as:
	
	  Everyone - Full Control/Full Control
	  System - Full Control/Full Control
	
	The default permissions should be:
	
	  Administrator - Special Access (All) (Not Specified)
	  SYSTEM - Full Control (All) (All)
	  UserName - Full Control (All) (All)
	
	NOTE: When running Musrmgr.exe on a member server and a remote path is selected,
	the permissions applied should match the first set of permissions above.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
