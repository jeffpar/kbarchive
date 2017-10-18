---
layout: page
title: "Q164606: Deferred Reconnections to Password Shares May Not Work"
permalink: kb/164/Q164606/
---

## Q164606: Deferred Reconnections to Password Shares May Not Work

	Article: Q164606
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a computer running Windows NT 4.0 and you have persistent
	connections to drives on a computer running Windows 95 with share level access
	control, you may get the message:
	
	  Logon failure: unknown user name or bad password
	
	CAUSE
	=====
	
	If you have more than one persistent connection to resources on a computer
	running Windows 95, are using share level security, and one of your shares does
	not have a password, you will get the previously mentioned error.
	
	
	WORKAROUND
	==========
	
	Turn off deferred connections altogether by setting the following registry key
	to REG_DWORD 0:
	
	HKLM\System\CurrentControlSet\Control\NetworkProviderDeferConnection
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: reconnect null shares pw
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
