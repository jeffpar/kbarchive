---
layout: page
title: "Q151308: &quot;Access Denied&quot; When You Run AT Command on Remote Computer"
permalink: /kb/151/Q151308/
---

## Q151308: &quot;Access Denied&quot; When You Run AT Command on Remote Computer

{% raw %}

	Article: Q151308
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run AT on a remote computer, it can result in an "access denied" error.
	
	CAUSE
	=====
	
	This error condition occurs because you do not have the correct access
	privileges. Administrative privileges are required for remote AT activity.
	
	MORE INFORMATION
	================
	
	Assume a user issues an AT command on a remote computer. For example, from
	computer A, UserA issues the command
	
	  <AT \\computerB 18:00 /interactive "notepad">
	
	This has the following two results:
	
	1. ComputerA will try to establish an IPC$ connection to ComputerB, using the
	  account UserA. The Server Message Block (SMB) command is <C session setup
	  & X, and C tree connect & X, Share = \\computerB\IPC$>. UserA must
	  have administrative privileges, otherwise the attempt results in an "access
	  denied" error.
	
	2. Schedule will start up on ComputerB using the account you specified with the
	  Schedule service in the Services tool in Control Panel. By default, it uses
	  the System account.
	
	Additional query words: AT
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
