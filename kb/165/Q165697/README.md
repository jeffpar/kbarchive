---
layout: page
title: "Q165697: Event 3031 with Event Viewer and Remote Computers"
permalink: kb/165/Q165697/
---

## Q165697: Event 3031 with Event Viewer and Remote Computers

	Article: Q165697
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Event Viewer on a computer running Windows NT 3.51 Service Pack 5 to
	remotely view then save a remote computer's event logs to the remote computer's
	drive, a warning event will be posted in the local client computer's system
	event log as follows:
	
	  Source: Rdr
	  Category: None
	  Type: Warning
	  Event: 3031
	  User: N/A
	  Computer: <LocalComputerName>
	  Description: The redirector was unable to delete the file specified on
	               server SKYMAN1 when it was closed by the application. The
	               data contains the name of the file.
	
	0000: 00 00 34 00 02 00 7e 00   ..4....
	0008: 00 00 00 00 d7 0b 00 80   ......
	0010: 00 00 00 00 34 00 00 c0   ....4..
	0018: c8 c4 0b ff 00 00 00 00   .....
	0020: 00 00 00 00 00 00 00 00   ........
	0028: 5c 00 73 00 6b 00 79 00   \.s.k.y.
	0030: 6d 00 61 00 6e 00 31 00   m.a.n.1.
	0038: 5c 00 70 00 75 00 62 00   \.p.u.b.
	0040: 6c 00 69 00 63 00 5c 00   l.i.c.\.
	0048: 73 00 79 00 73 00 74 00   s.y.s.t.
	0050: 65 00 6d 00 2e 00 65 00   e.m...e.
	0058: 76 00 74 00               v.t.
	
	
	CAUSE
	=====
	
	Rdr.sys supplied with Windows NT 3.51 Service Pack 5 introduces the Event ID
	3031 warning. The warning does not interfere with the operation of Event Viewer
	saving the files and the warning can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and
	Service Pack 5. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
